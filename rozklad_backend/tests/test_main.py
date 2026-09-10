"""Tests for the departures endpoint logic with a mocked PDP client.

No real PDP API calls are made - pdp_client methods are monkeypatched.
"""
import sys
import os
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

import pytest
from httpx import ASGITransport, AsyncClient

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from app.main import app, _local_epoch
from app.station_mapper import station_mapper
from app.pdp_client import pdp_client

WARSAW_TZ = ZoneInfo("Europe/Warsaw")
TODAY = datetime.now(WARSAW_TZ).date().isoformat()

PDP_ID = 100
BILKOM_ID = "5100065"


def _future_time(minutes_ahead: int) -> str:
    """HH:MM local time `minutes_ahead` from now."""
    now = datetime.now(WARSAW_TZ) + timedelta(minutes=minutes_ahead)
    return now.strftime("%H:%M")


def _route(sid, oid, number, time_str, delay=None, cancelled=False,
           dest_id=200, dest_name="Kraków Główny", carrier="IC",
           category="IC", dtn=None, day_offset=0):
    route = {
        "sid": sid,
        "oid": oid,
        "cc": carrier,
        "ccs": category,
        "nn": number,
        "idn": number,
        "ian": None,
        "od": [TODAY],
        "st": [
            {
                "id": PDP_ID,
                "dtm": time_str,
                "dpl": "2",
                "dtr": "1",
                "ddy": day_offset,
                "dtn": dtn or number,
            },
            {"id": dest_id, "atm": "23:59"},
        ],
    }
    op = None
    if delay is not None or cancelled:
        op = {
            "sid": sid,
            "oid": oid,
            "od": TODAY,
            "s": "X" if cancelled else "",
            "st": [{"id": PDP_ID, "ddm": delay or 0, "cn": cancelled}],
        }
    return route, op


@pytest.fixture(autouse=True)
def mapper_state(monkeypatch):
    station_mapper._station_names = {BILKOM_ID: "Warszawa Centralna"}
    station_mapper._id_map = {BILKOM_ID: PDP_ID}
    station_mapper._pdp_id_to_name = {PDP_ID: "Warszawa Centralna", 200: "Kraków Główny"}
    station_mapper._ready = True
    yield
    station_mapper._ready = False


def mock_pdp(monkeypatch, routes, ops):
    async def fake_schedules(station_ids, date_from=None, date_to=None):
        return routes

    async def fake_operations(station_ids, with_planned=True):
        return ops

    monkeypatch.setattr(pdp_client, "get_schedules", fake_schedules)
    monkeypatch.setattr(pdp_client, "get_operations", fake_operations)


async def _get(client, url):
    resp = await client.get(url)
    return resp


@pytest.mark.asyncio
async def test_basic_departure_fields(monkeypatch):
    route, op = _route(1, 1, "6521", _future_time(60), delay=7)
    mock_pdp(monkeypatch, [route], [op])
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://t") as c:
        resp = await c.get(f"/bilkom/api/departures/normal/{BILKOM_ID}")
    assert resp.status_code == 200
    data = resp.json()
    assert len(data) == 1
    d = data[0]
    assert d["trainCode"] == "IC 6521"
    assert d["delay"] == 7
    assert d["platform"] == "2"
    assert d["track"] == "1"
    assert d["arrivalStation"] == "Kraków Główny"
    assert d["calculatedTime"] == d["timestamp"] + 7 * 60


@pytest.mark.asyncio
async def test_cancelled_train_is_hidden(monkeypatch):
    r1, op1 = _route(1, 1, "6521", _future_time(60), cancelled=True)
    r2, _ = _route(2, 2, "1322", _future_time(90))
    mock_pdp(monkeypatch, [r1, r2], [op1])
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://t") as c:
        resp = await c.get(f"/bilkom/api/departures/normal/{BILKOM_ID}")
    codes = [d["trainCode"] for d in resp.json()]
    assert codes == ["IC 1322"]


@pytest.mark.asyncio
async def test_past_train_beyond_grace_is_hidden(monkeypatch):
    # train 10 minutes in the past with no delay -> hidden (grace = 120s)
    r1, _ = _route(1, 1, "6521", _future_time(-10))
    # train 10 minutes in the past but 9 min delay -> departs in ~-1min -> visible
    r2, op2 = _route(2, 2, "1322", _future_time(-10), delay=9)
    mock_pdp(monkeypatch, [r1, r2], [op2])
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://t") as c:
        resp = await c.get(f"/bilkom/api/departures/normal/{BILKOM_ID}")
    codes = [d["trainCode"] for d in resp.json()]
    assert codes == ["IC 1322"]


@pytest.mark.asyncio
async def test_split_trains_deduplicated(monkeypatch):
    # two portions of the same train code departing at the same time
    r1, _ = _route(1, 1, "3521", _future_time(60), dest_id=200)
    r2, _ = _route(2, 2, "3521", _future_time(60), dest_id=201)
    mock_pdp(monkeypatch, [r1, r2], [])
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://t") as c:
        resp = await c.get(f"/bilkom/api/departures/normal/{BILKOM_ID}")
    assert len(resp.json()) == 1


@pytest.mark.asyncio
async def test_sorted_by_published_time(monkeypatch):
    r1, op1 = _route(1, 1, "6521", _future_time(120), delay=0)
    r2, op2 = _route(2, 2, "1322", _future_time(60), delay=30)
    mock_pdp(monkeypatch, [r1, r2], [op1, op2])
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://t") as c:
        resp = await c.get(f"/bilkom/api/departures/normal/{BILKOM_ID}")
    codes = [d["trainCode"] for d in resp.json()]
    assert codes == ["IC 1322", "IC 6521"]


@pytest.mark.asyncio
async def test_unknown_station_404_message(monkeypatch):
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://t") as c:
        resp = await c.get("/bilkom/api/departures/normal/9999999")
    assert resp.status_code == 404
    detail = resp.json()["detail"]
    assert "9999999" in detail
    # regression: used to render Python None into the message
    assert "None" not in detail


@pytest.mark.asyncio
async def test_unmapped_station_404_with_name(monkeypatch):
    station_mapper._station_names["5100103"] = "Godkow - Jädickendorf"
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://t") as c:
        resp = await c.get("/bilkom/api/departures/normal/5100103")
    assert resp.status_code == 404
    assert "Godkow" in resp.json()["detail"]


@pytest.mark.asyncio
async def test_night_train_after_midnight_day_offset(monkeypatch):
    # 23:55 local now + 30 min -> 00:25 next day, ddy handles operating date math
    route, _ = _route(1, 1, "6521", _future_time(30))
    mock_pdp(monkeypatch, [route], [])
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://t") as c:
        resp = await c.get(f"/bilkom/api/departures/normal/{BILKOM_ID}")
    assert len(resp.json()) == 1


@pytest.mark.asyncio
async def test_historic_bilkom_id_still_works(monkeypatch):
    """Old phone builds send the historic bilkom number; the mapper keeps
    an alias to the PDP id so those requests keep working."""
    station_mapper._station_names["5100020"] = "Katowice"
    station_mapper._id_map["5100020"] = PDP_ID
    station_mapper._pdp_id_to_name[PDP_ID] = "Katowice"
    route, _ = _route(1, 1, "6521", _future_time(45))
    mock_pdp(monkeypatch, [route], [])
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://t") as c:
        resp = await c.get("/bilkom/api/departures/normal/5100020")
    assert resp.status_code == 200
    assert len(resp.json()) == 1


@pytest.mark.asyncio
async def test_raw_pdp_id_accepted(monkeypatch):
    route, _ = _route(1, 1, "6521", _future_time(45))
    mock_pdp(monkeypatch, [route], [])
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://t") as c:
        resp = await c.get(f"/bilkom/api/departures/normal/{PDP_ID}")
    assert resp.status_code == 200
    assert len(resp.json()) == 1
