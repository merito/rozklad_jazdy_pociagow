"""Tests for PDP client pagination behavior (mocked HTTP transport)."""
import sys
import os
import json

import pytest
import httpx

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from app.pdp_client import PDPClient


def _schedules_payload(page, total_pages, routes_on_page):
    return {
        "rt": [{"sid": r, "oid": r, "od": ["2026-09-09"], "st": []} for r in routes_on_page],
        "pg": {"p": page, "tp": totalPages, "hn": page < totalPages},
    } if (totalPages := total_pages) else {}


@pytest.mark.asyncio
async def test_get_schedules_fetches_all_pages():
    """schedules/shortened is paginated like operations/shortened -
    the client must fetch every page, not just the first one."""
    pages_seen = []

    def handler(request: httpx.Request) -> httpx.Response:
        page = int(request.url.params.get("page", "1"))
        pages_seen.append(page)
        if page == 1:
            payload = _schedules_payload(1, 2, [1, 2])
        else:
            payload = _schedules_payload(2, 2, [3])
        return httpx.Response(200, json=payload)

    client = PDPClient()
    client._client = httpx.AsyncClient(
        transport=httpx.MockTransport(handler),
        base_url="https://pdp.example",
    )
    routes = await client.get_schedules([100], "2026-09-08", "2026-09-10")
    assert sorted(r["sid"] for r in routes) == [1, 2, 3]
    assert pages_seen == [1, 2]


@pytest.mark.asyncio
async def test_get_schedules_single_page_ok():
    def handler(request: httpx.Request) -> httpx.Response:
        return httpx.Response(200, json={"rt": [{"sid": 1, "oid": 1, "st": []}], "pg": {"p": 1, "tp": 1, "hn": False}})

    client = PDPClient()
    client._client = httpx.AsyncClient(
        transport=httpx.MockTransport(handler),
        base_url="https://pdp.example",
    )
    routes = await client.get_schedules([100], "2026-09-08", "2026-09-10")
    assert len(routes) == 1
