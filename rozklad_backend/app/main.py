import logging
import re
from datetime import date, datetime, timezone
from contextlib import asynccontextmanager

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


def _duration_to_seconds(duration_str: str | None) -> int | None:
    if not duration_str:
        return None

    iso_patterns = [
        (r"PT(\d+)H(\d+)M(\d+(?:\.\d+)?)S", True),
        (r"PT(\d+)H(\d+)M", True),
        (r"PT(\d+)M", False),
        (r"PT(\d+)H", True),
    ]
    for pat, has_hours in iso_patterns:
        m = re.match(pat, duration_str)
        if m:
            if has_hours and m.lastindex and m.lastindex >= 2:
                hours = int(m.group(1))
                minutes = int(m.group(2))
            elif has_hours:
                hours = int(m.group(1))
                minutes = 0
            else:
                hours = 0
                minutes = int(m.group(1))
            return hours * 3600 + minutes * 60

    clock_m = re.match(r"(\d{1,2}):(\d{2})(?::(\d{2}))?", duration_str)
    if clock_m:
        hours = int(clock_m.group(1))
        minutes = int(clock_m.group(2))
        return hours * 3600 + minutes * 60

    return None


def _get_station_in_route(
    stations: list[dict], pdp_station_id: int,
) -> dict | None:
    for st in stations:
        if st.get("id") == pdp_station_id:
            return st
    return None


def _get_operation_at_station(
    operations: list[dict], schedule_id: int, order_id: int, pdp_station_id: int,
) -> dict | None:
    for op in operations:
        if op.get("sid") == schedule_id and op.get("oid") == order_id:
            op_stations = op.get("st") or []
            for ost in op_stations:
                if ost.get("id") == pdp_station_id:
                    return ost
    return None


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

    from datetime import timedelta

    today = date.today()
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

    departures = []
    seen = set()

    for route in schedules:
        route_stations = route.get("st") or []

        station_entry = _get_station_in_route(route_stations, pdp_id)
        if not station_entry:
            continue

        dep_time = station_entry.get("dtm")
        if not dep_time:
            continue

        schedule_id = route.get("sid")
        order_id = route.get("oid")
        carrier = route.get("cc") or ""
        number = route.get("nn") or route.get("nm") or ""
        train_code = f"{carrier} {number}".strip()

        if not train_code:
            continue

        key = (schedule_id, order_id, train_code)
        if key in seen:
            continue
        seen.add(key)

        platform = station_entry.get("dpl") or station_entry.get("apl") or ""
        track = station_entry.get("dtr") or station_entry.get("atr") or ""

        duration_secs = _duration_to_seconds(dep_time)
        today_d = date.today()
        ts = int(
            datetime(
                today_d.year, today_d.month, today_d.day,
                tzinfo=timezone.utc,
            ).timestamp() + (duration_secs or 0)
        )

        op_match = _get_operation_at_station(
            operations, schedule_id, order_id, pdp_id,
        )
        delay = 0
        if op_match:
            delay = op_match.get("ddm") or op_match.get("adm") or 0

        arrival_station = _get_arrival_station_name(route_stations)

        departure_time_actual = ts + delay * 60
        now_ts = int(datetime.now(timezone.utc).timestamp())

        if departure_time_actual < now_ts:
            continue

        departures.append({
            "trainCode": train_code,
            "timestamp": ts,
            "track": track,
            "platform": platform,
            "delay": delay,
            "arrivalStation": arrival_station,
        })

    departures.sort(key=lambda d: d["timestamp"])

    return JSONResponse(content=departures)


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
