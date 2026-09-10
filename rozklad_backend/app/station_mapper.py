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
    # NFKD does not decompose Polish "ł", map it explicitly
    name = name.replace("ł", "l")
    # treat separators as word boundaries ("Bielsko-Biała" == "Bielsko Biala")
    name = re.sub(r"[-–—/]", " ", name)
    name = unicodedata.normalize("NFKD", name)
    name = name.encode("ascii", "ignore").decode("ascii")
    name = re.sub(r"[^a-z0-9 ]", "", name)
    name = re.sub(r"\s+", " ", name).strip()
    return name


class StationMapper:
    """Resolves station ids accepted by the API to PDP station ids.

    stations.js keeps the PDP id in "numerStacji" (the master key used by
    the watch and this backend) and the historic bilkom number, when it
    differs, in "bilkomNumerStacji". Stations that do not exist in the PDP
    dictionary keep their old bilkom number and have no "bilkomNumerStacji"
    field; requests for them map to nothing and answer 404 (the watch then
    falls back to the old kalkulatorkolejowy.pl API).
    """

    def __init__(self):
        self._station_names: dict[str, str] = {}
        self._id_map: dict[str, int] = {}
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
        stations = self.load_bilkom_stations()

        self._pdp_id_to_name = {}
        pdp_by_name: dict[str, list[int]] = {}
        for s in pdp_stations:
            name = s.get("name")
            pid = s.get("id")
            if name and pid:
                self._pdp_id_to_name[int(pid)] = name
                pdp_by_name.setdefault(_normalize_name(name), []).append(
                    int(pid)
                )

        for num, st in stations.items():
            self._station_names[num] = st.get("name", "")
            old = st.get("bilkomNumerStacji")
            if old:
                self._station_names.setdefault(old, st.get("name", ""))
            if old and num.isdigit() and int(num) in self._pdp_id_to_name:
                self._id_map[num] = int(num)
                if old != num:
                    # historic bilkom id keeps working for old phone builds
                    # and cached watch lists
                    self._id_map[old] = int(num)
                continue
            # safety net for ids not backed by a known PDP id: use the
            # name, but only when it matches exactly one station in the
            # PDP dictionary (ambiguous names must not be guessed)
            candidates = pdp_by_name.get(_normalize_name(st.get("name", "")))
            if candidates and len(candidates) == 1:
                self._id_map[num] = candidates[0]

        self._ready = True

    def get_pdp_id(self, bilkom_id: str) -> int | None:
        mapped = self._id_map.get(bilkom_id)
        if mapped is not None:
            return mapped
        if bilkom_id.isdigit() and int(bilkom_id) in self._pdp_id_to_name:
            return int(bilkom_id)
        return None

    def get_bilkom_name(self, bilkom_id: str) -> str | None:
        return self._station_names.get(bilkom_id)

    def get_pdp_name(self, pdp_id: int) -> str | None:
        return self._pdp_id_to_name.get(pdp_id)

    @property
    def is_ready(self) -> bool:
        return self._ready

    @property
    def pdp_station_count(self) -> int:
        return len(self._pdp_id_to_name)


station_mapper = StationMapper()
