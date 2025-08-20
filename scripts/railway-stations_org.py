# -*- coding: utf-8 -*-
import json
import re


output = []

# Get input from https://api.railway-stations.org/photoStationsByCountry/pl
with open("./railway-stations_org.json", "rt", encoding="utf-8") as f_in, open("./stations.json", "wt", encoding="utf-8") as f_out:
    json_in = json.load(f_in)
    for station in json_in["stations"]:
        name = re.search(r"(?<=\().*(?=\))", station["title"])
        try:
            name = name.group(0)
        except AttributeError:
            name = None
        output.append({
            "name": name if name is not None else station["title"],
            "numerStacji": str(station["id"]),
            "lat": str(station["lat"]),
            "lon": str(station["lon"])
        })
    print(output)
    json.dump(output, f_out, ensure_ascii=False)