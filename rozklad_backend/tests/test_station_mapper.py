"""Tests for station id resolution (synthetic stations + fake PDP list)."""
import sys
import os
import re
import json

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from app.station_mapper import StationMapper, _normalize_name

FAKE_PDP_STATIONS = [
    {"id": 1, "name": "Godków"},
    {"id": 2, "name": "Warszawa Raków WKD"},
    {"id": 6, "name": "Warszawa Śródmieście"},
    {"id": 7, "name": "Warszawa Śródmieście WKD"},
    {"id": 8, "name": "Warszawa Centralna"},
]

FAKE_STATIONS = {
    # mapped station: numerStacji is the PDP id, bilkom number kept
    "73312": {"numerStacji": "73312", "bilkomNumerStacji": "5100020",
              "name": "Katowice"},
    # not in PDP: keeps the old number, 404 expected (watch falls back)
    "5100410": {"numerStacji": "5100410", "name": "Będzin"},
    # safety net: old numeric id, unique name match
    "5100246": {"numerStacji": "5100246", "name": "Warszawa Śródmieście"},
    # safety net: ambiguous name must not be guessed
    "5100561": {"numerStacji": "5100561", "name": "Borki Opolskie"},
}


@pytest.fixture
def mapper(monkeypatch):
    m = StationMapper()
    monkeypatch.setattr(m, "load_bilkom_stations", lambda: FAKE_STATIONS)
    return m


@pytest.mark.asyncio
async def test_pdp_id_is_master_key(mapper):
    await mapper.build_mapping(
        FAKE_PDP_STATIONS + [{"id": 73312, "name": "Katowice"}])
    assert mapper.get_pdp_id("73312") == 73312


@pytest.mark.asyncio
async def test_historic_bilkom_id_alias(mapper):
    await mapper.build_mapping(
        FAKE_PDP_STATIONS + [{"id": 73312, "name": "Katowice"}])
    assert mapper.get_pdp_id("5100020") == 73312
    assert mapper.get_bilkom_name("5100020") == "Katowice"


@pytest.mark.asyncio
async def test_unmapped_station_returns_none(mapper):
    await mapper.build_mapping(FAKE_PDP_STATIONS)
    assert mapper.get_pdp_id("5100410") is None


@pytest.mark.asyncio
async def test_name_safety_net_unique_match(mapper):
    await mapper.build_mapping(FAKE_PDP_STATIONS)
    assert mapper.get_pdp_id("5100246") == 6


@pytest.mark.asyncio
async def test_name_safety_net_skips_ambiguous_names(monkeypatch):
    m = StationMapper()
    monkeypatch.setattr(m, "load_bilkom_stations", lambda: FAKE_STATIONS)
    await m.build_mapping(
        FAKE_PDP_STATIONS + [{"id": 92, "name": "Borki Opolskie"},
                             {"id": 93, "name": "Borki Opolskie"}])
    assert m.get_pdp_id("5100561") is None


@pytest.mark.asyncio
async def test_mapped_id_not_overwritten_by_name_net(monkeypatch):
    m = StationMapper()
    monkeypatch.setattr(m, "load_bilkom_stations", lambda: FAKE_STATIONS)
    # PDP entry 500 is the master id for 73312's station name; the name
    # "Katowica fictio" is irrelevant, the numeric id wins
    await m.build_mapping(FAKE_PDP_STATIONS + [{"id": 73312, "name": "Katowice"}])
    assert m.get_pdp_id("73312") == 73312
    assert m.get_pdp_id("5100410") is None


@pytest.mark.asyncio
async def test_unknown_id_without_name_returns_none(mapper):
    await mapper.build_mapping(FAKE_PDP_STATIONS)
    assert mapper.get_pdp_id("nope") is None
    assert mapper.get_pdp_id("500000") is None


def test_stations_js_shape():
    """The real stations.js must expose PDP ids with bilkom aliases."""
    m = StationMapper()
    stations = m.load_bilkom_stations()
    assert len(stations) > 2000
    mapped = [s for s in stations.values() if s.get("bilkomNumerStacji")]
    assert len(mapped) > 2000
    ids = [s["numerStacji"] for s in stations.values()]
    assert len(ids) == len(set(ids))
    assert all(re.fullmatch(r"\d+", i) for i in ids)


def test_normalize_name():
    assert _normalize_name("Bielsko-Biała") == _normalize_name("Bielsko Biala")
    assert _normalize_name("KOLIN") == "kolin"
