import httpx
from datetime import date
from typing import Any
from app.config import settings


class PDPClient:
    def __init__(self):
        self.base_url = settings.pdp_base_url.rstrip("/")
        self.headers = {
            "X-Api-Key": settings.pdp_api_key,
            "Accept": "application/json",
        }
        self._client: httpx.AsyncClient | None = None

    async def _get_client(self) -> httpx.AsyncClient:
        if self._client is None:
            self._client = httpx.AsyncClient(
                base_url=self.base_url,
                headers=self.headers,
                timeout=30.0,
            )
        return self._client

    async def get_stations(self) -> list[dict[str, Any]]:
        client = await self._get_client()
        all_stations: list[dict[str, Any]] = []
        page = 1

        while True:
            resp = await client.get(
                "/api/v1/dictionaries/stations",
                params={"page": page, "pageSize": 10000},
            )
            resp.raise_for_status()
            data = resp.json()
            stations = data.get("stations") or []
            all_stations.extend(stations)
            if page >= (data.get("totalPages") or 1):
                break
            page += 1

        return all_stations

    async def get_operations(
        self,
        station_ids: list[int],
        with_planned: bool = True,
    ) -> list[dict[str, Any]]:
        client = await self._get_client()
        stations_str = ",".join(str(s) for s in station_ids)
        all_trains: list[dict[str, Any]] = []
        page = 1

        while True:
            resp = await client.get(
                "/api/v1/operations/shortened",
                params={
                    "stations": stations_str,
                    "withPlanned": str(with_planned).lower(),
                    "page": page,
                    "pageSize": 5000,
                },
            )
            resp.raise_for_status()
            data = resp.json()
            trains = data.get("tr") or []
            all_trains.extend(trains)

            pg = data.get("pg") or {}
            if not pg.get("hasNextPage"):
                break
            page += 1

        return all_trains

    async def get_schedules(
        self,
        station_ids: list[int],
        date_from: str | None = None,
        date_to: str | None = None,
    ) -> list[dict[str, Any]]:
        client = await self._get_client()
        stations_str = ",".join(str(s) for s in station_ids)
        today = date.today().isoformat()

        resp = await client.get(
            "/api/v1/schedules/shortened",
            params={
                "stations": stations_str,
                "dateFrom": date_from or today,
                "dateTo": date_to or today,
                "fullRoute": "true",
                "dictionaries": "false",
                "pageSize": 5000,
            },
        )
        resp.raise_for_status()
        data = resp.json()
        return data.get("rt") or []

    async def close(self):
        if self._client:
            await self._client.aclose()


pdp_client = PDPClient()
