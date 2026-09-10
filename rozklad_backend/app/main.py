import asyncio
import logging
import re
from datetime import datetime, timedelta, timezone
from contextlib import asynccontextmanager
from zoneinfo import ZoneInfo

from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse

from app.config import settings
from app.pdp_client import pdp_client
from app.station_mapper import station_mapper

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    if not settings.pdp_api_key:
        logger.warning("PDP_API_KEY is not set! Create backend/.env from backend/.env.example")
    else:
        logger.info("PDP_API_KEY configured (%s...)", settings.pdp_api_key[:8])

    logger.info("Loading station mapping from PDP dictionaries...")
    try:
        pdp_stations = await pdp_client.get_stations()
        await station_mapper.build_mapping(pdp_stations)
        mapped = len(station_mapper._bilkom_to_pdp)
        total = len(station_mapper._bilkom_to_name)
        logger.info(
            "Station mapping ready: %d/%d bilkom stations mapped",
            mapped, total,
        )
    except Exception as e:
        logger.warning("Could not load station mapping: %s", e)
        logger.warning("Backend will start but departures endpoint may fail")

    yield

    await pdp_client.close()


app = FastAPI(
    title="Rozklad Jazdy Pociagow Backend",
    version="1.0.0",
    lifespan=lifespan,
)


# PDP schedule/operation times are naive local times (Europe/Warsaw)
WARSAW_TZ = ZoneInfo("Europe/Warsaw")

# how far ahead departures are returned
MAX_LOOKAHEAD = timedelta(hours=24)
# a departure stays visible briefly after its (delayed) departure time
PAST_GRACE_SECONDS = 120
# max number of departures returned, like the old bilkom API
MAX_DEPARTURES = 60


def _time_to_seconds(time_str: str | None) -> int | None:
    """Parse 'HH:MM[:SS]' (hours may exceed 23) to seconds since midnight."""
    if not time_str:
        return None
    m = re.match(r"(\d{1,3}):(\d{2})(?::(\d{2}))?", time_str)
    if not m:
        return None
    hours = int(m.group(1))
    minutes = int(m.group(2))
    seconds = int(m.group(3) or 0)
    return hours * 3600 + minutes * 60 + seconds


def _local_epoch(date_str: str, day_offset: int, seconds: int) -> int:
    """Epoch of a PDP local time: operating date + day offset + time of day."""
    year, month, day = (int(part) for part in date_str.split("-"))
    naive = datetime(year, month, day) + timedelta(
        days=day_offset, seconds=seconds,
    )
    return int(naive.replace(tzinfo=WARSAW_TZ).timestamp())


def _train_code(route: dict, station_entry: dict) -> str:
    carrier = route.get("cc") or ""
    category = (route.get("ccs") or "").split("/")[0]
    # PKP Intercity and Polregio are displayed by category (EIP/TLK/IR...),
    # other carriers by carrier code (KM, KD, SKW...), like the old API
    prefix = category if carrier in ("IC", "PR") and category else carrier
    number = station_entry.get("dtn") or route.get("nn") or ""
    if carrier == "IC":
        # international trains are known by their international number
        # (e.g. "262" BALTIC EXPRESS, not the national 65002)
        number = route.get("ian") or route.get("idn") or number
    return f"{prefix} {number}".strip()


def _get_station_in_route(
    stations: list[dict], pdp_station_id: int,
) -> dict | None:
    for st in stations:
        if st.get("id") == pdp_station_id:
            return st
    return None


def _build_operations_index(
    operations: list[dict], pdp_station_id: int,
) -> dict[tuple, dict]:
    """Index operation data by (scheduleId, orderId, operatingDate).

    The same schedule/order pair is reported separately for each operating
    date, so the date must be part of the key to avoid applying yesterday's
    delay to today's train.
    """
    index: dict[tuple, dict] = {}
    for op in operations:
        train_status = op.get("s") or ""
        for ost in op.get("st") or []:
            if ost.get("id") != pdp_station_id:
                continue
            delay = ost.get("ddm")
            if delay is None:
                delay = ost.get("adm")
            index[(op.get("sid"), op.get("oid"), op.get("od"))] = {
                # cn = isCancelled at this station, X = whole train cancelled
                "cancelled": bool(ost.get("cn")) or train_status == "X",
                "delay": delay or 0,
            }
    return index


def _get_arrival_station_name(
    route_stations: list[dict],
) -> str:
    if not route_stations:
        return ""
    last = route_stations[-1]
    last_id = last.get("id")
    if last_id:
        name = station_mapper.get_pdp_name(last_id)
        if name:
            return name
    return str(last_id) if last_id else ""


@app.get("/bilkom/api/departures/normal/{numer_stacji}")
async def get_departures(numer_stacji: str):
    if not station_mapper.is_ready:
        raise HTTPException(
            status_code=503,
            detail="Station mapping not loaded yet",
        )

    pdp_id = station_mapper.get_pdp_id(numer_stacji)
    if pdp_id is None:
        station_name = station_mapper.get_bilkom_name(numer_stacji)
        raise HTTPException(
            status_code=404,
            detail=(
                f"Station with bilkom ID {numer_stacji} "
                f"('{station_name}') not found in PDP database"
            ),
        )

    # PDP operating dates follow the local (Europe/Warsaw) timetable day
    today = datetime.now(WARSAW_TZ).date()
    date_from = (today - timedelta(days=1)).isoformat()
    date_to = (today + timedelta(days=1)).isoformat()
    pdp_ids = [pdp_id]

    try:
        schedules = await pdp_client.get_schedules(pdp_ids, date_from, date_to)
        operations = await pdp_client.get_operations(pdp_ids)
    except Exception as e:
        logger.error("PDP API error: %s", e)
        raise HTTPException(
            status_code=502,
            detail=f"Failed to fetch data from PDP API: {e}",
        )

    operations_index = _build_operations_index(operations, pdp_id)
    now_ts = int(datetime.now(timezone.utc).timestamp())

    departures = []
    seen = set()

    for route in schedules:
        route_stations = route.get("st") or []

        station_entry = _get_station_in_route(route_stations, pdp_id)
        if not station_entry:
            continue

        dep_secs = _time_to_seconds(station_entry.get("dtm"))
        if dep_secs is None:
            continue

        train_code = _train_code(route, station_entry)
        if not train_code:
            continue

        platform = station_entry.get("dpl") or station_entry.get("apl") or ""
        track = station_entry.get("dtr") or station_entry.get("atr") or ""
        day_offset = station_entry.get("ddy") or 0
        arrival_station = _get_arrival_station_name(route_stations)

        # a route operates on every date listed in "od"
        for operating_date in route.get("od") or []:
            ts = _local_epoch(operating_date, day_offset, dep_secs)
            if ts > now_ts + MAX_LOOKAHEAD.total_seconds():
                continue

            op = operations_index.get(
                (route.get("sid"), route.get("oid"), operating_date),
            )
            if op and op["cancelled"]:
                continue
            delay = op["delay"] if op else 0

            calculated_ts = ts + delay * 60
            if calculated_ts < now_ts - PAST_GRACE_SECONDS:
                continue

            # split trains (portions to different termini) share the
            # departure time at this station - report them once
            key = (train_code, ts)
            if key in seen:
                continue
            seen.add(key)

            departures.append({
                "trainCode": train_code,
                "timestamp": ts,
                "track": track,
                "platform": platform,
                "delay": delay,
                "arrivalStation": arrival_station,
                "calculatedTime": calculated_ts,
            })

    # Match the old Bilkom API: order by the published timetable time,
    # regardless of each train's current delay.
    departures.sort(key=lambda d: d["timestamp"])

    return departures


@app.get("/bilkom/api/departures/normal/{numer_stacji}")
async def get_departures(numer_stacji: str):
    if not station_mapper.is_ready:
        raise HTTPException(
            status_code=503,
            detail="Station mapping not loaded yet",
        )

    pdp_id = station_mapper.get_pdp_id(numer_stacji)
    if pdp_id is None:
        station_name = (
            station_mapper.get_bilkom_name(numer_stacji) or "unknown station"
        )
        raise HTTPException(
            status_code=404,
            detail=(
                f"Station with ID {numer_stacji} "
                f"('{station_name}') not found in PDP database"
            ),
        )

    # PDP operating dates follow the local (Europe/Warsaw) timetable day
    today = datetime.now(WARSAW_TZ).date()
    date_from = (today - timedelta(days=1)).isoformat()
    date_to = (today + timedelta(days=1)).isoformat()
    now_ts = int(datetime.now(timezone.utc).timestamp())

    try:
        schedules, operations = await asyncio.gather(
            pdp_client.get_schedules([pdp_id], date_from, date_to),
            pdp_client.get_operations([pdp_id]),
        )
    except Exception as e:
        logger.error("PDP API error: %s", e)
        raise HTTPException(
            status_code=502,
            detail=f"Failed to fetch data from PDP API: {e}",
        )

    departures = _extract_departures(schedules, operations, pdp_id, now_ts)

    return JSONResponse(content=departures[:MAX_DEPARTURES])


@app.get("/api/health")
async def health():
    return {
        "status": "ok",
        "bilkom_stations": (
            len(station_mapper._bilkom_to_name) if station_mapper.is_ready else 0
        ),
        "pdp_stations": station_mapper.pdp_station_count,
        "mapped": (
            len(station_mapper._bilkom_to_pdp) if station_mapper.is_ready else 0
        ),
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
    )
