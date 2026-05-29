import json
import os
import re
import unicodedata
from typing import Any


BILKOM_STATIONS_PATH = os.path.join(
    os.path.dirname(__file__),
    "..", "..", "src", "pkjs", "stations.js",
)


def _normalize_name(name: str) -> str:
    name = name.strip().lower()
    name = unicodedata.normalize("NFKD", name)
    name = name.encode("ascii", "ignore").decode("ascii")
    name = re.sub(r"[^a-z0-9 ]", "", name)
    name = re.sub(r"\s+", " ", name).strip()
    return name


class StationMapper:
    def __init__(self):
        self._bilkom_to_name: dict[str, str] = {}
        self._bilkom_to_pdp: dict[str, int] = {}
        self._pdp_id_to_name: dict[int, str] = {}
        self._ready = False

    def load_bilkom_stations(self) -> dict[str, dict[str, Any]]:
        if not os.path.exists(BILKOM_STATIONS_PATH):
            raise FileNotFoundError(
                f"stations.js not found at {BILKOM_STATIONS_PATH}"
            )

        with open(BILKOM_STATIONS_PATH, encoding="utf-8") as f:
            content = f.read()

        match = re.search(r"\[\s*\{.*?\}\s*\];", content, re.DOTALL)
        if not match:
            raise ValueError("Could not parse stations.js JSON array")

        json_str = match.group(0).rstrip(";")
        stations = json.loads(json_str)

        result: dict[str, dict[str, Any]] = {}
        for s in stations:
            num = s.get("numerStacji")
            if num:
                result[num] = s

        return result

    async def build_mapping(
        self,
        pdp_stations: list[dict[str, Any]],
    ) -> None:
        bilkom_stations = self.load_bilkom_stations()
        self._bilkom_to_name = {
            num: s["name"] for num, s in bilkom_stations.items()
        }

        self._pdp_id_to_name = {}
        pdp_by_name: dict[str, int] = {}
        for s in pdp_stations:
            name = s.get("name")
            pid = s.get("id")
            if name and pid:
                self._pdp_id_to_name[pid] = name
                pdp_by_name[_normalize_name(name)] = pid

        for bilkom_id, st in bilkom_stations.items():
            normalized = _normalize_name(st["name"])
            pdp_id = pdp_by_name.get(normalized)
            if pdp_id is not None:
                self._bilkom_to_pdp[bilkom_id] = pdp_id

        self._ready = True

    def get_pdp_id(self, bilkom_id: str) -> int | None:
        return self._bilkom_to_pdp.get(bilkom_id)

    def get_bilkom_name(self, bilkom_id: str) -> str | None:
        return self._bilkom_to_name.get(bilkom_id)

    def get_pdp_name(self, pdp_id: int) -> str | None:
        return self._pdp_id_to_name.get(pdp_id)

    @property
    def is_ready(self) -> bool:
        return self._ready

    @property
    def pdp_station_count(self) -> int:
        return len(self._pdp_id_to_name)


station_mapper = StationMapper()
