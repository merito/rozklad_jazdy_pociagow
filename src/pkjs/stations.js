const stationData = [
    {
        "name": "Augustów",
        "numerStacji": "5100089",
        "lat": "53.852496",
        "lon": "23.02639"
    },
    {
        "name": "Chabówka",
        "numerStacji": "5100091",
        "lat": "49.59694",
        "lon": "19.936393"
    },
    {
        "name": "Chodzież",
        "numerStacji": "5100092",
        "lat": "52.993891",
        "lon": "16.909447"
    },
    {
        "name": "Choszczno",
        "numerStacji": "5100094",
        "lat": "53.16528",
        "lon": "15.403052"
    },
    {
        "name": "Ciechanów",
        "numerStacji": "5100095",
        "lat": "52.883612",
        "lon": "20.591114"
    },
    {
        "name": "Czerwieńsk",
        "numerStacji": "5100096",
        "lat": "52.015281",
        "lon": "15.412221"
    },
    {
        "name": "Czyżew",
        "numerStacji": "5100097",
        "lat": "52.799724",
        "lon": "22.342221"
    },
    {
        "name": "Dąbrowa Górnicza Ząbkowice",
        "numerStacji": "5100098",
        "lat": "50.366947",
        "lon": "19.264998"
    },
    {
        "name": "Dęblin",
        "numerStacji": "5100099",
        "lat": "51.577497",
        "lon": "21.835275"
    },
    {
        "name": "Działdowo",
        "numerStacji": "5100100",
        "lat": "53.237499",
        "lon": "20.167776"
    },
    {
        "name": "Fosowskie",
        "numerStacji": "5100101",
        "lat": "50.660552",
        "lon": "18.36"
    },
    {
        "name": "Giżycko",
        "numerStacji": "5100102",
        "lat": "54.03139",
        "lon": "21.778058"
    },
    {
        "name": "Godkow - Jädickendorf",
        "numerStacji": "5100103",
        "lat": "52.9013",
        "lon": "14.4586"
    },
    {
        "name": "Goleniów",
        "numerStacji": "5100105",
        "lat": "53.559448",
        "lon": "14.839725"
    },
    {
        "name": "Gorzów Wielkopolski Wieprzyce",
        "numerStacji": "5100106",
        "lat": "52.717779",
        "lon": "15.18083"
    },
    {
        "name": "Gryfice",
        "numerStacji": "5100107",
        "lat": "53.914998",
        "lon": "15.191671"
    },
    {
        "name": "Gryfino",
        "numerStacji": "5100108",
        "lat": "53.254444",
        "lon": "14.493056"
    },
    {
        "name": "Gryfów Śląski",
        "numerStacji": "5100109",
        "lat": "51.033892",
        "lon": "15.428887"
    },
    {
        "name": "Grzmiąca",
        "numerStacji": "5100110",
        "lat": "53.832504",
        "lon": "16.419445"
    },
    {
        "name": "Herby Stare",
        "numerStacji": "5100111",
        "lat": "50.747226",
        "lon": "18.880278"
    },
    {
        "name": "Jabłonowo Pomorskie",
        "numerStacji": "5100113",
        "lat": "53.393336",
        "lon": "19.161946"
    },
    {
        "name": "Jedlina-Zdrój",
        "numerStacji": "5100114",
        "lat": "50.711386",
        "lon": "16.343333"
    },
    {
        "name": "Jędrzejów",
        "numerStacji": "5100115",
        "lat": "50.645001",
        "lon": "20.276114"
    },
    {
        "name": "Jordanów",
        "numerStacji": "5100116",
        "lat": "49.637499",
        "lon": "19.832226"
    },
    {
        "name": "Kalety",
        "numerStacji": "5100117",
        "lat": "50.565833",
        "lon": "18.888611"
    },
    {
        "name": "Białogard",
        "numerStacji": "5100001",
        "lat": "54.009726",
        "lon": "15.977778"
    },
    {
        "name": "Białystok",
        "numerStacji": "5100002",
        "lat": "53.133889",
        "lon": "23.135834"
    },
    {
        "name": "Brzeg",
        "numerStacji": "5100003",
        "lat": "50.853056",
        "lon": "17.470553"
    },
    {
        "name": "Brzeg Dolny",
        "numerStacji": "5100004",
        "lat": "51.266668",
        "lon": "16.726112"
    },
    {
        "name": "Bydgoszcz Główna",
        "numerStacji": "5100005",
        "lat": "53.135274",
        "lon": "17.991388"
    },
    {
        "name": "Bytom",
        "numerStacji": "5100006",
        "lat": "50.343053",
        "lon": "18.915282"
    },
    {
        "name": "Częstochowa",
        "numerStacji": "5100007",
        "lat": "50.808614",
        "lon": "19.121108"
    },
    {
        "name": "Duszniki-Zdrój",
        "numerStacji": "5100008",
        "lat": "50.40889",
        "lon": "16.386113"
    },
    {
        "name": "Gdańsk Główny",
        "numerStacji": "5100009",
        "lat": "54.355829",
        "lon": "18.644167"
    },
    {
        "name": "Gdynia Główna",
        "numerStacji": "5100010",
        "lat": "54.520835",
        "lon": "18.529168"
    },
    {
        "name": "Gliwice",
        "numerStacji": "5100011",
        "lat": "50.30111",
        "lon": "18.676942"
    },
    {
        "name": "Gniezno",
        "numerStacji": "5100013",
        "lat": "52.529724",
        "lon": "17.603333"
    },
    {
        "name": "Inowrocław",
        "numerStacji": "5100015",
        "lat": "52.80528",
        "lon": "18.244444"
    },
    {
        "name": "Jarocin",
        "numerStacji": "5100016",
        "lat": "51.968887",
        "lon": "17.494725"
    },
    {
        "name": "Kalisz",
        "numerStacji": "5100017",
        "lat": "51.742782",
        "lon": "18.071392"
    },
    {
        "name": "Kamieniec Ząbkowicki",
        "numerStacji": "5100018",
        "lat": "50.536115",
        "lon": "16.8975"
    },
    {
        "name": "Katowice",
        "numerStacji": "5100020",
        "lat": "50.257503",
        "lon": "19.017219"
    },
    {
        "name": "Kielce",
        "numerStacji": "5100022",
        "lat": "50.874163",
        "lon": "20.618054"
    },
    {
        "name": "Kępno",
        "numerStacji": "5100023",
        "lat": "51.291667",
        "lon": "18.0"
    },
    {
        "name": "Koluszki",
        "numerStacji": "5100024",
        "lat": "51.745281",
        "lon": "19.819444"
    },
    {
        "name": "Kołobrzeg",
        "numerStacji": "5100025",
        "lat": "54.18222",
        "lon": "15.570279"
    },
    {
        "name": "Konin",
        "numerStacji": "5100026",
        "lat": "52.23139",
        "lon": "18.251114"
    },
    {
        "name": "Koszalin",
        "numerStacji": "5100027",
        "lat": "54.190832",
        "lon": "16.169724"
    },
    {
        "name": "Kraków Główny",
        "numerStacji": "5100028",
        "lat": "50.065835",
        "lon": "19.947774"
    },
    {
        "name": "Krynica-Zdrój",
        "numerStacji": "5100029",
        "lat": "49.409721",
        "lon": "20.957226"
    },
    {
        "name": "Krzyż",
        "numerStacji": "5100030",
        "lat": "52.877499",
        "lon": "16.018607"
    },
    {
        "name": "Kudowa-Zdrój",
        "numerStacji": "5100031",
        "lat": "50.429718",
        "lon": "16.244443"
    },
    {
        "name": "Kutno",
        "numerStacji": "5100032",
        "lat": "52.227498",
        "lon": "19.347222"
    },
    {
        "name": "Kuźnica Białostocka",
        "numerStacji": "5100033",
        "lat": "53.511113",
        "lon": "23.641945"
    },
    {
        "name": "Legnica",
        "numerStacji": "5100035",
        "lat": "51.213614",
        "lon": "16.168052"
    },
    {
        "name": "Leszno",
        "numerStacji": "5100036",
        "lat": "51.846113",
        "lon": "16.565277"
    },
    {
        "name": "Lublin",
        "numerStacji": "5100037",
        "lat": "51.231385",
        "lon": "22.568893"
    },
    {
        "name": "Łódź Kaliska",
        "numerStacji": "5100039",
        "lat": "51.758054",
        "lon": "19.430004"
    },
    {
        "name": "Malbork",
        "numerStacji": "5100040",
        "lat": "54.0359714",
        "lon": "19.0431501"
    },
    {
        "name": "Muszyna",
        "numerStacji": "5100041",
        "lat": "49.347498",
        "lon": "20.895003"
    },
    {
        "name": "Nowy Sącz",
        "numerStacji": "5100042",
        "lat": "49.606666",
        "lon": "20.703056"
    },
    {
        "name": "Nowa Sól",
        "numerStacji": "5100043",
        "lat": "51.799441",
        "lon": "15.708614"
    },
    {
        "name": "Nysa",
        "numerStacji": "5100044",
        "lat": "50.477775",
        "lon": "17.341945"
    },
    {
        "name": "Olsztyn Główny",
        "numerStacji": "5100045",
        "lat": "53.785832",
        "lon": "20.497221"
    },
    {
        "name": "Opole Główne",
        "numerStacji": "5100046",
        "lat": "50.661946",
        "lon": "17.926945"
    },
    {
        "name": "Ostrów Wielkopolski",
        "numerStacji": "5100047",
        "lat": "51.649168",
        "lon": "17.805276"
    },
    {
        "name": "Oświęcim",
        "numerStacji": "5100048",
        "lat": "50.041393",
        "lon": "19.199718"
    },
    {
        "name": "Piła Główna",
        "numerStacji": "5100049",
        "lat": "53.14278",
        "lon": "16.744441"
    },
    {
        "name": "Polanica-Zdrój",
        "numerStacji": "5100050",
        "lat": "50.397501",
        "lon": "16.514721"
    },
    {
        "name": "Prudnik",
        "numerStacji": "5100051",
        "lat": "50.329444",
        "lon": "17.578613"
    },
    {
        "name": "Radom",
        "numerStacji": "5100052",
        "lat": "51.390836",
        "lon": "21.155277"
    },
    {
        "name": "Siedlce",
        "numerStacji": "5100053",
        "lat": "52.16194",
        "lon": "22.271386"
    },
    {
        "name": "Sieradz",
        "numerStacji": "5100054",
        "lat": "51.597777",
        "lon": "18.714723"
    },
    {
        "name": "Słupsk",
        "numerStacji": "5100055",
        "lat": "54.467223",
        "lon": "17.01667"
    },
    {
        "name": "Sopot",
        "numerStacji": "5100056",
        "lat": "54.4400543",
        "lon": "18.5623213"
    },
    {
        "name": "Szczecin Główny",
        "numerStacji": "5100057",
        "lat": "53.419719",
        "lon": "14.551945"
    },
    {
        "name": "Szklarska Poręba Górna",
        "numerStacji": "5100058",
        "lat": "50.832498",
        "lon": "15.518887"
    },
    {
        "name": "Świnoujście",
        "numerStacji": "5100059",
        "lat": "53.904723",
        "lon": "14.266663"
    },
    {
        "name": "Tczew",
        "numerStacji": "5100061",
        "lat": "54.097497",
        "lon": "18.790278"
    },
    {
        "name": "Toruń Główny",
        "numerStacji": "5100062",
        "lat": "53.000004",
        "lon": "18.61444"
    },
    {
        "name": "Ustka",
        "numerStacji": "5100063",
        "lat": "54.578887",
        "lon": "16.860554"
    },
    {
        "name": "Wałbrzych Główny",
        "numerStacji": "5100064",
        "lat": "50.743334",
        "lon": "16.281667"
    },
    {
        "name": "Warszawa Centralna",
        "numerStacji": "5100065",
        "lat": "52.228613",
        "lon": "21.002775"
    },
    {
        "name": "Warszawa Wschodnia",
        "numerStacji": "5100066",
        "lat": "52.2515246",
        "lon": "20.9821647"
    },
    {
        "name": "Warszawa Zachodnia",
        "numerStacji": "5100067",
        "lat": "52.220001",
        "lon": "20.965281"
    },
    {
        "name": "Węgliniec",
        "numerStacji": "5100068",
        "lat": "51.290552",
        "lon": "15.223331"
    },
    {
        "name": "Wrocław Główny",
        "numerStacji": "5100069",
        "lat": "51.098057",
        "lon": "17.036392"
    },
    {
        "name": "Zabrze",
        "numerStacji": "5100070",
        "lat": "50.305281",
        "lon": "18.786664"
    },
    {
        "name": "Zbąszynek",
        "numerStacji": "5100071",
        "lat": "52.241944",
        "lon": "15.8175"
    },
    {
        "name": "Trzebinia",
        "numerStacji": "5100072",
        "lat": "50.154163",
        "lon": "19.453052"
    },
    {
        "name": "Chorzów Miasto",
        "numerStacji": "5100073",
        "lat": "50.298053",
        "lon": "18.948892"
    },
    {
        "name": "Tarnowskie Góry",
        "numerStacji": "5100074",
        "lat": "50.446942",
        "lon": "18.864996"
    },
    {
        "name": "Iława Główna",
        "numerStacji": "5100075",
        "lat": "53.582775",
        "lon": "19.574164"
    },
    {
        "name": "Strzelin",
        "numerStacji": "5100076",
        "lat": "50.78472",
        "lon": "17.060277"
    },
    {
        "name": "Jaworzyna Śląska",
        "numerStacji": "5100077",
        "lat": "50.912502",
        "lon": "16.428335"
    },
    {
        "name": "Marciszów",
        "numerStacji": "5100078",
        "lat": "50.851393",
        "lon": "16.007775"
    },
    {
        "name": "Bolesławiec",
        "numerStacji": "5100079",
        "lat": "51.267774",
        "lon": "15.558889"
    },
    {
        "name": "Oleśnica",
        "numerStacji": "5100080",
        "lat": "51.200552",
        "lon": "17.387223"
    },
    {
        "name": "Poznań Główny",
        "numerStacji": "5100081",
        "lat": "52.401385",
        "lon": "16.911667"
    },
    {
        "name": "Rzepin",
        "numerStacji": "5100082",
        "lat": "52.350003",
        "lon": "14.815275"
    },
    {
        "name": "Kunowice",
        "numerStacji": "5100083",
        "lat": "52.34167",
        "lon": "14.637504"
    },
    {
        "name": "Terespol",
        "numerStacji": "5100084",
        "lat": "52.074169",
        "lon": "23.601107"
    },
    {
        "name": "Zgorzelec",
        "numerStacji": "5100085",
        "lat": "51.14028",
        "lon": "15.004165"
    },
    {
        "name": "Biała Podlaska",
        "numerStacji": "5100086",
        "lat": "52.020279",
        "lon": "23.130557"
    },
    {
        "name": "Radomsko",
        "numerStacji": "5100088",
        "lat": "51.074443",
        "lon": "19.43778"
    },
    {
        "name": "Kalwaria Zebrzydowska Lanckorona",
        "numerStacji": "5100118",
        "lat": "49.871111",
        "lon": "19.688615"
    },
    {
        "name": "Kędzierzyn-Koźle",
        "numerStacji": "5100119",
        "lat": "50.344447",
        "lon": "18.205278"
    },
    {
        "name": "Kętrzyn",
        "numerStacji": "5100120",
        "lat": "54.072777",
        "lon": "21.385275"
    },
    {
        "name": "Kielce Herbskie",
        "numerStacji": "5100121",
        "lat": "50.885831",
        "lon": "20.603887"
    },
    {
        "name": "Koniecpol",
        "numerStacji": "5100122",
        "lat": "50.776387",
        "lon": "19.699168"
    },
    {
        "name": "Korsze",
        "numerStacji": "5100123",
        "lat": "54.172503",
        "lon": "21.136112"
    },
    {
        "name": "Kościan",
        "numerStacji": "5100124",
        "lat": "52.078888",
        "lon": "16.642224"
    },
    {
        "name": "Kowalewo Pomorskie",
        "numerStacji": "5100125",
        "lat": "53.164444",
        "lon": "18.869724"
    },
    {
        "name": "Łobez",
        "numerStacji": "5100126",
        "lat": "53.636665",
        "lon": "15.627774"
    },
    {
        "name": "Łapy",
        "numerStacji": "5100127",
        "lat": "52.990278",
        "lon": "22.883893"
    },
    {
        "name": "Skawina",
        "numerStacji": "5100130",
        "lat": "49.977219",
        "lon": "19.821943"
    },
    {
        "name": "Sokółka",
        "numerStacji": "5100132",
        "lat": "53.403332",
        "lon": "23.508059"
    },
    {
        "name": "Sosnowiec Główny",
        "numerStacji": "5100133",
        "lat": "50.278888",
        "lon": "19.126115"
    },
    {
        "name": "Stare Bielice",
        "numerStacji": "5100135",
        "lat": "52.853615",
        "lon": "15.92333"
    },
    {
        "name": "Stronie",
        "numerStacji": "5100136",
        "lat": "49.833608",
        "lon": "19.669998"
    },
    {
        "name": "Strzelce Krajeńskie Wschód",
        "numerStacji": "5100137",
        "lat": "52.836113",
        "lon": "15.582774"
    },
    {
        "name": "Strzelce Opolskie",
        "numerStacji": "5100138",
        "lat": "50.516671",
        "lon": "18.306667"
    },
    {
        "name": "Stróże",
        "numerStacji": "5100139",
        "lat": "49.654165",
        "lon": "20.97667"
    },
    {
        "name": "Sucha Beskidzka",
        "numerStacji": "5100140",
        "lat": "49.74056",
        "lon": "19.580555"
    },
    {
        "name": "Suwałki",
        "numerStacji": "5100141",
        "lat": "54.10583",
        "lon": "22.945002"
    },
    {
        "name": "Świdwin",
        "numerStacji": "5100142",
        "lat": "53.781113",
        "lon": "15.772779"
    },
    {
        "name": "Szamotuły",
        "numerStacji": "5100143",
        "lat": "52.603337",
        "lon": "16.585556"
    },
    {
        "name": "Szczecin Dąbie",
        "numerStacji": "5100144",
        "lat": "53.390837",
        "lon": "14.668058"
    },
    {
        "name": "Szczecin Gumieńce",
        "numerStacji": "5100145",
        "lat": "53.3979",
        "lon": "14.494705"
    },
    {
        "name": "Szczecin Podjuchy",
        "numerStacji": "5100146",
        "lat": "53.360274",
        "lon": "14.586391"
    },
    {
        "name": "Szczytno",
        "numerStacji": "5100147",
        "lat": "53.560275",
        "lon": "20.996941"
    },
    {
        "name": "Szepietowo",
        "numerStacji": "5100148",
        "lat": "52.870002",
        "lon": "22.541108"
    },
    {
        "name": "Trzcianka",
        "numerStacji": "5100149",
        "lat": "53.033615",
        "lon": "16.466108"
    },
    {
        "name": "Trzebiatów",
        "numerStacji": "5100150",
        "lat": "54.06056",
        "lon": "15.2775"
    },
    {
        "name": "Tunel",
        "numerStacji": "5100151",
        "lat": "50.435004",
        "lon": "19.992225"
    },
    {
        "name": "Ustronie Morskie",
        "numerStacji": "5100152",
        "lat": "54.200558",
        "lon": "15.749164"
    },
    {
        "name": "Wejherowo",
        "numerStacji": "5100153",
        "lat": "54.605837",
        "lon": "18.228892"
    },
    {
        "name": "Włoszczowa",
        "numerStacji": "5100154",
        "lat": "50.837775",
        "lon": "20.014447"
    },
    {
        "name": "Wołów",
        "numerStacji": "5100155",
        "lat": "51.333611",
        "lon": "16.633334"
    },
    {
        "name": "Września",
        "numerStacji": "5100157",
        "lat": "52.32833",
        "lon": "17.555277"
    },
    {
        "name": "Zakopane",
        "numerStacji": "5100158",
        "lat": "49.300835",
        "lon": "19.963055"
    },
    {
        "name": "Zasieki",
        "numerStacji": "5100159",
        "lat": "51.735554",
        "lon": "14.668885"
    },
    {
        "name": "Ziębice",
        "numerStacji": "5100162",
        "lat": "50.608613",
        "lon": "17.033893"
    },
    {
        "name": "Czerwonka",
        "numerStacji": "5100164",
        "lat": "53.914719",
        "lon": "20.894167"
    },
    {
        "name": "Jelenia Góra Cieplice",
        "numerStacji": "5100165",
        "lat": "50.870001",
        "lon": "15.688613"
    },
    {
        "name": "Łowicz Główny",
        "numerStacji": "5100167",
        "lat": "52.106108",
        "lon": "19.953608"
    },
    {
        "name": "Łuków",
        "numerStacji": "5100168",
        "lat": "51.941668",
        "lon": "22.389163"
    },
    {
        "name": "Stare Jabłonki",
        "numerStacji": "5100169",
        "lat": "53.691391",
        "lon": "20.093336"
    },
    {
        "name": "Warszawa Gdańska",
        "numerStacji": "5100172",
        "lat": "52.258888",
        "lon": "20.99472"
    },
    {
        "name": "Mrozy",
        "numerStacji": "5100174",
        "lat": "52.164448",
        "lon": "21.802779"
    },
    {
        "name": "Mysłowice",
        "numerStacji": "5100175",
        "lat": "50.237781",
        "lon": "19.141666"
    },
    {
        "name": "Nałęczów",
        "numerStacji": "5100176",
        "lat": "51.318059",
        "lon": "22.213055"
    },
    {
        "name": "Namysłów",
        "numerStacji": "5100177",
        "lat": "51.074443",
        "lon": "17.71639"
    },
    {
        "name": "Nowa Ruda",
        "numerStacji": "5100179",
        "lat": "50.577222",
        "lon": "16.496941"
    },
    {
        "name": "Nowogard",
        "numerStacji": "5100180",
        "lat": "53.666114",
        "lon": "15.121115"
    },
    {
        "name": "Nowy Targ",
        "numerStacji": "5100181",
        "lat": "49.473329",
        "lon": "20.015274"
    },
    {
        "name": "Oborniki Śląskie",
        "numerStacji": "5100182",
        "lat": "51.303056",
        "lon": "16.90639"
    },
    {
        "name": "Oborniki Wielkopolskie",
        "numerStacji": "5100183",
        "lat": "52.657497",
        "lon": "16.829721"
    },
    {
        "name": "Pabianice",
        "numerStacji": "5100188",
        "lat": "51.660836",
        "lon": "19.325001"
    },
    {
        "name": "Piotrków Trybunalski",
        "numerStacji": "5100190",
        "lat": "51.410558",
        "lon": "19.684722"
    },
    {
        "name": "Pisz",
        "numerStacji": "5100191",
        "lat": "53.631946",
        "lon": "21.793052"
    },
    {
        "name": "Pleszew",
        "numerStacji": "5100192",
        "lat": "51.892218",
        "lon": "17.733056"
    },
    {
        "name": "Płoty",
        "numerStacji": "5100193",
        "lat": "53.808889",
        "lon": "15.260555"
    },
    {
        "name": "Prabuty",
        "numerStacji": "5100194",
        "lat": "53.758891",
        "lon": "19.209723"
    },
    {
        "name": "Przeworsk",
        "numerStacji": "5100195",
        "lat": "50.067219",
        "lon": "22.501663"
    },
    {
        "name": "Sosnowiec Południowy",
        "numerStacji": "5100197",
        "lat": "50.269441",
        "lon": "19.125557"
    },
    {
        "name": "Stargard",
        "numerStacji": "5100198",
        "lat": "53.339446",
        "lon": "15.031115"
    },
    {
        "name": "Ścinawa",
        "numerStacji": "5100199",
        "lat": "51.409444",
        "lon": "16.421108"
    },
    {
        "name": "Racławice Śląskie",
        "numerStacji": "5100201",
        "lat": "50.311942",
        "lon": "17.76139"
    },
    {
        "name": "Rawicz",
        "numerStacji": "5100202",
        "lat": "51.608609",
        "lon": "16.839726"
    },
    {
        "name": "Rogoźno Wielkopolskie",
        "numerStacji": "5100203",
        "lat": "52.754446",
        "lon": "16.97167"
    },
    {
        "name": "Ruciane-Nida",
        "numerStacji": "5100204",
        "lat": "53.648333",
        "lon": "21.56389"
    },
    {
        "name": "Rudna Gwizdanów",
        "numerStacji": "5100206",
        "lat": "51.529998",
        "lon": "16.280552"
    },
    {
        "name": "Runowo Pomorskie",
        "numerStacji": "5100207",
        "lat": "53.555834",
        "lon": "15.529441"
    },
    {
        "name": "Sędziszów",
        "numerStacji": "5100208",
        "lat": "50.564997",
        "lon": "20.053334"
    },
    {
        "name": "Skarżysko-Kamienna",
        "numerStacji": "5100209",
        "lat": "51.115829",
        "lon": "20.881663"
    },
    {
        "name": "Wałbrzych Miasto",
        "numerStacji": "5100210",
        "lat": "50.78472",
        "lon": "16.284166"
    },
    {
        "name": "Żagań",
        "numerStacji": "5100211",
        "lat": "51.604168",
        "lon": "15.315003"
    },
    {
        "name": "Zawiercie",
        "numerStacji": "5100212",
        "lat": "50.48111",
        "lon": "19.423055"
    },
    {
        "name": "Jaworzno Szczakowa",
        "numerStacji": "5100213",
        "lat": "50.246941",
        "lon": "19.293332"
    },
    {
        "name": "Kostrzyn nad Odrą",
        "numerStacji": "5100214",
        "lat": "52.591948",
        "lon": "14.648893"
    },
    {
        "name": "Małaszewicze",
        "numerStacji": "5100215",
        "lat": "52.026391",
        "lon": "23.527782"
    },
    {
        "name": "Ostróda",
        "numerStacji": "5100216",
        "lat": "53.699724",
        "lon": "19.951387"
    },
    {
        "name": "Miechów",
        "numerStacji": "5100218",
        "lat": "50.354721",
        "lon": "20.01139"
    },
    {
        "name": "Mława",
        "numerStacji": "5100219",
        "lat": "53.126392",
        "lon": "20.350553"
    },
    {
        "name": "Mogilno",
        "numerStacji": "5100220",
        "lat": "52.658612",
        "lon": "17.94611"
    },
    {
        "name": "Wysoka Kamieńska",
        "numerStacji": "5100221",
        "lat": "53.825555",
        "lon": "14.832219"
    },
    {
        "name": "Zielona Góra",
        "numerStacji": "5100222",
        "lat": "51.947502",
        "lon": "15.514168"
    },
    {
        "name": "Ostrzeszów",
        "numerStacji": "5100223",
        "lat": "51.429445",
        "lon": "17.940554"
    },
    {
        "name": "Lubań Śląski",
        "numerStacji": "5100224",
        "lat": "51.111388",
        "lon": "15.293609"
    },
    {
        "name": "Międzylesie",
        "numerStacji": "5100225",
        "lat": "50.14361",
        "lon": "16.654998"
    },
    {
        "name": "Poznań Starołęka",
        "numerStacji": "5100226",
        "lat": "52.367496",
        "lon": "16.931389"
    },
    {
        "name": "Bochnia",
        "numerStacji": "5100227",
        "lat": "49.977219",
        "lon": "20.431393"
    },
    {
        "name": "Dębica",
        "numerStacji": "5100228",
        "lat": "50.054167",
        "lon": "21.404997"
    },
    {
        "name": "Rzeszów Główny",
        "numerStacji": "5100229",
        "lat": "50.043056",
        "lon": "22.006663"
    },
    {
        "name": "Tarnów",
        "numerStacji": "5100230",
        "lat": "50.005275",
        "lon": "20.974441"
    },
    {
        "name": "Zduńska Wola",
        "numerStacji": "5100231",
        "lat": "51.611386",
        "lon": "18.946942"
    },
    {
        "name": "Zgorzelec Miasto",
        "numerStacji": "5100232",
        "lat": "51.153332",
        "lon": "15.020274"
    },
    {
        "name": "Jarosław",
        "numerStacji": "5100233",
        "lat": "50.01056",
        "lon": "22.677222"
    },
    {
        "name": "Przemyśl Główny",
        "numerStacji": "5100234",
        "lat": "49.78361",
        "lon": "22.776113"
    },
    {
        "name": "Częstochowa Stradom",
        "numerStacji": "5100235",
        "lat": "50.797224",
        "lon": "19.107219"
    },
    {
        "name": "Kluczbork",
        "numerStacji": "5100236",
        "lat": "50.971112",
        "lon": "18.200558"
    },
    {
        "name": "Lubliniec",
        "numerStacji": "5100237",
        "lat": "50.673335",
        "lon": "18.690003"
    },
    {
        "name": "Kraków Prokocim",
        "numerStacji": "5100238",
        "lat": "50.02639",
        "lon": "19.998886"
    },
    {
        "name": "Szczecinek",
        "numerStacji": "5100239",
        "lat": "53.693612",
        "lon": "16.704996"
    },
    {
        "name": "Kraków Płaszów",
        "numerStacji": "5100240",
        "lat": "50.035002",
        "lon": "19.975002"
    },
    {
        "name": "Tuplice",
        "numerStacji": "5100242",
        "lat": "51.671389",
        "lon": "14.838611"
    },
    {
        "name": "Żary",
        "numerStacji": "5100243",
        "lat": "51.634444",
        "lon": "15.137781"
    },
    {
        "name": "Krzewina Zgorzelecka",
        "numerStacji": "5100244",
        "lat": "51.015554",
        "lon": "14.939721"
    },
    {
        "name": "Oleśnica Rataje",
        "numerStacji": "5100245",
        "lat": "51.216113",
        "lon": "17.364445"
    },
    {
        "name": "Warszawa Śródmieście",
        "numerStacji": "5100246",
        "lat": "52.22944",
        "lon": "21.007782"
    },
    {
        "name": "Kamień Pomorski",
        "numerStacji": "5100247",
        "lat": "53.966111",
        "lon": "14.773888"
    },
    {
        "name": "Nidzica",
        "numerStacji": "5100248",
        "lat": "53.357226",
        "lon": "20.413891"
    },
    {
        "name": "Dąbrowa Górnicza",
        "numerStacji": "5100250",
        "lat": "50.33028",
        "lon": "19.185282"
    },
    {
        "name": "Czechowice-Dziedzice",
        "numerStacji": "5100251",
        "lat": "49.914996",
        "lon": "19.005003"
    },
    {
        "name": "Międzyzdroje",
        "numerStacji": "5100252",
        "lat": "53.924167",
        "lon": "14.454996"
    },
    {
        "name": "Elbląg",
        "numerStacji": "5100253",
        "lat": "54.15083",
        "lon": "19.416385"
    },
    {
        "name": "Nakło nad Notecią",
        "numerStacji": "5100254",
        "lat": "53.142501",
        "lon": "17.607504"
    },
    {
        "name": "Wrocław Nadodrze",
        "numerStacji": "5100255",
        "lat": "51.125834",
        "lon": "17.032779"
    },
    {
        "name": "Wieluń Dąbrowa",
        "numerStacji": "5100256",
        "lat": "51.23944",
        "lon": "18.551389"
    },
    {
        "name": "Zabrzeg",
        "numerStacji": "5100257",
        "lat": "49.907778",
        "lon": "18.939166"
    },
    {
        "name": "Koło",
        "numerStacji": "5100258",
        "lat": "52.211111",
        "lon": "18.63222"
    },
    {
        "name": "Jelenia Góra",
        "numerStacji": "5100259",
        "lat": "50.902497",
        "lon": "15.755277"
    },
    {
        "name": "Tychy",
        "numerStacji": "5100260",
        "lat": "50.13694",
        "lon": "18.964165"
    },
    {
        "name": "Witnica",
        "numerStacji": "5100261",
        "lat": "52.667502",
        "lon": "14.896115"
    },
    {
        "name": "Rybnik",
        "numerStacji": "5100262",
        "lat": "50.088892",
        "lon": "18.547497"
    },
    {
        "name": "Racibórz",
        "numerStacji": "5100263",
        "lat": "50.089998",
        "lon": "18.226115"
    },
    {
        "name": "Zebrzydowice",
        "numerStacji": "5100264",
        "lat": "49.869996",
        "lon": "18.624723"
    },
    {
        "name": "Tychy Lodowisko",
        "numerStacji": "5100276",
        "lat": "50.108057",
        "lon": "18.999996"
    },
    {
        "name": "Tychy Grota Roweckiego",
        "numerStacji": "5100277",
        "lat": "50.11417",
        "lon": "18.986108"
    },
    {
        "name": "Tychy Aleja Bielska",
        "numerStacji": "5100278",
        "lat": "50.117226",
        "lon": "18.982503"
    },
    {
        "name": "Wieliczka Bogucice",
        "numerStacji": "5100279",
        "lat": "49.998614",
        "lon": "20.034996"
    },
    {
        "name": "Skierniewice",
        "numerStacji": "5100294",
        "lat": "51.967224",
        "lon": "20.150004"
    },
    {
        "name": "Dąbroszyn",
        "numerStacji": "5100295",
        "lat": "52.618888",
        "lon": "14.712222"
    },
    {
        "name": "Kamień Mały",
        "numerStacji": "5100296",
        "lat": "52.641946",
        "lon": "14.780837"
    },
    {
        "name": "Nowiny Wielkie",
        "numerStacji": "5100297",
        "lat": "52.672779",
        "lon": "15.002781"
    },
    {
        "name": "Łupowo",
        "numerStacji": "5100299",
        "lat": "52.700555",
        "lon": "15.122499"
    },
    {
        "name": "Braniewo",
        "numerStacji": "5100302",
        "lat": "54.381107",
        "lon": "19.841944"
    },
    {
        "name": "Chełm",
        "numerStacji": "5100303",
        "lat": "51.141107",
        "lon": "23.493892"
    },
    {
        "name": "Chojnice",
        "numerStacji": "5100304",
        "lat": "53.687778",
        "lon": "17.576114"
    },
    {
        "name": "Ełk",
        "numerStacji": "5100305",
        "lat": "53.825277",
        "lon": "22.362222"
    },
    {
        "name": "Jasło",
        "numerStacji": "5100306",
        "lat": "49.737504",
        "lon": "21.470834"
    },
    {
        "name": "Krotoszyn",
        "numerStacji": "5100307",
        "lat": "51.702501",
        "lon": "17.426947"
    },
    {
        "name": "Małdyty",
        "numerStacji": "5100309",
        "lat": "53.921111",
        "lon": "19.736114"
    },
    {
        "name": "Morąg",
        "numerStacji": "5100310",
        "lat": "53.919169",
        "lon": "19.922496"
    },
    {
        "name": "Pasłęk",
        "numerStacji": "5100311",
        "lat": "54.056947",
        "lon": "19.65611"
    },
    {
        "name": "Sanok",
        "numerStacji": "5100312",
        "lat": "49.553054",
        "lon": "22.210835"
    },
    {
        "name": "Stalowa Wola",
        "numerStacji": "5100313",
        "lat": "50.562777",
        "lon": "22.060553"
    },
    {
        "name": "Stalowa Wola-Rozwadów",
        "numerStacji": "5100314",
        "lat": "50.591389",
        "lon": "22.041946"
    },
    {
        "name": "Włocławek",
        "numerStacji": "5100315",
        "lat": "52.653056",
        "lon": "19.059163"
    },
    {
        "name": "Bielsko-Biała Główna",
        "numerStacji": "5100316",
        "lat": "49.829724",
        "lon": "19.045275"
    },
    {
        "name": "Łódź Fabryczna",
        "numerStacji": "5100317",
        "lat": "51.769165",
        "lon": "19.467777"
    },
    {
        "name": "Będów",
        "numerStacji": "5100319",
        "lat": "52.073333",
        "lon": "15.311389"
    },
    {
        "name": "Hordzieżka",
        "numerStacji": "5100320",
        "lat": "51.754719",
        "lon": "22.161107"
    },
    {
        "name": "Wólka Kańska",
        "numerStacji": "5100322",
        "lat": "51.128333",
        "lon": "23.066392"
    },
    {
        "name": "Legionowo Piaski",
        "numerStacji": "5100323",
        "lat": "52.412496",
        "lon": "20.942781"
    },
    {
        "name": "Żugienie",
        "numerStacji": "5100324",
        "lat": "54.258889",
        "lon": "20.089165"
    },
    {
        "name": "Głowno",
        "numerStacji": "5100326",
        "lat": "51.96139",
        "lon": "19.702782"
    },
    {
        "name": "Mieszaki",
        "numerStacji": "5100327",
        "lat": "52.83667",
        "lon": "19.745274"
    },
    {
        "name": "Tarnowiec Brzeski",
        "numerStacji": "5100328",
        "lat": "50.913329",
        "lon": "17.652774"
    },
    {
        "name": "Pruszków",
        "numerStacji": "5100330",
        "lat": "52.167225",
        "lon": "20.796113"
    },
    {
        "name": "Tomaszów Mazowiecki",
        "numerStacji": "5100331",
        "lat": "51.546943",
        "lon": "20.033333"
    },
    {
        "name": "Trzciniec",
        "numerStacji": "5100332",
        "lat": "53.085276",
        "lon": "17.94833"
    },
    {
        "name": "Antoniówka",
        "numerStacji": "5100334",
        "lat": "51.424725",
        "lon": "21.278887"
    },
    {
        "name": "Łódź Andrzejów",
        "numerStacji": "5100335",
        "lat": "51.741946",
        "lon": "19.615002"
    },
    {
        "name": "Andrychów Górnica",
        "numerStacji": "5100336",
        "lat": "49.858607",
        "lon": "19.323886"
    },
    {
        "name": "Anieliny",
        "numerStacji": "5100337",
        "lat": "53.12917",
        "lon": "17.486671"
    },
    {
        "name": "Andrzejówka",
        "numerStacji": "5100338",
        "lat": "49.341943",
        "lon": "20.819997"
    },
    {
        "name": "Aleksandrów Kujawski",
        "numerStacji": "5100339",
        "lat": "52.875836",
        "lon": "18.696385"
    },
    {
        "name": "Antonin",
        "numerStacji": "5100342",
        "lat": "51.513889",
        "lon": "17.860002"
    },
    {
        "name": "Augustów Port",
        "numerStacji": "5100344",
        "lat": "53.862222",
        "lon": "23.004169"
    },
    {
        "name": "Arcelin",
        "numerStacji": "5100345",
        "lat": "52.659726",
        "lon": "20.318336"
    },
    {
        "name": "Augustówka",
        "numerStacji": "5100347",
        "lat": "51.988052",
        "lon": "21.513335"
    },
    {
        "name": "Azory",
        "numerStacji": "5100349",
        "lat": "52.239723",
        "lon": "19.304443"
    },
    {
        "name": "Babica",
        "numerStacji": "5100350",
        "lat": "49.935276",
        "lon": "21.901948"
    },
    {
        "name": "Babiak",
        "numerStacji": "5100351",
        "lat": "52.353608",
        "lon": "18.670281"
    },
    {
        "name": "Basznia Dolna",
        "numerStacji": "5100355",
        "lat": "50.190003",
        "lon": "23.207226"
    },
    {
        "name": "Boża Wola",
        "numerStacji": "5100357",
        "lat": "52.190004",
        "lon": "20.52667"
    },
    {
        "name": "Barchów",
        "numerStacji": "5100359",
        "lat": "52.517778",
        "lon": "21.648056"
    },
    {
        "name": "Baciuty",
        "numerStacji": "5100360",
        "lat": "53.046946",
        "lon": "22.983611"
    },
    {
        "name": "Bajtkowo",
        "numerStacji": "5100361",
        "lat": "53.737218",
        "lon": "22.239726"
    },
    {
        "name": "Balin",
        "numerStacji": "5100363",
        "lat": "50.178892",
        "lon": "19.383332"
    },
    {
        "name": "Baborówko",
        "numerStacji": "5100366",
        "lat": "52.582779",
        "lon": "16.626943"
    },
    {
        "name": "Bardo Przyłęk",
        "numerStacji": "5100367",
        "lat": "50.509722",
        "lon": "16.758329"
    },
    {
        "name": "Basznia",
        "numerStacji": "5100369",
        "lat": "50.178614",
        "lon": "23.247777"
    },
    {
        "name": "Batowice Lubańskie",
        "numerStacji": "5100370",
        "lat": "51.09083",
        "lon": "15.155274"
    },
    {
        "name": "Bąków",
        "numerStacji": "5100371",
        "lat": "50.956666",
        "lon": "18.31278"
    },
    {
        "name": "Baby",
        "numerStacji": "5100372",
        "lat": "51.536947",
        "lon": "19.71694"
    },
    {
        "name": "Baboszewo",
        "numerStacji": "5100373",
        "lat": "52.683332",
        "lon": "20.259726"
    },
    {
        "name": "Brzoza Bydgoska",
        "numerStacji": "5100376",
        "lat": "53.028329",
        "lon": "18.019444"
    },
    {
        "name": "Bielsko-Biała Leszczyny",
        "numerStacji": "5100379",
        "lat": "49.797777",
        "lon": "19.05972"
    },
    {
        "name": "Bielsko-Biała Lipnik",
        "numerStacji": "5100380",
        "lat": "49.816115",
        "lon": "19.049446"
    },
    {
        "name": "Bielsko-Biała Mikuszowice",
        "numerStacji": "5100381",
        "lat": "49.78361",
        "lon": "19.073609"
    },
    {
        "name": "Biały Bór",
        "numerStacji": "5100382",
        "lat": "53.886943",
        "lon": "16.855556"
    },
    {
        "name": "Bielsko-Biała Północ",
        "numerStacji": "5100383",
        "lat": "49.841671",
        "lon": "19.041391"
    },
    {
        "name": "Brzeźnica Bychawska",
        "numerStacji": "5100386",
        "lat": "51.528614",
        "lon": "22.742502"
    },
    {
        "name": "Belęcin Wielkopolski",
        "numerStacji": "5100388",
        "lat": "52.203614",
        "lon": "16.008332"
    },
    {
        "name": "Barcice",
        "numerStacji": "5100392",
        "lat": "49.526114",
        "lon": "20.648609"
    },
    {
        "name": "Brzeźno Człuchowskie",
        "numerStacji": "5100396",
        "lat": "53.671112",
        "lon": "17.482779"
    },
    {
        "name": "Boczów",
        "numerStacji": "5100397",
        "lat": "52.326946",
        "lon": "14.94889"
    },
    {
        "name": "Babi Dół",
        "numerStacji": "5100398",
        "lat": "54.301112",
        "lon": "18.287502"
    },
    {
        "name": "Brody Iłżeckie",
        "numerStacji": "5100399",
        "lat": "51.021667",
        "lon": "21.20167"
    },
    {
        "name": "Budki Nowe",
        "numerStacji": "5100400",
        "lat": "52.244443",
        "lon": "18.56472"
    },
    {
        "name": "Brodnica",
        "numerStacji": "5100401",
        "lat": "53.263613",
        "lon": "19.405275"
    },
    {
        "name": "Bełżec Drugi",
        "numerStacji": "5100403",
        "lat": "50.380835",
        "lon": "23.403614"
    },
    {
        "name": "Biały Dunajec",
        "numerStacji": "5100404",
        "lat": "49.375553",
        "lon": "20.006941"
    },
    {
        "name": "Brody Warszawskie",
        "numerStacji": "5100405",
        "lat": "52.513885",
        "lon": "20.748056"
    },
    {
        "name": "Bartodzieje",
        "numerStacji": "5100406",
        "lat": "51.524164",
        "lon": "21.178334"
    },
    {
        "name": "Bedoń",
        "numerStacji": "5100407",
        "lat": "51.731941",
        "lon": "19.642221"
    },
    {
        "name": "Będzin",
        "numerStacji": "5100410",
        "lat": "50.308885",
        "lon": "19.141387"
    },
    {
        "name": "Bełchów",
        "numerStacji": "5100411",
        "lat": "52.026113",
        "lon": "20.033333"
    },
    {
        "name": "Bełsznica",
        "numerStacji": "5100413",
        "lat": "49.972779",
        "lon": "18.372504"
    },
    {
        "name": "Będzino",
        "numerStacji": "5100414",
        "lat": "54.211112",
        "lon": "15.991945"
    },
    {
        "name": "Berezow",
        "numerStacji": "5100415",
        "lat": "51.023887",
        "lon": "20.836393"
    },
    {
        "name": "Besko",
        "numerStacji": "5100416",
        "lat": "49.590279",
        "lon": "21.956386"
    },
    {
        "name": "Bogaczewo",
        "numerStacji": "5100420",
        "lat": "54.099996",
        "lon": "19.573058"
    },
    {
        "name": "Bogaczów",
        "numerStacji": "5100421",
        "lat": "51.844171",
        "lon": "15.268052"
    },
    {
        "name": "Brzeg Głogowski",
        "numerStacji": "5100422",
        "lat": "51.690833",
        "lon": "15.918889"
    },
    {
        "name": "Bogumiłowice",
        "numerStacji": "5100423",
        "lat": "50.007504",
        "lon": "20.870552"
    },
    {
        "name": "Boguszewo",
        "numerStacji": "5100427",
        "lat": "53.42194",
        "lon": "19.001111"
    },
    {
        "name": "Boguszów-Gorce Wschód",
        "numerStacji": "5100428",
        "lat": "50.747775",
        "lon": "16.221664"
    },
    {
        "name": "Boguszów-Gorce",
        "numerStacji": "5100429",
        "lat": "50.750274",
        "lon": "16.201942"
    },
    {
        "name": "Biadki",
        "numerStacji": "5100432",
        "lat": "51.676945",
        "lon": "17.567502"
    },
    {
        "name": "Białystok Bacieczki",
        "numerStacji": "5100433",
        "lat": "53.151113",
        "lon": "23.071669"
    },
    {
        "name": "Biadoliny",
        "numerStacji": "5100435",
        "lat": "50.003612",
        "lon": "20.734168"
    },
    {
        "name": "Biecz",
        "numerStacji": "5100436",
        "lat": "49.732497",
        "lon": "21.263057"
    },
    {
        "name": "Biłgoraj",
        "numerStacji": "5100438",
        "lat": "50.551387",
        "lon": "22.73167"
    },
    {
        "name": "Bielsko-Biała Wschód",
        "numerStacji": "5100439",
        "lat": "49.834722",
        "lon": "19.057221"
    },
    {
        "name": "Bielin",
        "numerStacji": "5100441",
        "lat": "52.82306",
        "lon": "14.466385"
    },
    {
        "name": "Białuń",
        "numerStacji": "5100443",
        "lat": "53.614444",
        "lon": "14.840552"
    },
    {
        "name": "Bielsko Biala Komorowice",
        "numerStacji": "5100444",
        "lat": "49.860557",
        "lon": "19.035836"
    },
    {
        "name": "Biała koło Piszu",
        "numerStacji": "5100447",
        "lat": "53.614722",
        "lon": "22.069444"
    },
    {
        "name": "Białośliwie",
        "numerStacji": "5100450",
        "lat": "53.097222",
        "lon": "17.121943"
    },
    {
        "name": "Biskupice koło Kluczborka",
        "numerStacji": "5100452",
        "lat": "51.072501",
        "lon": "18.210276"
    },
    {
        "name": "Biesal",
        "numerStacji": "5100455",
        "lat": "53.720274",
        "lon": "20.193889"
    },
    {
        "name": "Biały Kościół",
        "numerStacji": "5100456",
        "lat": "50.728331",
        "lon": "17.030001"
    },
    {
        "name": "Bińcze",
        "numerStacji": "5100457",
        "lat": "53.66028",
        "lon": "17.128613"
    },
    {
        "name": "Bujaki",
        "numerStacji": "5100458",
        "lat": "53.467497",
        "lon": "20.375274"
    },
    {
        "name": "Bojanowo",
        "numerStacji": "5100459",
        "lat": "51.700559",
        "lon": "16.744441"
    },
    {
        "name": "Babica Kolonia",
        "numerStacji": "5100464",
        "lat": "49.933613",
        "lon": "21.868885"
    },
    {
        "name": "Baranówka",
        "numerStacji": "5100465",
        "lat": "50.146666",
        "lon": "20.095556"
    },
    {
        "name": "Bierkowice",
        "numerStacji": "5100466",
        "lat": "50.475554",
        "lon": "16.605"
    },
    {
        "name": "Borkowice",
        "numerStacji": "5100467",
        "lat": "50.932224",
        "lon": "18.156107"
    },
    {
        "name": "Bukwałd",
        "numerStacji": "5100470",
        "lat": "53.868614",
        "lon": "20.380002"
    },
    {
        "name": "Brokęcino",
        "numerStacji": "5100471",
        "lat": "53.562225",
        "lon": "16.818053"
    },
    {
        "name": "Barzkowice",
        "numerStacji": "5100472",
        "lat": "53.326942",
        "lon": "15.264169"
    },
    {
        "name": "Będzin Ksawera",
        "numerStacji": "5100474",
        "lat": "50.330558",
        "lon": "19.158611"
    },
    {
        "name": "Biskupnica",
        "numerStacji": "5100475",
        "lat": "53.655003",
        "lon": "17.211664"
    },
    {
        "name": "Bąkowiec",
        "numerStacji": "5100476",
        "lat": "51.517224",
        "lon": "21.723611"
    },
    {
        "name": "Bukowina Sycowska",
        "numerStacji": "5100477",
        "lat": "51.388058",
        "lon": "17.583332"
    },
    {
        "name": "Blachownia",
        "numerStacji": "5100479",
        "lat": "50.773331",
        "lon": "18.968057"
    },
    {
        "name": "Boleszkowice",
        "numerStacji": "5100480",
        "lat": "52.737501",
        "lon": "14.518334"
    },
    {
        "name": "Bolechowo",
        "numerStacji": "5100481",
        "lat": "52.53972",
        "lon": "16.979167"
    },
    {
        "name": "Balinka",
        "numerStacji": "5100482",
        "lat": "53.76806",
        "lon": "23.161112"
    },
    {
        "name": "Błażkowa",
        "numerStacji": "5100483",
        "lat": "50.74417",
        "lon": "15.990003"
    },
    {
        "name": "Błądzim",
        "numerStacji": "5100484",
        "lat": "53.476109",
        "lon": "18.115278"
    },
    {
        "name": "Błotnica",
        "numerStacji": "5100486",
        "lat": "51.993059",
        "lon": "16.300553"
    },
    {
        "name": "Błaszki",
        "numerStacji": "5100487",
        "lat": "51.67361",
        "lon": "18.471107"
    },
    {
        "name": "Biskupice Lubelskie",
        "numerStacji": "5100488",
        "lat": "51.160559",
        "lon": "22.947501"
    },
    {
        "name": "Blizna",
        "numerStacji": "5100491",
        "lat": "53.906386",
        "lon": "23.015001"
    },
    {
        "name": "Babimost",
        "numerStacji": "5100492",
        "lat": "52.168331",
        "lon": "15.81528"
    },
    {
        "name": "Będzin Miasto",
        "numerStacji": "5100493",
        "lat": "50.31889",
        "lon": "19.135553"
    },
    {
        "name": "Bobrowo Pomorskie",
        "numerStacji": "5100494",
        "lat": "53.528336",
        "lon": "16.077774"
    },
    {
        "name": "Będźmierowice",
        "numerStacji": "5100495",
        "lat": "53.788052",
        "lon": "18.04278"
    },
    {
        "name": "Błonie",
        "numerStacji": "5100496",
        "lat": "52.18639",
        "lon": "20.608337"
    },
    {
        "name": "Biniew",
        "numerStacji": "5100499",
        "lat": "51.740004",
        "lon": "17.792223"
    },
    {
        "name": "Bieniów",
        "numerStacji": "5100503",
        "lat": "51.716111",
        "lon": "15.17861"
    },
    {
        "name": "Biernatowo",
        "numerStacji": "5100505",
        "lat": "52.957224",
        "lon": "16.342776"
    },
    {
        "name": "Bobry",
        "numerStacji": "5100507",
        "lat": "51.028885",
        "lon": "19.404996"
    },
    {
        "name": "Bobowa",
        "numerStacji": "5100508",
        "lat": "49.716667",
        "lon": "20.957496"
    },
    {
        "name": "Bobowa-Miasto",
        "numerStacji": "5100509",
        "lat": "49.707777",
        "lon": "20.93861"
    },
    {
        "name": "Boguszów Gorce Zachód",
        "numerStacji": "5100511",
        "lat": "50.762499",
        "lon": "16.166947"
    },
    {
        "name": "Boguchwała",
        "numerStacji": "5100515",
        "lat": "49.984168",
        "lon": "21.934444"
    },
    {
        "name": "Bojary",
        "numerStacji": "5100517",
        "lat": "53.027781",
        "lon": "22.949721"
    },
    {
        "name": "Boksycka",
        "numerStacji": "5100518",
        "lat": "50.949726",
        "lon": "21.32333"
    },
    {
        "name": "Biskupice Oławskie",
        "numerStacji": "5100519",
        "lat": "50.993612",
        "lon": "17.516947"
    },
    {
        "name": "Bieliny Opoczyńskie",
        "numerStacji": "5100523",
        "lat": "51.423889",
        "lon": "20.502498"
    },
    {
        "name": "Borkowo",
        "numerStacji": "5100524",
        "lat": "54.333329",
        "lon": "18.333608"
    },
    {
        "name": "Borki-Kosy",
        "numerStacji": "5100525",
        "lat": "52.088893",
        "lon": "22.35833"
    },
    {
        "name": "Boszkowo",
        "numerStacji": "5100526",
        "lat": "51.960554",
        "lon": "16.335836"
    },
    {
        "name": "Borsukówka",
        "numerStacji": "5100528",
        "lat": "53.227224",
        "lon": "22.931114"
    },
    {
        "name": "Bobrowniki",
        "numerStacji": "5100530",
        "lat": "52.058609",
        "lon": "20.010276"
    },
    {
        "name": "Bożacin",
        "numerStacji": "5100533",
        "lat": "51.733334",
        "lon": "17.433886"
    },
    {
        "name": "Biała Pilska",
        "numerStacji": "5100537",
        "lat": "53.061113",
        "lon": "16.516942"
    },
    {
        "name": "Biskupiec Pomorski",
        "numerStacji": "5100538",
        "lat": "53.48944",
        "lon": "19.389166"
    },
    {
        "name": "Bielsk Podlaski",
        "numerStacji": "5100539",
        "lat": "52.761385",
        "lon": "23.188052"
    },
    {
        "name": "Bieczyno Pomorskie",
        "numerStacji": "5100541",
        "lat": "54.095555",
        "lon": "15.352776"
    },
    {
        "name": "Bożepole Wielkie",
        "numerStacji": "5100544",
        "lat": "54.56917",
        "lon": "17.965553"
    },
    {
        "name": "Borowiki",
        "numerStacji": "5100545",
        "lat": "52.482225",
        "lon": "23.215281"
    },
    {
        "name": "Boreczek",
        "numerStacji": "5100548",
        "lat": "50.878891",
        "lon": "17.024446"
    },
    {
        "name": "Brzozowiec Gorzowski",
        "numerStacji": "5100552",
        "lat": "52.653056",
        "lon": "15.367779"
    },
    {
        "name": "Brachlewo",
        "numerStacji": "5100553",
        "lat": "53.802777",
        "lon": "18.96083"
    },
    {
        "name": "Brzeszcze Jawiszowice",
        "numerStacji": "5100555",
        "lat": "49.9725",
        "lon": "19.128614"
    },
    {
        "name": "Barłogi",
        "numerStacji": "5100557",
        "lat": "52.216109",
        "lon": "18.768614"
    },
    {
        "name": "Bronów",
        "numerStacji": "5100558",
        "lat": "51.795836",
        "lon": "17.773607"
    },
    {
        "name": "Boronów",
        "numerStacji": "5100559",
        "lat": "50.666386",
        "lon": "18.900557"
    },
    {
        "name": "Bobrówka",
        "numerStacji": "5100560",
        "lat": "50.049726",
        "lon": "22.859164"
    },
    {
        "name": "Borki Opolskie",
        "numerStacji": "5100561",
        "lat": "50.742777",
        "lon": "17.881945"
    },
    {
        "name": "Brochocin Trzebnicki",
        "numerStacji": "5100563",
        "lat": "51.276107",
        "lon": "17.094166"
    },
    {
        "name": "Bartnica",
        "numerStacji": "5100565",
        "lat": "50.641945",
        "lon": "16.408055"
    },
    {
        "name": "Bierutów",
        "numerStacji": "5100566",
        "lat": "51.128333",
        "lon": "17.546386"
    },
    {
        "name": "Borszewice",
        "numerStacji": "5100570",
        "lat": "51.609723",
        "lon": "19.035557"
    },
    {
        "name": "Brzezinka Średzka",
        "numerStacji": "5100574",
        "lat": "51.219726",
        "lon": "16.83694"
    },
    {
        "name": "Białki Siedleckie",
        "numerStacji": "5100575",
        "lat": "52.128608",
        "lon": "22.309447"
    },
    {
        "name": "Bardo Śląskie",
        "numerStacji": "5100576",
        "lat": "50.505003",
        "lon": "16.73333"
    },
    {
        "name": "Bolesławice Świdnickie",
        "numerStacji": "5100578",
        "lat": "50.88806",
        "lon": "16.464445"
    },
    {
        "name": "Białystok Starosielce",
        "numerStacji": "5100579",
        "lat": "53.121943",
        "lon": "23.086115"
    },
    {
        "name": "Błotnica Strzelecka",
        "numerStacji": "5100580",
        "lat": "50.483887",
        "lon": "18.403607"
    },
    {
        "name": "Białystok Stadion",
        "numerStacji": "5100581",
        "lat": "53.098058",
        "lon": "23.129164"
    },
    {
        "name": "Biesowice",
        "numerStacji": "5100582",
        "lat": "54.193331",
        "lon": "16.888052"
    },
    {
        "name": "Baszewice",
        "numerStacji": "5100584",
        "lat": "53.863058",
        "lon": "15.192219"
    },
    {
        "name": "Bartąg",
        "numerStacji": "5100586",
        "lat": "53.712777",
        "lon": "20.447223"
    },
    {
        "name": "Bratków",
        "numerStacji": "5100589",
        "lat": "51.455001",
        "lon": "20.115279"
    },
    {
        "name": "Bytonia",
        "numerStacji": "5100590",
        "lat": "53.931943",
        "lon": "18.267501"
    },
    {
        "name": "Brzoza Torunska Pbsz",
        "numerStacji": "5100592",
        "lat": "52.961386",
        "lon": "18.685275"
    },
    {
        "name": "Bratoszewice",
        "numerStacji": "5100593",
        "lat": "51.938612",
        "lon": "19.652775"
    },
    {
        "name": "Bednary",
        "numerStacji": "5100594",
        "lat": "52.105281",
        "lon": "20.063887"
    },
    {
        "name": "Buk",
        "numerStacji": "5100596",
        "lat": "52.344996",
        "lon": "16.525553"
    },
    {
        "name": "Buchałów",
        "numerStacji": "5100597",
        "lat": "51.918053",
        "lon": "15.365001"
    },
    {
        "name": "Budachów",
        "numerStacji": "5100600",
        "lat": "52.15278",
        "lon": "15.08167"
    },
    {
        "name": "Budziszowice",
        "numerStacji": "5100602",
        "lat": "50.522775",
        "lon": "17.533334"
    },
    {
        "name": "Budy Głogowskie",
        "numerStacji": "5100603",
        "lat": "50.16806",
        "lon": "21.918056"
    },
    {
        "name": "Bukowa",
        "numerStacji": "5100607",
        "lat": "50.859169",
        "lon": "20.203058"
    },
    {
        "name": "Bulowice",
        "numerStacji": "5100608",
        "lat": "49.87583",
        "lon": "19.290554"
    },
    {
        "name": "Bukowiec Międzyrzecki",
        "numerStacji": "5100609",
        "lat": "52.385555",
        "lon": "15.705836"
    },
    {
        "name": "Bukowno",
        "numerStacji": "5100610",
        "lat": "50.263885",
        "lon": "19.459444"
    },
    {
        "name": "Bukowo",
        "numerStacji": "5100611",
        "lat": "50.896393",
        "lon": "18.106945"
    },
    {
        "name": "Burkat",
        "numerStacji": "5100614",
        "lat": "53.275559",
        "lon": "20.135001"
    },
    {
        "name": "Brusy",
        "numerStacji": "5100615",
        "lat": "53.882502",
        "lon": "17.728058"
    },
    {
        "name": "Bursztynowo",
        "numerStacji": "5100616",
        "lat": "53.40139",
        "lon": "19.069447"
    },
    {
        "name": "Bukowo Człuchowskie",
        "numerStacji": "5100617",
        "lat": "53.573057",
        "lon": "17.371393"
    },
    {
        "name": "Barwałd Średni",
        "numerStacji": "5100627",
        "lat": "49.872504",
        "lon": "19.598057"
    },
    {
        "name": "Borowa Oleśnicka",
        "numerStacji": "5100628",
        "lat": "51.184165",
        "lon": "17.277501"
    },
    {
        "name": "Barwałd Górny",
        "numerStacji": "5100629",
        "lat": "49.864998",
        "lon": "19.621393"
    },
    {
        "name": "Białystok Wiadukt",
        "numerStacji": "5100632",
        "lat": "53.111111",
        "lon": "23.094996"
    },
    {
        "name": "Brwinów",
        "numerStacji": "5100633",
        "lat": "52.141669",
        "lon": "20.718059"
    },
    {
        "name": "Biskupice Wielkopolskie",
        "numerStacji": "5100635",
        "lat": "52.466944",
        "lon": "17.170278"
    },
    {
        "name": "Borowina",
        "numerStacji": "5100640",
        "lat": "51.824997",
        "lon": "22.270281"
    },
    {
        "name": "Bydgoszcz Akademia",
        "numerStacji": "5100641",
        "lat": "53.140559",
        "lon": "18.136663"
    },
    {
        "name": "Bydgoszcz Bielawy",
        "numerStacji": "5100642",
        "lat": "53.131669",
        "lon": "18.055275"
    },
    {
        "name": "Byczyna Kluczborska",
        "numerStacji": "5100643",
        "lat": "51.114166",
        "lon": "18.200001"
    },
    {
        "name": "Bydgoszcz Brdyujście",
        "numerStacji": "5100644",
        "lat": "53.133889",
        "lon": "18.111943"
    },
    {
        "name": "Bydgoszcz Fordon",
        "numerStacji": "5100646",
        "lat": "53.146393",
        "lon": "18.157221"
    },
    {
        "name": "Bydgoszcz Leśna",
        "numerStacji": "5100647",
        "lat": "53.142501",
        "lon": "18.033611"
    },
    {
        "name": "Bydgoszcz Wschód",
        "numerStacji": "5100648",
        "lat": "53.127777",
        "lon": "18.086108"
    },
    {
        "name": "Bytnica",
        "numerStacji": "5100649",
        "lat": "52.131385",
        "lon": "15.148334"
    },
    {
        "name": "Radzionków Rojca",
        "numerStacji": "5100650",
        "lat": "50.395829",
        "lon": "18.9"
    },
    {
        "name": "Bytom Karb",
        "numerStacji": "5100651",
        "lat": "50.351944",
        "lon": "18.881671"
    },
    {
        "name": "Bydgoszcz Łęgnowo",
        "numerStacji": "5100652",
        "lat": "53.108054",
        "lon": "18.113336"
    },
    {
        "name": "Budzyń",
        "numerStacji": "5100653",
        "lat": "52.894165",
        "lon": "16.966115"
    },
    {
        "name": "Bytom Odrzański",
        "numerStacji": "5100654",
        "lat": "51.726385",
        "lon": "15.821671"
    },
    {
        "name": "Bytom Północny",
        "numerStacji": "5100655",
        "lat": "50.378057",
        "lon": "18.880556"
    },
    {
        "name": "Bystrzyca Kłodzka",
        "numerStacji": "5100656",
        "lat": "50.296948",
        "lon": "16.654998"
    },
    {
        "name": "Radzionków",
        "numerStacji": "5100657",
        "lat": "50.40889",
        "lon": "18.915003"
    },
    {
        "name": "Bystra Podhalańska",
        "numerStacji": "5100658",
        "lat": "49.658057",
        "lon": "19.787775"
    },
    {
        "name": "Bystrzyca koło Lublina",
        "numerStacji": "5100660",
        "lat": "51.348335",
        "lon": "22.637778"
    },
    {
        "name": "Bydgoszcz Osowa Góra",
        "numerStacji": "5100661",
        "lat": "53.148056",
        "lon": "17.912499"
    },
    {
        "name": "Bydgoszcz Zachód",
        "numerStacji": "5100664",
        "lat": "53.135552",
        "lon": "17.950559"
    },
    {
        "name": "Bzowiec",
        "numerStacji": "5100665",
        "lat": "54.019444",
        "lon": "20.316107"
    },
    {
        "name": "Barcząca",
        "numerStacji": "5100666",
        "lat": "52.156942",
        "lon": "21.626392"
    },
    {
        "name": "Brzozowica",
        "numerStacji": "5100667",
        "lat": "51.953615",
        "lon": "22.607502"
    },
    {
        "name": "Bełżec",
        "numerStacji": "5100668",
        "lat": "50.3775",
        "lon": "23.448614"
    },
    {
        "name": "Brzesko Okocim",
        "numerStacji": "5100671",
        "lat": "49.986667",
        "lon": "20.610557"
    },
    {
        "name": "Bierzwnik",
        "numerStacji": "5100673",
        "lat": "53.024446",
        "lon": "15.657501"
    },
    {
        "name": "Bystrzyca Kłodzka Przedmieście",
        "numerStacji": "5100675",
        "lat": "50.28528",
        "lon": "16.646944"
    },
    {
        "name": "Biały Zdrój Południowy",
        "numerStacji": "5100678",
        "lat": "53.256664",
        "lon": "15.954442"
    },
    {
        "name": "Będziemyśl",
        "numerStacji": "5100679",
        "lat": "50.066392",
        "lon": "21.77306"
    },
    {
        "name": "Barczewo",
        "numerStacji": "5100683",
        "lat": "53.844442",
        "lon": "20.699721"
    },
    {
        "name": "Brzeszcze",
        "numerStacji": "5100685",
        "lat": "49.995836",
        "lon": "19.154997"
    },
    {
        "name": "Chałupy",
        "numerStacji": "5100686",
        "lat": "54.761386",
        "lon": "18.503054"
    },
    {
        "name": "Charsznica",
        "numerStacji": "5100687",
        "lat": "50.396108",
        "lon": "19.94194"
    },
    {
        "name": "Czarny Blok",
        "numerStacji": "5100688",
        "lat": "53.249167",
        "lon": "23.209725"
    },
    {
        "name": "Cięcina",
        "numerStacji": "5100694",
        "lat": "49.610558",
        "lon": "19.137504"
    },
    {
        "name": "Chociszewo Rogoziniec",
        "numerStacji": "5100695",
        "lat": "52.306945",
        "lon": "15.770001"
    },
    {
        "name": "Chociszew",
        "numerStacji": "5100696",
        "lat": "51.924166",
        "lon": "19.267218"
    },
    {
        "name": "Czernica Wrocławska",
        "numerStacji": "5100697",
        "lat": "51.049722",
        "lon": "17.23722"
    },
    {
        "name": "Cegłów",
        "numerStacji": "5100700",
        "lat": "52.14833",
        "lon": "21.736393"
    },
    {
        "name": "Cekcyn",
        "numerStacji": "5100701",
        "lat": "53.576392",
        "lon": "18.027777"
    },
    {
        "name": "Celestynów",
        "numerStacji": "5100702",
        "lat": "52.05833",
        "lon": "21.393329"
    },
    {
        "name": "Cerkiewnik",
        "numerStacji": "5100705",
        "lat": "53.909721",
        "lon": "20.396668"
    },
    {
        "name": "Czachówek Górny",
        "numerStacji": "5100707",
        "lat": "51.96806",
        "lon": "21.077502"
    },
    {
        "name": "Chałupki",
        "numerStacji": "5100708",
        "lat": "49.925558",
        "lon": "18.311386"
    },
    {
        "name": "Chmielniki Bydgoskie",
        "numerStacji": "5100709",
        "lat": "53.00306",
        "lon": "18.048614"
    },
    {
        "name": "Chechło",
        "numerStacji": "5100710",
        "lat": "51.644997",
        "lon": "19.286671"
    },
    {
        "name": "Chełmek Fabryka",
        "numerStacji": "5100712",
        "lat": "50.099724",
        "lon": "19.254445"
    },
    {
        "name": "Chocznia Górna",
        "numerStacji": "5100713",
        "lat": "49.864441",
        "lon": "19.435002"
    },
    {
        "name": "Charnowo Słupskie",
        "numerStacji": "5100719",
        "lat": "54.532224",
        "lon": "16.919443"
    },
    {
        "name": "Chojna",
        "numerStacji": "5100720",
        "lat": "52.96278",
        "lon": "14.444721"
    },
    {
        "name": "Chrosna",
        "numerStacji": "5100722",
        "lat": "52.034724",
        "lon": "21.445278"
    },
    {
        "name": "Chybie",
        "numerStacji": "5100727",
        "lat": "49.893053",
        "lon": "18.811663"
    },
    {
        "name": "Chrzanów",
        "numerStacji": "5100728",
        "lat": "50.133335",
        "lon": "19.398614"
    },
    {
        "name": "Cisie",
        "numerStacji": "5100729",
        "lat": "52.209996",
        "lon": "21.39056"
    },
    {
        "name": "Ciasna",
        "numerStacji": "5100730",
        "lat": "50.756944",
        "lon": "18.628885"
    },
    {
        "name": "Ciechanowice",
        "numerStacji": "5100732",
        "lat": "50.86556",
        "lon": "15.979998"
    },
    {
        "name": "Cierpigórz",
        "numerStacji": "5100733",
        "lat": "52.226114",
        "lon": "22.595277"
    },
    {
        "name": "Cienin",
        "numerStacji": "5100735",
        "lat": "52.272498",
        "lon": "17.967504"
    },
    {
        "name": "Cieksyn",
        "numerStacji": "5100736",
        "lat": "52.577502",
        "lon": "20.66389"
    },
    {
        "name": "Ciecholub",
        "numerStacji": "5100740",
        "lat": "54.17306",
        "lon": "16.887774"
    },
    {
        "name": "Ciechanów Przemysłowy",
        "numerStacji": "5100741",
        "lat": "52.861948",
        "lon": "20.618054"
    },
    {
        "name": "Ciecierzyn",
        "numerStacji": "5100742",
        "lat": "51.318886",
        "lon": "22.608059"
    },
    {
        "name": "Cieplewo",
        "numerStacji": "5100743",
        "lat": "54.234448",
        "lon": "18.647502"
    },
    {
        "name": "Cienin Kościelny",
        "numerStacji": "5100745",
        "lat": "52.269999",
        "lon": "18.009448"
    },
    {
        "name": "Czekanów",
        "numerStacji": "5100746",
        "lat": "51.685835",
        "lon": "17.861386"
    },
    {
        "name": "Cikowice",
        "numerStacji": "5100747",
        "lat": "49.983889",
        "lon": "20.384164"
    },
    {
        "name": "Czernikowo",
        "numerStacji": "5100749",
        "lat": "52.939444",
        "lon": "18.951113"
    },
    {
        "name": "Cieszyno Łobeskie",
        "numerStacji": "5100752",
        "lat": "53.52083",
        "lon": "15.469168"
    },
    {
        "name": "Czeluścin",
        "numerStacji": "5100753",
        "lat": "51.728057",
        "lon": "17.163329"
    },
    {
        "name": "Człuchów",
        "numerStacji": "5100755",
        "lat": "53.657781",
        "lon": "17.371115"
    },
    {
        "name": "Chludowo",
        "numerStacji": "5100759",
        "lat": "52.560279",
        "lon": "16.825281"
    },
    {
        "name": "Czesławice",
        "numerStacji": "5100760",
        "lat": "51.308054",
        "lon": "22.262496"
    },
    {
        "name": "Chełmża",
        "numerStacji": "5100761",
        "lat": "53.184723",
        "lon": "18.59861"
    },
    {
        "name": "Czarne Male",
        "numerStacji": "5100762",
        "lat": "53.557776",
        "lon": "16.319718"
    },
    {
        "name": "Chmielowice",
        "numerStacji": "5100764",
        "lat": "50.645001",
        "lon": "17.86722"
    },
    {
        "name": "Ćmielów",
        "numerStacji": "5100766",
        "lat": "50.88806",
        "lon": "21.528608"
    },
    {
        "name": "Cieszyn Marklowice",
        "numerStacji": "5100767",
        "lat": "49.78556",
        "lon": "18.603886"
    },
    {
        "name": "Chełm Miasto",
        "numerStacji": "5100768",
        "lat": "51.138329",
        "lon": "23.459167"
    },
    {
        "name": "Cmolas",
        "numerStacji": "5100770",
        "lat": "50.293891",
        "lon": "21.751945"
    },
    {
        "name": "Czempiń",
        "numerStacji": "5100771",
        "lat": "52.139718",
        "lon": "16.753331"
    },
    {
        "name": "Czarlin",
        "numerStacji": "5100774",
        "lat": "54.048892",
        "lon": "18.76722"
    },
    {
        "name": "Czerna",
        "numerStacji": "5100775",
        "lat": "51.701944",
        "lon": "15.885557"
    },
    {
        "name": "Czarnobór",
        "numerStacji": "5100776",
        "lat": "53.699724",
        "lon": "16.766941"
    },
    {
        "name": "Wolbórka",
        "numerStacji": "5100777",
        "lat": "51.593615",
        "lon": "19.72361"
    },
    {
        "name": "Czarne",
        "numerStacji": "5100778",
        "lat": "53.680002",
        "lon": "16.938059"
    },
    {
        "name": "Czerna Mala",
        "numerStacji": "5100781",
        "lat": "51.230001",
        "lon": "16.803608"
    },
    {
        "name": "Chrusty Nowe",
        "numerStacji": "5100782",
        "lat": "51.694725",
        "lon": "19.794166"
    },
    {
        "name": "Czarnowąsy",
        "numerStacji": "5100783",
        "lat": "50.716115",
        "lon": "17.904166"
    },
    {
        "name": "Chróścina Nyska",
        "numerStacji": "5100784",
        "lat": "50.616946",
        "lon": "17.378054"
    },
    {
        "name": "Chrząstowice Olkuskie",
        "numerStacji": "5100785",
        "lat": "50.342775",
        "lon": "19.685001"
    },
    {
        "name": "Chorzów Batory",
        "numerStacji": "5100786",
        "lat": "50.278331",
        "lon": "18.944721"
    },
    {
        "name": "Chocicza",
        "numerStacji": "5100788",
        "lat": "52.069998",
        "lon": "17.349999"
    },
    {
        "name": "Chojnik",
        "numerStacji": "5100789",
        "lat": "49.851388",
        "lon": "20.984167"
    },
    {
        "name": "Chocznia",
        "numerStacji": "5100792",
        "lat": "49.873888",
        "lon": "19.451668"
    },
    {
        "name": "Chojnów",
        "numerStacji": "5100793",
        "lat": "51.2775",
        "lon": "15.934719"
    },
    {
        "name": "Chróścina Opolska Po",
        "numerStacji": "5100794",
        "lat": "50.669721",
        "lon": "17.818058"
    },
    {
        "name": "Chociwel",
        "numerStacji": "5100796",
        "lat": "53.470553",
        "lon": "15.335831"
    },
    {
        "name": "Cierpice Kąkol",
        "numerStacji": "5100800",
        "lat": "52.991392",
        "lon": "18.448337"
    },
    {
        "name": "Czepino",
        "numerStacji": "5100801",
        "lat": "53.284719",
        "lon": "14.5125"
    },
    {
        "name": "Czuprynowo",
        "numerStacji": "5100802",
        "lat": "53.472225",
        "lon": "23.63167"
    },
    {
        "name": "Czersk",
        "numerStacji": "5100803",
        "lat": "53.800556",
        "lon": "17.970003"
    },
    {
        "name": "Chróścice",
        "numerStacji": "5100805",
        "lat": "50.793332",
        "lon": "17.816108"
    },
    {
        "name": "Chrzęsne",
        "numerStacji": "5100806",
        "lat": "52.446664",
        "lon": "21.47389"
    },
    {
        "name": "Chronów",
        "numerStacji": "5100807",
        "lat": "51.358052",
        "lon": "20.929998"
    },
    {
        "name": "Chrośnica",
        "numerStacji": "5100809",
        "lat": "52.281388",
        "lon": "15.992223"
    },
    {
        "name": "Chruszczobród",
        "numerStacji": "5100811",
        "lat": "50.400279",
        "lon": "19.329163"
    },
    {
        "name": "Czeruchy Po",
        "numerStacji": "5100813",
        "lat": "52.936945",
        "lon": "20.504997"
    },
    {
        "name": "Chrząstowice",
        "numerStacji": "5100814",
        "lat": "50.660274",
        "lon": "18.073055"
    },
    {
        "name": "Cisiec",
        "numerStacji": "5100815",
        "lat": "49.58306",
        "lon": "19.104999"
    },
    {
        "name": "Chełm Śląski",
        "numerStacji": "5100817",
        "lat": "50.111941",
        "lon": "19.183052"
    },
    {
        "name": "Chrzanów Śródmieście",
        "numerStacji": "5100819",
        "lat": "50.144724",
        "lon": "19.414165"
    },
    {
        "name": "Czaszyn",
        "numerStacji": "5100821",
        "lat": "49.458892",
        "lon": "22.219447"
    },
    {
        "name": "Częstochowa Aniołów",
        "numerStacji": "5100824",
        "lat": "50.835276",
        "lon": "19.151941"
    },
    {
        "name": "Chotomów",
        "numerStacji": "5100826",
        "lat": "52.415831",
        "lon": "20.884441"
    },
    {
        "name": "Częstochowa Raków",
        "numerStacji": "5100827",
        "lat": "50.788334",
        "lon": "19.15444"
    },
    {
        "name": "Chotyłów",
        "numerStacji": "5100828",
        "lat": "51.996943",
        "lon": "23.356663"
    },
    {
        "name": "Czerniewice",
        "numerStacji": "5100831",
        "lat": "52.508887",
        "lon": "19.089448"
    },
    {
        "name": "Czeska Wieś",
        "numerStacji": "5100832",
        "lat": "50.758337",
        "lon": "17.459721"
    },
    {
        "name": "Czerwonak",
        "numerStacji": "5100837",
        "lat": "52.468607",
        "lon": "16.979724"
    },
    {
        "name": "Chełmek Wołowski",
        "numerStacji": "5100838",
        "lat": "51.456385",
        "lon": "16.359163"
    },
    {
        "name": "Czarnowęsy Pomorskie",
        "numerStacji": "5100839",
        "lat": "53.93944",
        "lon": "15.98167"
    },
    {
        "name": "Czechowizna",
        "numerStacji": "5100843",
        "lat": "53.351114",
        "lon": "22.836664"
    },
    {
        "name": "Czyżowice",
        "numerStacji": "5100844",
        "lat": "49.974442",
        "lon": "18.426385"
    },
    {
        "name": "Cybowo",
        "numerStacji": "5100845",
        "lat": "53.293331",
        "lon": "15.816107"
    },
    {
        "name": "Chybie Mnich",
        "numerStacji": "5100849",
        "lat": "49.887498",
        "lon": "18.820832"
    },
    {
        "name": "Chynów",
        "numerStacji": "5100850",
        "lat": "51.903608",
        "lon": "21.100559"
    },
    {
        "name": "Czachówek Południowy",
        "numerStacji": "5100852",
        "lat": "51.959718",
        "lon": "21.081107"
    },
    {
        "name": "Czarna Białostocka",
        "numerStacji": "5100853",
        "lat": "53.305835",
        "lon": "23.280282"
    },
    {
        "name": "Czechowice-Dziedzice Przystanek",
        "numerStacji": "5100855",
        "lat": "49.906393",
        "lon": "19.022496"
    },
    {
        "name": "Czechowice Dziedzice Południowe",
        "numerStacji": "5100856",
        "lat": "49.890276",
        "lon": "19.024168"
    },
    {
        "name": "Czachówek Wschodni",
        "numerStacji": "5100858",
        "lat": "51.971944",
        "lon": "21.09611"
    },
    {
        "name": "Cieszyn",
        "numerStacji": "5100861",
        "lat": "49.751114",
        "lon": "18.63694"
    },
    {
        "name": "Czeremcha",
        "numerStacji": "5100863",
        "lat": "52.519441",
        "lon": "23.353607"
    },
    {
        "name": "Czarna Woda",
        "numerStacji": "5100864",
        "lat": "53.851112",
        "lon": "18.108608"
    },
    {
        "name": "Czaplinek",
        "numerStacji": "5100866",
        "lat": "53.537496",
        "lon": "16.238887"
    },
    {
        "name": "Czermno",
        "numerStacji": "5100867",
        "lat": "52.863611",
        "lon": "19.424718"
    },
    {
        "name": "Czarnca",
        "numerStacji": "5100868",
        "lat": "50.823886",
        "lon": "19.945275"
    },
    {
        "name": "Czarna Tarnowska",
        "numerStacji": "5100870",
        "lat": "50.06028",
        "lon": "21.248612"
    },
    {
        "name": "Czudec",
        "numerStacji": "5100871",
        "lat": "49.940274",
        "lon": "21.833333"
    },
    {
        "name": "Dalekie",
        "numerStacji": "5100875",
        "lat": "52.682226",
        "lon": "21.49444"
    },
    {
        "name": "Dalanówko",
        "numerStacji": "5100876",
        "lat": "52.594447",
        "lon": "20.463611"
    },
    {
        "name": "Dąbrowy",
        "numerStacji": "5100877",
        "lat": "53.517504",
        "lon": "18.489445"
    },
    {
        "name": "Dąbrowa Chełmińska",
        "numerStacji": "5100878",
        "lat": "53.174997",
        "lon": "18.281668"
    },
    {
        "name": "Daleszewo Gryfińskie",
        "numerStacji": "5100879",
        "lat": "53.306114",
        "lon": "14.529166"
    },
    {
        "name": "Drzymałowo",
        "numerStacji": "5100880",
        "lat": "52.156942",
        "lon": "16.29694"
    },
    {
        "name": "Dąbkowizna",
        "numerStacji": "5100884",
        "lat": "52.423885",
        "lon": "21.085278"
    },
    {
        "name": "Dalęcino",
        "numerStacji": "5100885",
        "lat": "53.747781",
        "lon": "16.608614"
    },
    {
        "name": "Damnica",
        "numerStacji": "5100886",
        "lat": "54.497778",
        "lon": "17.270831"
    },
    {
        "name": "Darłowo",
        "numerStacji": "5100891",
        "lat": "54.416947",
        "lon": "16.404442"
    },
    {
        "name": "Dąbrówka Wielkopolska",
        "numerStacji": "5100893",
        "lat": "52.277496",
        "lon": "15.800277"
    },
    {
        "name": "Daniszyn",
        "numerStacji": "5100894",
        "lat": "51.667497",
        "lon": "17.614444"
    },
    {
        "name": "Dąbrowa Białostocka",
        "numerStacji": "5100900",
        "lat": "53.648333",
        "lon": "23.364726"
    },
    {
        "name": "Dąbrowa Oleśnicka",
        "numerStacji": "5100905",
        "lat": "51.231385",
        "lon": "17.369443"
    },
    {
        "name": "Drzycim",
        "numerStacji": "5100912",
        "lat": "53.506942",
        "lon": "18.30611"
    },
    {
        "name": "Dzięczyn",
        "numerStacji": "5100913",
        "lat": "51.757218",
        "lon": "16.854163"
    },
    {
        "name": "Dziadówki",
        "numerStacji": "5100914",
        "lat": "50.399164",
        "lon": "20.008334"
    },
    {
        "name": "Dębska Kuźnia",
        "numerStacji": "5100918",
        "lat": "50.664445",
        "lon": "18.111943"
    },
    {
        "name": "Dęba Rozalin",
        "numerStacji": "5100922",
        "lat": "50.428613",
        "lon": "21.743054"
    },
    {
        "name": "Deszczno",
        "numerStacji": "5100923",
        "lat": "52.671664",
        "lon": "15.30667"
    },
    {
        "name": "Dębe Wielkie",
        "numerStacji": "5100924",
        "lat": "52.199164",
        "lon": "21.422778"
    },
    {
        "name": "Dąbrowa Górnicza Gołonóg",
        "numerStacji": "5100925",
        "lat": "50.343889",
        "lon": "19.226111"
    },
    {
        "name": "Dąbrowa Górnicza Pogoria",
        "numerStacji": "5100927",
        "lat": "50.350559",
        "lon": "19.241392"
    },
    {
        "name": "Dąbrowa Górnicza Sikorka",
        "numerStacji": "5100928",
        "lat": "50.388889",
        "lon": "19.299166"
    },
    {
        "name": "Dąbrowa Górnicza Strzemieszyce",
        "numerStacji": "5100929",
        "lat": "50.311115",
        "lon": "19.267776"
    },
    {
        "name": "Dąbrowa Górnicza Wschodnia",
        "numerStacji": "5100930",
        "lat": "50.30333",
        "lon": "19.311391"
    },
    {
        "name": "Dębowy Gaj",
        "numerStacji": "5100934",
        "lat": "51.079719",
        "lon": "15.643613"
    },
    {
        "name": "Dziemiany Kaszubskie",
        "numerStacji": "5100935",
        "lat": "54.011668",
        "lon": "17.775557"
    },
    {
        "name": "Dankowice",
        "numerStacji": "5100937",
        "lat": "49.937226",
        "lon": "19.081942"
    },
    {
        "name": "Dobryszyce koło Radomska",
        "numerStacji": "5100938",
        "lat": "51.124719",
        "lon": "19.444719"
    },
    {
        "name": "Długie",
        "numerStacji": "5100942",
        "lat": "49.578053",
        "lon": "22.049164"
    },
    {
        "name": "Długołęka",
        "numerStacji": "5100944",
        "lat": "51.178331",
        "lon": "17.194171"
    },
    {
        "name": "Długi Kąt",
        "numerStacji": "5100946",
        "lat": "50.482503",
        "lon": "23.101666"
    },
    {
        "name": "Długopole-Zdrój",
        "numerStacji": "5100947",
        "lat": "50.239165",
        "lon": "16.636948"
    },
    {
        "name": "Czerwonak Osiedle",
        "numerStacji": "5100950",
        "lat": "52.480275",
        "lon": "16.978052"
    },
    {
        "name": "Dominów",
        "numerStacji": "5100951",
        "lat": "51.212499",
        "lon": "22.841941"
    },
    {
        "name": "Dąbrowa Niemodlińska",
        "numerStacji": "5100956",
        "lat": "50.6925",
        "lon": "17.751943"
    },
    {
        "name": "Drzonowo",
        "numerStacji": "5100958",
        "lat": "53.806948",
        "lon": "16.86611"
    },
    {
        "name": "Dolice",
        "numerStacji": "5100959",
        "lat": "53.198612",
        "lon": "15.210836"
    },
    {
        "name": "Dobczyn",
        "numerStacji": "5100961",
        "lat": "52.378885",
        "lon": "21.313613"
    },
    {
        "name": "Dobrocin",
        "numerStacji": "5100962",
        "lat": "53.91",
        "lon": "19.82944"
    },
    {
        "name": "Dobrzyniewo Duże",
        "numerStacji": "5100963",
        "lat": "53.194171",
        "lon": "23.003333"
    },
    {
        "name": "Dobre Miasto",
        "numerStacji": "5100964",
        "lat": "53.98417",
        "lon": "20.384443"
    },
    {
        "name": "Dobiegniew",
        "numerStacji": "5100966",
        "lat": "52.968335",
        "lon": "15.747222"
    },
    {
        "name": "Dolnik",
        "numerStacji": "5100969",
        "lat": "53.256107",
        "lon": "16.930832"
    },
    {
        "name": "Domanin",
        "numerStacji": "5100970",
        "lat": "51.344721",
        "lon": "17.995281"
    },
    {
        "name": "Domaniewice",
        "numerStacji": "5100971",
        "lat": "52.020557",
        "lon": "19.821107"
    },
    {
        "name": "Dolna Odra",
        "numerStacji": "5100972",
        "lat": "53.211107",
        "lon": "14.48111"
    },
    {
        "name": "Dopiewo",
        "numerStacji": "5100973",
        "lat": "52.353886",
        "lon": "16.678055"
    },
    {
        "name": "Dorohusk",
        "numerStacji": "5100974",
        "lat": "51.172218",
        "lon": "23.786671"
    },
    {
        "name": "Domaszków",
        "numerStacji": "5100975",
        "lat": "50.212503",
        "lon": "16.655277"
    },
    {
        "name": "Domisław",
        "numerStacji": "5100977",
        "lat": "53.668055",
        "lon": "17.0325"
    },
    {
        "name": "Dobrzyń",
        "numerStacji": "5100978",
        "lat": "53.436385",
        "lon": "20.384721"
    },
    {
        "name": "Domaszowice",
        "numerStacji": "5100979",
        "lat": "51.048329",
        "lon": "17.884165"
    },
    {
        "name": "Drawsko Pomorskie",
        "numerStacji": "5100980",
        "lat": "53.523329",
        "lon": "15.824718"
    },
    {
        "name": "Drzewce",
        "numerStacji": "5100983",
        "lat": "52.267221",
        "lon": "15.166663"
    },
    {
        "name": "Drygały",
        "numerStacji": "5100985",
        "lat": "53.680002",
        "lon": "22.104996"
    },
    {
        "name": "Drzewica",
        "numerStacji": "5100986",
        "lat": "51.437778",
        "lon": "20.464447"
    },
    {
        "name": "Drawski Młyn",
        "numerStacji": "5100987",
        "lat": "52.859997",
        "lon": "16.09417"
    },
    {
        "name": "Dobroń",
        "numerStacji": "5100988",
        "lat": "51.630003",
        "lon": "19.242498"
    },
    {
        "name": "Drogomyśl",
        "numerStacji": "5100989",
        "lat": "49.886671",
        "lon": "18.757503"
    },
    {
        "name": "Drużyna Poznańska",
        "numerStacji": "5100990",
        "lat": "52.210275",
        "lon": "16.823887"
    },
    {
        "name": "Drawiny",
        "numerStacji": "5100992",
        "lat": "52.897221",
        "lon": "15.949444"
    },
    {
        "name": "Drzeńsko",
        "numerStacji": "5100994",
        "lat": "52.369725",
        "lon": "14.771389"
    },
    {
        "name": "Dąbrowice Skierniewickie",
        "numerStacji": "5100995",
        "lat": "51.933335",
        "lon": "20.102226"
    },
    {
        "name": "Dubielno",
        "numerStacji": "5101000",
        "lat": "53.508614",
        "lon": "18.556666"
    },
    {
        "name": "Dulowa",
        "numerStacji": "5101002",
        "lat": "50.140275",
        "lon": "19.520552"
    },
    {
        "name": "Dunowo",
        "numerStacji": "5101004",
        "lat": "54.122496",
        "lon": "16.092498"
    },
    {
        "name": "Dobino Wałeckie",
        "numerStacji": "5101007",
        "lat": "53.226388",
        "lon": "16.524996"
    },
    {
        "name": "Dobrowoda",
        "numerStacji": "5101009",
        "lat": "52.561393",
        "lon": "23.39111"
    },
    {
        "name": "Dwikozy",
        "numerStacji": "5101010",
        "lat": "50.732223",
        "lon": "21.791111"
    },
    {
        "name": "Dziwno",
        "numerStacji": "5101013",
        "lat": "53.618615",
        "lon": "18.901663"
    },
    {
        "name": "Dziewule",
        "numerStacji": "5101015",
        "lat": "52.054447",
        "lon": "22.386107"
    },
    {
        "name": "Dziewięcierz",
        "numerStacji": "5101016",
        "lat": "50.21778",
        "lon": "23.433053"
    },
    {
        "name": "Dygowo",
        "numerStacji": "5101017",
        "lat": "54.140834",
        "lon": "15.726943"
    },
    {
        "name": "Dobrynka",
        "numerStacji": "5101018",
        "lat": "51.998615",
        "lon": "23.441386"
    },
    {
        "name": "Dytmarów",
        "numerStacji": "5101020",
        "lat": "50.329722",
        "lon": "17.676667"
    },
    {
        "name": "Dobroszyce",
        "numerStacji": "5101026",
        "lat": "51.270003",
        "lon": "17.363609"
    },
    {
        "name": "Dobrzechów",
        "numerStacji": "5101027",
        "lat": "49.873331",
        "lon": "21.74194"
    },
    {
        "name": "Dobrzejewice",
        "numerStacji": "5101029",
        "lat": "52.999725",
        "lon": "18.820832"
    },
    {
        "name": "Dobrzeń Wielki",
        "numerStacji": "5101030",
        "lat": "50.771111",
        "lon": "17.859723"
    },
    {
        "name": "Dziembowko",
        "numerStacji": "5101031",
        "lat": "53.07083",
        "lon": "16.815276"
    },
    {
        "name": "Dzierżanów Wielkopolski",
        "numerStacji": "5101032",
        "lat": "51.712218",
        "lon": "17.353891"
    },
    {
        "name": "Dzierżążno",
        "numerStacji": "5101033",
        "lat": "54.315279",
        "lon": "18.263609"
    },
    {
        "name": "Dzierżoniów Śląski",
        "numerStacji": "5101035",
        "lat": "50.724726",
        "lon": "16.640274"
    },
    {
        "name": "Dobieszyn",
        "numerStacji": "5101038",
        "lat": "51.63056",
        "lon": "21.176392"
    },
    {
        "name": "Ełk Szyba Wschód",
        "numerStacji": "5101040",
        "lat": "53.801392",
        "lon": "22.372776"
    },
    {
        "name": "Ełk Szyba Zachód",
        "numerStacji": "5101042",
        "lat": "53.802498",
        "lon": "22.370555"
    },
    {
        "name": "Fałkowo",
        "numerStacji": "5101045",
        "lat": "52.498613",
        "lon": "17.424448"
    },
    {
        "name": "Fasty",
        "numerStacji": "5101046",
        "lat": "53.176948",
        "lon": "23.024718"
    },
    {
        "name": "Firlus",
        "numerStacji": "5101048",
        "lat": "53.269168",
        "lon": "18.629443"
    },
    {
        "name": "Frysztak",
        "numerStacji": "5101049",
        "lat": "49.83083",
        "lon": "21.618886"
    },
    {
        "name": "Fronołów",
        "numerStacji": "5101050",
        "lat": "52.360556",
        "lon": "22.928893"
    },
    {
        "name": "Fiszewo",
        "numerStacji": "5101054",
        "lat": "54.0675",
        "lon": "19.248889"
    },
    {
        "name": "Garbce",
        "numerStacji": "5101056",
        "lat": "51.513889",
        "lon": "16.889724"
    },
    {
        "name": "Gądki",
        "numerStacji": "5101058",
        "lat": "52.302225",
        "lon": "17.045274"
    },
    {
        "name": "Górażdże",
        "numerStacji": "5101059",
        "lat": "50.529166",
        "lon": "18.003335"
    },
    {
        "name": "Gągławki",
        "numerStacji": "5101060",
        "lat": "53.680559",
        "lon": "20.437497"
    },
    {
        "name": "Gajówka",
        "numerStacji": "5101063",
        "lat": "50.394723",
        "lon": "19.878611"
    },
    {
        "name": "Gałkówek",
        "numerStacji": "5101064",
        "lat": "51.72972",
        "lon": "19.73028"
    },
    {
        "name": "Gamerki Wielkie",
        "numerStacji": "5101066",
        "lat": "53.845278",
        "lon": "20.1375"
    },
    {
        "name": "Garwolin",
        "numerStacji": "5101067",
        "lat": "51.900282",
        "lon": "21.554443"
    },
    {
        "name": "Gąsawy Plebańskie",
        "numerStacji": "5101069",
        "lat": "51.232221",
        "lon": "20.947221"
    },
    {
        "name": "Gąsocin",
        "numerStacji": "5101071",
        "lat": "52.738607",
        "lon": "20.72028"
    },
    {
        "name": "Garbatka-Letnisko",
        "numerStacji": "5101072",
        "lat": "51.50028",
        "lon": "21.653333"
    },
    {
        "name": "Granowiec",
        "numerStacji": "5101073",
        "lat": "51.511948",
        "lon": "17.645277"
    },
    {
        "name": "Garczyn",
        "numerStacji": "5101075",
        "lat": "54.123611",
        "lon": "17.911115"
    },
    {
        "name": "Grabów Szlachecki",
        "numerStacji": "5101079",
        "lat": "51.703058",
        "lon": "22.095279"
    },
    {
        "name": "Gąbin",
        "numerStacji": "5101081",
        "lat": "54.010553",
        "lon": "15.286948"
    },
    {
        "name": "Grabowno Wielkie",
        "numerStacji": "5101082",
        "lat": "51.343337",
        "lon": "17.403332"
    },
    {
        "name": "Grabów nad Pilicą",
        "numerStacji": "5101086",
        "lat": "51.741946",
        "lon": "21.182226"
    },
    {
        "name": "Grabiny",
        "numerStacji": "5101089",
        "lat": "50.046113",
        "lon": "21.331942"
    },
    {
        "name": "Gręboszów",
        "numerStacji": "5101090",
        "lat": "51.065274",
        "lon": "17.800278"
    },
    {
        "name": "Gdynia Chylonia",
        "numerStacji": "5101091",
        "lat": "54.546113",
        "lon": "18.462504"
    },
    {
        "name": "Goczałkowice",
        "numerStacji": "5101092",
        "lat": "49.945002",
        "lon": "18.965837"
    },
    {
        "name": "Głuchowo",
        "numerStacji": "5101095",
        "lat": "53.201947",
        "lon": "18.543614"
    },
    {
        "name": "Gościszewo",
        "numerStacji": "5101096",
        "lat": "53.975001",
        "lon": "19.018055"
    },
    {
        "name": "Gorzów Chrzanowski",
        "numerStacji": "5101097",
        "lat": "50.073611",
        "lon": "19.242219"
    },
    {
        "name": "Goczałków",
        "numerStacji": "5101098",
        "lat": "51.009163",
        "lon": "16.324168"
    },
    {
        "name": "Golęczewo",
        "numerStacji": "5101100",
        "lat": "52.534722",
        "lon": "16.828058"
    },
    {
        "name": "Gościszów",
        "numerStacji": "5101101",
        "lat": "51.169441",
        "lon": "15.416392"
    },
    {
        "name": "Garczegorze",
        "numerStacji": "5101103",
        "lat": "54.589441",
        "lon": "17.703059"
    },
    {
        "name": "Gdaǹsk Oliwa",
        "numerStacji": "5101104",
        "lat": "54.409441",
        "lon": "18.571948"
    },
    {
        "name": "Gdakowo",
        "numerStacji": "5101105",
        "lat": "53.818337",
        "lon": "19.168885"
    },
    {
        "name": "Górka Duchowna",
        "numerStacji": "5101107",
        "lat": "51.954163",
        "lon": "16.576945"
    },
    {
        "name": "Gdynia Grabówek",
        "numerStacji": "5101110",
        "lat": "54.534723",
        "lon": "18.494721"
    },
    {
        "name": "Grodzie",
        "numerStacji": "5101111",
        "lat": "54.345276",
        "lon": "19.961941"
    },
    {
        "name": "Gardeja",
        "numerStacji": "5101112",
        "lat": "53.591665",
        "lon": "18.933053"
    },
    {
        "name": "Gdańsk Lipce",
        "numerStacji": "5101114",
        "lat": "54.302226",
        "lon": "18.635555"
    },
    {
        "name": "Gdańsk Orunia",
        "numerStacji": "5101116",
        "lat": "54.324448",
        "lon": "18.634441"
    },
    {
        "name": "Gdańsk Politechnika",
        "numerStacji": "5101117",
        "lat": "54.374167",
        "lon": "18.626944"
    },
    {
        "name": "Gdynia Stocznia",
        "numerStacji": "5101120",
        "lat": "54.525554",
        "lon": "18.519163"
    },
    {
        "name": "Gdańsk Zaspa",
        "numerStacji": "5101127",
        "lat": "54.389718",
        "lon": "18.59167"
    },
    {
        "name": "Gronowo Elbląskie",
        "numerStacji": "5101129",
        "lat": "54.089443",
        "lon": "19.305"
    },
    {
        "name": "Grębocin",
        "numerStacji": "5101131",
        "lat": "53.045831",
        "lon": "18.690282"
    },
    {
        "name": "Grodek",
        "numerStacji": "5101132",
        "lat": "51.571393",
        "lon": "22.787781"
    },
    {
        "name": "Głuszyca Górna",
        "numerStacji": "5101135",
        "lat": "50.673056",
        "lon": "16.371388"
    },
    {
        "name": "Gorlice Glinik",
        "numerStacji": "5101138",
        "lat": "49.671667",
        "lon": "21.173057"
    },
    {
        "name": "Gogolin",
        "numerStacji": "5101140",
        "lat": "50.492499",
        "lon": "18.019165"
    },
    {
        "name": "Grzegorzewo",
        "numerStacji": "5101141",
        "lat": "52.485282",
        "lon": "21.42889"
    },
    {
        "name": "Głuchołazy Miasto",
        "numerStacji": "5101144",
        "lat": "50.31694",
        "lon": "17.390001"
    },
    {
        "name": "Goniądz",
        "numerStacji": "5101147",
        "lat": "53.459443",
        "lon": "22.725836"
    },
    {
        "name": "Geniusze",
        "numerStacji": "5101149",
        "lat": "53.383052",
        "lon": "23.439445"
    },
    {
        "name": "Gierwaty",
        "numerStacji": "5101151",
        "lat": "52.993891",
        "lon": "21.603892"
    },
    {
        "name": "Gierałtów",
        "numerStacji": "5101154",
        "lat": "51.191392",
        "lon": "15.300279"
    },
    {
        "name": "Gierałtów Wykroty",
        "numerStacji": "5101155",
        "lat": "51.21694",
        "lon": "15.28444"
    },
    {
        "name": "Grajewo",
        "numerStacji": "5101158",
        "lat": "53.649726",
        "lon": "22.44833"
    },
    {
        "name": "Gołubie Kaszubskie",
        "numerStacji": "5101160",
        "lat": "54.212775",
        "lon": "18.037224"
    },
    {
        "name": "Grodzisko Dolne",
        "numerStacji": "5101162",
        "lat": "50.169445",
        "lon": "22.509169"
    },
    {
        "name": "Garki",
        "numerStacji": "5101164",
        "lat": "51.54056",
        "lon": "17.64889"
    },
    {
        "name": "Gorzuchów Kłodzki",
        "numerStacji": "5101165",
        "lat": "50.49",
        "lon": "16.571389"
    },
    {
        "name": "Gdańsk Osowa",
        "numerStacji": "5101166",
        "lat": "54.421109",
        "lon": "18.451663"
    },
    {
        "name": "Góra Kalwaria",
        "numerStacji": "5101167",
        "lat": "51.989446",
        "lon": "21.194443"
    },
    {
        "name": "Górki Śląskie",
        "numerStacji": "5101168",
        "lat": "50.141947",
        "lon": "18.390276"
    },
    {
        "name": "Górki Noteckie",
        "numerStacji": "5101169",
        "lat": "52.793333",
        "lon": "15.488333"
    },
    {
        "name": "Gołaszewo Kujawskie",
        "numerStacji": "5101170",
        "lat": "52.545833",
        "lon": "19.091389"
    },
    {
        "name": "Gądków Wielki",
        "numerStacji": "5101171",
        "lat": "52.246115",
        "lon": "14.963615"
    },
    {
        "name": "Gołąb",
        "numerStacji": "5101175",
        "lat": "51.500558",
        "lon": "21.919998"
    },
    {
        "name": "Głuchów",
        "numerStacji": "5101176",
        "lat": "50.083337",
        "lon": "22.279719"
    },
    {
        "name": "Głębokie Międzyrzeckie",
        "numerStacji": "5101177",
        "lat": "52.484724",
        "lon": "15.534169"
    },
    {
        "name": "Głogów Małopolski",
        "numerStacji": "5101178",
        "lat": "50.148608",
        "lon": "21.958058"
    },
    {
        "name": "Głogów Huta",
        "numerStacji": "5101179",
        "lat": "51.67583",
        "lon": "15.991666"
    },
    {
        "name": "Gliwice Kuźnica",
        "numerStacji": "5101180",
        "lat": "50.357499",
        "lon": "18.621946"
    },
    {
        "name": "Gliwice Łabędy",
        "numerStacji": "5101181",
        "lat": "50.339997",
        "lon": "18.622503"
    },
    {
        "name": "Głuszyno Pomorskie",
        "numerStacji": "5101185",
        "lat": "54.490002",
        "lon": "17.417778"
    },
    {
        "name": "Gołotczyzna",
        "numerStacji": "5101187",
        "lat": "52.784164",
        "lon": "20.682219"
    },
    {
        "name": "Gralewo",
        "numerStacji": "5101189",
        "lat": "53.320002",
        "lon": "20.036111"
    },
    {
        "name": "Głuszyca",
        "numerStacji": "5101191",
        "lat": "50.688059",
        "lon": "16.353886"
    },
    {
        "name": "Grudziądz Mniszek",
        "numerStacji": "5101195",
        "lat": "53.433059",
        "lon": "18.725277"
    },
    {
        "name": "Gniewczyna",
        "numerStacji": "5101202",
        "lat": "50.099724",
        "lon": "22.520837"
    },
    {
        "name": "Gliniczek",
        "numerStacji": "5101203",
        "lat": "49.736947",
        "lon": "21.538613"
    },
    {
        "name": "Gronajny",
        "numerStacji": "5101204",
        "lat": "53.992224",
        "lon": "19.052223"
    },
    {
        "name": "Gniewkowo",
        "numerStacji": "5101205",
        "lat": "52.888052",
        "lon": "18.403885"
    },
    {
        "name": "Granowo Nowotomyskie",
        "numerStacji": "5101207",
        "lat": "52.225556",
        "lon": "16.530003"
    },
    {
        "name": "Glinnik",
        "numerStacji": "5101208",
        "lat": "51.887778",
        "lon": "19.501109"
    },
    {
        "name": "Gliniszcze",
        "numerStacji": "5101213",
        "lat": "53.465834",
        "lon": "23.501111"
    },
    {
        "name": "Golina",
        "numerStacji": "5101214",
        "lat": "51.907221",
        "lon": "17.460279"
    },
    {
        "name": "Gogolewo",
        "numerStacji": "5101220",
        "lat": "53.372499",
        "lon": "15.177225"
    },
    {
        "name": "Gorzuchowo Chełmińskie",
        "numerStacji": "5101221",
        "lat": "53.350278",
        "lon": "18.693059"
    },
    {
        "name": "Goczałkowice-Zdrój",
        "numerStacji": "5101224",
        "lat": "49.935276",
        "lon": "18.976948"
    },
    {
        "name": "Gomunice",
        "numerStacji": "5101226",
        "lat": "51.164164",
        "lon": "19.486942"
    },
    {
        "name": "Górowo",
        "numerStacji": "5101228",
        "lat": "53.959998",
        "lon": "20.984724"
    },
    {
        "name": "Gorlice",
        "numerStacji": "5101230",
        "lat": "49.66444",
        "lon": "21.163052"
    },
    {
        "name": "Godki",
        "numerStacji": "5101232",
        "lat": "53.81778",
        "lon": "20.251663"
    },
    {
        "name": "Górna Grupa",
        "numerStacji": "5101233",
        "lat": "53.498609",
        "lon": "18.677499"
    },
    {
        "name": "Gozdowo",
        "numerStacji": "5101234",
        "lat": "52.729725",
        "lon": "19.695554"
    },
    {
        "name": "Górki Pomorskie",
        "numerStacji": "5101239",
        "lat": "53.899168",
        "lon": "14.824165"
    },
    {
        "name": "Gdańsk Przymorze-Uniwersytet",
        "numerStacji": "5101242",
        "lat": "54.400002",
        "lon": "18.577224"
    },
    {
        "name": "Grębów",
        "numerStacji": "5101247",
        "lat": "50.603893",
        "lon": "21.836947"
    },
    {
        "name": "Grotniki",
        "numerStacji": "5101251",
        "lat": "51.88722",
        "lon": "19.311113"
    },
    {
        "name": "Grodków Śląski",
        "numerStacji": "5101253",
        "lat": "50.696941",
        "lon": "17.37667"
    },
    {
        "name": "Grylewo",
        "numerStacji": "5101254",
        "lat": "52.887774",
        "lon": "17.227782"
    },
    {
        "name": "Grodzisk Mazowiecki",
        "numerStacji": "5101255",
        "lat": "52.11",
        "lon": "20.622504"
    },
    {
        "name": "Gromnik",
        "numerStacji": "5101256",
        "lat": "49.834165",
        "lon": "20.96111"
    },
    {
        "name": "Grom",
        "numerStacji": "5101257",
        "lat": "53.606389",
        "lon": "20.861941"
    },
    {
        "name": "Grudziądz Przedmieście",
        "numerStacji": "5101258",
        "lat": "53.475003",
        "lon": "18.748891"
    },
    {
        "name": "Gregorowce",
        "numerStacji": "5101259",
        "lat": "52.662774",
        "lon": "23.241107"
    },
    {
        "name": "Grzędzice Stargardzkie",
        "numerStacji": "5101260",
        "lat": "53.358332",
        "lon": "14.972496"
    },
    {
        "name": "Grodzisk Wielkopolski",
        "numerStacji": "5101263",
        "lat": "52.230276",
        "lon": "16.36417"
    },
    {
        "name": "Grybów",
        "numerStacji": "5101264",
        "lat": "49.626667",
        "lon": "20.957775"
    },
    {
        "name": "Gdańsk Stocznia",
        "numerStacji": "5101266",
        "lat": "54.364441",
        "lon": "18.642225"
    },
    {
        "name": "Grzęska",
        "numerStacji": "5101267",
        "lat": "50.080002",
        "lon": "22.45278"
    },
    {
        "name": "Goszcza",
        "numerStacji": "5101268",
        "lat": "50.184996",
        "lon": "20.06111"
    },
    {
        "name": "Gośniewice",
        "numerStacji": "5101269",
        "lat": "51.816943",
        "lon": "21.139168"
    },
    {
        "name": "Górki Szczukowskie",
        "numerStacji": "5101274",
        "lat": "50.883611",
        "lon": "20.523614"
    },
    {
        "name": "Goleszów",
        "numerStacji": "5101277",
        "lat": "49.746943",
        "lon": "18.74917"
    },
    {
        "name": "Gostynin",
        "numerStacji": "5101279",
        "lat": "52.433612",
        "lon": "19.476388"
    },
    {
        "name": "Grupa",
        "numerStacji": "5101282",
        "lat": "53.503885",
        "lon": "18.629721"
    },
    {
        "name": "Grudze",
        "numerStacji": "5101284",
        "lat": "52.048613",
        "lon": "19.901668"
    },
    {
        "name": "Gutowo Wielkopolskie",
        "numerStacji": "5101289",
        "lat": "52.332501",
        "lon": "17.643892"
    },
    {
        "name": "Gutkowo",
        "numerStacji": "5101293",
        "lat": "53.808889",
        "lon": "20.402502"
    },
    {
        "name": "Gutowiec",
        "numerStacji": "5101294",
        "lat": "53.777499",
        "lon": "17.860002"
    },
    {
        "name": "Gułtowy",
        "numerStacji": "5101295",
        "lat": "52.368053",
        "lon": "17.316388"
    },
    {
        "name": "Grudziądz",
        "numerStacji": "5101296",
        "lat": "53.482221",
        "lon": "18.760829"
    },
    {
        "name": "Głowaczewo",
        "numerStacji": "5101297",
        "lat": "54.130559",
        "lon": "15.438056"
    },
    {
        "name": "Gwda Mała",
        "numerStacji": "5101299",
        "lat": "53.731942",
        "lon": "16.82778"
    },
    {
        "name": "Gościcino Wejherowskie",
        "numerStacji": "5101302",
        "lat": "54.605558",
        "lon": "18.161392"
    },
    {
        "name": "Gdynia Wzgórze Św. Maksymiliana",
        "numerStacji": "5101304",
        "lat": "54.508052",
        "lon": "18.535281"
    },
    {
        "name": "Gawrony",
        "numerStacji": "5101305",
        "lat": "52.11222",
        "lon": "19.219719"
    },
    {
        "name": "Goworowo",
        "numerStacji": "5101306",
        "lat": "52.921115",
        "lon": "21.581941"
    },
    {
        "name": "Gdańsk Wrzeszcz",
        "numerStacji": "5101307",
        "lat": "54.381943",
        "lon": "18.605001"
    },
    {
        "name": "Górzyca",
        "numerStacji": "5101310",
        "lat": "52.499718",
        "lon": "14.656948"
    },
    {
        "name": "Gdynia Leszczynki",
        "numerStacji": "5101311",
        "lat": "54.541393",
        "lon": "18.477777"
    },
    {
        "name": "Górzyniec",
        "numerStacji": "5101312",
        "lat": "50.859996",
        "lon": "15.568058"
    },
    {
        "name": "Grzywna",
        "numerStacji": "5101315",
        "lat": "53.154448",
        "lon": "18.617226"
    },
    {
        "name": "Gryźliny",
        "numerStacji": "5101316",
        "lat": "53.613329",
        "lon": "20.349448"
    },
    {
        "name": "Gdańsk Żabianka-AWFiS",
        "numerStacji": "5101317",
        "lat": "54.4208562",
        "lon": "18.5680397"
    },
    {
        "name": "Grzybno",
        "numerStacji": "5101318",
        "lat": "53.20361",
        "lon": "18.446108"
    },
    {
        "name": "Gołańcz",
        "numerStacji": "5101319",
        "lat": "52.947498",
        "lon": "17.305835"
    },
    {
        "name": "Gorzędów",
        "numerStacji": "5101320",
        "lat": "51.196948",
        "lon": "19.54361"
    },
    {
        "name": "Gorzów Wielkopolski Zieleniec",
        "numerStacji": "5101321",
        "lat": "52.699719",
        "lon": "15.26167"
    },
    {
        "name": "Gorlice Zagórzany",
        "numerStacji": "5101322",
        "lat": "49.693888",
        "lon": "21.195"
    },
    {
        "name": "Gzin",
        "numerStacji": "5101323",
        "lat": "53.191942",
        "lon": "18.331945"
    },
    {
        "name": "Gorzkowice",
        "numerStacji": "5101324",
        "lat": "51.218333",
        "lon": "19.603334"
    },
    {
        "name": "Gorzów Wielkopolski Zamoście",
        "numerStacji": "5101326",
        "lat": "52.722777",
        "lon": "15.238891"
    },
    {
        "name": "Gorzanów",
        "numerStacji": "5101327",
        "lat": "50.354164",
        "lon": "16.640831"
    },
    {
        "name": "Gorzupia",
        "numerStacji": "5101329",
        "lat": "51.691948",
        "lon": "17.503885"
    },
    {
        "name": "Głuchołazy",
        "numerStacji": "5101331",
        "lat": "50.33028",
        "lon": "17.394442"
    },
    {
        "name": "Grodziszcze Mazowieckie",
        "numerStacji": "5101332",
        "lat": "52.160834",
        "lon": "21.872499"
    },
    {
        "name": "Hajnówka",
        "numerStacji": "5101334",
        "lat": "52.73333",
        "lon": "23.583056"
    },
    {
        "name": "Hrebenne",
        "numerStacji": "5101335",
        "lat": "50.298332",
        "lon": "23.576944"
    },
    {
        "name": "Horyniec-Zdrój",
        "numerStacji": "5101337",
        "lat": "50.194444",
        "lon": "23.356393"
    },
    {
        "name": "Hołówki Duże",
        "numerStacji": "5101338",
        "lat": "52.97167",
        "lon": "23.095553"
    },
    {
        "name": "Henrykowo",
        "numerStacji": "5101339",
        "lat": "54.184719",
        "lon": "20.130003"
    },
    {
        "name": "Hel",
        "numerStacji": "5101340",
        "lat": "54.6109936",
        "lon": "18.8012524"
    },
    {
        "name": "Henryków",
        "numerStacji": "5101341",
        "lat": "50.66333",
        "lon": "17.030001"
    },
    {
        "name": "Halinów",
        "numerStacji": "5101343",
        "lat": "52.223336",
        "lon": "21.35028"
    },
    {
        "name": "Hurko",
        "numerStacji": "5101346",
        "lat": "49.785282",
        "lon": "22.862778"
    },
    {
        "name": "Hucisko",
        "numerStacji": "5101347",
        "lat": "49.689169",
        "lon": "19.407504"
    },
    {
        "name": "Hartowiec",
        "numerStacji": "5101351",
        "lat": "53.395556",
        "lon": "19.845557"
    },
    {
        "name": "Imbramowice",
        "numerStacji": "5101352",
        "lat": "50.963615",
        "lon": "16.579444"
    },
    {
        "name": "Iłowiec",
        "numerStacji": "5101357",
        "lat": "52.183891",
        "lon": "16.799446"
    },
    {
        "name": "Iława Miasto",
        "numerStacji": "5101358",
        "lat": "53.596115",
        "lon": "19.547223"
    },
    {
        "name": "Imielin",
        "numerStacji": "5101359",
        "lat": "50.142504",
        "lon": "19.176113"
    },
    {
        "name": "Inwałd",
        "numerStacji": "5101360",
        "lat": "49.85306",
        "lon": "19.387782"
    },
    {
        "name": "Iłowo",
        "numerStacji": "5101361",
        "lat": "53.1675",
        "lon": "20.289723"
    },
    {
        "name": "Inowrocław Rąbinek",
        "numerStacji": "5101362",
        "lat": "52.769997",
        "lon": "18.240282"
    },
    {
        "name": "Iwin",
        "numerStacji": "5101363",
        "lat": "53.795001",
        "lon": "16.515557"
    },
    {
        "name": "Izbica",
        "numerStacji": "5101366",
        "lat": "50.890559",
        "lon": "23.155278"
    },
    {
        "name": "Jacków",
        "numerStacji": "5101368",
        "lat": "50.964442",
        "lon": "19.354719"
    },
    {
        "name": "Jackowice",
        "numerStacji": "5101371",
        "lat": "52.15722",
        "lon": "19.794723"
    },
    {
        "name": "Jadachy",
        "numerStacji": "5101372",
        "lat": "50.482782",
        "lon": "21.696391"
    },
    {
        "name": "Jaksice",
        "numerStacji": "5101377",
        "lat": "52.856941",
        "lon": "18.198059"
    },
    {
        "name": "Jarzębia Łąka",
        "numerStacji": "5101378",
        "lat": "52.458053",
        "lon": "21.447777"
    },
    {
        "name": "Jarosty",
        "numerStacji": "5101381",
        "lat": "51.461392",
        "lon": "19.693055"
    },
    {
        "name": "Jastrzębie Pomorskie",
        "numerStacji": "5101382",
        "lat": "53.519724",
        "lon": "18.266665"
    },
    {
        "name": "Jarszewo",
        "numerStacji": "5101383",
        "lat": "53.929444",
        "lon": "14.800002"
    },
    {
        "name": "Jastarnia",
        "numerStacji": "5101385",
        "lat": "54.701114",
        "lon": "18.677499"
    },
    {
        "name": "Jazy",
        "numerStacji": "5101388",
        "lat": "54.129166",
        "lon": "15.790829"
    },
    {
        "name": "Zgierz Kontrewers",
        "numerStacji": "5101392",
        "lat": "51.86472",
        "lon": "19.341667"
    },
    {
        "name": "Jedlina Górna",
        "numerStacji": "5101394",
        "lat": "50.730003",
        "lon": "16.322226"
    },
    {
        "name": "Jedlnia-Letnisko",
        "numerStacji": "5101395",
        "lat": "51.429723",
        "lon": "21.32778"
    },
    {
        "name": "Jedlicze",
        "numerStacji": "5101396",
        "lat": "49.719166",
        "lon": "21.648056"
    },
    {
        "name": "Jedlicze Męcinka",
        "numerStacji": "5101397",
        "lat": "49.726115",
        "lon": "21.626114"
    },
    {
        "name": "Jackowo Dworskie",
        "numerStacji": "5101400",
        "lat": "52.631941",
        "lon": "20.775276"
    },
    {
        "name": "Jadwiżyn",
        "numerStacji": "5101401",
        "lat": "53.123893",
        "lon": "17.371942"
    },
    {
        "name": "Jelna",
        "numerStacji": "5101402",
        "lat": "50.304445",
        "lon": "22.364443"
    },
    {
        "name": "Jeżewo",
        "numerStacji": "5101403",
        "lat": "53.50722",
        "lon": "18.488887"
    },
    {
        "name": "Jeleń",
        "numerStacji": "5101406",
        "lat": "51.502221",
        "lon": "20.072778"
    },
    {
        "name": "Jeglia",
        "numerStacji": "5101407",
        "lat": "53.390558",
        "lon": "19.88306"
    },
    {
        "name": "Jędrzychowice",
        "numerStacji": "5101408",
        "lat": "51.172497",
        "lon": "15.018053"
    },
    {
        "name": "Jedlnia Kościelna",
        "numerStacji": "5101410",
        "lat": "51.45528",
        "lon": "21.408332"
    },
    {
        "name": "Jelcz Miłoszyce",
        "numerStacji": "5101411",
        "lat": "51.044446",
        "lon": "17.305835"
    },
    {
        "name": "Jesionka",
        "numerStacji": "5101414",
        "lat": "52.014723",
        "lon": "20.334445"
    },
    {
        "name": "Jeżów Sudecki",
        "numerStacji": "5101417",
        "lat": "50.927226",
        "lon": "15.734997"
    },
    {
        "name": "Jeziorki Wałeckie",
        "numerStacji": "5101418",
        "lat": "53.225552",
        "lon": "16.108058"
    },
    {
        "name": "Jeruty",
        "numerStacji": "5101419",
        "lat": "53.552778",
        "lon": "21.154998"
    },
    {
        "name": "Jagodzin",
        "numerStacji": "5101421",
        "lat": "51.355275",
        "lon": "15.170277"
    },
    {
        "name": "Jelenia Góra Sobieszów",
        "numerStacji": "5101423",
        "lat": "50.851942",
        "lon": "15.645554"
    },
    {
        "name": "Jelenia Góra Zachodnia",
        "numerStacji": "5101424",
        "lat": "50.900555",
        "lon": "15.719446"
    },
    {
        "name": "Jelenino",
        "numerStacji": "5101425",
        "lat": "53.659444",
        "lon": "16.625837"
    },
    {
        "name": "Jawiszowice Jaźnik",
        "numerStacji": "5101426",
        "lat": "49.949721",
        "lon": "19.115831"
    },
    {
        "name": "Jabłoń Kościelna",
        "numerStacji": "5101428",
        "lat": "52.908053",
        "lon": "22.650003"
    },
    {
        "name": "Jaktorów",
        "numerStacji": "5101429",
        "lat": "52.086664",
        "lon": "20.552226"
    },
    {
        "name": "Jakubowice",
        "numerStacji": "5101430",
        "lat": "50.811113",
        "lon": "21.664722"
    },
    {
        "name": "Jaśkowice Legnickie",
        "numerStacji": "5101432",
        "lat": "51.214998",
        "lon": "16.312779"
    },
    {
        "name": "Jelenia Góra Orle",
        "numerStacji": "5101433",
        "lat": "50.864167",
        "lon": "15.65778"
    },
    {
        "name": "Jasło Niegłowice",
        "numerStacji": "5101434",
        "lat": "49.742232",
        "lon": "21.446105"
    },
    {
        "name": "Jeleśnia",
        "numerStacji": "5101435",
        "lat": "49.652502",
        "lon": "19.320282"
    },
    {
        "name": "Jerzmanice Lubuskie",
        "numerStacji": "5101436",
        "lat": "52.306666",
        "lon": "14.867502"
    },
    {
        "name": "Jełowa",
        "numerStacji": "5101437",
        "lat": "50.793611",
        "lon": "18.046663"
    },
    {
        "name": "Jamielnik",
        "numerStacji": "5101438",
        "lat": "53.529442",
        "lon": "19.502223"
    },
    {
        "name": "Jankowo Dolne",
        "numerStacji": "5101441",
        "lat": "52.538893",
        "lon": "17.719725"
    },
    {
        "name": "Janikowo",
        "numerStacji": "5101442",
        "lat": "52.748612",
        "lon": "18.115835"
    },
    {
        "name": "Jankowa",
        "numerStacji": "5101443",
        "lat": "49.69583",
        "lon": "20.934169"
    },
    {
        "name": "Jankowo Pomorskie",
        "numerStacji": "5101446",
        "lat": "53.516668",
        "lon": "15.774163"
    },
    {
        "name": "Jaroszowiec Olkuski",
        "numerStacji": "5101449",
        "lat": "50.341112",
        "lon": "19.619443"
    },
    {
        "name": "Jonkowo",
        "numerStacji": "5101450",
        "lat": "53.815829",
        "lon": "20.296942"
    },
    {
        "name": "Józefów",
        "numerStacji": "5101453",
        "lat": "52.135835",
        "lon": "21.236944"
    },
    {
        "name": "Janków Przygodzki",
        "numerStacji": "5101454",
        "lat": "51.608887",
        "lon": "17.809725"
    },
    {
        "name": "Jerzmanki",
        "numerStacji": "5101455",
        "lat": "51.129996",
        "lon": "15.055835"
    },
    {
        "name": "Jarzębiec",
        "numerStacji": "5101456",
        "lat": "54.312501",
        "lon": "19.993331"
    },
    {
        "name": "Jasienica Dolna",
        "numerStacji": "5101460",
        "lat": "50.504167",
        "lon": "17.503885"
    },
    {
        "name": "Jastrzębna",
        "numerStacji": "5101461",
        "lat": "53.74556",
        "lon": "23.198615"
    },
    {
        "name": "Jastrzębsko",
        "numerStacji": "5101464",
        "lat": "52.294998",
        "lon": "16.060829"
    },
    {
        "name": "Jasionna Łowicka",
        "numerStacji": "5101465",
        "lat": "52.124446",
        "lon": "20.123054"
    },
    {
        "name": "Jasień Brzeski",
        "numerStacji": "5101467",
        "lat": "49.986946",
        "lon": "20.559445"
    },
    {
        "name": "Jasiona",
        "numerStacji": "5101468",
        "lat": "50.458888",
        "lon": "18.075833"
    },
    {
        "name": "Jastrząb",
        "numerStacji": "5101469",
        "lat": "51.24833",
        "lon": "20.98361"
    },
    {
        "name": "Jastrowie",
        "numerStacji": "5101471",
        "lat": "53.40806",
        "lon": "16.798052"
    },
    {
        "name": "Julianka",
        "numerStacji": "5101476",
        "lat": "50.764719",
        "lon": "19.473053"
    },
    {
        "name": "Jurata",
        "numerStacji": "5101478",
        "lat": "54.685275",
        "lon": "18.712503"
    },
    {
        "name": "Justynów",
        "numerStacji": "5101479",
        "lat": "51.730835",
        "lon": "19.683329"
    },
    {
        "name": "Juszczyn",
        "numerStacji": "5101481",
        "lat": "49.707219",
        "lon": "19.691671"
    },
    {
        "name": "Jaworzno Ciężkowice",
        "numerStacji": "5101482",
        "lat": "50.211946",
        "lon": "19.337496"
    },
    {
        "name": "Janowice Wielkie",
        "numerStacji": "5101483",
        "lat": "50.878613",
        "lon": "15.918611"
    },
    {
        "name": "Janówek",
        "numerStacji": "5101486",
        "lat": "52.425279",
        "lon": "20.78111"
    },
    {
        "name": "Jawor",
        "numerStacji": "5101487",
        "lat": "51.055278",
        "lon": "16.196944"
    },
    {
        "name": "Jaszczów",
        "numerStacji": "5101491",
        "lat": "51.202224",
        "lon": "22.910555"
    },
    {
        "name": "Jezierzany",
        "numerStacji": "5101493",
        "lat": "51.233057",
        "lon": "16.104166"
    },
    {
        "name": "Jeżówka",
        "numerStacji": "5101496",
        "lat": "50.399721",
        "lon": "19.821664"
    },
    {
        "name": "Jezierzyce Słupskie",
        "numerStacji": "5101502",
        "lat": "54.504169",
        "lon": "17.123057"
    },
    {
        "name": "Kaliska",
        "numerStacji": "5101504",
        "lat": "53.903609",
        "lon": "18.216667"
    },
    {
        "name": "Kaczkowo",
        "numerStacji": "5101506",
        "lat": "51.74333",
        "lon": "16.679718"
    },
    {
        "name": "Kamienna Karczma",
        "numerStacji": "5101508",
        "lat": "53.877225",
        "lon": "18.162777"
    },
    {
        "name": "Kamionki Jezioro",
        "numerStacji": "5101513",
        "lat": "53.129718",
        "lon": "18.779724"
    },
    {
        "name": "Kaliska Kujawskie",
        "numerStacji": "5101514",
        "lat": "52.411948",
        "lon": "19.123885"
    },
    {
        "name": "Kały",
        "numerStacji": "5101515",
        "lat": "50.827221",
        "lon": "18.080552"
    },
    {
        "name": "Kanie",
        "numerStacji": "5101517",
        "lat": "51.124719",
        "lon": "23.104722"
    },
    {
        "name": "Karlino",
        "numerStacji": "5101518",
        "lat": "54.045279",
        "lon": "15.883337"
    },
    {
        "name": "Kalisz Pomorski",
        "numerStacji": "5101519",
        "lat": "53.27778",
        "lon": "15.880829"
    },
    {
        "name": "Katowice Ligota",
        "numerStacji": "5101522",
        "lat": "50.226113",
        "lon": "18.977775"
    },
    {
        "name": "Kaniów",
        "numerStacji": "5101524",
        "lat": "49.926107",
        "lon": "19.052502"
    },
    {
        "name": "Kawcze",
        "numerStacji": "5101525",
        "lat": "54.072498",
        "lon": "16.883054"
    },
    {
        "name": "Kaczory",
        "numerStacji": "5101526",
        "lat": "53.105277",
        "lon": "16.882218"
    },
    {
        "name": "Katowice Załęże",
        "numerStacji": "5101527",
        "lat": "50.263607",
        "lon": "18.990279"
    },
    {
        "name": "Krakow Bonarka",
        "numerStacji": "5101528",
        "lat": "50.029168",
        "lon": "19.946111"
    },
    {
        "name": "Kobylec",
        "numerStacji": "5101529",
        "lat": "52.848329",
        "lon": "17.200832"
    },
    {
        "name": "Kraków Łagiewniki",
        "numerStacji": "5101531",
        "lat": "50.023613",
        "lon": "19.933885"
    },
    {
        "name": "Krobia",
        "numerStacji": "5101533",
        "lat": "51.759169",
        "lon": "16.971391"
    },
    {
        "name": "Kobyłka",
        "numerStacji": "5101534",
        "lat": "52.335557",
        "lon": "21.212502"
    },
    {
        "name": "Radostowice",
        "numerStacji": "5101535",
        "lat": "50.020556",
        "lon": "18.888611"
    },
    {
        "name": "Kobylnica",
        "numerStacji": "5101536",
        "lat": "52.445558",
        "lon": "17.078893"
    },
    {
        "name": "Katowice Zawodzie",
        "numerStacji": "5101537",
        "lat": "50.257503",
        "lon": "19.05528"
    },
    {
        "name": "Kobylnica Słupska",
        "numerStacji": "5101539",
        "lat": "54.442782",
        "lon": "16.9875"
    },
    {
        "name": "Kolbuszowa",
        "numerStacji": "5101540",
        "lat": "50.246671",
        "lon": "21.783892"
    },
    {
        "name": "Kaczyce",
        "numerStacji": "5101546",
        "lat": "49.832781",
        "lon": "18.612777"
    },
    {
        "name": "Krosnowice Kłodzkie",
        "numerStacji": "5101547",
        "lat": "50.392503",
        "lon": "16.636948"
    },
    {
        "name": "Kochanowice",
        "numerStacji": "5101550",
        "lat": "50.69917",
        "lon": "18.747777"
    },
    {
        "name": "Karcino",
        "numerStacji": "5101551",
        "lat": "54.108886",
        "lon": "15.397218"
    },
    {
        "name": "Kościernica",
        "numerStacji": "5101558",
        "lat": "54.053612",
        "lon": "16.010274"
    },
    {
        "name": "Koźla Kożuchowska",
        "numerStacji": "5101559",
        "lat": "51.872226",
        "lon": "15.318608"
    },
    {
        "name": "Kłodawa",
        "numerStacji": "5101563",
        "lat": "52.227219",
        "lon": "18.890552"
    },
    {
        "name": "Kłodzko Główne",
        "numerStacji": "5101564",
        "lat": "50.451391",
        "lon": "16.65667"
    },
    {
        "name": "Kołodziejewo",
        "numerStacji": "5101565",
        "lat": "52.712781",
        "lon": "18.035004"
    },
    {
        "name": "Kłodzko Książek",
        "numerStacji": "5101566",
        "lat": "50.41556",
        "lon": "16.64111"
    },
    {
        "name": "Kłodzko Miasto",
        "numerStacji": "5101567",
        "lat": "50.43611",
        "lon": "16.658612"
    },
    {
        "name": "Kępa",
        "numerStacji": "5101569",
        "lat": "50.65417",
        "lon": "22.032777"
    },
    {
        "name": "Kałęczyn",
        "numerStacji": "5101571",
        "lat": "52.713608",
        "lon": "20.742501"
    },
    {
        "name": "Koszęcin",
        "numerStacji": "5101574",
        "lat": "50.622501",
        "lon": "18.836671"
    },
    {
        "name": "Krasnołąka",
        "numerStacji": "5101575",
        "lat": "53.272503",
        "lon": "20.232498"
    },
    {
        "name": "Kraśnik",
        "numerStacji": "5101576",
        "lat": "50.929725",
        "lon": "22.283054"
    },
    {
        "name": "Kędzierzyn Koźle Zachodnie",
        "numerStacji": "5101577",
        "lat": "50.346667",
        "lon": "18.131386"
    },
    {
        "name": "Kędzierzyn Koźle Azoty",
        "numerStacji": "5101579",
        "lat": "50.310557",
        "lon": "18.239724"
    },
    {
        "name": "Kalembina",
        "numerStacji": "5101581",
        "lat": "49.869169",
        "lon": "21.685559"
    },
    {
        "name": "Kępice",
        "numerStacji": "5101584",
        "lat": "54.24056",
        "lon": "16.89083"
    },
    {
        "name": "Krężel",
        "numerStacji": "5101585",
        "lat": "51.87139",
        "lon": "21.111391"
    },
    {
        "name": "Kęszyce",
        "numerStacji": "5101587",
        "lat": "52.138334",
        "lon": "20.148332"
    },
    {
        "name": "Kęty",
        "numerStacji": "5101588",
        "lat": "49.880558",
        "lon": "19.225553"
    },
    {
        "name": "Krośnice Mazowieckie",
        "numerStacji": "5101589",
        "lat": "52.966115",
        "lon": "20.492502"
    },
    {
        "name": "Klewki",
        "numerStacji": "5101591",
        "lat": "53.736113",
        "lon": "20.568335"
    },
    {
        "name": "Kęty Podlesie",
        "numerStacji": "5101592",
        "lat": "49.878059",
        "lon": "19.196671"
    },
    {
        "name": "Kędzierzyn Koźle Przystanek",
        "numerStacji": "5101593",
        "lat": "50.350829",
        "lon": "18.155558"
    },
    {
        "name": "Krzywin Gryfinski",
        "numerStacji": "5101595",
        "lat": "53.087775",
        "lon": "14.45389"
    },
    {
        "name": "Kozy Zagroda",
        "numerStacji": "5101596",
        "lat": "49.857501",
        "lon": "19.164445"
    },
    {
        "name": "Kamienna Góra",
        "numerStacji": "5101599",
        "lat": "50.785556",
        "lon": "16.023335"
    },
    {
        "name": "Kielce Białogon",
        "numerStacji": "5101603",
        "lat": "50.854719",
        "lon": "20.573054"
    },
    {
        "name": "Kielce Czarnów",
        "numerStacji": "5101604",
        "lat": "50.888887",
        "lon": "20.583608"
    },
    {
        "name": "Kopalina",
        "numerStacji": "5101605",
        "lat": "51.02111",
        "lon": "17.404447"
    },
    {
        "name": "Kiekrz",
        "numerStacji": "5101606",
        "lat": "52.475834",
        "lon": "16.789998"
    },
    {
        "name": "Kaliszki",
        "numerStacji": "5101609",
        "lat": "53.619163",
        "lon": "21.988613"
    },
    {
        "name": "Kiełpino Kartuskie",
        "numerStacji": "5101612",
        "lat": "54.287223",
        "lon": "18.231391"
    },
    {
        "name": "Klimontów",
        "numerStacji": "5101613",
        "lat": "50.525831",
        "lon": "20.030555"
    },
    {
        "name": "Kielce Piaski Po",
        "numerStacji": "5101616",
        "lat": "50.888609",
        "lon": "20.624724"
    },
    {
        "name": "Kórnik",
        "numerStacji": "5101620",
        "lat": "52.28333",
        "lon": "17.099721"
    },
    {
        "name": "Kościerzyna",
        "numerStacji": "5101624",
        "lat": "54.121112",
        "lon": "17.993887"
    },
    {
        "name": "Krężnica Jara",
        "numerStacji": "5101626",
        "lat": "51.153053",
        "lon": "22.465553"
    },
    {
        "name": "Krajenka",
        "numerStacji": "5101630",
        "lat": "53.28889",
        "lon": "16.991114"
    },
    {
        "name": "Krojanty",
        "numerStacji": "5101631",
        "lat": "53.727416",
        "lon": "17.6117353"
    },
    {
        "name": "Kalisz Kaszubski",
        "numerStacji": "5101632",
        "lat": "54.045",
        "lon": "17.786111"
    },
    {
        "name": "Kraków Łobzów",
        "numerStacji": "5101633",
        "lat": "50.081944",
        "lon": "19.918055"
    },
    {
        "name": "Kąkolewo",
        "numerStacji": "5101635",
        "lat": "51.857781",
        "lon": "16.686946"
    },
    {
        "name": "Kulin Kłodzki",
        "numerStacji": "5101639",
        "lat": "50.419444",
        "lon": "16.325552"
    },
    {
        "name": "Kraków Swoszowice",
        "numerStacji": "5101642",
        "lat": "50.000277",
        "lon": "19.92806"
    },
    {
        "name": "Kokotów",
        "numerStacji": "5101643",
        "lat": "50.017779",
        "lon": "20.069721"
    },
    {
        "name": "Karnkowo",
        "numerStacji": "5101644",
        "lat": "52.866946",
        "lon": "19.264719"
    },
    {
        "name": "Kraków Zabłocie",
        "numerStacji": "5101645",
        "lat": "50.048054",
        "lon": "19.9575"
    },
    {
        "name": "Klepacze",
        "numerStacji": "5101648",
        "lat": "53.102778",
        "lon": "23.080559"
    },
    {
        "name": "Klecza Dolna",
        "numerStacji": "5101650",
        "lat": "49.878608",
        "lon": "19.533892"
    },
    {
        "name": "Klecza Górna",
        "numerStacji": "5101652",
        "lat": "49.865277",
        "lon": "19.56806"
    },
    {
        "name": "Karłowice",
        "numerStacji": "5101654",
        "lat": "50.879718",
        "lon": "17.699167"
    },
    {
        "name": "Kłaj",
        "numerStacji": "5101655",
        "lat": "50.00194",
        "lon": "20.300555"
    },
    {
        "name": "Kleszczele",
        "numerStacji": "5101657",
        "lat": "52.561115",
        "lon": "23.329165"
    },
    {
        "name": "Kołbiel",
        "numerStacji": "5101661",
        "lat": "52.040558",
        "lon": "21.433052"
    },
    {
        "name": "Kłodzko Zagórze",
        "numerStacji": "5101662",
        "lat": "50.415003",
        "lon": "16.612776"
    },
    {
        "name": "Klemensow",
        "numerStacji": "5101663",
        "lat": "50.697777",
        "lon": "23.036665"
    },
    {
        "name": "Klementowice",
        "numerStacji": "5101664",
        "lat": "51.363059",
        "lon": "22.109446"
    },
    {
        "name": "Kłokowa",
        "numerStacji": "5101666",
        "lat": "49.953335",
        "lon": "20.957226"
    },
    {
        "name": "Kolumna",
        "numerStacji": "5101668",
        "lat": "51.614721",
        "lon": "19.195278"
    },
    {
        "name": "Kamionka Wielka",
        "numerStacji": "5101670",
        "lat": "49.578053",
        "lon": "20.78111"
    },
    {
        "name": "Kłomnice",
        "numerStacji": "5101672",
        "lat": "50.915837",
        "lon": "19.341667"
    },
    {
        "name": "Kraków Mydlniki-Wapiennik",
        "numerStacji": "5101673",
        "lat": "50.090834",
        "lon": "19.844721"
    },
    {
        "name": "Kamieńczyce",
        "numerStacji": "5101674",
        "lat": "50.327223",
        "lon": "20.005835"
    },
    {
        "name": "Koźmin Wielkopolski",
        "numerStacji": "5101675",
        "lat": "51.831946",
        "lon": "17.443891"
    },
    {
        "name": "Kamieńsk",
        "numerStacji": "5101677",
        "lat": "51.186385",
        "lon": "19.499446"
    },
    {
        "name": "Kamień Łowicki",
        "numerStacji": "5101678",
        "lat": "51.98861",
        "lon": "19.753058"
    },
    {
        "name": "Komprachcice",
        "numerStacji": "5101681",
        "lat": "50.63167",
        "lon": "17.821393"
    },
    {
        "name": "Krzemionki",
        "numerStacji": "5101682",
        "lat": "49.840835",
        "lon": "19.115274"
    },
    {
        "name": "Kamień Śląski",
        "numerStacji": "5101684",
        "lat": "50.551109",
        "lon": "18.123889"
    },
    {
        "name": "Krzemienica",
        "numerStacji": "5101688",
        "lat": "50.081665",
        "lon": "22.186942"
    },
    {
        "name": "Kraków Mydlniki",
        "numerStacji": "5101689",
        "lat": "50.083607",
        "lon": "19.859167"
    },
    {
        "name": "Komańcza Letnisko",
        "numerStacji": "5101690",
        "lat": "49.346392",
        "lon": "22.080554"
    },
    {
        "name": "Karolinówka",
        "numerStacji": "5101691",
        "lat": "51.189163",
        "lon": "23.550282"
    },
    {
        "name": "Konojady",
        "numerStacji": "5101700",
        "lat": "53.349999",
        "lon": "19.226947"
    },
    {
        "name": "Koniecpol Magdasz",
        "numerStacji": "5101703",
        "lat": "50.772504",
        "lon": "19.653332"
    },
    {
        "name": "Kamienna Nowa",
        "numerStacji": "5101704",
        "lat": "53.691113",
        "lon": "23.263058"
    },
    {
        "name": "Konopki",
        "numerStacji": "5101706",
        "lat": "52.99639",
        "lon": "20.459997"
    },
    {
        "name": "Krzeszna",
        "numerStacji": "5101712",
        "lat": "54.235553",
        "lon": "18.089164"
    },
    {
        "name": "Knyszyn",
        "numerStacji": "5101713",
        "lat": "53.284719",
        "lon": "22.895831"
    },
    {
        "name": "Kobylin",
        "numerStacji": "5101716",
        "lat": "51.720003",
        "lon": "17.223889"
    },
    {
        "name": "Kolonia",
        "numerStacji": "5101720",
        "lat": "53.567223",
        "lon": "21.271948"
    },
    {
        "name": "Kolin",
        "numerStacji": "5101723",
        "lat": "53.245275",
        "lon": "15.123892"
    },
    {
        "name": "Kojszówka",
        "numerStacji": "5101724",
        "lat": "49.690553",
        "lon": "19.722774"
    },
    {
        "name": "Komańcza",
        "numerStacji": "5101726",
        "lat": "49.338886",
        "lon": "22.0725"
    },
    {
        "name": "Kotuń",
        "numerStacji": "5101733",
        "lat": "52.174722",
        "lon": "22.060832"
    },
    {
        "name": "Kowalów",
        "numerStacji": "5101736",
        "lat": "52.397223",
        "lon": "14.76"
    },
    {
        "name": "Kozy",
        "numerStacji": "5101737",
        "lat": "49.849447",
        "lon": "19.141666"
    },
    {
        "name": "Komorów Podmurynia",
        "numerStacji": "5101741",
        "lat": "50.349445",
        "lon": "21.733058"
    },
    {
        "name": "Kepka",
        "numerStacji": "5101745",
        "lat": "54.215274",
        "lon": "16.897221"
    },
    {
        "name": "Klępnica",
        "numerStacji": "5101748",
        "lat": "53.716669",
        "lon": "15.653887"
    },
    {
        "name": "Krępa Krajeńska",
        "numerStacji": "5101749",
        "lat": "53.227782",
        "lon": "16.057782"
    },
    {
        "name": "Krosno Polanka",
        "numerStacji": "5101750",
        "lat": "49.701943",
        "lon": "21.722226"
    },
    {
        "name": "Kramsk",
        "numerStacji": "5101755",
        "lat": "52.245279",
        "lon": "18.476114"
    },
    {
        "name": "Kraków Batowice",
        "numerStacji": "5101756",
        "lat": "50.1075",
        "lon": "19.99556"
    },
    {
        "name": "Kraków Bieżanów",
        "numerStacji": "5101757",
        "lat": "50.021114",
        "lon": "20.029719"
    },
    {
        "name": "Kraków Bieżanów Drożdżownia",
        "numerStacji": "5101759",
        "lat": "50.010003",
        "lon": "20.035275"
    },
    {
        "name": "Krasnystaw Fabryczny",
        "numerStacji": "5101761",
        "lat": "51.024445",
        "lon": "23.182776"
    },
    {
        "name": "Kornelin",
        "numerStacji": "5101763",
        "lat": "52.183055",
        "lon": "20.206115"
    },
    {
        "name": "Krasiejów",
        "numerStacji": "5101765",
        "lat": "50.668337",
        "lon": "18.249163"
    },
    {
        "name": "Krosno Miasto",
        "numerStacji": "5101768",
        "lat": "49.682778",
        "lon": "21.772224"
    },
    {
        "name": "Krosno",
        "numerStacji": "5101770",
        "lat": "49.693888",
        "lon": "21.748331"
    },
    {
        "name": "Kornatowo",
        "numerStacji": "5101771",
        "lat": "53.296945",
        "lon": "18.647781"
    },
    {
        "name": "Kraków Sidzina",
        "numerStacji": "5101773",
        "lat": "49.985552",
        "lon": "19.874718"
    },
    {
        "name": "Krosno Turaszówka",
        "numerStacji": "5101774",
        "lat": "49.70917",
        "lon": "21.698612"
    },
    {
        "name": "Krynka Łukowska",
        "numerStacji": "5101778",
        "lat": "52.006948",
        "lon": "22.375832"
    },
    {
        "name": "Książki",
        "numerStacji": "5101780",
        "lat": "53.329719",
        "lon": "19.067496"
    },
    {
        "name": "Kalisz Szczypiorno",
        "numerStacji": "5101781",
        "lat": "51.726385",
        "lon": "18.028055"
    },
    {
        "name": "Księginice",
        "numerStacji": "5101784",
        "lat": "51.242226",
        "lon": "16.764442"
    },
    {
        "name": "Kliniska",
        "numerStacji": "5101786",
        "lat": "53.460836",
        "lon": "14.783893"
    },
    {
        "name": "Krasnystaw Miasto",
        "numerStacji": "5101788",
        "lat": "50.985",
        "lon": "23.183054"
    },
    {
        "name": "Kosiorki",
        "numerStacji": "5101793",
        "lat": "52.107222",
        "lon": "22.33583"
    },
    {
        "name": "Kurów Suski",
        "numerStacji": "5101796",
        "lat": "49.707777",
        "lon": "19.43333"
    },
    {
        "name": "Koszewnica",
        "numerStacji": "5101797",
        "lat": "52.169167",
        "lon": "21.986941"
    },
    {
        "name": "Krosnowa",
        "numerStacji": "5101799",
        "lat": "51.863336",
        "lon": "19.923332"
    },
    {
        "name": "Mysłowice Kosztowy",
        "numerStacji": "5101800",
        "lat": "50.174443",
        "lon": "19.160274"
    },
    {
        "name": "Kątne",
        "numerStacji": "5101803",
        "lat": "52.60722",
        "lon": "20.762502"
    },
    {
        "name": "Kotomierz",
        "numerStacji": "5101804",
        "lat": "53.284998",
        "lon": "18.121669"
    },
    {
        "name": "Konotopie",
        "numerStacji": "5101805",
        "lat": "52.869723",
        "lon": "19.102779"
    },
    {
        "name": "Kotlin",
        "numerStacji": "5101806",
        "lat": "51.914718",
        "lon": "17.648612"
    },
    {
        "name": "Katowice Podlesie",
        "numerStacji": "5101808",
        "lat": "50.183054",
        "lon": "18.960282"
    },
    {
        "name": "Kostomłoty",
        "numerStacji": "5101809",
        "lat": "50.921114",
        "lon": "20.61667"
    },
    {
        "name": "Katowice Szopienice Południowe",
        "numerStacji": "5101812",
        "lat": "50.258887",
        "lon": "19.093052"
    },
    {
        "name": "Kostow",
        "numerStacji": "5101815",
        "lat": "51.164721",
        "lon": "18.147504"
    },
    {
        "name": "Kartuzy",
        "numerStacji": "5101816",
        "lat": "54.333886",
        "lon": "18.206114"
    },
    {
        "name": "Kąty Wrocławskie",
        "numerStacji": "5101817",
        "lat": "51.038333",
        "lon": "16.751111"
    },
    {
        "name": "Krostkowo",
        "numerStacji": "5101818",
        "lat": "53.107776",
        "lon": "17.208329"
    },
    {
        "name": "Kostrzyn Wielkopolski",
        "numerStacji": "5101819",
        "lat": "52.393331",
        "lon": "17.225004"
    },
    {
        "name": "Kubice",
        "numerStacji": "5101821",
        "lat": "50.475554",
        "lon": "17.442498"
    },
    {
        "name": "Kundzin",
        "numerStacji": "5101823",
        "lat": "53.439442",
        "lon": "23.590832"
    },
    {
        "name": "Krusze",
        "numerStacji": "5101826",
        "lat": "52.42722",
        "lon": "21.370281"
    },
    {
        "name": "Kuźnica Hel",
        "numerStacji": "5101827",
        "lat": "54.736109",
        "lon": "18.577503"
    },
    {
        "name": "Kuklinów",
        "numerStacji": "5101830",
        "lat": "51.719167",
        "lon": "17.319166"
    },
    {
        "name": "Kotowo",
        "numerStacji": "5101832",
        "lat": "52.228334",
        "lon": "16.483331"
    },
    {
        "name": "Kunów",
        "numerStacji": "5101833",
        "lat": "50.968891",
        "lon": "21.293612"
    },
    {
        "name": "Kupienino",
        "numerStacji": "5101835",
        "lat": "52.257225",
        "lon": "15.613337"
    },
    {
        "name": "Kusięta Nowe",
        "numerStacji": "5101837",
        "lat": "50.778059",
        "lon": "19.262778"
    },
    {
        "name": "Kulice Tczewskie",
        "numerStacji": "5101838",
        "lat": "53.879446",
        "lon": "18.69056"
    },
    {
        "name": "Kuźnia Raciborska",
        "numerStacji": "5101843",
        "lat": "50.200556",
        "lon": "18.298334"
    },
    {
        "name": "Krzewie",
        "numerStacji": "5101844",
        "lat": "52.235274",
        "lon": "19.165559"
    },
    {
        "name": "Królewo Malborskie",
        "numerStacji": "5101848",
        "lat": "54.037503",
        "lon": "19.118609"
    },
    {
        "name": "Kwieciszowice",
        "numerStacji": "5101849",
        "lat": "50.924997",
        "lon": "15.502779"
    },
    {
        "name": "Kwidzyn",
        "numerStacji": "5101850",
        "lat": "53.731393",
        "lon": "18.933611"
    },
    {
        "name": "Kawnice",
        "numerStacji": "5101851",
        "lat": "52.249719",
        "lon": "18.151109"
    },
    {
        "name": "Krzepow",
        "numerStacji": "5101854",
        "lat": "51.64444",
        "lon": "16.134163"
    },
    {
        "name": "Kwiatki",
        "numerStacji": "5101855",
        "lat": "53.578334",
        "lon": "18.421666"
    },
    {
        "name": "Karwica Mazurska",
        "numerStacji": "5101859",
        "lat": "53.617221",
        "lon": "21.443893"
    },
    {
        "name": "Kalisz Winiary",
        "numerStacji": "5101860",
        "lat": "51.733613",
        "lon": "18.143054"
    },
    {
        "name": "Krzeszowice",
        "numerStacji": "5101863",
        "lat": "50.130836",
        "lon": "19.632225"
    },
    {
        "name": "Kolonowskie",
        "numerStacji": "5101864",
        "lat": "50.651941",
        "lon": "18.388055"
    },
    {
        "name": "Krzycko Wielkie",
        "numerStacji": "5101866",
        "lat": "51.904165",
        "lon": "16.452777"
    },
    {
        "name": "Korwinów",
        "numerStacji": "5101868",
        "lat": "50.738893",
        "lon": "19.176391"
    },
    {
        "name": "Korzybie",
        "numerStacji": "5101875",
        "lat": "54.296114",
        "lon": "16.873885"
    },
    {
        "name": "Kończyce",
        "numerStacji": "5101876",
        "lat": "49.850552",
        "lon": "18.625281"
    },
    {
        "name": "Krzywda",
        "numerStacji": "5101877",
        "lat": "51.794721",
        "lon": "22.204722"
    },
    {
        "name": "Krzymosze",
        "numerStacji": "5101880",
        "lat": "52.178057",
        "lon": "22.43917"
    },
    {
        "name": "Kruszyna",
        "numerStacji": "5101881",
        "lat": "51.571942",
        "lon": "21.178613"
    },
    {
        "name": "Kończyce Radomskie",
        "numerStacji": "5101883",
        "lat": "51.349171",
        "lon": "21.043891"
    },
    {
        "name": "Krzyżowa",
        "numerStacji": "5101885",
        "lat": "50.793889",
        "lon": "16.530003"
    },
    {
        "name": "Krzywizna",
        "numerStacji": "5101887",
        "lat": "51.027222",
        "lon": "18.201943"
    },
    {
        "name": "Kalwaria Zebrzydowska",
        "numerStacji": "5101889",
        "lat": "49.873888",
        "lon": "19.673612"
    },
    {
        "name": "Karzec",
        "numerStacji": "5101890",
        "lat": "51.754719",
        "lon": "16.90417"
    },
    {
        "name": "Kozłowo",
        "numerStacji": "5101893",
        "lat": "53.310276",
        "lon": "20.312502"
    },
    {
        "name": "Konin Żagański",
        "numerStacji": "5101894",
        "lat": "51.545558",
        "lon": "15.191671"
    },
    {
        "name": "Konin Zachód",
        "numerStacji": "5101895",
        "lat": "52.236667",
        "lon": "18.222222"
    },
    {
        "name": "Krzcięcice",
        "numerStacji": "5101897",
        "lat": "50.587497",
        "lon": "20.140278"
    },
    {
        "name": "Koziołek",
        "numerStacji": "5101898",
        "lat": "52.865831",
        "lon": "19.498888"
    },
    {
        "name": "Kotórz Mały",
        "numerStacji": "5101900",
        "lat": "50.729167",
        "lon": "18.036388"
    },
    {
        "name": "Korzenica",
        "numerStacji": "5101901",
        "lat": "50.05583",
        "lon": "22.936948"
    },
    {
        "name": "Kozia Góra",
        "numerStacji": "5101902",
        "lat": "53.853332",
        "lon": "20.080553"
    },
    {
        "name": "Koziebrody",
        "numerStacji": "5101905",
        "lat": "52.802223",
        "lon": "19.972503"
    },
    {
        "name": "Korzeńsko",
        "numerStacji": "5101906",
        "lat": "51.543886",
        "lon": "16.87278"
    },
    {
        "name": "Kozłów",
        "numerStacji": "5101911",
        "lat": "50.47444",
        "lon": "20.012226"
    },
    {
        "name": "Ładzin",
        "numerStacji": "5101917",
        "lat": "53.910557",
        "lon": "14.562777"
    },
    {
        "name": "Lasek",
        "numerStacji": "5101918",
        "lat": "49.499443",
        "lon": "19.979443"
    },
    {
        "name": "Łąg",
        "numerStacji": "5101919",
        "lat": "53.831111",
        "lon": "18.062781"
    },
    {
        "name": "Lachowice",
        "numerStacji": "5101920",
        "lat": "49.723337",
        "lon": "19.503608"
    },
    {
        "name": "Laliki",
        "numerStacji": "5101924",
        "lat": "49.523057",
        "lon": "19.006109"
    },
    {
        "name": "Łambinowice",
        "numerStacji": "5101925",
        "lat": "50.537499",
        "lon": "17.565003"
    },
    {
        "name": "Łankiejmy",
        "numerStacji": "5101926",
        "lat": "54.142218",
        "lon": "21.069726"
    },
    {
        "name": "Łapy Osse",
        "numerStacji": "5101927",
        "lat": "52.97389",
        "lon": "22.839999"
    },
    {
        "name": "Łąkociny",
        "numerStacji": "5101929",
        "lat": "51.656944",
        "lon": "17.668891"
    },
    {
        "name": "Łask",
        "numerStacji": "5101931",
        "lat": "51.603889",
        "lon": "19.111948"
    },
    {
        "name": "Łańcut",
        "numerStacji": "5101932",
        "lat": "50.081665",
        "lon": "22.227501"
    },
    {
        "name": "Lasów",
        "numerStacji": "5101933",
        "lat": "51.22556",
        "lon": "15.035277"
    },
    {
        "name": "Ławica",
        "numerStacji": "5101934",
        "lat": "50.477226",
        "lon": "16.67028"
    },
    {
        "name": "Łaznów",
        "numerStacji": "5101935",
        "lat": "51.631387",
        "lon": "19.755"
    },
    {
        "name": "Łazy",
        "numerStacji": "5101936",
        "lat": "50.42917",
        "lon": "19.390829"
    },
    {
        "name": "Łazek",
        "numerStacji": "5101937",
        "lat": "53.640557",
        "lon": "18.215274"
    },
    {
        "name": "Lubaczów",
        "numerStacji": "5101939",
        "lat": "50.165552",
        "lon": "23.124445"
    },
    {
        "name": "Lubania-Lipiny",
        "numerStacji": "5101943",
        "lat": "53.388886",
        "lon": "18.09694"
    },
    {
        "name": "Lubawka",
        "numerStacji": "5101944",
        "lat": "50.706388",
        "lon": "16.003334"
    },
    {
        "name": "Lubanice",
        "numerStacji": "5101947",
        "lat": "51.692226",
        "lon": "15.120557"
    },
    {
        "name": "Lewin Brzeski Po",
        "numerStacji": "5101950",
        "lat": "50.757501",
        "lon": "17.616664"
    },
    {
        "name": "Lubaszowa",
        "numerStacji": "5101951",
        "lat": "49.864719",
        "lon": "21.035837"
    },
    {
        "name": "Lubartów",
        "numerStacji": "5101952",
        "lat": "51.445832",
        "lon": "22.608059"
    },
    {
        "name": "Lubicz",
        "numerStacji": "5101954",
        "lat": "53.028059",
        "lon": "18.745278"
    },
    {
        "name": "Lachowice Centrum",
        "numerStacji": "5101955",
        "lat": "49.711948",
        "lon": "19.472775"
    },
    {
        "name": "Luciążanka",
        "numerStacji": "5101956",
        "lat": "51.277221",
        "lon": "19.648055"
    },
    {
        "name": "Lesięcin",
        "numerStacji": "5101958",
        "lat": "53.585552",
        "lon": "15.57"
    },
    {
        "name": "Łąck",
        "numerStacji": "5101959",
        "lat": "52.486945",
        "lon": "19.595837"
    },
    {
        "name": "Czerwionka",
        "numerStacji": "5101963",
        "lat": "50.149165",
        "lon": "18.684726"
    },
    {
        "name": "Łęczyca",
        "numerStacji": "5101964",
        "lat": "52.04917",
        "lon": "19.193336"
    },
    {
        "name": "Łączna",
        "numerStacji": "5101965",
        "lat": "50.99167",
        "lon": "20.798612"
    },
    {
        "name": "Czerwionka Dębieńsko",
        "numerStacji": "5101966",
        "lat": "50.156941",
        "lon": "18.663611"
    },
    {
        "name": "Ludynia Dwór",
        "numerStacji": "5101967",
        "lat": "50.847501",
        "lon": "20.115836"
    },
    {
        "name": "Ludwikowice Kłodzkie",
        "numerStacji": "5101970",
        "lat": "50.619445",
        "lon": "16.481947"
    },
    {
        "name": "Łódź Widzew",
        "numerStacji": "5101974",
        "lat": "51.763052",
        "lon": "19.543331"
    },
    {
        "name": "Łeba",
        "numerStacji": "5101977",
        "lat": "54.756667",
        "lon": "17.552778"
    },
    {
        "name": "Lednogóra",
        "numerStacji": "5101979",
        "lat": "52.490837",
        "lon": "17.36306"
    },
    {
        "name": "Legionowo",
        "numerStacji": "5101981",
        "lat": "52.402221",
        "lon": "20.94083"
    },
    {
        "name": "Legnica Piekary",
        "numerStacji": "5101982",
        "lat": "51.20111",
        "lon": "16.19778"
    },
    {
        "name": "Leńcze",
        "numerStacji": "5101987",
        "lat": "49.891948",
        "lon": "19.730837"
    },
    {
        "name": "Leonów",
        "numerStacji": "5101988",
        "lat": "52.157499",
        "lon": "20.166391"
    },
    {
        "name": "Leosia",
        "numerStacji": "5101990",
        "lat": "53.486392",
        "lon": "18.387498"
    },
    {
        "name": "Leszczyny",
        "numerStacji": "5101991",
        "lat": "50.141111",
        "lon": "18.618332"
    },
    {
        "name": "Łętownia",
        "numerStacji": "5101992",
        "lat": "50.363612",
        "lon": "22.255835"
    },
    {
        "name": "Lesiów",
        "numerStacji": "5101994",
        "lat": "51.477501",
        "lon": "21.194721"
    },
    {
        "name": "Lewki",
        "numerStacji": "5101995",
        "lat": "52.730274",
        "lon": "23.211388"
    },
    {
        "name": "Łęgajny",
        "numerStacji": "5101996",
        "lat": "53.821115",
        "lon": "20.617218"
    },
    {
        "name": "Leżajsk",
        "numerStacji": "5101997",
        "lat": "50.262222",
        "lon": "22.420832"
    },
    {
        "name": "Leszno Górne",
        "numerStacji": "5101998",
        "lat": "51.466948",
        "lon": "15.615836"
    },
    {
        "name": "Łaziska Górne Brada",
        "numerStacji": "5101999",
        "lat": "50.157498",
        "lon": "18.821947"
    },
    {
        "name": "Ligowiec",
        "numerStacji": "5102001",
        "lat": "52.435275",
        "lon": "17.038055"
    },
    {
        "name": "Leszno Grzybowo",
        "numerStacji": "5102003",
        "lat": "51.86028",
        "lon": "16.612497"
    },
    {
        "name": "Łęgowo Sulechowskie",
        "numerStacji": "5102006",
        "lat": "52.1325",
        "lon": "15.67556"
    },
    {
        "name": "Libiąż",
        "numerStacji": "5102009",
        "lat": "50.112777",
        "lon": "19.3275"
    },
    {
        "name": "Libusza",
        "numerStacji": "5102010",
        "lat": "49.711948",
        "lon": "21.241115"
    },
    {
        "name": "Lisie Pole Po",
        "numerStacji": "5102013",
        "lat": "53.022504",
        "lon": "14.450834"
    },
    {
        "name": "Lipuska Huta",
        "numerStacji": "5102015",
        "lat": "54.070278",
        "lon": "17.767224"
    },
    {
        "name": "Linowo",
        "numerStacji": "5102021",
        "lat": "53.411108",
        "lon": "19.033337"
    },
    {
        "name": "Lipno",
        "numerStacji": "5102022",
        "lat": "52.854163",
        "lon": "19.17889"
    },
    {
        "name": "Lipki",
        "numerStacji": "5102023",
        "lat": "50.898335",
        "lon": "17.372499"
    },
    {
        "name": "Lisowo",
        "numerStacji": "5102024",
        "lat": "53.431387",
        "lon": "15.297501"
    },
    {
        "name": "Lipowa Tucholska",
        "numerStacji": "5102027",
        "lat": "53.753336",
        "lon": "18.108886"
    },
    {
        "name": "Lipusz",
        "numerStacji": "5102028",
        "lat": "54.09694",
        "lon": "17.780277"
    },
    {
        "name": "Lisewo",
        "numerStacji": "5102030",
        "lat": "54.092778",
        "lon": "18.82556"
    },
    {
        "name": "Lizawice",
        "numerStacji": "5102033",
        "lat": "50.971948",
        "lon": "17.21472"
    },
    {
        "name": "Leokadia",
        "numerStacji": "5102038",
        "lat": "51.767502",
        "lon": "21.632496"
    },
    {
        "name": "Lewin Kłodzki",
        "numerStacji": "5102041",
        "lat": "50.405555",
        "lon": "16.27444"
    },
    {
        "name": "Łęka Opatowska",
        "numerStacji": "5102043",
        "lat": "51.21694",
        "lon": "18.091942"
    },
    {
        "name": "Luboń koło Poznania",
        "numerStacji": "5102044",
        "lat": "52.344169",
        "lon": "16.893059"
    },
    {
        "name": "Łuków Śląski",
        "numerStacji": "5102047",
        "lat": "50.100003",
        "lon": "18.409171"
    },
    {
        "name": "Laski Lubuskie",
        "numerStacji": "5102049",
        "lat": "52.459725",
        "lon": "14.713058"
    },
    {
        "name": "Lublinek",
        "numerStacji": "5102051",
        "lat": "51.720003",
        "lon": "19.358054"
    },
    {
        "name": "Lusławice",
        "numerStacji": "5102053",
        "lat": "50.760836",
        "lon": "19.387503"
    },
    {
        "name": "Lipińskie Małe",
        "numerStacji": "5102057",
        "lat": "53.73694",
        "lon": "22.397226"
    },
    {
        "name": "Lubomino",
        "numerStacji": "5102058",
        "lat": "54.065558",
        "lon": "20.233055"
    },
    {
        "name": "Lubnia",
        "numerStacji": "5102061",
        "lat": "53.935556",
        "lon": "17.742225"
    },
    {
        "name": "Leśniczówka",
        "numerStacji": "5102062",
        "lat": "51.049444",
        "lon": "22.356667"
    },
    {
        "name": "Lniano",
        "numerStacji": "5102063",
        "lat": "53.526664",
        "lon": "18.205556"
    },
    {
        "name": "Linkowo",
        "numerStacji": "5102064",
        "lat": "54.090836",
        "lon": "21.264999"
    },
    {
        "name": "Lipno Nowe",
        "numerStacji": "5102069",
        "lat": "51.919447",
        "lon": "16.570553"
    },
    {
        "name": "Loznica",
        "numerStacji": "5102071",
        "lat": "53.689719",
        "lon": "14.866109"
    },
    {
        "name": "Łochów",
        "numerStacji": "5102073",
        "lat": "52.533886",
        "lon": "21.68778"
    },
    {
        "name": "Łodygowice",
        "numerStacji": "5102074",
        "lat": "49.725279",
        "lon": "19.141109"
    },
    {
        "name": "Łososiowice",
        "numerStacji": "5102075",
        "lat": "51.298607",
        "lon": "16.673336"
    },
    {
        "name": "Łodygowice Górne",
        "numerStacji": "5102076",
        "lat": "49.735275",
        "lon": "19.124443"
    },
    {
        "name": "Łowicz Przedmieście",
        "numerStacji": "5102077",
        "lat": "52.093055",
        "lon": "19.946947"
    },
    {
        "name": "Łódź Niciarniana",
        "numerStacji": "5102081",
        "lat": "51.766666",
        "lon": "19.507779"
    },
    {
        "name": "Łopuchowo",
        "numerStacji": "5102083",
        "lat": "52.613333",
        "lon": "17.094723"
    },
    {
        "name": "Łosiów",
        "numerStacji": "5102085",
        "lat": "50.788334",
        "lon": "17.552499"
    },
    {
        "name": "Lotyń",
        "numerStacji": "5102086",
        "lat": "53.599998",
        "lon": "16.780002"
    },
    {
        "name": "Łowczów",
        "numerStacji": "5102088",
        "lat": "49.912497",
        "lon": "21.003889"
    },
    {
        "name": "Lipa",
        "numerStacji": "5102090",
        "lat": "50.690001",
        "lon": "22.068059"
    },
    {
        "name": "Lipienica",
        "numerStacji": "5102092",
        "lat": "53.446669",
        "lon": "18.1125"
    },
    {
        "name": "Lipinki",
        "numerStacji": "5102093",
        "lat": "53.464441",
        "lon": "19.31861"
    },
    {
        "name": "Lipinki Łużyckie",
        "numerStacji": "5102094",
        "lat": "51.648889",
        "lon": "15.00972"
    },
    {
        "name": "Leopoldów",
        "numerStacji": "5102097",
        "lat": "51.668054",
        "lon": "22.012497"
    },
    {
        "name": "Lipowe Pole",
        "numerStacji": "5102098",
        "lat": "51.155004",
        "lon": "20.901107"
    },
    {
        "name": "Łopatki",
        "numerStacji": "5102100",
        "lat": "51.32944",
        "lon": "22.152225"
    },
    {
        "name": "Lipowa Śląska",
        "numerStacji": "5102101",
        "lat": "50.736943",
        "lon": "17.426947"
    },
    {
        "name": "Laskownica",
        "numerStacji": "5102107",
        "lat": "52.915829",
        "lon": "17.25083"
    },
    {
        "name": "Jelcz-Laskowice",
        "numerStacji": "5102108",
        "lat": "51.037218",
        "lon": "17.345001"
    },
    {
        "name": "Laskowice Oleskie",
        "numerStacji": "5102111",
        "lat": "50.856391",
        "lon": "18.095277"
    },
    {
        "name": "Laski Tucholskie",
        "numerStacji": "5102113",
        "lat": "53.666392",
        "lon": "18.208055"
    },
    {
        "name": "Leszczydół",
        "numerStacji": "5102115",
        "lat": "52.646386",
        "lon": "21.469441"
    },
    {
        "name": "Letnica",
        "numerStacji": "5102118",
        "lat": "51.889998",
        "lon": "15.318886"
    },
    {
        "name": "Lublin Północny",
        "numerStacji": "5102121",
        "lat": "51.241948",
        "lon": "22.59889"
    },
    {
        "name": "Łubiana",
        "numerStacji": "5102122",
        "lat": "54.114999",
        "lon": "17.867499"
    },
    {
        "name": "Łuczyce",
        "numerStacji": "5102124",
        "lat": "50.162775",
        "lon": "20.074441"
    },
    {
        "name": "Lubanie",
        "numerStacji": "5102126",
        "lat": "52.741942",
        "lon": "18.924442"
    },
    {
        "name": "Ługi Górzyckie",
        "numerStacji": "5102128",
        "lat": "52.516115",
        "lon": "14.651114"
    },
    {
        "name": "Lubiewo",
        "numerStacji": "5102130",
        "lat": "53.915277",
        "lon": "14.418059"
    },
    {
        "name": "Lubajny",
        "numerStacji": "5102131",
        "lat": "53.700282",
        "lon": "20.025557"
    },
    {
        "name": "Łuków Łapiguz",
        "numerStacji": "5102132",
        "lat": "51.92333",
        "lon": "22.359445"
    },
    {
        "name": "Łubowo",
        "numerStacji": "5102136",
        "lat": "53.583889",
        "lon": "16.389726"
    },
    {
        "name": "Lutol Suchy",
        "numerStacji": "5102140",
        "lat": "52.343612",
        "lon": "15.754719"
    },
    {
        "name": "Ludynia",
        "numerStacji": "5102145",
        "lat": "50.851942",
        "lon": "20.162778"
    },
    {
        "name": "Luzino",
        "numerStacji": "5102146",
        "lat": "54.567219",
        "lon": "18.10361"
    },
    {
        "name": "Lewickie",
        "numerStacji": "5102150",
        "lat": "53.028329",
        "lon": "23.124723"
    },
    {
        "name": "Lwówek Śląski",
        "numerStacji": "5102152",
        "lat": "51.109725",
        "lon": "15.593893"
    },
    {
        "name": "Lubycza Królewska",
        "numerStacji": "5102158",
        "lat": "50.339718",
        "lon": "23.530281"
    },
    {
        "name": "Lucynów",
        "numerStacji": "5102161",
        "lat": "52.553609",
        "lon": "21.459445"
    },
    {
        "name": "Łysomice",
        "numerStacji": "5102162",
        "lat": "53.085833",
        "lon": "18.620274"
    },
    {
        "name": "Łaskarzew Przystanek",
        "numerStacji": "5102163",
        "lat": "51.798056",
        "lon": "21.608612"
    },
    {
        "name": "Łomnica-Zdrój",
        "numerStacji": "5102166",
        "lat": "49.419996",
        "lon": "20.72472"
    },
    {
        "name": "Łaziska Górne",
        "numerStacji": "5102167",
        "lat": "50.159718",
        "lon": "18.846667"
    },
    {
        "name": "Lubzina",
        "numerStacji": "5102168",
        "lat": "50.072226",
        "lon": "21.529165"
    },
    {
        "name": "Lublin Zemborzyce",
        "numerStacji": "5102169",
        "lat": "51.171113",
        "lon": "22.50222"
    },
    {
        "name": "Majdan",
        "numerStacji": "5102174",
        "lat": "51.148334",
        "lon": "22.426387"
    },
    {
        "name": "Kosina",
        "numerStacji": "5102175",
        "lat": "50.083607",
        "lon": "22.322499"
    },
    {
        "name": "Małe Gacno",
        "numerStacji": "5102178",
        "lat": "53.610003",
        "lon": "18.109444"
    },
    {
        "name": "Maków Podhalański",
        "numerStacji": "5102179",
        "lat": "49.726663",
        "lon": "19.67861"
    },
    {
        "name": "Majewo",
        "numerStacji": "5102181",
        "lat": "53.802219",
        "lon": "18.679441"
    },
    {
        "name": "Maksymilianowo",
        "numerStacji": "5102182",
        "lat": "53.21472",
        "lon": "18.029718"
    },
    {
        "name": "Małomice",
        "numerStacji": "5102184",
        "lat": "51.54972",
        "lon": "15.446668"
    },
    {
        "name": "Marczów",
        "numerStacji": "5102187",
        "lat": "51.050837",
        "lon": "15.664719"
    },
    {
        "name": "Masłońskie Natalin",
        "numerStacji": "5102188",
        "lat": "50.650556",
        "lon": "19.254166"
    },
    {
        "name": "Matysy",
        "numerStacji": "5102189",
        "lat": "51.939996",
        "lon": "22.493887"
    },
    {
        "name": "Maziły",
        "numerStacji": "5102192",
        "lat": "50.404998",
        "lon": "23.314441"
    },
    {
        "name": "Mysłowice Brzezinka",
        "numerStacji": "5102194",
        "lat": "50.197779",
        "lon": "19.15444"
    },
    {
        "name": "Milcza",
        "numerStacji": "5102196",
        "lat": "49.60556",
        "lon": "21.902775"
    },
    {
        "name": "Mościsko Dzierżoniowskie",
        "numerStacji": "5102197",
        "lat": "50.771947",
        "lon": "16.580558"
    },
    {
        "name": "Marcinkowo",
        "numerStacji": "5102201",
        "lat": "53.695553",
        "lon": "20.67083"
    },
    {
        "name": "Michałów-Reginów",
        "numerStacji": "5102203",
        "lat": "52.422222",
        "lon": "20.962224"
    },
    {
        "name": "Międzyborów",
        "numerStacji": "5102205",
        "lat": "52.063607",
        "lon": "20.482776"
    },
    {
        "name": "Modlin",
        "numerStacji": "5102206",
        "lat": "52.443608",
        "lon": "20.704171"
    },
    {
        "name": "Miedwiecko",
        "numerStacji": "5102208",
        "lat": "53.364723",
        "lon": "14.92417"
    },
    {
        "name": "Mordy",
        "numerStacji": "5102209",
        "lat": "52.195829",
        "lon": "22.496944"
    },
    {
        "name": "Melno",
        "numerStacji": "5102211",
        "lat": "53.436943",
        "lon": "18.94722"
    },
    {
        "name": "Międzybórz Sycowski",
        "numerStacji": "5102213",
        "lat": "51.401111",
        "lon": "17.653888"
    },
    {
        "name": "Męcikał",
        "numerStacji": "5102218",
        "lat": "53.832225",
        "lon": "17.671112"
    },
    {
        "name": "Mieszkowice",
        "numerStacji": "5102220",
        "lat": "52.781944",
        "lon": "14.485829"
    },
    {
        "name": "Mielno Koszalińskie",
        "numerStacji": "5102221",
        "lat": "54.25417",
        "lon": "16.054168"
    },
    {
        "name": "Mierzęcin Strzelecki",
        "numerStacji": "5102226",
        "lat": "52.94944",
        "lon": "15.832224"
    },
    {
        "name": "Męcka Wola",
        "numerStacji": "5102228",
        "lat": "51.608887",
        "lon": "18.845004"
    },
    {
        "name": "Międzyrzecz",
        "numerStacji": "5102229",
        "lat": "52.44528",
        "lon": "15.592779"
    },
    {
        "name": "Morąg Kolonia",
        "numerStacji": "5102231",
        "lat": "53.909164",
        "lon": "19.946947"
    },
    {
        "name": "Miały",
        "numerStacji": "5102234",
        "lat": "52.809442",
        "lon": "16.175837"
    },
    {
        "name": "Michalczew",
        "numerStacji": "5102236",
        "lat": "51.843892",
        "lon": "21.12083"
    },
    {
        "name": "Miastko",
        "numerStacji": "5102239",
        "lat": "53.996944",
        "lon": "16.966393"
    },
    {
        "name": "Michalin",
        "numerStacji": "5102241",
        "lat": "52.14806",
        "lon": "21.224718"
    },
    {
        "name": "Mienia",
        "numerStacji": "5102242",
        "lat": "52.149445",
        "lon": "21.687222"
    },
    {
        "name": "Milejów",
        "numerStacji": "5102243",
        "lat": "51.355832",
        "lon": "19.675832"
    },
    {
        "name": "Mikołów",
        "numerStacji": "5102244",
        "lat": "50.17278",
        "lon": "18.899164"
    },
    {
        "name": "Milcz",
        "numerStacji": "5102245",
        "lat": "53.042226",
        "lon": "16.856671"
    },
    {
        "name": "Minkowice",
        "numerStacji": "5102247",
        "lat": "51.217497",
        "lon": "22.763609"
    },
    {
        "name": "Międzyrzec Podlaski",
        "numerStacji": "5102249",
        "lat": "51.976115",
        "lon": "22.78556"
    },
    {
        "name": "Misie",
        "numerStacji": "5102252",
        "lat": "51.95917",
        "lon": "22.688333"
    },
    {
        "name": "Milik",
        "numerStacji": "5102256",
        "lat": "49.346671",
        "lon": "20.851387"
    },
    {
        "name": "Mikołów Jamna",
        "numerStacji": "5102259",
        "lat": "50.193608",
        "lon": "18.921664"
    },
    {
        "name": "Majdan Królewski",
        "numerStacji": "5102260",
        "lat": "50.378893",
        "lon": "21.725274"
    },
    {
        "name": "Mika",
        "numerStacji": "5102262",
        "lat": "51.673052",
        "lon": "21.748052"
    },
    {
        "name": "Miłkowice",
        "numerStacji": "5102263",
        "lat": "51.256115",
        "lon": "16.053611"
    },
    {
        "name": "Moskale",
        "numerStacji": "5102264",
        "lat": "50.524168",
        "lon": "22.109724"
    },
    {
        "name": "Miękinia",
        "numerStacji": "5102265",
        "lat": "51.188057",
        "lon": "16.74"
    },
    {
        "name": "Miasteczko Krajeńskie",
        "numerStacji": "5102266",
        "lat": "53.0927794",
        "lon": "16.9482605"
    },
    {
        "name": "Maków",
        "numerStacji": "5102269",
        "lat": "51.942225",
        "lon": "20.045558"
    },
    {
        "name": "Mąkoszyce",
        "numerStacji": "5102271",
        "lat": "50.938885",
        "lon": "17.631946"
    },
    {
        "name": "Mikułowa",
        "numerStacji": "5102272",
        "lat": "51.095001",
        "lon": "15.108332"
    },
    {
        "name": "Mokrzyca Wielka Po",
        "numerStacji": "5102274",
        "lat": "53.875832",
        "lon": "14.579164"
    },
    {
        "name": "Miłobądz",
        "numerStacji": "5102277",
        "lat": "54.147225",
        "lon": "18.74028"
    },
    {
        "name": "Malczyce",
        "numerStacji": "5102278",
        "lat": "51.215834",
        "lon": "16.488059"
    },
    {
        "name": "Mleczewo",
        "numerStacji": "5102279",
        "lat": "53.919726",
        "lon": "19.122222"
    },
    {
        "name": "Małogoszcz",
        "numerStacji": "5102280",
        "lat": "50.850279",
        "lon": "20.273336"
    },
    {
        "name": "Mikołajki Pomorskie",
        "numerStacji": "5102283",
        "lat": "53.849718",
        "lon": "19.158053"
    },
    {
        "name": "Młyńsko",
        "numerStacji": "5102284",
        "lat": "50.989171",
        "lon": "15.45056"
    },
    {
        "name": "Miłocin Lubelski",
        "numerStacji": "5102285",
        "lat": "51.268052",
        "lon": "22.313609"
    },
    {
        "name": "Młodów",
        "numerStacji": "5102287",
        "lat": "49.46861",
        "lon": "20.696108"
    },
    {
        "name": "Miłogoszcz",
        "numerStacji": "5102288",
        "lat": "54.205278",
        "lon": "15.908893"
    },
    {
        "name": "Mława Miasto",
        "numerStacji": "5102292",
        "lat": "53.105555",
        "lon": "20.365556"
    },
    {
        "name": "Mińsk Mazowiecki",
        "numerStacji": "5102293",
        "lat": "52.175837",
        "lon": "21.551665"
    },
    {
        "name": "Machnacz",
        "numerStacji": "5102295",
        "lat": "53.332497",
        "lon": "23.319169"
    },
    {
        "name": "Milanówek",
        "numerStacji": "5102298",
        "lat": "52.125003",
        "lon": "20.668331"
    },
    {
        "name": "Mańkowice",
        "numerStacji": "5102300",
        "lat": "50.489164",
        "lon": "17.477781"
    },
    {
        "name": "Minkowice Oławskie",
        "numerStacji": "5102301",
        "lat": "51.011941",
        "lon": "17.456386"
    },
    {
        "name": "Myszków Nowa Wieś",
        "numerStacji": "5102302",
        "lat": "50.594724",
        "lon": "19.291669"
    },
    {
        "name": "Mokra",
        "numerStacji": "5102303",
        "lat": "51.978614",
        "lon": "20.099718"
    },
    {
        "name": "Morochów",
        "numerStacji": "5102307",
        "lat": "49.462218",
        "lon": "22.186942"
    },
    {
        "name": "Mońki",
        "numerStacji": "5102308",
        "lat": "53.402496",
        "lon": "22.796671"
    },
    {
        "name": "Mokrz",
        "numerStacji": "5102310",
        "lat": "52.741115",
        "lon": "16.278332"
    },
    {
        "name": "Modla",
        "numerStacji": "5102311",
        "lat": "51.375833",
        "lon": "15.813329"
    },
    {
        "name": "Mokre Małopolskie",
        "numerStacji": "5102312",
        "lat": "49.447503",
        "lon": "22.167498"
    },
    {
        "name": "Montowo",
        "numerStacji": "5102313",
        "lat": "53.416115",
        "lon": "19.779999"
    },
    {
        "name": "Mostki",
        "numerStacji": "5102317",
        "lat": "52.269442",
        "lon": "15.394171"
    },
    {
        "name": "Motycz",
        "numerStacji": "5102318",
        "lat": "51.221389",
        "lon": "22.42361"
    },
    {
        "name": "Mokrzyca",
        "numerStacji": "5102320",
        "lat": "54.557223",
        "lon": "16.883612"
    },
    {
        "name": "Mrzezino",
        "numerStacji": "5102324",
        "lat": "54.652779",
        "lon": "18.412776"
    },
    {
        "name": "Myszków Mrzygłód",
        "numerStacji": "5102325",
        "lat": "50.543054",
        "lon": "19.377498"
    },
    {
        "name": "Martiany",
        "numerStacji": "5102332",
        "lat": "54.026941",
        "lon": "21.514998"
    },
    {
        "name": "Mrozów Po",
        "numerStacji": "5102335",
        "lat": "51.183886",
        "lon": "16.792497"
    },
    {
        "name": "Mścice",
        "numerStacji": "5102340",
        "lat": "54.214168",
        "lon": "16.073612"
    },
    {
        "name": "Myszków",
        "numerStacji": "5102341",
        "lat": "50.574445",
        "lon": "19.328336"
    },
    {
        "name": "Mosina",
        "numerStacji": "5102343",
        "lat": "52.241108",
        "lon": "16.852221"
    },
    {
        "name": "Miąsowa",
        "numerStacji": "5102344",
        "lat": "50.719441",
        "lon": "20.364999"
    },
    {
        "name": "Mszalnica",
        "numerStacji": "5102349",
        "lat": "49.593056",
        "lon": "20.830002"
    },
    {
        "name": "Mosty",
        "numerStacji": "5102350",
        "lat": "53.574163",
        "lon": "14.94"
    },
    {
        "name": "Mietków",
        "numerStacji": "5102353",
        "lat": "50.984721",
        "lon": "16.654719"
    },
    {
        "name": "Mostówka",
        "numerStacji": "5102354",
        "lat": "52.519998",
        "lon": "21.442779"
    },
    {
        "name": "Motycz Leśny",
        "numerStacji": "5102355",
        "lat": "51.243889",
        "lon": "22.359166"
    },
    {
        "name": "Munina",
        "numerStacji": "5102356",
        "lat": "49.989723",
        "lon": "22.719166"
    },
    {
        "name": "Murowana Goślina",
        "numerStacji": "5102357",
        "lat": "52.575003",
        "lon": "17.015834"
    },
    {
        "name": "Muszyna Zdrój",
        "numerStacji": "5102362",
        "lat": "49.357782",
        "lon": "20.896387"
    },
    {
        "name": "Milówka",
        "numerStacji": "5102364",
        "lat": "49.555832",
        "lon": "19.093888"
    },
    {
        "name": "Małowice Wołowskie",
        "numerStacji": "5102366",
        "lat": "51.404446",
        "lon": "16.471663"
    },
    {
        "name": "Mysłaków",
        "numerStacji": "5102367",
        "lat": "52.091941",
        "lon": "20.013889"
    },
    {
        "name": "Mordy Miasto",
        "numerStacji": "5102374",
        "lat": "52.203056",
        "lon": "22.520558"
    },
    {
        "name": "Myśliczyn",
        "numerStacji": "5102375",
        "lat": "50.525552",
        "lon": "17.328335"
    },
    {
        "name": "Myszków Światowit",
        "numerStacji": "5102379",
        "lat": "50.565554",
        "lon": "19.359726"
    },
    {
        "name": "Moszczenica",
        "numerStacji": "5102383",
        "lat": "51.502779",
        "lon": "19.700004"
    },
    {
        "name": "Morzeszczyn",
        "numerStacji": "5102384",
        "lat": "53.837223",
        "lon": "18.686668"
    },
    {
        "name": "Mieszków",
        "numerStacji": "5102385",
        "lat": "52.023614",
        "lon": "17.440278"
    },
    {
        "name": "Moszczenica Pomorska",
        "numerStacji": "5102388",
        "lat": "53.641942",
        "lon": "17.488055"
    },
    {
        "name": "Morzyca",
        "numerStacji": "5102390",
        "lat": "53.218613",
        "lon": "15.155552"
    },
    {
        "name": "Najmowo",
        "numerStacji": "5102394",
        "lat": "53.307219",
        "lon": "19.321109"
    },
    {
        "name": "Namyślin",
        "numerStacji": "5102396",
        "lat": "52.678334",
        "lon": "14.570274"
    },
    {
        "name": "Naterki",
        "numerStacji": "5102400",
        "lat": "53.746109",
        "lon": "20.376667"
    },
    {
        "name": "Narzym",
        "numerStacji": "5102403",
        "lat": "53.189443",
        "lon": "20.254719"
    },
    {
        "name": "Nowa Dęba",
        "numerStacji": "5102407",
        "lat": "50.41556",
        "lon": "21.739719"
    },
    {
        "name": "Nowy Dwór Mazowiecki",
        "numerStacji": "5102409",
        "lat": "52.425279",
        "lon": "20.724999"
    },
    {
        "name": "Nekla",
        "numerStacji": "5102411",
        "lat": "52.354444",
        "lon": "17.399997"
    },
    {
        "name": "Niedoradz",
        "numerStacji": "5102412",
        "lat": "51.865556",
        "lon": "15.664441"
    },
    {
        "name": "Nędza",
        "numerStacji": "5102415",
        "lat": "50.156671",
        "lon": "18.291664"
    },
    {
        "name": "Niedźwiedź",
        "numerStacji": "5102416",
        "lat": "50.205833",
        "lon": "20.081668"
    },
    {
        "name": "Nieszawa Waganiec",
        "numerStacji": "5102417",
        "lat": "52.803059",
        "lon": "18.870003"
    },
    {
        "name": "Niedźwiedź Wielkopolski",
        "numerStacji": "5102418",
        "lat": "51.485834",
        "lon": "17.883886"
    },
    {
        "name": "Niedźwiada Łowicka",
        "numerStacji": "5102420",
        "lat": "52.140276",
        "lon": "19.884723"
    },
    {
        "name": "Niemojki",
        "numerStacji": "5102423",
        "lat": "52.25861",
        "lon": "22.700558"
    },
    {
        "name": "Niewodnica",
        "numerStacji": "5102428",
        "lat": "53.082777",
        "lon": "23.045834"
    },
    {
        "name": "Nędza Wieś",
        "numerStacji": "5102429",
        "lat": "50.164725",
        "lon": "18.311108"
    },
    {
        "name": "Niegocin",
        "numerStacji": "5102430",
        "lat": "54.019722",
        "lon": "21.738892"
    },
    {
        "name": "Nowogrodziec",
        "numerStacji": "5102431",
        "lat": "51.190835",
        "lon": "15.391942"
    },
    {
        "name": "Niedrzwica",
        "numerStacji": "5102433",
        "lat": "51.114445",
        "lon": "22.376947"
    },
    {
        "name": "Nicwałd",
        "numerStacji": "5102435",
        "lat": "53.459721",
        "lon": "18.880278"
    },
    {
        "name": "Nisko Podwolina",
        "numerStacji": "5102440",
        "lat": "50.495277",
        "lon": "22.173611"
    },
    {
        "name": "Nisko Osiedle",
        "numerStacji": "5102445",
        "lat": "50.520833",
        "lon": "22.122777"
    },
    {
        "name": "Nieporęt",
        "numerStacji": "5102446",
        "lat": "52.430834",
        "lon": "21.031666"
    },
    {
        "name": "Nisko",
        "numerStacji": "5102447",
        "lat": "50.513336",
        "lon": "22.14222"
    },
    {
        "name": "Niwnice",
        "numerStacji": "5102450",
        "lat": "51.139444",
        "lon": "15.501385"
    },
    {
        "name": "Niziny",
        "numerStacji": "5102451",
        "lat": "49.878608",
        "lon": "22.861942"
    },
    {
        "name": "Nakło Śląskie",
        "numerStacji": "5102453",
        "lat": "50.429718",
        "lon": "18.903335"
    },
    {
        "name": "Niedrzwica Kościelna",
        "numerStacji": "5102454",
        "lat": "51.081391",
        "lon": "22.362222"
    },
    {
        "name": "Nowy Las",
        "numerStacji": "5102456",
        "lat": "50.362218",
        "lon": "17.413607"
    },
    {
        "name": "Nowa Wieś Lęborska",
        "numerStacji": "5102457",
        "lat": "54.558329",
        "lon": "17.721667"
    },
    {
        "name": "Nowy Młyn",
        "numerStacji": "5102458",
        "lat": "54.066385",
        "lon": "21.32778"
    },
    {
        "name": "Nowogród Bobrzański",
        "numerStacji": "5102459",
        "lat": "51.811945",
        "lon": "15.244168"
    },
    {
        "name": "Nowe Drezdenko",
        "numerStacji": "5102461",
        "lat": "52.853893",
        "lon": "15.833609"
    },
    {
        "name": "Nowa Grobla",
        "numerStacji": "5102462",
        "lat": "50.088614",
        "lon": "22.993337"
    },
    {
        "name": "Nowa Iwiczna",
        "numerStacji": "5102463",
        "lat": "52.089163",
        "lon": "20.996114"
    },
    {
        "name": "Nosówko",
        "numerStacji": "5102469",
        "lat": "54.093335",
        "lon": "16.053053"
    },
    {
        "name": "Nowe Kutnowskie",
        "numerStacji": "5102470",
        "lat": "52.237782",
        "lon": "19.226389"
    },
    {
        "name": "Nielep",
        "numerStacji": "5102472",
        "lat": "53.829726",
        "lon": "15.870833"
    },
    {
        "name": "Nisko Racławice",
        "numerStacji": "5102475",
        "lat": "50.503888",
        "lon": "22.158886"
    },
    {
        "name": "Nowa Ruda Przedmieście",
        "numerStacji": "5102476",
        "lat": "50.588333",
        "lon": "16.515279"
    },
    {
        "name": "Nowy Sącz Biegonice",
        "numerStacji": "5102477",
        "lat": "49.586108",
        "lon": "20.660555"
    },
    {
        "name": "Nowosielce",
        "numerStacji": "5102479",
        "lat": "49.562502",
        "lon": "22.085552"
    },
    {
        "name": "Nowy Sącz Jamnica",
        "numerStacji": "5102480",
        "lat": "49.586665",
        "lon": "20.744164"
    },
    {
        "name": "Nowa Sarzyna Kolonia",
        "numerStacji": "5102481",
        "lat": "50.331107",
        "lon": "22.33583"
    },
    {
        "name": "Nowe Skalmierzyce",
        "numerStacji": "5102482",
        "lat": "51.708892",
        "lon": "17.998337"
    },
    {
        "name": "Nowa Sarzyna",
        "numerStacji": "5102484",
        "lat": "50.321111",
        "lon": "22.347219"
    },
    {
        "name": "Nowy Świętów",
        "numerStacji": "5102486",
        "lat": "50.377779",
        "lon": "17.369164"
    },
    {
        "name": "Nietkowice",
        "numerStacji": "5102487",
        "lat": "52.057224",
        "lon": "15.352218"
    },
    {
        "name": "Nurzec",
        "numerStacji": "5102490",
        "lat": "52.460004",
        "lon": "23.08278"
    },
    {
        "name": "Nowy Widzim",
        "numerStacji": "5102491",
        "lat": "52.081387",
        "lon": "16.141948"
    },
    {
        "name": "Nowa Wieś Cierpkie",
        "numerStacji": "5102493",
        "lat": "54.024163",
        "lon": "19.656388"
    },
    {
        "name": "Nowogród Osiedle",
        "numerStacji": "5102494",
        "lat": "51.795279",
        "lon": "15.22583"
    },
    {
        "name": "Nowa Wieś Ełcka",
        "numerStacji": "5102495",
        "lat": "53.770281",
        "lon": "22.320557"
    },
    {
        "name": "Nowa Wieś Wielka",
        "numerStacji": "5102497",
        "lat": "52.969441",
        "lon": "18.096391"
    },
    {
        "name": "Nowa Wieś Legnicka",
        "numerStacji": "5102499",
        "lat": "51.176111",
        "lon": "16.189168"
    },
    {
        "name": "Nowa Wieś Mochy",
        "numerStacji": "5102500",
        "lat": "52.014723",
        "lon": "16.21583"
    },
    {
        "name": "Nawra",
        "numerStacji": "5102504",
        "lat": "53.203331",
        "lon": "18.484447"
    },
    {
        "name": "Nowy Nurzec",
        "numerStacji": "5102512",
        "lat": "52.472778",
        "lon": "23.17722"
    },
    {
        "name": "Nowy Solec",
        "numerStacji": "5102513",
        "lat": "52.030832",
        "lon": "16.194723"
    },
    {
        "name": "Nowy Tomyśl",
        "numerStacji": "5102514",
        "lat": "52.304167",
        "lon": "16.130837"
    },
    {
        "name": "Nowy Zagórz",
        "numerStacji": "5102515",
        "lat": "49.521107",
        "lon": "22.25917"
    },
    {
        "name": "Pierwoszów Miłocin",
        "numerStacji": "5102516",
        "lat": "51.255279",
        "lon": "17.098885"
    },
    {
        "name": "Obrowo",
        "numerStacji": "5102522",
        "lat": "52.968335",
        "lon": "18.882777"
    },
    {
        "name": "Oborzyska Stare",
        "numerStacji": "5102523",
        "lat": "52.11222",
        "lon": "16.704726"
    },
    {
        "name": "Obra Stara",
        "numerStacji": "5102524",
        "lat": "51.888335",
        "lon": "17.449447"
    },
    {
        "name": "Ociąż",
        "numerStacji": "5102527",
        "lat": "51.701944",
        "lon": "17.933336"
    },
    {
        "name": "Ostrówki koło Chodzieży",
        "numerStacji": "5102529",
        "lat": "52.933052",
        "lon": "16.92694"
    },
    {
        "name": "Odolanów",
        "numerStacji": "5102538",
        "lat": "51.574719",
        "lon": "17.667777"
    },
    {
        "name": "Ognica",
        "numerStacji": "5102540",
        "lat": "53.31611",
        "lon": "15.454165"
    },
    {
        "name": "Ogrodniki",
        "numerStacji": "5102541",
        "lat": "52.000835",
        "lon": "23.239722"
    },
    {
        "name": "Ograszka",
        "numerStacji": "5102544",
        "lat": "52.905833",
        "lon": "19.02611"
    },
    {
        "name": "Opole Grotowice",
        "numerStacji": "5102545",
        "lat": "50.609718",
        "lon": "17.976107"
    },
    {
        "name": "Osielec",
        "numerStacji": "5102548",
        "lat": "49.674723",
        "lon": "19.756663"
    },
    {
        "name": "Ostrowite koło Jabłonowa",
        "numerStacji": "5102549",
        "lat": "53.433886",
        "lon": "19.268612"
    },
    {
        "name": "Okmiany",
        "numerStacji": "5102554",
        "lat": "51.27083",
        "lon": "15.778891"
    },
    {
        "name": "Okonek",
        "numerStacji": "5102556",
        "lat": "53.520003",
        "lon": "16.830557"
    },
    {
        "name": "Okrąglica",
        "numerStacji": "5102557",
        "lat": "51.43722",
        "lon": "15.181666"
    },
    {
        "name": "Okrzeja",
        "numerStacji": "5102559",
        "lat": "51.732219",
        "lon": "22.136944"
    },
    {
        "name": "Oława",
        "numerStacji": "5102560",
        "lat": "50.930831",
        "lon": "17.296945"
    },
    {
        "name": "Olszyna Lubanska",
        "numerStacji": "5102567",
        "lat": "51.069723",
        "lon": "15.380004"
    },
    {
        "name": "Olszanka",
        "numerStacji": "5102569",
        "lat": "50.795274",
        "lon": "17.477781"
    },
    {
        "name": "Olkusz",
        "numerStacji": "5102573",
        "lat": "50.27389",
        "lon": "19.573885"
    },
    {
        "name": "Oleszyce",
        "numerStacji": "5102574",
        "lat": "50.157219",
        "lon": "23.036665"
    },
    {
        "name": "Ożarów Mazowiecki",
        "numerStacji": "5102577",
        "lat": "52.207218",
        "lon": "20.795834"
    },
    {
        "name": "Ostromecko",
        "numerStacji": "5102578",
        "lat": "53.144164",
        "lon": "18.214725"
    },
    {
        "name": "Osowiec",
        "numerStacji": "5102584",
        "lat": "53.471947",
        "lon": "22.658336"
    },
    {
        "name": "Ostrowy",
        "numerStacji": "5102585",
        "lat": "52.299448",
        "lon": "19.191385"
    },
    {
        "name": "Olza",
        "numerStacji": "5102586",
        "lat": "49.959996",
        "lon": "18.338057"
    },
    {
        "name": "Opole Wschodnie",
        "numerStacji": "5102587",
        "lat": "50.674719",
        "lon": "17.933615"
    },
    {
        "name": "Opole Groszowice",
        "numerStacji": "5102588",
        "lat": "50.636111",
        "lon": "17.955836"
    },
    {
        "name": "Opole Gosławice",
        "numerStacji": "5102589",
        "lat": "50.674998",
        "lon": "17.988889"
    },
    {
        "name": "Opalenica",
        "numerStacji": "5102591",
        "lat": "52.310001",
        "lon": "16.402779"
    },
    {
        "name": "Opoczno",
        "numerStacji": "5102592",
        "lat": "51.372777",
        "lon": "20.271385"
    },
    {
        "name": "Osowiec Przystanek",
        "numerStacji": "5102593",
        "lat": "50.751667",
        "lon": "18.043337"
    },
    {
        "name": "Opatówek",
        "numerStacji": "5102595",
        "lat": "51.74333",
        "lon": "18.22722"
    },
    {
        "name": "Opole Zachodnie",
        "numerStacji": "5102597",
        "lat": "50.660831",
        "lon": "17.898053"
    },
    {
        "name": "Orzesze",
        "numerStacji": "5102600",
        "lat": "50.154442",
        "lon": "18.777504"
    },
    {
        "name": "Orzesze Jaśkowice",
        "numerStacji": "5102601",
        "lat": "50.144724",
        "lon": "18.740837"
    },
    {
        "name": "Orzeszkowo",
        "numerStacji": "5102602",
        "lat": "52.681669",
        "lon": "23.533607"
    },
    {
        "name": "Orneta",
        "numerStacji": "5102605",
        "lat": "54.115556",
        "lon": "20.150274"
    },
    {
        "name": "Orzeszków",
        "numerStacji": "5102608",
        "lat": "51.394171",
        "lon": "16.506946"
    },
    {
        "name": "Osie",
        "numerStacji": "5102611",
        "lat": "53.593607",
        "lon": "18.347775"
    },
    {
        "name": "Ostrowie Biebrzańskie",
        "numerStacji": "5102613",
        "lat": "53.719447",
        "lon": "23.243893"
    },
    {
        "name": "Osetnica Po",
        "numerStacji": "5102616",
        "lat": "51.26167",
        "lon": "15.845834"
    },
    {
        "name": "Osina",
        "numerStacji": "5102622",
        "lat": "53.608888",
        "lon": "15.012498"
    },
    {
        "name": "Osola",
        "numerStacji": "5102623",
        "lat": "51.337503",
        "lon": "16.86611"
    },
    {
        "name": "Ostrołęka",
        "numerStacji": "5102624",
        "lat": "53.056115",
        "lon": "21.617223"
    },
    {
        "name": "Ostaszewo Toruńskie",
        "numerStacji": "5102626",
        "lat": "53.105555",
        "lon": "18.627222"
    },
    {
        "name": "Otłoczyn",
        "numerStacji": "5102632",
        "lat": "52.912782",
        "lon": "18.692781"
    },
    {
        "name": "Otoczna",
        "numerStacji": "5102634",
        "lat": "52.325552",
        "lon": "17.689441"
    },
    {
        "name": "Otusz",
        "numerStacji": "5102636",
        "lat": "52.346668",
        "lon": "16.594168"
    },
    {
        "name": "Otwock",
        "numerStacji": "5102637",
        "lat": "52.108607",
        "lon": "21.264442"
    },
    {
        "name": "Kobyłka Ossów",
        "numerStacji": "5102639",
        "lat": "52.325552",
        "lon": "21.190002"
    },
    {
        "name": "Ostrowiecko",
        "numerStacji": "5102641",
        "lat": "49.955277",
        "lon": "22.780553"
    },
    {
        "name": "Ostrówek Węgrowski",
        "numerStacji": "5102642",
        "lat": "52.560005",
        "lon": "21.751666"
    },
    {
        "name": "Owińska",
        "numerStacji": "5102643",
        "lat": "52.511386",
        "lon": "16.9875"
    },
    {
        "name": "Ostrów Wielkopolski Gorzyce",
        "numerStacji": "5102645",
        "lat": "51.647775",
        "lon": "17.729721"
    },
    {
        "name": "Oborniki Wielkopolskie Miasto",
        "numerStacji": "5102646",
        "lat": "52.645829",
        "lon": "16.820274"
    },
    {
        "name": "Ostrowiec Świętokrzyski",
        "numerStacji": "5102647",
        "lat": "50.933887",
        "lon": "21.376942"
    },
    {
        "name": "Olszyny",
        "numerStacji": "5102649",
        "lat": "53.553614",
        "lon": "21.110834"
    },
    {
        "name": "Olsztyn Zachodni",
        "numerStacji": "5102650",
        "lat": "53.778056",
        "lon": "20.466946"
    },
    {
        "name": "Ozimek",
        "numerStacji": "5102652",
        "lat": "50.67",
        "lon": "18.208334"
    },
    {
        "name": "Ozorków",
        "numerStacji": "5102654",
        "lat": "51.972501",
        "lon": "19.265834"
    },
    {
        "name": "Olsztynek",
        "numerStacji": "5102656",
        "lat": "53.585004",
        "lon": "20.295279"
    },
    {
        "name": "Paczyna",
        "numerStacji": "5102658",
        "lat": "50.413052",
        "lon": "18.570554"
    },
    {
        "name": "Paczkowo",
        "numerStacji": "5102660",
        "lat": "52.396945",
        "lon": "17.158888"
    },
    {
        "name": "Pacholęta Po",
        "numerStacji": "5102665",
        "lat": "53.171114",
        "lon": "14.471392"
    },
    {
        "name": "Pasieki",
        "numerStacji": "5102666",
        "lat": "52.853893",
        "lon": "21.560555"
    },
    {
        "name": "Pamiątkowo",
        "numerStacji": "5102670",
        "lat": "52.55333",
        "lon": "16.685831"
    },
    {
        "name": "Pawłów Wielkopolski",
        "numerStacji": "5102674",
        "lat": "51.421948",
        "lon": "17.654724"
    },
    {
        "name": "Patków",
        "numerStacji": "5102676",
        "lat": "52.271114",
        "lon": "22.746107"
    },
    {
        "name": "Pątnów Wieluński",
        "numerStacji": "5102677",
        "lat": "51.159166",
        "lon": "18.633614"
    },
    {
        "name": "Pawłowice",
        "numerStacji": "5102679",
        "lat": "51.819999",
        "lon": "16.758886"
    },
    {
        "name": "Parlin",
        "numerStacji": "5102680",
        "lat": "53.371115",
        "lon": "18.270557"
    },
    {
        "name": "Prabuty Góry",
        "numerStacji": "5102684",
        "lat": "52.806385",
        "lon": "21.569724"
    },
    {
        "name": "Pobiedziska Letnisko",
        "numerStacji": "5102685",
        "lat": "52.474171",
        "lon": "17.239998"
    },
    {
        "name": "Pierściec",
        "numerStacji": "5102689",
        "lat": "49.830282",
        "lon": "18.813335"
    },
    {
        "name": "Parczew",
        "numerStacji": "5102690",
        "lat": "51.626111",
        "lon": "22.871668"
    },
    {
        "name": "Piaseczno",
        "numerStacji": "5102694",
        "lat": "52.066942",
        "lon": "21.016942"
    },
    {
        "name": "Przecza",
        "numerStacji": "5102696",
        "lat": "50.733059",
        "lon": "17.667498"
    },
    {
        "name": "Podborsko",
        "numerStacji": "5102699",
        "lat": "53.934163",
        "lon": "16.138891"
    },
    {
        "name": "Podlesiec",
        "numerStacji": "5102700",
        "lat": "52.936945",
        "lon": "15.876388"
    },
    {
        "name": "Podlasek",
        "numerStacji": "5102702",
        "lat": "53.557218",
        "lon": "22.535004"
    },
    {
        "name": "Podlesie",
        "numerStacji": "5102704",
        "lat": "50.764998",
        "lon": "19.60444"
    },
    {
        "name": "Przedmoście Święte",
        "numerStacji": "5102707",
        "lat": "51.190556",
        "lon": "16.666109"
    },
    {
        "name": "Podbor",
        "numerStacji": "5102710",
        "lat": "51.36056",
        "lon": "20.876108"
    },
    {
        "name": "Podstolice",
        "numerStacji": "5102712",
        "lat": "52.34194",
        "lon": "17.479722"
    },
    {
        "name": "Podolany",
        "numerStacji": "5102714",
        "lat": "49.898887",
        "lon": "19.754721"
    },
    {
        "name": "Podłęże",
        "numerStacji": "5102715",
        "lat": "50.018893",
        "lon": "20.165834"
    },
    {
        "name": "Pierzyska",
        "numerStacji": "5102717",
        "lat": "52.505552",
        "lon": "17.481385"
    },
    {
        "name": "Pęckowo",
        "numerStacji": "5102718",
        "lat": "52.663888",
        "lon": "16.489722"
    },
    {
        "name": "Perkowice",
        "numerStacji": "5102720",
        "lat": "51.996664",
        "lon": "23.279724"
    },
    {
        "name": "Pęgów",
        "numerStacji": "5102721",
        "lat": "51.244447",
        "lon": "16.929448"
    },
    {
        "name": "Pełkinie",
        "numerStacji": "5102722",
        "lat": "50.047776",
        "lon": "22.611664"
    },
    {
        "name": "Pępowo Kartuskie",
        "numerStacji": "5102723",
        "lat": "54.36694",
        "lon": "18.401665"
    },
    {
        "name": "Pelplin",
        "numerStacji": "5102724",
        "lat": "53.926666",
        "lon": "18.706669"
    },
    {
        "name": "Pewel Mała",
        "numerStacji": "5102725",
        "lat": "49.667496",
        "lon": "19.278329"
    },
    {
        "name": "Pępowo",
        "numerStacji": "5102728",
        "lat": "51.736948",
        "lon": "17.112774"
    },
    {
        "name": "Perkowo",
        "numerStacji": "5102729",
        "lat": "52.003613",
        "lon": "16.26972"
    },
    {
        "name": "Piesienice",
        "numerStacji": "5102730",
        "lat": "53.964996",
        "lon": "18.396388"
    },
    {
        "name": "Pewel Wielka",
        "numerStacji": "5102732",
        "lat": "49.669447",
        "lon": "19.380276"
    },
    {
        "name": "Pęzino",
        "numerStacji": "5102735",
        "lat": "53.335553",
        "lon": "15.196112"
    },
    {
        "name": "Poznań Garbary",
        "numerStacji": "5102737",
        "lat": "52.41611",
        "lon": "16.938329"
    },
    {
        "name": "Poznań Górczyn",
        "numerStacji": "5102738",
        "lat": "52.380279",
        "lon": "16.879998"
    },
    {
        "name": "Pogwizdów",
        "numerStacji": "5102740",
        "lat": "49.80611",
        "lon": "18.597774"
    },
    {
        "name": "Pogorzel Wielka",
        "numerStacji": "5102741",
        "lat": "53.707221",
        "lon": "22.149996"
    },
    {
        "name": "Pogorzelice",
        "numerStacji": "5102742",
        "lat": "54.50389",
        "lon": "17.641115"
    },
    {
        "name": "Piława Górna",
        "numerStacji": "5102743",
        "lat": "50.678054",
        "lon": "16.773053"
    },
    {
        "name": "Pogorzel Warszawska",
        "numerStacji": "5102746",
        "lat": "52.097226",
        "lon": "21.335277"
    },
    {
        "name": "Polichna Kraśnicka",
        "numerStacji": "5102748",
        "lat": "50.831114",
        "lon": "22.306669"
    },
    {
        "name": "Pilchowice Nielestno",
        "numerStacji": "5102749",
        "lat": "50.99194",
        "lon": "15.661663"
    },
    {
        "name": "Pilchowice Zapora",
        "numerStacji": "5102751",
        "lat": "50.968613",
        "lon": "15.654445"
    },
    {
        "name": "Piasek",
        "numerStacji": "5102752",
        "lat": "50.012502",
        "lon": "18.940002"
    },
    {
        "name": "Piechowice Dolne",
        "numerStacji": "5102755",
        "lat": "50.850836",
        "lon": "15.615836"
    },
    {
        "name": "Pieńsk",
        "numerStacji": "5102756",
        "lat": "51.245274",
        "lon": "15.046945"
    },
    {
        "name": "Piechowice",
        "numerStacji": "5102759",
        "lat": "50.851663",
        "lon": "15.591664"
    },
    {
        "name": "Pilchów",
        "numerStacji": "5102761",
        "lat": "50.617224",
        "lon": "22.026943"
    },
    {
        "name": "Pikus",
        "numerStacji": "5102762",
        "lat": "53.656387",
        "lon": "19.738055"
    },
    {
        "name": "Pinczyn",
        "numerStacji": "5102765",
        "lat": "53.96194",
        "lon": "18.347496"
    },
    {
        "name": "Pionki",
        "numerStacji": "5102766",
        "lat": "51.479721",
        "lon": "21.46278"
    },
    {
        "name": "Piotrków Kujawski",
        "numerStacji": "5102768",
        "lat": "52.537779",
        "lon": "18.519442"
    },
    {
        "name": "Piastów",
        "numerStacji": "5102772",
        "lat": "52.182498",
        "lon": "20.842218"
    },
    {
        "name": "Piwniczna",
        "numerStacji": "5102773",
        "lat": "49.431664",
        "lon": "20.716109"
    },
    {
        "name": "Pionki Zachodnie",
        "numerStacji": "5102775",
        "lat": "51.471946",
        "lon": "21.441385"
    },
    {
        "name": "Piła Kalina",
        "numerStacji": "5102779",
        "lat": "53.101663",
        "lon": "16.788056"
    },
    {
        "name": "Pakosławice",
        "numerStacji": "5102783",
        "lat": "50.544996",
        "lon": "17.353334"
    },
    {
        "name": "Potok Kraśnicki",
        "numerStacji": "5102789",
        "lat": "50.795552",
        "lon": "22.163615"
    },
    {
        "name": "Piekoszów",
        "numerStacji": "5102790",
        "lat": "50.870558",
        "lon": "20.448329"
    },
    {
        "name": "Parkowo",
        "numerStacji": "5102791",
        "lat": "52.708052",
        "lon": "16.915002"
    },
    {
        "name": "Płock",
        "numerStacji": "5102795",
        "lat": "52.552782",
        "lon": "19.712778"
    },
    {
        "name": "Palędzie",
        "numerStacji": "5102796",
        "lat": "52.374445",
        "lon": "16.746113"
    },
    {
        "name": "Płochocin",
        "numerStacji": "5102800",
        "lat": "52.200007",
        "lon": "20.699963"
    },
    {
        "name": "Pliszka",
        "numerStacji": "5102801",
        "lat": "52.204441",
        "lon": "15.016948"
    },
    {
        "name": "Płońsk",
        "numerStacji": "5102803",
        "lat": "52.616111",
        "lon": "20.365835"
    },
    {
        "name": "Pławna",
        "numerStacji": "5102808",
        "lat": "49.75444",
        "lon": "20.950556"
    },
    {
        "name": "Płock Radziwie",
        "numerStacji": "5102809",
        "lat": "52.524448",
        "lon": "19.672218"
    },
    {
        "name": "Płociczno koło Suwałk",
        "numerStacji": "5102810",
        "lat": "54.038887",
        "lon": "22.948607"
    },
    {
        "name": "Płock Trzepowo",
        "numerStacji": "5102811",
        "lat": "52.590276",
        "lon": "19.733057"
    },
    {
        "name": "Zagrody Kościół",
        "numerStacji": "5102813",
        "lat": "51.078614",
        "lon": "23.19056"
    },
    {
        "name": "Płyćwia",
        "numerStacji": "5102816",
        "lat": "51.916669",
        "lon": "20.001943"
    },
    {
        "name": "Promno",
        "numerStacji": "5102823",
        "lat": "52.471663",
        "lon": "17.215835"
    },
    {
        "name": "Przemyśl Zasanie",
        "numerStacji": "5102825",
        "lat": "49.793615",
        "lon": "22.773614"
    },
    {
        "name": "Porażyn",
        "numerStacji": "5102826",
        "lat": "52.302225",
        "lon": "16.290557"
    },
    {
        "name": "Poznań Antoninek",
        "numerStacji": "5102827",
        "lat": "52.409718",
        "lon": "17.028059"
    },
    {
        "name": "Poznań Dębina",
        "numerStacji": "5102828",
        "lat": "52.373887",
        "lon": "16.909725"
    },
    {
        "name": "Poznań Dębiec",
        "numerStacji": "5102830",
        "lat": "52.369168",
        "lon": "16.901392"
    },
    {
        "name": "Poznań Wola",
        "numerStacji": "5102835",
        "lat": "52.433612",
        "lon": "16.850558"
    },
    {
        "name": "Poznań Karolin",
        "numerStacji": "5102838",
        "lat": "52.438888",
        "lon": "16.981666"
    },
    {
        "name": "Panowice",
        "numerStacji": "5102840",
        "lat": "52.360835",
        "lon": "15.73444"
    },
    {
        "name": "Poznań Krzesiny",
        "numerStacji": "5102841",
        "lat": "52.340555",
        "lon": "16.977504"
    },
    {
        "name": "Pieniężno",
        "numerStacji": "5102842",
        "lat": "54.24056",
        "lon": "20.124996"
    },
    {
        "name": "Pobiedziska",
        "numerStacji": "5102845",
        "lat": "52.479169",
        "lon": "17.277222"
    },
    {
        "name": "Podbiele",
        "numerStacji": "5102847",
        "lat": "52.692222",
        "lon": "23.210274"
    },
    {
        "name": "Poznań Junikowo",
        "numerStacji": "5102853",
        "lat": "52.37778",
        "lon": "16.825559"
    },
    {
        "name": "Pokrzywnica",
        "numerStacji": "5102854",
        "lat": "50.343889",
        "lon": "18.08111"
    },
    {
        "name": "Poniec",
        "numerStacji": "5102857",
        "lat": "51.761668",
        "lon": "16.808057"
    },
    {
        "name": "Poraj",
        "numerStacji": "5102860",
        "lat": "50.67694",
        "lon": "19.219441"
    },
    {
        "name": "Potok",
        "numerStacji": "5102862",
        "lat": "50.617503",
        "lon": "20.196946"
    },
    {
        "name": "Policzna",
        "numerStacji": "5102863",
        "lat": "52.589718",
        "lon": "23.423893"
    },
    {
        "name": "Powałki",
        "numerStacji": "5102865",
        "lat": "53.743052",
        "lon": "17.599719"
    },
    {
        "name": "Poznań Wschód",
        "numerStacji": "5102867",
        "lat": "52.418887",
        "lon": "16.974169"
    },
    {
        "name": "Popielów",
        "numerStacji": "5102871",
        "lat": "50.829442",
        "lon": "17.762775"
    },
    {
        "name": "Piła Podlasie",
        "numerStacji": "5102872",
        "lat": "53.163329",
        "lon": "16.777503"
    },
    {
        "name": "Popowo Skwierzyńskie",
        "numerStacji": "5102873",
        "lat": "52.536107",
        "lon": "15.522222"
    },
    {
        "name": "Papowo Toruńskie",
        "numerStacji": "5102874",
        "lat": "53.067225",
        "lon": "18.692223"
    },
    {
        "name": "Przyłęk Duży",
        "numerStacji": "5102878",
        "lat": "51.840836",
        "lon": "19.917498"
    },
    {
        "name": "Przylep",
        "numerStacji": "5102886",
        "lat": "51.976942",
        "lon": "15.438614"
    },
    {
        "name": "Prostki",
        "numerStacji": "5102889",
        "lat": "53.696111",
        "lon": "22.431107"
    },
    {
        "name": "Proboszczewice Płockie",
        "numerStacji": "5102890",
        "lat": "52.660275",
        "lon": "19.713892"
    },
    {
        "name": "Poronin",
        "numerStacji": "5102891",
        "lat": "49.343893",
        "lon": "20.003615"
    },
    {
        "name": "Przyłubie",
        "numerStacji": "5102895",
        "lat": "53.050002",
        "lon": "18.32389"
    },
    {
        "name": "Piasecznica",
        "numerStacji": "5102903",
        "lat": "52.209996",
        "lon": "20.343892"
    },
    {
        "name": "Pasym",
        "numerStacji": "5102908",
        "lat": "53.631946",
        "lon": "20.765558"
    },
    {
        "name": "Poznań Strzeszyn",
        "numerStacji": "5102914",
        "lat": "52.460004",
        "lon": "16.866388"
    },
    {
        "name": "Piastoszyn",
        "numerStacji": "5102915",
        "lat": "53.621941",
        "lon": "17.728885"
    },
    {
        "name": "Pasikurowice",
        "numerStacji": "5102916",
        "lat": "51.209164",
        "lon": "17.109726"
    },
    {
        "name": "Pszczyna",
        "numerStacji": "5102920",
        "lat": "49.975278",
        "lon": "18.953333"
    },
    {
        "name": "Pszczółki",
        "numerStacji": "5102921",
        "lat": "54.174723",
        "lon": "18.701941"
    },
    {
        "name": "Ptaszkowa",
        "numerStacji": "5102922",
        "lat": "49.603331",
        "lon": "20.881663"
    },
    {
        "name": "Platerów",
        "numerStacji": "5102924",
        "lat": "52.301111",
        "lon": "22.821113"
    },
    {
        "name": "Potęgowo",
        "numerStacji": "5102925",
        "lat": "54.485004",
        "lon": "17.487219"
    },
    {
        "name": "Prostynia",
        "numerStacji": "5102926",
        "lat": "53.305278",
        "lon": "15.773893"
    },
    {
        "name": "Pietrzykowice Żywieckie",
        "numerStacji": "5102927",
        "lat": "49.709997",
        "lon": "19.17222"
    },
    {
        "name": "Ptaszkowo Wielkopolskie",
        "numerStacji": "5102931",
        "lat": "52.22917",
        "lon": "16.441387"
    },
    {
        "name": "Ptusza",
        "numerStacji": "5102932",
        "lat": "53.364723",
        "lon": "16.783885"
    },
    {
        "name": "Puck",
        "numerStacji": "5102936",
        "lat": "54.715829",
        "lon": "18.408335"
    },
    {
        "name": "Pruszcz Gdański",
        "numerStacji": "5102942",
        "lat": "54.258611",
        "lon": "18.646945"
    },
    {
        "name": "Puławy Chemia",
        "numerStacji": "5102943",
        "lat": "51.446668",
        "lon": "21.968054"
    },
    {
        "name": "Pułankowice",
        "numerStacji": "5102945",
        "lat": "50.958886",
        "lon": "22.306112"
    },
    {
        "name": "Puławy",
        "numerStacji": "5102946",
        "lat": "51.410001",
        "lon": "22.012497"
    },
    {
        "name": "Puławy Miasto",
        "numerStacji": "5102947",
        "lat": "51.426667",
        "lon": "21.985556"
    },
    {
        "name": "Pruchna",
        "numerStacji": "5102948",
        "lat": "49.878608",
        "lon": "18.687774"
    },
    {
        "name": "Puszczykowko",
        "numerStacji": "5102949",
        "lat": "52.272219",
        "lon": "16.863611"
    },
    {
        "name": "Pruszcz Pomorski",
        "numerStacji": "5102950",
        "lat": "53.334448",
        "lon": "18.198886"
    },
    {
        "name": "Puszczykowo",
        "numerStacji": "5102955",
        "lat": "52.294998",
        "lon": "16.870829"
    },
    {
        "name": "Podwierzbie",
        "numerStacji": "5102960",
        "lat": "52.864725",
        "lon": "19.579171"
    },
    {
        "name": "Pewel Wielka Centrum",
        "numerStacji": "5102961",
        "lat": "49.656943",
        "lon": "19.345281"
    },
    {
        "name": "Parłówko",
        "numerStacji": "5102966",
        "lat": "53.845556",
        "lon": "14.750004"
    },
    {
        "name": "Powroźnik",
        "numerStacji": "5102972",
        "lat": "49.369719",
        "lon": "20.942781"
    },
    {
        "name": "Pawłówek",
        "numerStacji": "5102975",
        "lat": "53.152218",
        "lon": "17.855552"
    },
    {
        "name": "Piwniczna-Zdrój",
        "numerStacji": "5102976",
        "lat": "49.440833",
        "lon": "20.717223"
    },
    {
        "name": "Przysieka Stara",
        "numerStacji": "5102978",
        "lat": "52.03583",
        "lon": "16.604164"
    },
    {
        "name": "Płytnica",
        "numerStacji": "5102980",
        "lat": "53.295003",
        "lon": "16.750275"
    },
    {
        "name": "Bukowno Przymiarki",
        "numerStacji": "5102981",
        "lat": "50.275275",
        "lon": "19.409724"
    },
    {
        "name": "Przybyłowice",
        "numerStacji": "5102982",
        "lat": "51.12694",
        "lon": "16.159441"
    },
    {
        "name": "Przywory Opolskie",
        "numerStacji": "5102985",
        "lat": "50.580279",
        "lon": "17.989447"
    },
    {
        "name": "Pyskowice",
        "numerStacji": "5102987",
        "lat": "50.38444",
        "lon": "18.618053"
    },
    {
        "name": "Pyzówka",
        "numerStacji": "5102989",
        "lat": "49.521385",
        "lon": "19.959999"
    },
    {
        "name": "Przybówka",
        "numerStacji": "5102992",
        "lat": "49.79917",
        "lon": "21.646663"
    },
    {
        "name": "Przygodzice",
        "numerStacji": "5102996",
        "lat": "51.571115",
        "lon": "17.829448"
    },
    {
        "name": "Pierzchno",
        "numerStacji": "5102997",
        "lat": "52.263059",
        "lon": "17.158331"
    },
    {
        "name": "Przysieki",
        "numerStacji": "5102998",
        "lat": "49.732776",
        "lon": "21.394444"
    },
    {
        "name": "Przytkowice",
        "numerStacji": "5103000",
        "lat": "49.896388",
        "lon": "19.679724"
    },
    {
        "name": "Przytocko",
        "numerStacji": "5103004",
        "lat": "54.123053",
        "lon": "16.857498"
    },
    {
        "name": "Przeradz",
        "numerStacji": "5103005",
        "lat": "53.770559",
        "lon": "16.536664"
    },
    {
        "name": "Przysieczyn",
        "numerStacji": "5103006",
        "lat": "52.753888",
        "lon": "17.183887"
    },
    {
        "name": "Przetycz",
        "numerStacji": "5103007",
        "lat": "52.76944",
        "lon": "21.551386"
    },
    {
        "name": "Przysucha",
        "numerStacji": "5103008",
        "lat": "51.378053",
        "lon": "20.658614"
    },
    {
        "name": "Mysłowice Brzęczkowice",
        "numerStacji": "5103013",
        "lat": "50.21306",
        "lon": "19.147221"
    },
    {
        "name": "Puławy Azoty",
        "numerStacji": "5103014",
        "lat": "51.480557",
        "lon": "21.943891"
    },
    {
        "name": "Raba Wyżna",
        "numerStacji": "5103015",
        "lat": "49.565558",
        "lon": "19.881946"
    },
    {
        "name": "Racewo",
        "numerStacji": "5103017",
        "lat": "53.49806",
        "lon": "23.484445"
    },
    {
        "name": "Radziechowy Wieprz",
        "numerStacji": "5103021",
        "lat": "49.647774",
        "lon": "19.164166"
    },
    {
        "name": "Rajsk",
        "numerStacji": "5103023",
        "lat": "52.828885",
        "lon": "23.148608"
    },
    {
        "name": "Rakowice",
        "numerStacji": "5103024",
        "lat": "53.478059",
        "lon": "19.641664"
    },
    {
        "name": "Radliczyce",
        "numerStacji": "5103025",
        "lat": "51.723329",
        "lon": "18.350004"
    },
    {
        "name": "Radziwiłłów Mazowiecki",
        "numerStacji": "5103026",
        "lat": "52.000278",
        "lon": "20.290281"
    },
    {
        "name": "Raduń",
        "numerStacji": "5103027",
        "lat": "53.969167",
        "lon": "17.778335"
    },
    {
        "name": "Radomyśl",
        "numerStacji": "5103028",
        "lat": "52.031111",
        "lon": "22.381109"
    },
    {
        "name": "Radzyń Podlaski",
        "numerStacji": "5103029",
        "lat": "51.827496",
        "lon": "22.667496"
    },
    {
        "name": "Raszowa",
        "numerStacji": "5103031",
        "lat": "50.387775",
        "lon": "18.161114"
    },
    {
        "name": "Raciborów Kutnowski",
        "numerStacji": "5103032",
        "lat": "52.280552",
        "lon": "19.341667"
    },
    {
        "name": "Różanystok",
        "numerStacji": "5103036",
        "lat": "53.623055",
        "lon": "23.392503"
    },
    {
        "name": "Rybnik Niedobczyce",
        "numerStacji": "5103039",
        "lat": "50.065835",
        "lon": "18.495557"
    },
    {
        "name": "Rybnik Niewiadom",
        "numerStacji": "5103041",
        "lat": "50.06944",
        "lon": "18.468059"
    },
    {
        "name": "Rybienko",
        "numerStacji": "5103042",
        "lat": "52.5825",
        "lon": "21.45806"
    },
    {
        "name": "Rybnik Gotartowice",
        "numerStacji": "5103043",
        "lat": "50.088056",
        "lon": "18.62306"
    },
    {
        "name": "Rębiszów",
        "numerStacji": "5103044",
        "lat": "50.948333",
        "lon": "15.455837"
    },
    {
        "name": "Rabka-Zdrój",
        "numerStacji": "5103045",
        "lat": "49.610001",
        "lon": "19.951945"
    },
    {
        "name": "Rąbino",
        "numerStacji": "5103046",
        "lat": "53.869719",
        "lon": "15.953057"
    },
    {
        "name": "Rębusz",
        "numerStacji": "5103047",
        "lat": "53.053058",
        "lon": "15.591943"
    },
    {
        "name": "Racibory",
        "numerStacji": "5103048",
        "lat": "52.92889",
        "lon": "22.709718"
    },
    {
        "name": "Rychnowo Wielkie",
        "numerStacji": "5103050",
        "lat": "53.142222",
        "lon": "18.813892"
    },
    {
        "name": "Raciąż",
        "numerStacji": "5103051",
        "lat": "52.778887",
        "lon": "20.104725"
    },
    {
        "name": "Racławki",
        "numerStacji": "5103052",
        "lat": "53.667777",
        "lon": "17.654446"
    },
    {
        "name": "Racibórz Markowice",
        "numerStacji": "5103053",
        "lat": "50.113613",
        "lon": "18.270279"
    },
    {
        "name": "Radziszów",
        "numerStacji": "5103057",
        "lat": "49.918331",
        "lon": "19.809169"
    },
    {
        "name": "Ruda Chebzie",
        "numerStacji": "5103058",
        "lat": "50.303887",
        "lon": "18.878057"
    },
    {
        "name": "Radkowice",
        "numerStacji": "5103060",
        "lat": "50.780558",
        "lon": "20.52889"
    },
    {
        "name": "Radom Potkanów",
        "numerStacji": "5103062",
        "lat": "51.353054",
        "lon": "21.101665"
    },
    {
        "name": "Radnica",
        "numerStacji": "5103063",
        "lat": "52.090278",
        "lon": "15.268888"
    },
    {
        "name": "Radom Południowy",
        "numerStacji": "5103065",
        "lat": "51.349441",
        "lon": "21.101108"
    },
    {
        "name": "Radów",
        "numerStacji": "5103067",
        "lat": "52.43194",
        "lon": "14.742498"
    },
    {
        "name": "Radymno",
        "numerStacji": "5103068",
        "lat": "49.939168",
        "lon": "22.829446"
    },
    {
        "name": "Reda",
        "numerStacji": "5103070",
        "lat": "54.594996",
        "lon": "18.35333"
    },
    {
        "name": "Redaki",
        "numerStacji": "5103071",
        "lat": "53.670554",
        "lon": "19.409446"
    },
    {
        "name": "Reblino",
        "numerStacji": "5103072",
        "lat": "54.430278",
        "lon": "16.916944"
    },
    {
        "name": "Recław",
        "numerStacji": "5103073",
        "lat": "53.845278",
        "lon": "14.641109"
    },
    {
        "name": "Reda Pieleszewo",
        "numerStacji": "5103075",
        "lat": "54.602781",
        "lon": "18.318056"
    },
    {
        "name": "Rębiechowo",
        "numerStacji": "5103077",
        "lat": "54.388334",
        "lon": "18.421109"
    },
    {
        "name": "Rejowiec",
        "numerStacji": "5103079",
        "lat": "51.117501",
        "lon": "23.239165"
    },
    {
        "name": "Reda Rekowo",
        "numerStacji": "5103080",
        "lat": "54.631663",
        "lon": "18.363335"
    },
    {
        "name": "Reptowo",
        "numerStacji": "5103084",
        "lat": "53.372778",
        "lon": "14.859448"
    },
    {
        "name": "Recz Pomorski",
        "numerStacji": "5103091",
        "lat": "53.270552",
        "lon": "15.561388"
    },
    {
        "name": "Rogiedle",
        "numerStacji": "5103093",
        "lat": "54.03806",
        "lon": "20.282496"
    },
    {
        "name": "Rogoźnica",
        "numerStacji": "5103094",
        "lat": "51.01444",
        "lon": "16.302225"
    },
    {
        "name": "Rogóźno Pomorskie",
        "numerStacji": "5103096",
        "lat": "53.542782",
        "lon": "18.909996"
    },
    {
        "name": "Rogów",
        "numerStacji": "5103098",
        "lat": "51.817779",
        "lon": "19.885829"
    },
    {
        "name": "Rogożew",
        "numerStacji": "5103099",
        "lat": "52.461667",
        "lon": "19.541389"
    },
    {
        "name": "Rumia Janowo",
        "numerStacji": "5103103",
        "lat": "54.559165",
        "lon": "18.405279"
    },
    {
        "name": "Rajcza",
        "numerStacji": "5103104",
        "lat": "49.516666",
        "lon": "19.112775"
    },
    {
        "name": "Rajec Poduchowny",
        "numerStacji": "5103106",
        "lat": "51.414999",
        "lon": "21.253331"
    },
    {
        "name": "Rudniki koło Częstochowy",
        "numerStacji": "5103109",
        "lat": "50.878055",
        "lon": "19.232223"
    },
    {
        "name": "Rokita",
        "numerStacji": "5103110",
        "lat": "53.765552",
        "lon": "14.855555"
    },
    {
        "name": "Rogóżno koło Łańcuta",
        "numerStacji": "5103111",
        "lat": "50.083607",
        "lon": "22.363337"
    },
    {
        "name": "Rudnik Nad Sanem",
        "numerStacji": "5103112",
        "lat": "50.435004",
        "lon": "22.250558"
    },
    {
        "name": "Rokitnia Stara",
        "numerStacji": "5103115",
        "lat": "51.611665",
        "lon": "21.799722"
    },
    {
        "name": "Rokietnica",
        "numerStacji": "5103116",
        "lat": "52.512222",
        "lon": "16.753888"
    },
    {
        "name": "Rykoszyn",
        "numerStacji": "5103118",
        "lat": "50.868059",
        "lon": "20.378887"
    },
    {
        "name": "Rudna Miasto",
        "numerStacji": "5103121",
        "lat": "51.505278",
        "lon": "16.269163"
    },
    {
        "name": "Rynkowo Wiadukt",
        "numerStacji": "5103126",
        "lat": "53.15194",
        "lon": "18.005555"
    },
    {
        "name": "Rakoniewice",
        "numerStacji": "5103127",
        "lat": "52.138891",
        "lon": "16.26528"
    },
    {
        "name": "Rudnik Stróża",
        "numerStacji": "5103128",
        "lat": "50.458331",
        "lon": "22.216669"
    },
    {
        "name": "Rożnowo",
        "numerStacji": "5103130",
        "lat": "52.67917",
        "lon": "16.871944"
    },
    {
        "name": "Różyny",
        "numerStacji": "5103133",
        "lat": "54.212226",
        "lon": "18.66139"
    },
    {
        "name": "Ruciane Nida Zachód",
        "numerStacji": "5103134",
        "lat": "53.642499",
        "lon": "21.523331"
    },
    {
        "name": "Rogalice",
        "numerStacji": "5103137",
        "lat": "50.963615",
        "lon": "17.597499"
    },
    {
        "name": "Rozedranka",
        "numerStacji": "5103138",
        "lat": "53.359725",
        "lon": "23.366947"
    },
    {
        "name": "Rokitki",
        "numerStacji": "5103142",
        "lat": "51.335552",
        "lon": "15.893333"
    },
    {
        "name": "Rokiciny",
        "numerStacji": "5103144",
        "lat": "51.667497",
        "lon": "19.780835"
    },
    {
        "name": "Rosochatka",
        "numerStacji": "5103148",
        "lat": "53.70528",
        "lon": "18.11472"
    },
    {
        "name": "Rokiciny Podhalańskie",
        "numerStacji": "5103149",
        "lat": "49.578611",
        "lon": "19.90583"
    },
    {
        "name": "Roszków Raciborski",
        "numerStacji": "5103150",
        "lat": "49.964724",
        "lon": "18.294163"
    },
    {
        "name": "Rokitki Tczewskie",
        "numerStacji": "5103152",
        "lat": "54.081388",
        "lon": "18.738059"
    },
    {
        "name": "Rybnik Piaski Pods",
        "numerStacji": "5103156",
        "lat": "50.096389",
        "lon": "18.587499"
    },
    {
        "name": "Ropczyce",
        "numerStacji": "5103157",
        "lat": "50.07833",
        "lon": "21.579442"
    },
    {
        "name": "Ruskie Piaski",
        "numerStacji": "5103158",
        "lat": "50.801665",
        "lon": "23.095553"
    },
    {
        "name": "Rybno Pomorskie",
        "numerStacji": "5103159",
        "lat": "53.380832",
        "lon": "19.913057"
    },
    {
        "name": "Rozprza",
        "numerStacji": "5103160",
        "lat": "51.301663",
        "lon": "19.660281"
    },
    {
        "name": "Rybnik Rymer",
        "numerStacji": "5103161",
        "lat": "50.056666",
        "lon": "18.498335"
    },
    {
        "name": "Ruda Śląska",
        "numerStacji": "5103162",
        "lat": "50.315834",
        "lon": "18.851665"
    },
    {
        "name": "Rzęśnica",
        "numerStacji": "5103164",
        "lat": "53.524444",
        "lon": "15.951385"
    },
    {
        "name": "Rostarzewo",
        "numerStacji": "5103167",
        "lat": "52.134999",
        "lon": "16.20694"
    },
    {
        "name": "Roztoki Bystrzyckie",
        "numerStacji": "5103170",
        "lat": "50.187225",
        "lon": "16.66556"
    },
    {
        "name": "Rutwica",
        "numerStacji": "5103171",
        "lat": "53.229445",
        "lon": "16.282503"
    },
    {
        "name": "Rutkowice",
        "numerStacji": "5103172",
        "lat": "52.361392",
        "lon": "19.159168"
    },
    {
        "name": "Ruda",
        "numerStacji": "5103175",
        "lat": "53.589166",
        "lon": "22.520558"
    },
    {
        "name": "Rudawa",
        "numerStacji": "5103176",
        "lat": "50.118889",
        "lon": "19.719448"
    },
    {
        "name": "Ruchocice",
        "numerStacji": "5103180",
        "lat": "52.177221",
        "lon": "16.34194"
    },
    {
        "name": "Rudziniec Gliwicki",
        "numerStacji": "5103181",
        "lat": "50.366389",
        "lon": "18.404721"
    },
    {
        "name": "Rumia",
        "numerStacji": "5103186",
        "lat": "54.56917",
        "lon": "18.386671"
    },
    {
        "name": "Ruda-Opalin",
        "numerStacji": "5103188",
        "lat": "51.247782",
        "lon": "23.601107"
    },
    {
        "name": "Rurka",
        "numerStacji": "5103190",
        "lat": "53.493611",
        "lon": "14.795831"
    },
    {
        "name": "Ruda Talubska",
        "numerStacji": "5103192",
        "lat": "51.857502",
        "lon": "21.585276"
    },
    {
        "name": "Rudzienice Suskie",
        "numerStacji": "5103193",
        "lat": "53.638337",
        "lon": "19.668335"
    },
    {
        "name": "Ruszów",
        "numerStacji": "5103196",
        "lat": "51.403888",
        "lon": "15.176947"
    },
    {
        "name": "Rudna Wielka",
        "numerStacji": "5103199",
        "lat": "50.081108",
        "lon": "21.941392"
    },
    {
        "name": "Roszkowo Wągrowieckie",
        "numerStacji": "5103200",
        "lat": "52.70861",
        "lon": "17.17639"
    },
    {
        "name": "Ruda Wielka",
        "numerStacji": "5103201",
        "lat": "51.301663",
        "lon": "21.043891"
    },
    {
        "name": "Rakowice Wielkie",
        "numerStacji": "5103205",
        "lat": "51.12694",
        "lon": "15.56306"
    },
    {
        "name": "Rycerka",
        "numerStacji": "5103206",
        "lat": "49.498337",
        "lon": "19.081663"
    },
    {
        "name": "Rydzyna",
        "numerStacji": "5103209",
        "lat": "51.770837",
        "lon": "16.646944"
    },
    {
        "name": "Rytel",
        "numerStacji": "5103210",
        "lat": "53.748329",
        "lon": "17.725829"
    },
    {
        "name": "Rybnica",
        "numerStacji": "5103213",
        "lat": "50.91056",
        "lon": "15.645554"
    },
    {
        "name": "Ryjewo",
        "numerStacji": "5103214",
        "lat": "53.843336",
        "lon": "18.956947"
    },
    {
        "name": "Ryki",
        "numerStacji": "5103215",
        "lat": "51.606388",
        "lon": "21.946669"
    },
    {
        "name": "Radzymin",
        "numerStacji": "5103217",
        "lat": "52.424164",
        "lon": "21.175835"
    },
    {
        "name": "Rytro",
        "numerStacji": "5103221",
        "lat": "49.48639",
        "lon": "20.680278"
    },
    {
        "name": "Rudyszwałd",
        "numerStacji": "5103222",
        "lat": "49.940831",
        "lon": "18.303332"
    },
    {
        "name": "Rytel Wieś",
        "numerStacji": "5103223",
        "lat": "53.760554",
        "lon": "17.772501"
    },
    {
        "name": "Rybnik Paruszowiec",
        "numerStacji": "5103224",
        "lat": "50.102223",
        "lon": "18.56472"
    },
    {
        "name": "Rzeczyca",
        "numerStacji": "5103230",
        "lat": "50.839725",
        "lon": "22.208057"
    },
    {
        "name": "Rożki",
        "numerStacji": "5103234",
        "lat": "51.33806",
        "lon": "21.05333"
    },
    {
        "name": "Rzeczyca Kolonia",
        "numerStacji": "5103235",
        "lat": "50.840274",
        "lon": "22.270002"
    },
    {
        "name": "Rzozów",
        "numerStacji": "5103238",
        "lat": "49.945559",
        "lon": "19.804441"
    },
    {
        "name": "Rzepedź",
        "numerStacji": "5103239",
        "lat": "49.37167",
        "lon": "22.111945"
    },
    {
        "name": "Rzerzęczyce",
        "numerStacji": "5103240",
        "lat": "50.89722",
        "lon": "19.328336"
    },
    {
        "name": "Rzeszów Staroniwa",
        "numerStacji": "5103241",
        "lat": "50.038885",
        "lon": "21.989718"
    },
    {
        "name": "Rzeszów Osiedle",
        "numerStacji": "5103242",
        "lat": "50.022219",
        "lon": "21.977502"
    },
    {
        "name": "Rzeczyce Śląskie Po",
        "numerStacji": "5103243",
        "lat": "50.356663",
        "lon": "18.567219"
    },
    {
        "name": "Rzezawa",
        "numerStacji": "5103244",
        "lat": "49.984168",
        "lon": "20.511388"
    },
    {
        "name": "Sarnaki",
        "numerStacji": "5103246",
        "lat": "52.325831",
        "lon": "22.881385"
    },
    {
        "name": "Sabinka",
        "numerStacji": "5103247",
        "lat": "52.173329",
        "lon": "22.172775"
    },
    {
        "name": "Sadowice Wrocławskie",
        "numerStacji": "5103248",
        "lat": "51.056114",
        "lon": "16.825002"
    },
    {
        "name": "Starachowice Wschodnie",
        "numerStacji": "5103253",
        "lat": "51.041668",
        "lon": "21.078886"
    },
    {
        "name": "Sadlinki",
        "numerStacji": "5103254",
        "lat": "53.667498",
        "lon": "18.880556"
    },
    {
        "name": "Strzyżyna",
        "numerStacji": "5103255",
        "lat": "51.693611",
        "lon": "21.172779"
    },
    {
        "name": "Sadurki",
        "numerStacji": "5103256",
        "lat": "51.285833",
        "lon": "22.285275"
    },
    {
        "name": "Samborowo",
        "numerStacji": "5103258",
        "lat": "53.671669",
        "lon": "19.82028"
    },
    {
        "name": "Sanok Dąbrówka",
        "numerStacji": "5103259",
        "lat": "49.569163",
        "lon": "22.159444"
    },
    {
        "name": "Staw Kunowski",
        "numerStacji": "5103261",
        "lat": "51.004165",
        "lon": "21.247776"
    },
    {
        "name": "Sarnów",
        "numerStacji": "5103262",
        "lat": "51.843335",
        "lon": "22.296664"
    },
    {
        "name": "Sątopy-Samulewo",
        "numerStacji": "5103263",
        "lat": "54.073334",
        "lon": "21.024169"
    },
    {
        "name": "Sątopy",
        "numerStacji": "5103264",
        "lat": "52.303331",
        "lon": "16.208054"
    },
    {
        "name": "Stalowa Wola Centrum",
        "numerStacji": "5103265",
        "lat": "50.569725",
        "lon": "22.055277"
    },
    {
        "name": "Sadowne Węgrowskie",
        "numerStacji": "5103267",
        "lat": "52.607778",
        "lon": "21.863609"
    },
    {
        "name": "Samostrzel",
        "numerStacji": "5103270",
        "lat": "53.127777",
        "lon": "17.433886"
    },
    {
        "name": "Stary Borek",
        "numerStacji": "5103271",
        "lat": "54.138056",
        "lon": "15.481663"
    },
    {
        "name": "Strabla",
        "numerStacji": "5103272",
        "lat": "52.901392",
        "lon": "23.113334"
    },
    {
        "name": "Szybowice",
        "numerStacji": "5103274",
        "lat": "50.344725",
        "lon": "17.481107"
    },
    {
        "name": "Świebodzice",
        "numerStacji": "5103275",
        "lat": "50.860275",
        "lon": "16.33278"
    },
    {
        "name": "Stare Bojanowo",
        "numerStacji": "5103278",
        "lat": "51.995837",
        "lon": "16.584999"
    },
    {
        "name": "Sobków",
        "numerStacji": "5103279",
        "lat": "50.731945",
        "lon": "20.430557"
    },
    {
        "name": "Strzebielewo Pyrzyckie",
        "numerStacji": "5103283",
        "lat": "53.261392",
        "lon": "15.109168"
    },
    {
        "name": "Świebodzin",
        "numerStacji": "5103284",
        "lat": "52.245279",
        "lon": "15.539724"
    },
    {
        "name": "Sokołowo Budzyńskie",
        "numerStacji": "5103288",
        "lat": "52.837776",
        "lon": "16.969441"
    },
    {
        "name": "Sobów",
        "numerStacji": "5103289",
        "lat": "50.59556",
        "lon": "21.739171"
    },
    {
        "name": "Sól Kiczora",
        "numerStacji": "5103293",
        "lat": "49.516945",
        "lon": "19.031665"
    },
    {
        "name": "Szczebrzeszyn",
        "numerStacji": "5103294",
        "lat": "50.670557",
        "lon": "22.9725"
    },
    {
        "name": "Sycewice",
        "numerStacji": "5103295",
        "lat": "54.414448",
        "lon": "16.849722"
    },
    {
        "name": "Sławięcice",
        "numerStacji": "5103301",
        "lat": "50.351386",
        "lon": "18.314443"
    },
    {
        "name": "Solec Wielkopolski",
        "numerStacji": "5103303",
        "lat": "52.109443",
        "lon": "17.319723"
    },
    {
        "name": "Strączno",
        "numerStacji": "5103305",
        "lat": "53.243054",
        "lon": "16.360835"
    },
    {
        "name": "Suszec Kopalnia Po",
        "numerStacji": "5103307",
        "lat": "50.039721",
        "lon": "18.77389"
    },
    {
        "name": "Skoczów",
        "numerStacji": "5103315",
        "lat": "49.793615",
        "lon": "18.790278"
    },
    {
        "name": "Siedlisko Czarnkowskie",
        "numerStacji": "5103319",
        "lat": "52.983886",
        "lon": "16.398886"
    },
    {
        "name": "Sosnowiec Dańdówka",
        "numerStacji": "5103320",
        "lat": "50.265557",
        "lon": "19.174719"
    },
    {
        "name": "Szydłowo Krajeńskie",
        "numerStacji": "5103324",
        "lat": "53.166943",
        "lon": "16.606115"
    },
    {
        "name": "Siedliska koło Tuchowa",
        "numerStacji": "5103325",
        "lat": "49.860279",
        "lon": "21.018614"
    },
    {
        "name": "Świdnica Miasto",
        "numerStacji": "5103327",
        "lat": "50.84111",
        "lon": "16.481668"
    },
    {
        "name": "Szadkowice",
        "numerStacji": "5103329",
        "lat": "51.41944",
        "lon": "20.16889"
    },
    {
        "name": "Siedliska Tomaszowskie",
        "numerStacji": "5103333",
        "lat": "50.261665",
        "lon": "23.554444"
    },
    {
        "name": "Świerki Dolne",
        "numerStacji": "5103334",
        "lat": "50.632497",
        "lon": "16.432218"
    },
    {
        "name": "Szczedrzykowice",
        "numerStacji": "5103335",
        "lat": "51.214998",
        "lon": "16.351945"
    },
    {
        "name": "Sędzice",
        "numerStacji": "5103337",
        "lat": "51.628888",
        "lon": "18.569997"
    },
    {
        "name": "Siedlec Trzebnicki",
        "numerStacji": "5103339",
        "lat": "51.233893",
        "lon": "17.118886"
    },
    {
        "name": "Siedlęcin",
        "numerStacji": "5103341",
        "lat": "50.944171",
        "lon": "15.68944"
    },
    {
        "name": "Sterławki Wielkie",
        "numerStacji": "5103342",
        "lat": "54.015282",
        "lon": "21.57528"
    },
    {
        "name": "Strzelce Kujawskie",
        "numerStacji": "5103346",
        "lat": "52.322775",
        "lon": "19.368608"
    },
    {
        "name": "Seroki",
        "numerStacji": "5103347",
        "lat": "52.196665",
        "lon": "20.465831"
    },
    {
        "name": "Sędziszów Małopolski",
        "numerStacji": "5103349",
        "lat": "50.075274",
        "lon": "21.695277"
    },
    {
        "name": "Serock",
        "numerStacji": "5103351",
        "lat": "53.36111",
        "lon": "18.089721"
    },
    {
        "name": "Siemiatycze",
        "numerStacji": "5103355",
        "lat": "52.389996",
        "lon": "22.943887"
    },
    {
        "name": "Sieradz Warta",
        "numerStacji": "5103358",
        "lat": "51.603053",
        "lon": "18.730553"
    },
    {
        "name": "Strzebiń",
        "numerStacji": "5103359",
        "lat": "50.617782",
        "lon": "18.899721"
    },
    {
        "name": "Szczecin Port Centralny",
        "numerStacji": "5103360",
        "lat": "53.411665",
        "lon": "14.568611"
    },
    {
        "name": "Sędzisław",
        "numerStacji": "5103361",
        "lat": "50.813333",
        "lon": "16.069998"
    },
    {
        "name": "Stanowice",
        "numerStacji": "5103362",
        "lat": "50.930004",
        "lon": "16.374723"
    },
    {
        "name": "Szaniawy",
        "numerStacji": "5103364",
        "lat": "51.946666",
        "lon": "22.543058"
    },
    {
        "name": "Szczepanowice",
        "numerStacji": "5103366",
        "lat": "50.30111",
        "lon": "20.024721"
    },
    {
        "name": "Świekatowo",
        "numerStacji": "5103367",
        "lat": "53.416942",
        "lon": "18.105282"
    },
    {
        "name": "Szaflary Wieś",
        "numerStacji": "5103369",
        "lat": "49.423331",
        "lon": "20.019166"
    },
    {
        "name": "Szarów",
        "numerStacji": "5103375",
        "lat": "50.009446",
        "lon": "20.256391"
    },
    {
        "name": "Szczaniec",
        "numerStacji": "5103377",
        "lat": "52.264444",
        "lon": "15.693611"
    },
    {
        "name": "Stawiguda",
        "numerStacji": "5103379",
        "lat": "53.648333",
        "lon": "20.405837"
    },
    {
        "name": "Starogard Gdański",
        "numerStacji": "5103381",
        "lat": "53.976943",
        "lon": "18.525554"
    },
    {
        "name": "Stogi Malborskie",
        "numerStacji": "5103382",
        "lat": "54.063886",
        "lon": "18.969163"
    },
    {
        "name": "Strzegom",
        "numerStacji": "5103386",
        "lat": "50.974447",
        "lon": "16.359163"
    },
    {
        "name": "Grodków",
        "numerStacji": "5103388",
        "lat": "50.650278",
        "lon": "17.377776"
    },
    {
        "name": "Stare Guty",
        "numerStacji": "5103389",
        "lat": "53.61528",
        "lon": "21.920277"
    },
    {
        "name": "Stara Kamienica",
        "numerStacji": "5103390",
        "lat": "50.913886",
        "lon": "15.566386"
    },
    {
        "name": "Siedliska",
        "numerStacji": "5103395",
        "lat": "54.000279",
        "lon": "21.913607"
    },
    {
        "name": "Skibno",
        "numerStacji": "5103396",
        "lat": "54.249163",
        "lon": "16.304446"
    },
    {
        "name": "Sidra",
        "numerStacji": "5103398",
        "lat": "53.544723",
        "lon": "23.446942"
    },
    {
        "name": "Siechnice",
        "numerStacji": "5103403",
        "lat": "51.038333",
        "lon": "17.144164"
    },
    {
        "name": "Szczecin Zdroje",
        "numerStacji": "5103404",
        "lat": "53.37889",
        "lon": "14.637225"
    },
    {
        "name": "Sieraków Śląski",
        "numerStacji": "5103405",
        "lat": "50.799445",
        "lon": "18.592776"
    },
    {
        "name": "Silno",
        "numerStacji": "5103406",
        "lat": "53.644171",
        "lon": "17.693333"
    },
    {
        "name": "Siódmak",
        "numerStacji": "5103409",
        "lat": "53.524444",
        "lon": "20.971393"
    },
    {
        "name": "Sierpc",
        "numerStacji": "5103410",
        "lat": "52.847781",
        "lon": "19.653611"
    },
    {
        "name": "Szczecin Zdunowo",
        "numerStacji": "5103411",
        "lat": "53.383052",
        "lon": "14.765834"
    },
    {
        "name": "Sierpów",
        "numerStacji": "5103412",
        "lat": "52.018337",
        "lon": "19.222776"
    },
    {
        "name": "Sierakowice Skierniewickie",
        "numerStacji": "5103413",
        "lat": "51.998615",
        "lon": "20.061667"
    },
    {
        "name": "Sitno",
        "numerStacji": "5103414",
        "lat": "51.985832",
        "lon": "22.866113"
    },
    {
        "name": "Silnowo",
        "numerStacji": "5103416",
        "lat": "53.635002",
        "lon": "16.491664"
    },
    {
        "name": "Styków Iłżecki",
        "numerStacji": "5103418",
        "lat": "51.010835",
        "lon": "21.152778"
    },
    {
        "name": "Sieniawa Żarska",
        "numerStacji": "5103420",
        "lat": "51.636664",
        "lon": "15.062226"
    },
    {
        "name": "Świercze",
        "numerStacji": "5103425",
        "lat": "52.67028",
        "lon": "20.762781"
    },
    {
        "name": "Skawa",
        "numerStacji": "5103426",
        "lat": "49.630829",
        "lon": "19.88111"
    },
    {
        "name": "Skoczów Bładnice",
        "numerStacji": "5103427",
        "lat": "49.771393",
        "lon": "18.77861"
    },
    {
        "name": "Skępe",
        "numerStacji": "5103430",
        "lat": "52.872222",
        "lon": "19.341667"
    },
    {
        "name": "Skórka",
        "numerStacji": "5103431",
        "lat": "53.218613",
        "lon": "16.870002"
    },
    {
        "name": "Skwierzyna",
        "numerStacji": "5103432",
        "lat": "52.590554",
        "lon": "15.499722"
    },
    {
        "name": "Skalmierz",
        "numerStacji": "5103434",
        "lat": "51.697224",
        "lon": "18.430278"
    },
    {
        "name": "Sklęczki",
        "numerStacji": "5103435",
        "lat": "52.224999",
        "lon": "19.402776"
    },
    {
        "name": "Skoki",
        "numerStacji": "5103437",
        "lat": "52.674442",
        "lon": "17.162223"
    },
    {
        "name": "Skokowa",
        "numerStacji": "5103439",
        "lat": "51.381946",
        "lon": "16.850837"
    },
    {
        "name": "Skrzynki",
        "numerStacji": "5103440",
        "lat": "51.603053",
        "lon": "19.966112"
    },
    {
        "name": "Skawa Środkowa",
        "numerStacji": "5103441",
        "lat": "49.6125",
        "lon": "19.900553"
    },
    {
        "name": "Sierakówek",
        "numerStacji": "5103444",
        "lat": "52.372503",
        "lon": "19.421671"
    },
    {
        "name": "Skórzewo",
        "numerStacji": "5103445",
        "lat": "54.164997",
        "lon": "17.980835"
    },
    {
        "name": "Sławki",
        "numerStacji": "5103449",
        "lat": "54.257226",
        "lon": "18.176108"
    },
    {
        "name": "Ślesin",
        "numerStacji": "5103453",
        "lat": "53.156111",
        "lon": "17.701387"
    },
    {
        "name": "Słowienkowo",
        "numerStacji": "5103454",
        "lat": "54.207219",
        "lon": "15.942504"
    },
    {
        "name": "Sterławki Małe",
        "numerStacji": "5103456",
        "lat": "54.011668",
        "lon": "21.646942"
    },
    {
        "name": "Śliwice",
        "numerStacji": "5103457",
        "lat": "53.713334",
        "lon": "18.18222"
    },
    {
        "name": "Stok Lacki",
        "numerStacji": "5103458",
        "lat": "52.161391",
        "lon": "22.386107"
    },
    {
        "name": "Sława Wielkopolska",
        "numerStacji": "5103460",
        "lat": "52.63417",
        "lon": "17.143885"
    },
    {
        "name": "Słomniki",
        "numerStacji": "5103461",
        "lat": "50.248334",
        "lon": "20.064166"
    },
    {
        "name": "Słonice",
        "numerStacji": "5103463",
        "lat": "53.090831",
        "lon": "15.51833"
    },
    {
        "name": "Słupia",
        "numerStacji": "5103464",
        "lat": "51.251944",
        "lon": "18.041386"
    },
    {
        "name": "Słomniki Miasto",
        "numerStacji": "5103465",
        "lat": "50.23583",
        "lon": "20.076391"
    },
    {
        "name": "Słosinko",
        "numerStacji": "5103467",
        "lat": "53.93917",
        "lon": "16.974448"
    },
    {
        "name": "Słotwiny",
        "numerStacji": "5103468",
        "lat": "51.722223",
        "lon": "19.839445"
    },
    {
        "name": "Słupca",
        "numerStacji": "5103469",
        "lat": "52.287222",
        "lon": "17.852226"
    },
    {
        "name": "Sławków",
        "numerStacji": "5103470",
        "lat": "50.295554",
        "lon": "19.373893"
    },
    {
        "name": "Słomianka",
        "numerStacji": "5103471",
        "lat": "51.401389",
        "lon": "20.204443"
    },
    {
        "name": "Słowik Przystanek",
        "numerStacji": "5103472",
        "lat": "50.833613",
        "lon": "20.538608"
    },
    {
        "name": "Smardy",
        "numerStacji": "5103474",
        "lat": "50.99194",
        "lon": "18.145832"
    },
    {
        "name": "Smardzew",
        "numerStacji": "5103476",
        "lat": "51.871112",
        "lon": "19.467498"
    },
    {
        "name": "Smętówo",
        "numerStacji": "5103477",
        "lat": "53.748059",
        "lon": "18.685832"
    },
    {
        "name": "Szymocice Pods",
        "numerStacji": "5103478",
        "lat": "50.151107",
        "lon": "18.349447"
    },
    {
        "name": "Smolec",
        "numerStacji": "5103483",
        "lat": "51.071665",
        "lon": "16.88167"
    },
    {
        "name": "Smolniki",
        "numerStacji": "5103485",
        "lat": "53.540004",
        "lon": "19.60444"
    },
    {
        "name": "Smogorzów Przysuski",
        "numerStacji": "5103487",
        "lat": "51.395277",
        "lon": "20.604445"
    },
    {
        "name": "Smroków",
        "numerStacji": "5103489",
        "lat": "50.274726",
        "lon": "20.046664"
    },
    {
        "name": "Sumina Wieś",
        "numerStacji": "5103490",
        "lat": "50.12111",
        "lon": "18.410555"
    },
    {
        "name": "Szymankowo",
        "numerStacji": "5103492",
        "lat": "54.072777",
        "lon": "18.926392"
    },
    {
        "name": "Smardzów Wrocławski",
        "numerStacji": "5103493",
        "lat": "51.03",
        "lon": "17.066111"
    },
    {
        "name": "Sandomierz",
        "numerStacji": "5103500",
        "lat": "50.660004",
        "lon": "21.764997"
    },
    {
        "name": "Słonowice",
        "numerStacji": "5103501",
        "lat": "54.3825",
        "lon": "16.925555"
    },
    {
        "name": "Ścinawka Średnia",
        "numerStacji": "5103502",
        "lat": "50.526388",
        "lon": "16.504725"
    },
    {
        "name": "Świnoujście Port",
        "numerStacji": "5103505",
        "lat": "53.90111",
        "lon": "14.260281"
    },
    {
        "name": "Solniki Wielkie",
        "numerStacji": "5103507",
        "lat": "51.154168",
        "lon": "17.493611"
    },
    {
        "name": "Szczecin Załom",
        "numerStacji": "5103508",
        "lat": "53.428888",
        "lon": "14.742777"
    },
    {
        "name": "Sanok Miasto",
        "numerStacji": "5103510",
        "lat": "49.556111",
        "lon": "22.198331"
    },
    {
        "name": "Świnoujście Przytór",
        "numerStacji": "5103511",
        "lat": "53.897496",
        "lon": "14.336671"
    },
    {
        "name": "Stanisławice",
        "numerStacji": "5103514",
        "lat": "49.991386",
        "lon": "20.356666"
    },
    {
        "name": "Szczawne Kulaszne",
        "numerStacji": "5103516",
        "lat": "49.407222",
        "lon": "22.143056"
    },
    {
        "name": "Szewnica",
        "numerStacji": "5103517",
        "lat": "52.479726",
        "lon": "21.554164"
    },
    {
        "name": "Sieniawa",
        "numerStacji": "5103518",
        "lat": "49.538887",
        "lon": "19.923332"
    },
    {
        "name": "Szczecinek Chyże",
        "numerStacji": "5103519",
        "lat": "53.718053",
        "lon": "16.697778"
    },
    {
        "name": "Sitkówka-Nowiny",
        "numerStacji": "5103520",
        "lat": "50.818331",
        "lon": "20.550276"
    },
    {
        "name": "Staniszcze Male",
        "numerStacji": "5103521",
        "lat": "50.664445",
        "lon": "18.318056"
    },
    {
        "name": "Sobolew",
        "numerStacji": "5103522",
        "lat": "51.740831",
        "lon": "21.673891"
    },
    {
        "name": "Sobibór",
        "numerStacji": "5103524",
        "lat": "51.444169",
        "lon": "23.596945"
    },
    {
        "name": "Sochaczew",
        "numerStacji": "5103525",
        "lat": "52.21556",
        "lon": "20.239725"
    },
    {
        "name": "Solec Kujawski",
        "numerStacji": "5103527",
        "lat": "53.078336",
        "lon": "18.224721"
    },
    {
        "name": "Sokoliniec",
        "numerStacji": "5103528",
        "lat": "53.294167",
        "lon": "15.505556"
    },
    {
        "name": "Sól",
        "numerStacji": "5103533",
        "lat": "49.493887",
        "lon": "19.051109"
    },
    {
        "name": "Somonino",
        "numerStacji": "5103534",
        "lat": "54.27",
        "lon": "18.193052"
    },
    {
        "name": "Sośnie Ostrowskie",
        "numerStacji": "5103536",
        "lat": "51.47111",
        "lon": "17.639443"
    },
    {
        "name": "Sosnowe",
        "numerStacji": "5103540",
        "lat": "52.175837",
        "lon": "21.940556"
    },
    {
        "name": "Sokule",
        "numerStacji": "5103542",
        "lat": "51.9975",
        "lon": "22.954171"
    },
    {
        "name": "Sowin",
        "numerStacji": "5103544",
        "lat": "50.55528",
        "lon": "17.608888"
    },
    {
        "name": "Staropole Częstochowskie",
        "numerStacji": "5103549",
        "lat": "50.764719",
        "lon": "19.53"
    },
    {
        "name": "Szpęgawsk",
        "numerStacji": "5103552",
        "lat": "54.00667",
        "lon": "18.609442"
    },
    {
        "name": "Spławie",
        "numerStacji": "5103556",
        "lat": "52.258331",
        "lon": "18.086108"
    },
    {
        "name": "Sopot Kamienny Potok",
        "numerStacji": "5103557",
        "lat": "54.45667",
        "lon": "18.55361"
    },
    {
        "name": "Strykowo Poznańskie",
        "numerStacji": "5103561",
        "lat": "52.243607",
        "lon": "16.61389"
    },
    {
        "name": "Spychowo",
        "numerStacji": "5103565",
        "lat": "53.591386",
        "lon": "21.355556"
    },
    {
        "name": "Sterkowiec",
        "numerStacji": "5103567",
        "lat": "49.993885",
        "lon": "20.679163"
    },
    {
        "name": "Suszec Rudziczka",
        "numerStacji": "5103568",
        "lat": "50.045555",
        "lon": "18.755004"
    },
    {
        "name": "Śliwiczki",
        "numerStacji": "5103570",
        "lat": "53.68722",
        "lon": "18.193052"
    },
    {
        "name": "Środa Śląska",
        "numerStacji": "5103571",
        "lat": "51.189442",
        "lon": "16.605836"
    },
    {
        "name": "Środa Wielkopolska",
        "numerStacji": "5103572",
        "lat": "52.218059",
        "lon": "17.275002"
    },
    {
        "name": "Sarbiewo",
        "numerStacji": "5103573",
        "lat": "52.819447",
        "lon": "15.545837"
    },
    {
        "name": "Stare Olesno",
        "numerStacji": "5103576",
        "lat": "50.91528",
        "lon": "18.37556"
    },
    {
        "name": "Starachowice Michałów",
        "numerStacji": "5103577",
        "lat": "51.015276",
        "lon": "21.107499"
    },
    {
        "name": "Stary Jawor",
        "numerStacji": "5103579",
        "lat": "51.079171",
        "lon": "16.160834"
    },
    {
        "name": "Śródborów",
        "numerStacji": "5103584",
        "lat": "52.10111",
        "lon": "21.296111"
    },
    {
        "name": "Stare Pole",
        "numerStacji": "5103586",
        "lat": "54.053333",
        "lon": "19.205274"
    },
    {
        "name": "Skierniewice Rawka",
        "numerStacji": "5103587",
        "lat": "51.977499",
        "lon": "20.221387"
    },
    {
        "name": "Skoroszyce",
        "numerStacji": "5103588",
        "lat": "50.593331",
        "lon": "17.374998"
    },
    {
        "name": "Stara Łubianka",
        "numerStacji": "5103590",
        "lat": "53.231944",
        "lon": "16.704996"
    },
    {
        "name": "Stara Wieś",
        "numerStacji": "5103591",
        "lat": "52.082502",
        "lon": "21.361669"
    },
    {
        "name": "Starkowo",
        "numerStacji": "5103593",
        "lat": "51.978892",
        "lon": "16.3125"
    },
    {
        "name": "Skarżysko Zachodnie",
        "numerStacji": "5103594",
        "lat": "51.100556",
        "lon": "20.85972"
    },
    {
        "name": "Skarżysko Kościelne",
        "numerStacji": "5103595",
        "lat": "51.12222",
        "lon": "20.917782"
    },
    {
        "name": "Stasin Polny",
        "numerStacji": "5103596",
        "lat": "51.213614",
        "lon": "22.475001"
    },
    {
        "name": "Suszka",
        "numerStacji": "5103597",
        "lat": "50.530829",
        "lon": "16.823609"
    },
    {
        "name": "Suliszewo Drawskie",
        "numerStacji": "5103599",
        "lat": "53.517225",
        "lon": "15.892497"
    },
    {
        "name": "Szklarska Poręba Dolna",
        "numerStacji": "5103601",
        "lat": "50.848607",
        "lon": "15.557226"
    },
    {
        "name": "Sośnica Jarosławska",
        "numerStacji": "5103604",
        "lat": "49.901665",
        "lon": "22.851388"
    },
    {
        "name": "Sosnowiec Kazimierz",
        "numerStacji": "5103608",
        "lat": "50.288893",
        "lon": "19.231945"
    },
    {
        "name": "Szastarka",
        "numerStacji": "5103613",
        "lat": "50.853335",
        "lon": "22.331947"
    },
    {
        "name": "Strzyżyno Słupskie",
        "numerStacji": "5103614",
        "lat": "54.491108",
        "lon": "17.371663"
    },
    {
        "name": "Sztumska Wieś",
        "numerStacji": "5103615",
        "lat": "53.894718",
        "lon": "19.001111"
    },
    {
        "name": "Sosnowiec Porąbka",
        "numerStacji": "5103616",
        "lat": "50.272497",
        "lon": "19.216942"
    },
    {
        "name": "Suszec",
        "numerStacji": "5103617",
        "lat": "50.035002",
        "lon": "18.791941"
    },
    {
        "name": "Steknica",
        "numerStacji": "5103623",
        "lat": "54.714723",
        "lon": "17.582496"
    },
    {
        "name": "Stefanowo",
        "numerStacji": "5103624",
        "lat": "52.23611",
        "lon": "15.971944"
    },
    {
        "name": "Starachowice",
        "numerStacji": "5103626",
        "lat": "51.051385",
        "lon": "21.058607"
    },
    {
        "name": "Staniątki",
        "numerStacji": "5103627",
        "lat": "50.01056",
        "lon": "20.206942"
    },
    {
        "name": "Stare Juchy",
        "numerStacji": "5103628",
        "lat": "53.925003",
        "lon": "22.16917"
    },
    {
        "name": "Stramnica",
        "numerStacji": "5103631",
        "lat": "54.155001",
        "lon": "15.650274"
    },
    {
        "name": "Stronno",
        "numerStacji": "5103632",
        "lat": "53.285555",
        "lon": "18.059167"
    },
    {
        "name": "Stobno",
        "numerStacji": "5103633",
        "lat": "53.109169",
        "lon": "16.626664"
    },
    {
        "name": "Strażów",
        "numerStacji": "5103635",
        "lat": "50.067777",
        "lon": "22.116385"
    },
    {
        "name": "Stęszew",
        "numerStacji": "5103636",
        "lat": "52.280274",
        "lon": "16.709724"
    },
    {
        "name": "Studzianka",
        "numerStacji": "5103638",
        "lat": "51.427224",
        "lon": "15.695004"
    },
    {
        "name": "Stalowa Wola Południe",
        "numerStacji": "5103639",
        "lat": "50.544726",
        "lon": "22.07917"
    },
    {
        "name": "Starczów",
        "numerStacji": "5103643",
        "lat": "50.56417",
        "lon": "16.947219"
    },
    {
        "name": "Susk",
        "numerStacji": "5103644",
        "lat": "52.784721",
        "lon": "19.683329"
    },
    {
        "name": "Subkowy",
        "numerStacji": "5103646",
        "lat": "53.985833",
        "lon": "18.753611"
    },
    {
        "name": "Suchedniów",
        "numerStacji": "5103648",
        "lat": "51.04556",
        "lon": "20.850003"
    },
    {
        "name": "Susiec",
        "numerStacji": "5103649",
        "lat": "50.416109",
        "lon": "23.227218"
    },
    {
        "name": "Stupsk Mazowiecki",
        "numerStacji": "5103651",
        "lat": "53.019996",
        "lon": "20.435277"
    },
    {
        "name": "Suchowolce",
        "numerStacji": "5103652",
        "lat": "52.617774",
        "lon": "23.283329"
    },
    {
        "name": "Sulino",
        "numerStacji": "5103653",
        "lat": "53.31806",
        "lon": "15.315003"
    },
    {
        "name": "Sulechów",
        "numerStacji": "5103656",
        "lat": "52.092777",
        "lon": "15.618614"
    },
    {
        "name": "Sumina",
        "numerStacji": "5103657",
        "lat": "50.13667",
        "lon": "18.402501"
    },
    {
        "name": "Sułów",
        "numerStacji": "5103659",
        "lat": "50.905832",
        "lon": "22.333052"
    },
    {
        "name": "Suchedniów Północny",
        "numerStacji": "5103660",
        "lat": "51.065831",
        "lon": "20.849167"
    },
    {
        "name": "Surochów",
        "numerStacji": "5103662",
        "lat": "50.012502",
        "lon": "22.768885"
    },
    {
        "name": "Susz",
        "numerStacji": "5103663",
        "lat": "53.711114",
        "lon": "19.329163"
    },
    {
        "name": "Suchatówka",
        "numerStacji": "5103664",
        "lat": "52.910831",
        "lon": "18.481669"
    },
    {
        "name": "Stulno",
        "numerStacji": "5103665",
        "lat": "51.375276",
        "lon": "23.612226"
    },
    {
        "name": "Studzianki Nowe",
        "numerStacji": "5103666",
        "lat": "52.537221",
        "lon": "20.751391"
    },
    {
        "name": "Suchy Bór Opolski",
        "numerStacji": "5103669",
        "lat": "50.657226",
        "lon": "18.035552"
    },
    {
        "name": "Sulęcinek",
        "numerStacji": "5103672",
        "lat": "52.138891",
        "lon": "17.308891"
    },
    {
        "name": "Swarożyn",
        "numerStacji": "5103673",
        "lat": "54.037782",
        "lon": "18.655556"
    },
    {
        "name": "Świder",
        "numerStacji": "5103676",
        "lat": "52.121111",
        "lon": "21.251668"
    },
    {
        "name": "Swędów",
        "numerStacji": "5103677",
        "lat": "51.905837",
        "lon": "19.540275"
    },
    {
        "name": "Stawno",
        "numerStacji": "5103678",
        "lat": "53.867499",
        "lon": "14.827779"
    },
    {
        "name": "Świętochłowice",
        "numerStacji": "5103680",
        "lat": "50.288893",
        "lon": "18.918329"
    },
    {
        "name": "Świnoujście Warszów",
        "numerStacji": "5103682",
        "lat": "53.900274",
        "lon": "14.285837"
    },
    {
        "name": "Świlcza",
        "numerStacji": "5103683",
        "lat": "50.07806",
        "lon": "21.90139"
    },
    {
        "name": "Świdnik Miasto",
        "numerStacji": "5103684",
        "lat": "51.223888",
        "lon": "22.694724"
    },
    {
        "name": "Świdnik Wschód",
        "numerStacji": "5103685",
        "lat": "51.221111",
        "lon": "22.714447"
    },
    {
        "name": "Swobodna",
        "numerStacji": "5103686",
        "lat": "53.939997",
        "lon": "20.394448"
    },
    {
        "name": "Swarzędz",
        "numerStacji": "5103688",
        "lat": "52.404163",
        "lon": "17.074444"
    },
    {
        "name": "Świętajno",
        "numerStacji": "5103690",
        "lat": "53.56361",
        "lon": "21.231388"
    },
    {
        "name": "Sułkowice",
        "numerStacji": "5103691",
        "lat": "51.926665",
        "lon": "21.092496"
    },
    {
        "name": "Swarzewo",
        "numerStacji": "5103692",
        "lat": "54.752496",
        "lon": "18.3825"
    },
    {
        "name": "Stawy",
        "numerStacji": "5103693",
        "lat": "51.60139",
        "lon": "21.887223"
    },
    {
        "name": "Skowarcz",
        "numerStacji": "5103696",
        "lat": "54.184171",
        "lon": "18.683333"
    },
    {
        "name": "Szeroki Bór",
        "numerStacji": "5103697",
        "lat": "53.639443",
        "lon": "21.673334"
    },
    {
        "name": "Szydłowiec",
        "numerStacji": "5103698",
        "lat": "51.207501",
        "lon": "20.923337"
    },
    {
        "name": "Święta Katarzyna",
        "numerStacji": "5103699",
        "lat": "51.029721",
        "lon": "17.123057"
    },
    {
        "name": "Szewce",
        "numerStacji": "5103706",
        "lat": "51.214998",
        "lon": "16.955274"
    },
    {
        "name": "Stryszawa",
        "numerStacji": "5103710",
        "lat": "49.734169",
        "lon": "19.526108"
    },
    {
        "name": "Szymbory",
        "numerStacji": "5103711",
        "lat": "52.892502",
        "lon": "22.605282"
    },
    {
        "name": "Sycze",
        "numerStacji": "5103712",
        "lat": "52.429719",
        "lon": "22.999998"
    },
    {
        "name": "Sucha Żyrardowska",
        "numerStacji": "5103713",
        "lat": "52.022778",
        "lon": "20.359444"
    },
    {
        "name": "Szydłów",
        "numerStacji": "5103715",
        "lat": "50.606114",
        "lon": "17.705001"
    },
    {
        "name": "Stary Węgliniec",
        "numerStacji": "5103716",
        "lat": "51.307218",
        "lon": "15.195276"
    },
    {
        "name": "Szczytna",
        "numerStacji": "5103717",
        "lat": "50.408333",
        "lon": "16.44972"
    },
    {
        "name": "Stary Kisielin",
        "numerStacji": "5103720",
        "lat": "51.936391",
        "lon": "15.59028"
    },
    {
        "name": "Teresin Niepokalanów",
        "numerStacji": "5103722",
        "lat": "52.201942",
        "lon": "20.416948"
    },
    {
        "name": "Skrzynno",
        "numerStacji": "5103724",
        "lat": "51.36528",
        "lon": "20.721385"
    },
    {
        "name": "Stryszów",
        "numerStacji": "5103726",
        "lat": "49.825553",
        "lon": "19.62222"
    },
    {
        "name": "Stary Sącz",
        "numerStacji": "5103727",
        "lat": "49.558888",
        "lon": "20.643332"
    },
    {
        "name": "Stary Klukom",
        "numerStacji": "5103728",
        "lat": "53.131948",
        "lon": "15.455001"
    },
    {
        "name": "Stryków",
        "numerStacji": "5103729",
        "lat": "51.910835",
        "lon": "19.594165"
    },
    {
        "name": "Stary Wielisław",
        "numerStacji": "5103730",
        "lat": "50.404998",
        "lon": "16.576109"
    },
    {
        "name": "Strzyżów nad Wisłokiem",
        "numerStacji": "5103733",
        "lat": "49.869169",
        "lon": "21.800558"
    },
    {
        "name": "Szachy",
        "numerStacji": "5103734",
        "lat": "51.991666",
        "lon": "22.910555"
    },
    {
        "name": "Szebnie",
        "numerStacji": "5103735",
        "lat": "49.755554",
        "lon": "21.613052"
    },
    {
        "name": "Szczepki",
        "numerStacji": "5103736",
        "lat": "53.966947",
        "lon": "22.984447"
    },
    {
        "name": "Szaflary",
        "numerStacji": "5103737",
        "lat": "49.43944",
        "lon": "20.017503"
    },
    {
        "name": "Szlachta",
        "numerStacji": "5103739",
        "lat": "53.763053",
        "lon": "18.11917"
    },
    {
        "name": "Szczejkowice Po",
        "numerStacji": "5103741",
        "lat": "50.079723",
        "lon": "18.671386"
    },
    {
        "name": "Szklarska Poręba Średnia",
        "numerStacji": "5103742",
        "lat": "50.838611",
        "lon": "15.540003"
    },
    {
        "name": "Szreniawa",
        "numerStacji": "5103745",
        "lat": "52.317498",
        "lon": "16.799167"
    },
    {
        "name": "Strzałkowo",
        "numerStacji": "5103748",
        "lat": "52.31028",
        "lon": "17.807775"
    },
    {
        "name": "Szymiszów",
        "numerStacji": "5103750",
        "lat": "50.52833",
        "lon": "18.223607"
    },
    {
        "name": "Tarnobrzeg",
        "numerStacji": "5103757",
        "lat": "50.568053",
        "lon": "21.696113"
    },
    {
        "name": "Taciszów",
        "numerStacji": "5103758",
        "lat": "50.358056",
        "lon": "18.507504"
    },
    {
        "name": "Targowiska",
        "numerStacji": "5103760",
        "lat": "49.649446",
        "lon": "21.821944"
    },
    {
        "name": "Tarchały Wielkie",
        "numerStacji": "5103761",
        "lat": "51.587223",
        "lon": "17.702502"
    },
    {
        "name": "Tarnowo Rogozińskie",
        "numerStacji": "5103762",
        "lat": "52.804165",
        "lon": "16.975275"
    },
    {
        "name": "Tarło",
        "numerStacji": "5103764",
        "lat": "51.506114",
        "lon": "22.688333"
    },
    {
        "name": "Tarnowiec",
        "numerStacji": "5103766",
        "lat": "49.736111",
        "lon": "21.577779"
    },
    {
        "name": "Tarnów Opolski",
        "numerStacji": "5103767",
        "lat": "50.572224",
        "lon": "18.077496"
    },
    {
        "name": "Tarnowo Pomorskie",
        "numerStacji": "5103768",
        "lat": "53.306392",
        "lon": "15.365837"
    },
    {
        "name": "Tarzymiechy",
        "numerStacji": "5103772",
        "lat": "50.854719",
        "lon": "23.122224"
    },
    {
        "name": "Taczanów",
        "numerStacji": "5103773",
        "lat": "51.839721",
        "lon": "17.756392"
    },
    {
        "name": "Tarnawa Dolna",
        "numerStacji": "5103775",
        "lat": "49.47972",
        "lon": "22.259997"
    },
    {
        "name": "Tereszpol Biłgorajski",
        "numerStacji": "5103777",
        "lat": "50.574445",
        "lon": "22.885278"
    },
    {
        "name": "Terespol Pomorski",
        "numerStacji": "5103781",
        "lat": "53.409723",
        "lon": "18.351946"
    },
    {
        "name": "Tuczno Krajeńskie",
        "numerStacji": "5103786",
        "lat": "53.218891",
        "lon": "16.17528"
    },
    {
        "name": "Tłuszcz",
        "numerStacji": "5103787",
        "lat": "52.431391",
        "lon": "21.43583"
    },
    {
        "name": "Tlen",
        "numerStacji": "5103788",
        "lat": "53.614165",
        "lon": "18.266665"
    },
    {
        "name": "Tłoki",
        "numerStacji": "5103789",
        "lat": "52.116113",
        "lon": "16.172223"
    },
    {
        "name": "Tarnów Mościce",
        "numerStacji": "5103794",
        "lat": "50.006389",
        "lon": "20.925279"
    },
    {
        "name": "Tułowice Niemodlińskie",
        "numerStacji": "5103795",
        "lat": "50.598059",
        "lon": "17.649169"
    },
    {
        "name": "Nowy Bieruń",
        "numerStacji": "5103796",
        "lat": "50.073889",
        "lon": "19.184724"
    },
    {
        "name": "Tołkiny",
        "numerStacji": "5103797",
        "lat": "54.1125",
        "lon": "21.239164"
    },
    {
        "name": "Tomaszów Bolesławiecki",
        "numerStacji": "5103799",
        "lat": "51.286112",
        "lon": "15.679722"
    },
    {
        "name": "Toruń Czerniewice",
        "numerStacji": "5103800",
        "lat": "52.975553",
        "lon": "18.673337"
    },
    {
        "name": "Topola-Osiedle",
        "numerStacji": "5103806",
        "lat": "51.613058",
        "lon": "17.762226"
    },
    {
        "name": "Toporów",
        "numerStacji": "5103807",
        "lat": "52.260282",
        "lon": "15.26167"
    },
    {
        "name": "Torzym",
        "numerStacji": "5103808",
        "lat": "52.312779",
        "lon": "15.058334"
    },
    {
        "name": "Toszek",
        "numerStacji": "5103809",
        "lat": "50.441386",
        "lon": "18.513886"
    },
    {
        "name": "Toruń Miasto",
        "numerStacji": "5103810",
        "lat": "53.011942",
        "lon": "18.620004"
    },
    {
        "name": "Toruń Kluczyki",
        "numerStacji": "5103811",
        "lat": "52.98972",
        "lon": "18.57806"
    },
    {
        "name": "Toruń Wschodni",
        "numerStacji": "5103812",
        "lat": "53.026109",
        "lon": "18.633056"
    },
    {
        "name": "Turowo Pomorskie",
        "numerStacji": "5103816",
        "lat": "53.647218",
        "lon": "16.722777"
    },
    {
        "name": "Trąbki",
        "numerStacji": "5103818",
        "lat": "53.395278",
        "lon": "15.238055"
    },
    {
        "name": "Warszawa Lotnisko Chopina",
        "numerStacji": "5103819",
        "lat": "52.169724",
        "lon": "20.975834"
    },
    {
        "name": "Trzciana",
        "numerStacji": "5103821",
        "lat": "50.078609",
        "lon": "21.848057"
    },
    {
        "name": "Troszyn",
        "numerStacji": "5103831",
        "lat": "53.844163",
        "lon": "14.718614"
    },
    {
        "name": "Trypucie",
        "numerStacji": "5103832",
        "lat": "53.07083",
        "lon": "23.025276"
    },
    {
        "name": "Trzebaw Rosnówko",
        "numerStacji": "5103833",
        "lat": "52.29667",
        "lon": "16.768055"
    },
    {
        "name": "Trawniki",
        "numerStacji": "5103837",
        "lat": "51.13556",
        "lon": "22.994164"
    },
    {
        "name": "Tryńcza",
        "numerStacji": "5103838",
        "lat": "50.137218",
        "lon": "22.538609"
    },
    {
        "name": "Trzcińsko",
        "numerStacji": "5103839",
        "lat": "50.883611",
        "lon": "15.871112"
    },
    {
        "name": "Turzno",
        "numerStacji": "5103841",
        "lat": "53.100836",
        "lon": "18.736387"
    },
    {
        "name": "Tuchola",
        "numerStacji": "5103842",
        "lat": "53.584168",
        "lon": "17.859166"
    },
    {
        "name": "Turbia",
        "numerStacji": "5103843",
        "lat": "50.617782",
        "lon": "21.972504"
    },
    {
        "name": "Turza Wielka",
        "numerStacji": "5103845",
        "lat": "53.303615",
        "lon": "20.08556"
    },
    {
        "name": "Tuchow",
        "numerStacji": "5103846",
        "lat": "49.891948",
        "lon": "21.056944"
    },
    {
        "name": "Tuły",
        "numerStacji": "5103850",
        "lat": "50.874163",
        "lon": "18.099996"
    },
    {
        "name": "Tumlin",
        "numerStacji": "5103851",
        "lat": "50.966392",
        "lon": "20.602224"
    },
    {
        "name": "Turzno Kujawskie",
        "numerStacji": "5103852",
        "lat": "52.833614",
        "lon": "18.78056"
    },
    {
        "name": "Tuchorza",
        "numerStacji": "5103853",
        "lat": "52.167504",
        "lon": "16.047498"
    },
    {
        "name": "Tuplice Debinka",
        "numerStacji": "5103854",
        "lat": "51.666113",
        "lon": "14.909724"
    },
    {
        "name": "Turów",
        "numerStacji": "5103855",
        "lat": "50.767776",
        "lon": "19.317504"
    },
    {
        "name": "Turzynów",
        "numerStacji": "5103859",
        "lat": "52.230554",
        "lon": "19.027224"
    },
    {
        "name": "Tuczki",
        "numerStacji": "5103860",
        "lat": "53.352219",
        "lon": "19.954722"
    },
    {
        "name": "Twardawa",
        "numerStacji": "5103864",
        "lat": "50.347224",
        "lon": "17.999164"
    },
    {
        "name": "Tworków",
        "numerStacji": "5103866",
        "lat": "50.017221",
        "lon": "18.248893"
    },
    {
        "name": "Twardogóra Sycowska",
        "numerStacji": "5103867",
        "lat": "51.360282",
        "lon": "17.469169"
    },
    {
        "name": "Tychy Żwaków",
        "numerStacji": "5103869",
        "lat": "50.109999",
        "lon": "18.953054"
    },
    {
        "name": "Tychowo",
        "numerStacji": "5103870",
        "lat": "53.921389",
        "lon": "16.235004"
    },
    {
        "name": "Kobiór",
        "numerStacji": "5103873",
        "lat": "50.065835",
        "lon": "18.923336"
    },
    {
        "name": "Tymień",
        "numerStacji": "5103876",
        "lat": "54.205278",
        "lon": "15.844719"
    },
    {
        "name": "Tychy Zachodnie",
        "numerStacji": "5103882",
        "lat": "50.12111",
        "lon": "18.978889"
    },
    {
        "name": "Trzemeszno",
        "numerStacji": "5103888",
        "lat": "52.569996",
        "lon": "17.818058"
    },
    {
        "name": "Trzebnica",
        "numerStacji": "5103889",
        "lat": "51.304171",
        "lon": "17.063054"
    },
    {
        "name": "Trzebiszewo",
        "numerStacji": "5103891",
        "lat": "52.625558",
        "lon": "15.40556"
    },
    {
        "name": "Ubocze",
        "numerStacji": "5103894",
        "lat": "51.055835",
        "lon": "15.419997"
    },
    {
        "name": "Urle",
        "numerStacji": "5103897",
        "lat": "52.506667",
        "lon": "21.620558"
    },
    {
        "name": "Uhrusk",
        "numerStacji": "5103902",
        "lat": "51.319444",
        "lon": "23.619166"
    },
    {
        "name": "Ulikowo",
        "numerStacji": "5103903",
        "lat": "53.348615",
        "lon": "15.117501"
    },
    {
        "name": "Unisław Pomorski",
        "numerStacji": "5103907",
        "lat": "53.206666",
        "lon": "18.384163"
    },
    {
        "name": "Unieszewo",
        "numerStacji": "5103909",
        "lat": "53.729164",
        "lon": "20.299998"
    },
    {
        "name": "Ustroń Polana",
        "numerStacji": "5103914",
        "lat": "49.696666",
        "lon": "18.830001"
    },
    {
        "name": "Ustanówek",
        "numerStacji": "5103915",
        "lat": "51.99528",
        "lon": "21.061115"
    },
    {
        "name": "Ustroń",
        "numerStacji": "5103916",
        "lat": "49.728056",
        "lon": "18.80306"
    },
    {
        "name": "Uhrusk Przystanek",
        "numerStacji": "5103917",
        "lat": "51.295829",
        "lon": "23.618887"
    },
    {
        "name": "Uhowo",
        "numerStacji": "5103918",
        "lat": "53.003887",
        "lon": "22.908056"
    },
    {
        "name": "Ustroń Zdrój",
        "numerStacji": "5103919",
        "lat": "49.721386",
        "lon": "18.815555"
    },
    {
        "name": "Warszawa Gocławek",
        "numerStacji": "5103920",
        "lat": "52.236946",
        "lon": "21.135554"
    },
    {
        "name": "Walawa",
        "numerStacji": "5103921",
        "lat": "49.859443",
        "lon": "22.855281"
    },
    {
        "name": "Warszawa Rembertów",
        "numerStacji": "5103922",
        "lat": "52.256947",
        "lon": "21.158333"
    },
    {
        "name": "Warszawa Choszczówka",
        "numerStacji": "5103923",
        "lat": "52.358057",
        "lon": "20.97222"
    },
    {
        "name": "Wadowice",
        "numerStacji": "5103924",
        "lat": "49.884999",
        "lon": "19.501945"
    },
    {
        "name": "Warszawa Gołąbki",
        "numerStacji": "5103925",
        "lat": "52.208333",
        "lon": "20.863891"
    },
    {
        "name": "Wałbrzych Fabryczny",
        "numerStacji": "5103926",
        "lat": "50.761393",
        "lon": "16.2675"
    },
    {
        "name": "Warszawa Olszynka Grochowska",
        "numerStacji": "5103927",
        "lat": "52.249998",
        "lon": "21.106663"
    },
    {
        "name": "Warszawa Miedzeszyn",
        "numerStacji": "5103932",
        "lat": "52.172781",
        "lon": "21.200277"
    },
    {
        "name": "Wandzin",
        "numerStacji": "5103933",
        "lat": "51.398612",
        "lon": "22.630002"
    },
    {
        "name": "Warszawa Ochota",
        "numerStacji": "5103934",
        "lat": "52.22560442839062",
        "lon": "20.990560054779056"
    },
    {
        "name": "Waplewo",
        "numerStacji": "5103935",
        "lat": "53.51194",
        "lon": "20.353888"
    },
    {
        "name": "Warka",
        "numerStacji": "5103937",
        "lat": "51.79278",
        "lon": "21.17028"
    },
    {
        "name": "Wasilków",
        "numerStacji": "5103938",
        "lat": "53.197776",
        "lon": "23.176663"
    },
    {
        "name": "Warszawa Ursus",
        "numerStacji": "5103940",
        "lat": "52.196665",
        "lon": "20.886113"
    },
    {
        "name": "Węgierska Górka",
        "numerStacji": "5103941",
        "lat": "49.603331",
        "lon": "19.117782"
    },
    {
        "name": "Warszawa Wawer",
        "numerStacji": "5103942",
        "lat": "52.223615",
        "lon": "21.149721"
    },
    {
        "name": "Brzezie",
        "numerStacji": "5103945",
        "lat": "52.696115",
        "lon": "18.965558"
    },
    {
        "name": "Wróblik Szlachecki",
        "numerStacji": "5103946",
        "lat": "49.613615",
        "lon": "21.878333"
    },
    {
        "name": "Wierzbowa Śląska",
        "numerStacji": "5103949",
        "lat": "51.39667",
        "lon": "15.759169"
    },
    {
        "name": "Wąbrzeźno",
        "numerStacji": "5103950",
        "lat": "53.265276",
        "lon": "18.982224"
    },
    {
        "name": "Warszawa Dawidy",
        "numerStacji": "5103952",
        "lat": "52.128608",
        "lon": "20.991107"
    },
    {
        "name": "Wąchock",
        "numerStacji": "5103955",
        "lat": "51.080277",
        "lon": "21.015279"
    },
    {
        "name": "Warząchewka",
        "numerStacji": "5103957",
        "lat": "52.58472",
        "lon": "19.080836"
    },
    {
        "name": "Wieliczka Park",
        "numerStacji": "5103959",
        "lat": "49.989166",
        "lon": "20.049163"
    },
    {
        "name": "Wieclawice",
        "numerStacji": "5103960",
        "lat": "52.841947",
        "lon": "18.306388"
    },
    {
        "name": "Wisłoczanka",
        "numerStacji": "5103961",
        "lat": "49.951942",
        "lon": "21.914721"
    },
    {
        "name": "Wierchomla Wielka",
        "numerStacji": "5103962",
        "lat": "49.402224",
        "lon": "20.755832"
    },
    {
        "name": "Wałcz Raduń",
        "numerStacji": "5103963",
        "lat": "53.276944",
        "lon": "16.458611"
    },
    {
        "name": "Wierzchosławice",
        "numerStacji": "5103964",
        "lat": "52.869166",
        "lon": "18.359721"
    },
    {
        "name": "Wilczyska",
        "numerStacji": "5103966",
        "lat": "49.676386",
        "lon": "20.942223"
    },
    {
        "name": "Wałcz",
        "numerStacji": "5103967",
        "lat": "53.275002",
        "lon": "16.484167"
    },
    {
        "name": "Rydułtowy",
        "numerStacji": "5103968",
        "lat": "50.068891",
        "lon": "18.426107"
    },
    {
        "name": "Widzino",
        "numerStacji": "5103969",
        "lat": "54.428336",
        "lon": "16.961944"
    },
    {
        "name": "Wodzisław Śląski Radlin",
        "numerStacji": "5103970",
        "lat": "50.01972",
        "lon": "18.480833"
    },
    {
        "name": "Radlin Obszary",
        "numerStacji": "5103971",
        "lat": "50.04",
        "lon": "18.495836"
    },
    {
        "name": "Widzów Teklinów",
        "numerStacji": "5103972",
        "lat": "50.982222",
        "lon": "19.368329"
    },
    {
        "name": "Węgrzce Wielkie",
        "numerStacji": "5103980",
        "lat": "50.018615",
        "lon": "20.105552"
    },
    {
        "name": "Węgry",
        "numerStacji": "5103981",
        "lat": "50.926112",
        "lon": "17.032779"
    },
    {
        "name": "Wejherowo Śmiechowo",
        "numerStacji": "5103982",
        "lat": "54.601945",
        "lon": "18.274441"
    },
    {
        "name": "Wejherowo-Nanice",
        "numerStacji": "5103984",
        "lat": "54.603608",
        "lon": "18.24972"
    },
    {
        "name": "Wiekowo",
        "numerStacji": "5103985",
        "lat": "54.303332",
        "lon": "16.38694"
    },
    {
        "name": "Wielanowo",
        "numerStacji": "5103986",
        "lat": "53.873612",
        "lon": "16.326388"
    },
    {
        "name": "Werchrata",
        "numerStacji": "5103991",
        "lat": "50.248334",
        "lon": "23.485829"
    },
    {
        "name": "Wieluń",
        "numerStacji": "5103994",
        "lat": "51.223888",
        "lon": "18.581944"
    },
    {
        "name": "Węgorzyno",
        "numerStacji": "5104000",
        "lat": "53.54333",
        "lon": "15.565002"
    },
    {
        "name": "Wągrowiec",
        "numerStacji": "5104001",
        "lat": "52.809442",
        "lon": "17.201947"
    },
    {
        "name": "Wargowo",
        "numerStacji": "5104002",
        "lat": "52.584442",
        "lon": "16.822782"
    },
    {
        "name": "Wągry",
        "numerStacji": "5104003",
        "lat": "51.791108",
        "lon": "19.849441"
    },
    {
        "name": "Widacz",
        "numerStacji": "5104005",
        "lat": "49.632501",
        "lon": "21.846385"
    },
    {
        "name": "Widuchowa",
        "numerStacji": "5104008",
        "lat": "53.123615",
        "lon": "14.446115"
    },
    {
        "name": "Widełka",
        "numerStacji": "5104009",
        "lat": "50.201671",
        "lon": "21.873056"
    },
    {
        "name": "Wieleń Północny",
        "numerStacji": "5104011",
        "lat": "52.907496",
        "lon": "16.179999"
    },
    {
        "name": "Wierzchucin",
        "numerStacji": "5104013",
        "lat": "53.548058",
        "lon": "18.112779"
    },
    {
        "name": "Wiktorowo",
        "numerStacji": "5104016",
        "lat": "52.464166",
        "lon": "19.106392"
    },
    {
        "name": "Wieruszów Miasto",
        "numerStacji": "5104018",
        "lat": "51.299721",
        "lon": "18.16444"
    },
    {
        "name": "Wipsowo",
        "numerStacji": "5104021",
        "lat": "53.894718",
        "lon": "20.79694"
    },
    {
        "name": "Wiry",
        "numerStacji": "5104023",
        "lat": "52.315278",
        "lon": "16.86806"
    },
    {
        "name": "Wiśniowa",
        "numerStacji": "5104024",
        "lat": "49.866391",
        "lon": "21.652218"
    },
    {
        "name": "Witanów",
        "numerStacji": "5104025",
        "lat": "52.185833",
        "lon": "20.572776"
    },
    {
        "name": "Wieniawa",
        "numerStacji": "5104028",
        "lat": "51.363329",
        "lon": "20.790557"
    },
    {
        "name": "Wieżyca",
        "numerStacji": "5104030",
        "lat": "54.234448",
        "lon": "18.127503"
    },
    {
        "name": "Warszawa Jeziorki",
        "numerStacji": "5104032",
        "lat": "52.109164",
        "lon": "20.993336"
    },
    {
        "name": "Wojaszówka",
        "numerStacji": "5104033",
        "lat": "49.776391",
        "lon": "21.659167"
    },
    {
        "name": "Wojnowice Wielkopolskie",
        "numerStacji": "5104037",
        "lat": "52.326946",
        "lon": "16.467222"
    },
    {
        "name": "Wilkowice Bystra",
        "numerStacji": "5104042",
        "lat": "49.76111",
        "lon": "19.087497"
    },
    {
        "name": "Wilkowo Świebodzińskie",
        "numerStacji": "5104044",
        "lat": "52.256389",
        "lon": "15.468611"
    },
    {
        "name": "Wałki",
        "numerStacji": "5104047",
        "lat": "50.050553",
        "lon": "21.142503"
    },
    {
        "name": "Wilkołaz",
        "numerStacji": "5104049",
        "lat": "50.985557",
        "lon": "22.328612"
    },
    {
        "name": "Wilków Namysłowski",
        "numerStacji": "5104050",
        "lat": "51.094165",
        "lon": "17.659165"
    },
    {
        "name": "Warkocz",
        "numerStacji": "5104052",
        "lat": "50.828057",
        "lon": "17.046946"
    },
    {
        "name": "Wkra",
        "numerStacji": "5104054",
        "lat": "52.58472",
        "lon": "20.57167"
    },
    {
        "name": "Wilkoszewice",
        "numerStacji": "5104055",
        "lat": "51.251665",
        "lon": "19.630553"
    },
    {
        "name": "Wilkowice",
        "numerStacji": "5104057",
        "lat": "51.886663",
        "lon": "16.541392"
    },
    {
        "name": "Wisła Kopydło",
        "numerStacji": "5104058",
        "lat": "49.634721",
        "lon": "18.870003"
    },
    {
        "name": "Wilkołaz Wieś",
        "numerStacji": "5104059",
        "lat": "51.007221",
        "lon": "22.336109"
    },
    {
        "name": "Władysławowo",
        "numerStacji": "5104061",
        "lat": "54.793891",
        "lon": "18.401944"
    },
    {
        "name": "Wolbrom",
        "numerStacji": "5104062",
        "lat": "50.376107",
        "lon": "19.772502"
    },
    {
        "name": "Włodawa",
        "numerStacji": "5104063",
        "lat": "51.515831",
        "lon": "23.585555"
    },
    {
        "name": "Wleń",
        "numerStacji": "5104064",
        "lat": "51.016112",
        "lon": "15.66889"
    },
    {
        "name": "Włoszakowice",
        "numerStacji": "5104065",
        "lat": "51.932778",
        "lon": "16.373609"
    },
    {
        "name": "Wałdowo Szlacheckie",
        "numerStacji": "5104067",
        "lat": "53.387223",
        "lon": "18.722778"
    },
    {
        "name": "Wola Radziszowska",
        "numerStacji": "5104068",
        "lat": "49.906942",
        "lon": "19.778336"
    },
    {
        "name": "Wola Lipieniecka",
        "numerStacji": "5104070",
        "lat": "51.2775",
        "lon": "21.026947"
    },
    {
        "name": "Wołomin Słoneczna",
        "numerStacji": "5104071",
        "lat": "52.354165",
        "lon": "21.25583"
    },
    {
        "name": "Władysławowo Port",
        "numerStacji": "5104073",
        "lat": "54.793613",
        "lon": "18.417774"
    },
    {
        "name": "Wola Rowska",
        "numerStacji": "5104074",
        "lat": "51.821671",
        "lon": "21.601115"
    },
    {
        "name": "Włostowo",
        "numerStacji": "5104076",
        "lat": "51.753056",
        "lon": "17.02556"
    },
    {
        "name": "Włocławek Zazamcze",
        "numerStacji": "5104079",
        "lat": "52.667781",
        "lon": "19.039171"
    },
    {
        "name": "Warszawa Międzylesie",
        "numerStacji": "5104080",
        "lat": "52.203892",
        "lon": "21.169165"
    },
    {
        "name": "Wierna Rzeka",
        "numerStacji": "5104082",
        "lat": "50.865282",
        "lon": "20.313059"
    },
    {
        "name": "Wrześnica",
        "numerStacji": "5104083",
        "lat": "54.403337",
        "lon": "16.780281"
    },
    {
        "name": "Wólka Niedzieliska",
        "numerStacji": "5104084",
        "lat": "50.708609",
        "lon": "23.08722"
    },
    {
        "name": "Warnowo",
        "numerStacji": "5104089",
        "lat": "53.928059",
        "lon": "14.533607"
    },
    {
        "name": "Wolica",
        "numerStacji": "5104092",
        "lat": "50.75333",
        "lon": "20.469723"
    },
    {
        "name": "Wola Bierwiecka",
        "numerStacji": "5104093",
        "lat": "51.543886",
        "lon": "21.177498"
    },
    {
        "name": "Wodzisław Śląski",
        "numerStacji": "5104095",
        "lat": "50.007774",
        "lon": "18.476671"
    },
    {
        "name": "Wolenice",
        "numerStacji": "5104096",
        "lat": "51.774163",
        "lon": "17.438057"
    },
    {
        "name": "Wola Filipowska",
        "numerStacji": "5104097",
        "lat": "50.130836",
        "lon": "19.57722"
    },
    {
        "name": "Warszawa Wola Grzybowska",
        "numerStacji": "5104098",
        "lat": "52.252776",
        "lon": "21.252225"
    },
    {
        "name": "Wojanów",
        "numerStacji": "5104100",
        "lat": "50.884725",
        "lon": "15.821671"
    },
    {
        "name": "Wolanów",
        "numerStacji": "5104102",
        "lat": "51.353333",
        "lon": "20.998613"
    },
    {
        "name": "Wołomin",
        "numerStacji": "5104103",
        "lat": "52.346111",
        "lon": "21.237501"
    },
    {
        "name": "Wołczyn",
        "numerStacji": "5104104",
        "lat": "51.013613",
        "lon": "18.046115"
    },
    {
        "name": "Wołowno",
        "numerStacji": "5104105",
        "lat": "53.816386",
        "lon": "20.198887"
    },
    {
        "name": "Wolin Pomorski",
        "numerStacji": "5104106",
        "lat": "53.848613",
        "lon": "14.60944"
    },
    {
        "name": "Worowo",
        "numerStacji": "5104107",
        "lat": "53.688892",
        "lon": "15.635001"
    },
    {
        "name": "Woszczele",
        "numerStacji": "5104108",
        "lat": "53.859445",
        "lon": "22.249722"
    },
    {
        "name": "Wólka Ratowiecka",
        "numerStacji": "5104109",
        "lat": "53.278885",
        "lon": "23.242779"
    },
    {
        "name": "Wólka Orłowska",
        "numerStacji": "5104110",
        "lat": "50.926948",
        "lon": "23.183333"
    },
    {
        "name": "Wólka",
        "numerStacji": "5104111",
        "lat": "52.321669",
        "lon": "17.753336"
    },
    {
        "name": "Wolsztyn",
        "numerStacji": "5104114",
        "lat": "52.111663",
        "lon": "16.10778"
    },
    {
        "name": "Wrocław Psie Pole",
        "numerStacji": "5104120",
        "lat": "51.150554",
        "lon": "17.119165"
    },
    {
        "name": "Wiesiółka",
        "numerStacji": "5104122",
        "lat": "50.414724",
        "lon": "19.349443"
    },
    {
        "name": "Wrząca Pomorska",
        "numerStacji": "5104124",
        "lat": "54.343055",
        "lon": "16.916944"
    },
    {
        "name": "Wrocław Brochów Po",
        "numerStacji": "5104125",
        "lat": "51.064447",
        "lon": "17.08444"
    },
    {
        "name": "Wrocławki",
        "numerStacji": "5104126",
        "lat": "53.240834",
        "lon": "18.609999"
    },
    {
        "name": "Wrocław Nowy Dwór Podg",
        "numerStacji": "5104127",
        "lat": "51.120279",
        "lon": "16.952775"
    },
    {
        "name": "Wróblin Głogowski",
        "numerStacji": "5104129",
        "lat": "51.686392",
        "lon": "15.955278"
    },
    {
        "name": "Wrocław Muchobór",
        "numerStacji": "5104130",
        "lat": "51.111667",
        "lon": "16.974169"
    },
    {
        "name": "Wrocław Kowale",
        "numerStacji": "5104132",
        "lat": "51.135003",
        "lon": "17.100279"
    },
    {
        "name": "Wrocław-Leśnica",
        "numerStacji": "5104133",
        "lat": "51.142779",
        "lon": "16.86611"
    },
    {
        "name": "Wrocław Mikołajów",
        "numerStacji": "5104134",
        "lat": "51.114723",
        "lon": "16.998053"
    },
    {
        "name": "Wronki",
        "numerStacji": "5104135",
        "lat": "52.705275",
        "lon": "16.385834"
    },
    {
        "name": "Wrocław Pawłowice",
        "numerStacji": "5104137",
        "lat": "51.168892",
        "lon": "17.108333"
    },
    {
        "name": "Wrocław Żerniki",
        "numerStacji": "5104138",
        "lat": "51.126113",
        "lon": "16.915829"
    },
    {
        "name": "Wrocław Sołtysowice",
        "numerStacji": "5104139",
        "lat": "51.141664",
        "lon": "17.080556"
    },
    {
        "name": "Wrocław Kuźniki",
        "numerStacji": "5104140",
        "lat": "51.12694",
        "lon": "16.953611"
    },
    {
        "name": "Wrzosów",
        "numerStacji": "5104141",
        "lat": "52.18444",
        "lon": "21.483059"
    },
    {
        "name": "Wrocław Popowice",
        "numerStacji": "5104142",
        "lat": "51.124998",
        "lon": "17.001388"
    },
    {
        "name": "Wroniawy",
        "numerStacji": "5104144",
        "lat": "52.059723",
        "lon": "16.164996"
    },
    {
        "name": "Wrzosowo",
        "numerStacji": "5104145",
        "lat": "54.114442",
        "lon": "15.83778"
    },
    {
        "name": "Wisła Obłaziec",
        "numerStacji": "5104147",
        "lat": "49.676944",
        "lon": "18.84833"
    },
    {
        "name": "Warszawa Radość",
        "numerStacji": "5104149",
        "lat": "52.185276",
        "lon": "21.187782"
    },
    {
        "name": "Warszawa Okecie",
        "numerStacji": "5104150",
        "lat": "52.168331",
        "lon": "20.987502"
    },
    {
        "name": "Wałbrzych Szczawienko",
        "numerStacji": "5104151",
        "lat": "50.815832",
        "lon": "16.302504"
    },
    {
        "name": "Wisła Głębce",
        "numerStacji": "5104152",
        "lat": "49.621948",
        "lon": "18.875001"
    },
    {
        "name": "Wisła Dziechcinka",
        "numerStacji": "5104153",
        "lat": "49.647225",
        "lon": "18.865275"
    },
    {
        "name": "Warszawa Powiśle",
        "numerStacji": "5104154",
        "lat": "52.236946",
        "lon": "21.033886"
    },
    {
        "name": "Wrocław Swojczyce",
        "numerStacji": "5104155",
        "lat": "51.115559",
        "lon": "17.121664"
    },
    {
        "name": "Warszawa Służewiec",
        "numerStacji": "5104157",
        "lat": "52.180278",
        "lon": "20.987223"
    },
    {
        "name": "Warszawa Stadion",
        "numerStacji": "5104158",
        "lat": "52.246942",
        "lon": "21.043891"
    },
    {
        "name": "Warszawa Płudy",
        "numerStacji": "5104160",
        "lat": "52.333607",
        "lon": "20.986109"
    },
    {
        "name": "Warszawa Praga",
        "numerStacji": "5104161",
        "lat": "52.279725",
        "lon": "21.020555"
    },
    {
        "name": "Warszawa Ursus Północny",
        "numerStacji": "5104164",
        "lat": "52.206391",
        "lon": "20.888054"
    },
    {
        "name": "Warszawa Włochy",
        "numerStacji": "5104165",
        "lat": "52.20694",
        "lon": "20.917224"
    },
    {
        "name": "Witaszyce",
        "numerStacji": "5104168",
        "lat": "51.936391",
        "lon": "17.560553"
    },
    {
        "name": "Witnica Chojeńska Po",
        "numerStacji": "5104169",
        "lat": "52.86611",
        "lon": "14.451113"
    },
    {
        "name": "Ropczyce Witkowice",
        "numerStacji": "5104170",
        "lat": "50.077224",
        "lon": "21.628055"
    },
    {
        "name": "Witonia",
        "numerStacji": "5104172",
        "lat": "52.156942",
        "lon": "19.276666"
    },
    {
        "name": "Witkowo Pyrzyckie",
        "numerStacji": "5104174",
        "lat": "53.285834",
        "lon": "15.075836"
    },
    {
        "name": "Witowo",
        "numerStacji": "5104177",
        "lat": "52.639725",
        "lon": "23.485281"
    },
    {
        "name": "Wudzyn",
        "numerStacji": "5104178",
        "lat": "53.322501",
        "lon": "18.075554"
    },
    {
        "name": "Warlubie",
        "numerStacji": "5104179",
        "lat": "53.58833",
        "lon": "18.622782"
    },
    {
        "name": "Wisła Uzdrowisko",
        "numerStacji": "5104181",
        "lat": "49.658336",
        "lon": "18.855"
    },
    {
        "name": "Wrocław Wojnów",
        "numerStacji": "5104182",
        "lat": "51.103613",
        "lon": "17.157774"
    },
    {
        "name": "Wrocław Osobowice",
        "numerStacji": "5104184",
        "lat": "51.166393",
        "lon": "16.997226"
    },
    {
        "name": "Wiewiecko Po",
        "numerStacji": "5104185",
        "lat": "53.526385",
        "lon": "15.649725"
    },
    {
        "name": "Wrocław Pracze",
        "numerStacji": "5104193",
        "lat": "51.169441",
        "lon": "16.903891"
    },
    {
        "name": "Wrocław Zakrzów",
        "numerStacji": "5104194",
        "lat": "51.158887",
        "lon": "17.121943"
    },
    {
        "name": "Warszawa Toruńska",
        "numerStacji": "5104196",
        "lat": "52.293614",
        "lon": "21.013607"
    },
    {
        "name": "Wrocław Świniary",
        "numerStacji": "5104198",
        "lat": "51.198053",
        "lon": "16.969719"
    },
    {
        "name": "Wrocław Zachodni",
        "numerStacji": "5104199",
        "lat": "51.090282",
        "lon": "16.950554"
    },
    {
        "name": "Wysoczany",
        "numerStacji": "5104200",
        "lat": "49.435835",
        "lon": "22.151389"
    },
    {
        "name": "Wydartowo",
        "numerStacji": "5104201",
        "lat": "52.608335",
        "lon": "17.90111"
    },
    {
        "name": "Wydminy",
        "numerStacji": "5104203",
        "lat": "53.976943",
        "lon": "22.032498"
    },
    {
        "name": "Wygoda",
        "numerStacji": "5104204",
        "lat": "51.703607",
        "lon": "21.71944"
    },
    {
        "name": "Wykno",
        "numerStacji": "5104206",
        "lat": "51.661115",
        "lon": "19.904167"
    },
    {
        "name": "Wysoka Braniewska",
        "numerStacji": "5104208",
        "lat": "54.279169",
        "lon": "20.021386"
    },
    {
        "name": "Wyrzysk Osiek",
        "numerStacji": "5104210",
        "lat": "53.119165",
        "lon": "17.292504"
    },
    {
        "name": "Wyszków",
        "numerStacji": "5104211",
        "lat": "52.601665",
        "lon": "21.446671"
    },
    {
        "name": "Wyszyny",
        "numerStacji": "5104213",
        "lat": "53.060834",
        "lon": "20.392497"
    },
    {
        "name": "Wyszomierz",
        "numerStacji": "5104214",
        "lat": "53.625833",
        "lon": "15.063332"
    },
    {
        "name": "Warszawa Rakowiec",
        "numerStacji": "5104216",
        "lat": "52.196944",
        "lon": "20.965829"
    },
    {
        "name": "Wieliszew",
        "numerStacji": "5104220",
        "lat": "52.429719",
        "lon": "20.977776"
    },
    {
        "name": "Wierzbica Górna",
        "numerStacji": "5104222",
        "lat": "51.022224",
        "lon": "17.975558"
    },
    {
        "name": "Wierzawice",
        "numerStacji": "5104224",
        "lat": "50.238886",
        "lon": "22.464169"
    },
    {
        "name": "Warszawa Wileńska",
        "numerStacji": "5104226",
        "lat": "52.255275",
        "lon": "21.037779"
    },
    {
        "name": "Warszawa Żerań",
        "numerStacji": "5104227",
        "lat": "52.314442",
        "lon": "20.998613"
    },
    {
        "name": "Warszawa Zachodnia P8",
        "numerStacji": "5104228",
        "lat": "52.2225",
        "lon": "20.961388"
    },
    {
        "name": "Wierzchucin Stary",
        "numerStacji": "5104230",
        "lat": "53.55694",
        "lon": "18.091393"
    },
    {
        "name": "Wierzchowo Człuchowskie",
        "numerStacji": "5104231",
        "lat": "53.618057",
        "lon": "17.447496"
    },
    {
        "name": "Żabiny",
        "numerStacji": "5104234",
        "lat": "53.342223",
        "lon": "19.982778"
    },
    {
        "name": "Zarzeka",
        "numerStacji": "5104235",
        "lat": "51.539167",
        "lon": "21.849442"
    },
    {
        "name": "Zaborze Po",
        "numerStacji": "5104236",
        "lat": "49.870832",
        "lon": "18.811393"
    },
    {
        "name": "Zaczernie",
        "numerStacji": "5104237",
        "lat": "50.095275",
        "lon": "21.979444"
    },
    {
        "name": "Zajezierze koło Dęblina",
        "numerStacji": "5104238",
        "lat": "51.542502",
        "lon": "21.817503"
    },
    {
        "name": "Zaborów",
        "numerStacji": "5104240",
        "lat": "49.90722",
        "lon": "21.830277"
    },
    {
        "name": "Żakowice",
        "numerStacji": "5104245",
        "lat": "51.732219",
        "lon": "19.790831"
    },
    {
        "name": "Żalno",
        "numerStacji": "5104246",
        "lat": "53.598056",
        "lon": "17.75917"
    },
    {
        "name": "Zaosie",
        "numerStacji": "5104249",
        "lat": "51.632781",
        "lon": "19.934164"
    },
    {
        "name": "Żarów",
        "numerStacji": "5104251",
        "lat": "50.939721",
        "lon": "16.493336"
    },
    {
        "name": "Zastów",
        "numerStacji": "5104252",
        "lat": "50.121667",
        "lon": "20.064723"
    },
    {
        "name": "Ząbrowo",
        "numerStacji": "5104254",
        "lat": "53.631667",
        "lon": "19.465278"
    },
    {
        "name": "Zawada",
        "numerStacji": "5104255",
        "lat": "50.715279",
        "lon": "23.123887"
    },
    {
        "name": "Zawadzkie",
        "numerStacji": "5104257",
        "lat": "50.608891",
        "lon": "18.473893"
    },
    {
        "name": "Zbąszyń",
        "numerStacji": "5104258",
        "lat": "52.259446",
        "lon": "15.894726"
    },
    {
        "name": "Zbąszyń Przedmieście",
        "numerStacji": "5104259",
        "lat": "52.256947",
        "lon": "15.926944"
    },
    {
        "name": "Żabno koło Chojnic",
        "numerStacji": "5104261",
        "lat": "53.854725",
        "lon": "17.7075"
    },
    {
        "name": "Żabi Róg",
        "numerStacji": "5104263",
        "lat": "53.876111",
        "lon": "20.01806"
    },
    {
        "name": "Zblewo",
        "numerStacji": "5104266",
        "lat": "53.943053",
        "lon": "18.305831"
    },
    {
        "name": "Zabierzów",
        "numerStacji": "5104268",
        "lat": "50.117496",
        "lon": "19.799443"
    },
    {
        "name": "Zabrzeg Czarnolesie Po",
        "numerStacji": "5104271",
        "lat": "49.903885",
        "lon": "18.907218"
    },
    {
        "name": "Żabowo",
        "numerStacji": "5104273",
        "lat": "53.717226",
        "lon": "15.189999"
    },
    {
        "name": "Zbydniów",
        "numerStacji": "5104274",
        "lat": "50.634726",
        "lon": "21.920555"
    },
    {
        "name": "Zabieżki",
        "numerStacji": "5104275",
        "lat": "52.009725",
        "lon": "21.477225"
    },
    {
        "name": "Zdzieszowice",
        "numerStacji": "5104277",
        "lat": "50.4225",
        "lon": "18.125831"
    },
    {
        "name": "Zdrody Nowe",
        "numerStacji": "5104278",
        "lat": "52.954168",
        "lon": "22.782225"
    },
    {
        "name": "Zdrojowisko",
        "numerStacji": "5104280",
        "lat": "50.612226",
        "lon": "16.509166"
    },
    {
        "name": "Zebrzydowa",
        "numerStacji": "5104286",
        "lat": "51.255279",
        "lon": "15.377775"
    },
    {
        "name": "Zębice Wrocławskie",
        "numerStacji": "5104287",
        "lat": "51.006664",
        "lon": "17.162223"
    },
    {
        "name": "Żegiestów",
        "numerStacji": "5104289",
        "lat": "49.367778",
        "lon": "20.785559"
    },
    {
        "name": "Żelisławice",
        "numerStacji": "5104294",
        "lat": "50.803607",
        "lon": "19.858052"
    },
    {
        "name": "Zembrzyce",
        "numerStacji": "5104295",
        "lat": "49.775555",
        "lon": "19.59083"
    },
    {
        "name": "Żelistrzewo",
        "numerStacji": "5104301",
        "lat": "54.674164",
        "lon": "18.416111"
    },
    {
        "name": "Żegiestów-Zdrój",
        "numerStacji": "5104304",
        "lat": "49.363058",
        "lon": "20.803331"
    },
    {
        "name": "Zagajnik",
        "numerStacji": "5104305",
        "lat": "51.270282",
        "lon": "15.299164"
    },
    {
        "name": "Zagrody",
        "numerStacji": "5104306",
        "lat": "50.051389",
        "lon": "22.904721"
    },
    {
        "name": "Zgierz",
        "numerStacji": "5104308",
        "lat": "51.850275",
        "lon": "19.42639"
    },
    {
        "name": "Zagnańsk",
        "numerStacji": "5104309",
        "lat": "50.974447",
        "lon": "20.662776"
    },
    {
        "name": "Zagościniec",
        "numerStacji": "5104310",
        "lat": "52.365276",
        "lon": "21.281386"
    },
    {
        "name": "Zgierz Północ",
        "numerStacji": "5104311",
        "lat": "51.86917",
        "lon": "19.384168"
    },
    {
        "name": "Zagórz",
        "numerStacji": "5104314",
        "lat": "49.51361",
        "lon": "22.264447"
    },
    {
        "name": "Żukowo",
        "numerStacji": "5104315",
        "lat": "54.34444",
        "lon": "18.361942"
    },
    {
        "name": "Zieleń",
        "numerStacji": "5104316",
        "lat": "51.728615",
        "lon": "19.811389"
    },
    {
        "name": "Zielonka Bankowa",
        "numerStacji": "5104318",
        "lat": "52.29222",
        "lon": "21.153056"
    },
    {
        "name": "Zawidz",
        "numerStacji": "5104319",
        "lat": "52.829443",
        "lon": "19.843607"
    },
    {
        "name": "Zimnochy",
        "numerStacji": "5104324",
        "lat": "52.954725",
        "lon": "23.085557"
    },
    {
        "name": "Zielonczyn",
        "numerStacji": "5104325",
        "lat": "53.151113",
        "lon": "17.807226"
    },
    {
        "name": "Zielonka Pasłęcka",
        "numerStacji": "5104327",
        "lat": "53.981392",
        "lon": "19.700552"
    },
    {
        "name": "Zielonka Pomorska",
        "numerStacji": "5104328",
        "lat": "53.577498",
        "lon": "18.109165"
    },
    {
        "name": "Ziemomyśl",
        "numerStacji": "5104330",
        "lat": "53.166943",
        "lon": "15.302778"
    },
    {
        "name": "Zajączkowo Lubawskie",
        "numerStacji": "5104332",
        "lat": "53.443891",
        "lon": "19.713614"
    },
    {
        "name": "Ząbki",
        "numerStacji": "5104336",
        "lat": "52.292499",
        "lon": "21.113612"
    },
    {
        "name": "Zaklików",
        "numerStacji": "5104337",
        "lat": "50.768333",
        "lon": "22.107504"
    },
    {
        "name": "Zakrzów Kotowice",
        "numerStacji": "5104338",
        "lat": "51.035834",
        "lon": "17.210837"
    },
    {
        "name": "Zakrzów Sarnowo",
        "numerStacji": "5104340",
        "lat": "53.282778",
        "lon": "20.284447"
    },
    {
        "name": "Zakrzewo Zlotowskie",
        "numerStacji": "5104341",
        "lat": "53.416663",
        "lon": "17.141386"
    },
    {
        "name": "Złocieniec",
        "numerStacji": "5104343",
        "lat": "53.528057",
        "lon": "16.018607"
    },
    {
        "name": "Zalesie Górne",
        "numerStacji": "5104344",
        "lat": "52.026391",
        "lon": "21.041941"
    },
    {
        "name": "Złojec",
        "numerStacji": "5104346",
        "lat": "50.768612",
        "lon": "23.10083"
    },
    {
        "name": "Zalesie Krasieńskie",
        "numerStacji": "5104347",
        "lat": "51.121663",
        "lon": "23.166388"
    },
    {
        "name": "Złotniki Kutnowskie",
        "numerStacji": "5104349",
        "lat": "52.224999",
        "lon": "19.491391"
    },
    {
        "name": "Złotniki",
        "numerStacji": "5104350",
        "lat": "52.496114",
        "lon": "16.835834"
    },
    {
        "name": "Żelisławie Pomorskie",
        "numerStacji": "5104353",
        "lat": "53.524722",
        "lon": "16.143611"
    },
    {
        "name": "Złotniki Kujawskie",
        "numerStacji": "5104354",
        "lat": "52.903613",
        "lon": "18.147225"
    },
    {
        "name": "Złotów",
        "numerStacji": "5104356",
        "lat": "53.358889",
        "lon": "17.053058"
    },
    {
        "name": "Rzeszów Załęże",
        "numerStacji": "5104358",
        "lat": "50.058608",
        "lon": "22.069444"
    },
    {
        "name": "Żmigród",
        "numerStacji": "5104359",
        "lat": "51.472224",
        "lon": "16.901392"
    },
    {
        "name": "Zamek Bulowicki",
        "numerStacji": "5104363",
        "lat": "49.880001",
        "lon": "19.263335"
    },
    {
        "name": "Zamość",
        "numerStacji": "5104366",
        "lat": "50.713607",
        "lon": "23.239165"
    },
    {
        "name": "Żory",
        "numerStacji": "5104369",
        "lat": "50.051668",
        "lon": "18.702777"
    },
    {
        "name": "Żórawina",
        "numerStacji": "5104372",
        "lat": "50.983058",
        "lon": "17.049445"
    },
    {
        "name": "Żółtnica",
        "numerStacji": "5104373",
        "lat": "53.695275",
        "lon": "16.812219"
    },
    {
        "name": "Zosinów",
        "numerStacji": "5104376",
        "lat": "52.185833",
        "lon": "19.715834"
    },
    {
        "name": "Żółwino",
        "numerStacji": "5104377",
        "lat": "53.28889",
        "lon": "15.690833"
    },
    {
        "name": "Zarębki",
        "numerStacji": "5104379",
        "lat": "50.272497",
        "lon": "21.761941"
    },
    {
        "name": "Zaręba",
        "numerStacji": "5104380",
        "lat": "51.098057",
        "lon": "15.218333"
    },
    {
        "name": "Żarki-Letnisko",
        "numerStacji": "5104381",
        "lat": "50.623337",
        "lon": "19.272774"
    },
    {
        "name": "Zarośle",
        "numerStacji": "5104383",
        "lat": "53.664442",
        "lon": "18.117498"
    },
    {
        "name": "Zarszyn",
        "numerStacji": "5104386",
        "lat": "49.584166",
        "lon": "22.019446"
    },
    {
        "name": "Ząbkowice Śląskie",
        "numerStacji": "5104387",
        "lat": "50.601385",
        "lon": "16.80972"
    },
    {
        "name": "Zastocze",
        "numerStacji": "5104388",
        "lat": "53.311669",
        "lon": "22.858058"
    },
    {
        "name": "Żulin",
        "numerStacji": "5104390",
        "lat": "51.062775",
        "lon": "23.172222"
    },
    {
        "name": "Żurawica Rozrządowa",
        "numerStacji": "5104391",
        "lat": "49.832781",
        "lon": "22.8375"
    },
    {
        "name": "Zubrzyk",
        "numerStacji": "5104392",
        "lat": "49.3875",
        "lon": "20.753612"
    },
    {
        "name": "Żurawica",
        "numerStacji": "5104395",
        "lat": "49.819998",
        "lon": "22.824448"
    },
    {
        "name": "Żukowo Wschodnie",
        "numerStacji": "5104396",
        "lat": "54.348611",
        "lon": "18.373331"
    },
    {
        "name": "Zwardoń",
        "numerStacji": "5104398",
        "lat": "49.504441",
        "lon": "18.977775"
    },
    {
        "name": "Zawiercie Borowe Pole",
        "numerStacji": "5104399",
        "lat": "50.510837",
        "lon": "19.398892"
    },
    {
        "name": "Zawadowka",
        "numerStacji": "5104401",
        "lat": "51.124171",
        "lon": "23.355557"
    },
    {
        "name": "Rzeszów Zwięczyca",
        "numerStacji": "5104402",
        "lat": "50.006389",
        "lon": "21.95778"
    },
    {
        "name": "Zwierzyniec",
        "numerStacji": "5104403",
        "lat": "50.60917",
        "lon": "22.984447"
    },
    {
        "name": "Zawidz Kościelny",
        "numerStacji": "5104406",
        "lat": "52.824445",
        "lon": "19.876948"
    },
    {
        "name": "Życzyn",
        "numerStacji": "5104410",
        "lat": "51.647496",
        "lon": "21.760835"
    },
    {
        "name": "Zygmuntów",
        "numerStacji": "5104412",
        "lat": "51.409165",
        "lon": "20.570555"
    },
    {
        "name": "Żychlin",
        "numerStacji": "5104413",
        "lat": "52.213331",
        "lon": "19.617501"
    },
    {
        "name": "Zygmuntowo Mazowieckie",
        "numerStacji": "5104414",
        "lat": "52.727226",
        "lon": "21.52556"
    },
    {
        "name": "Żyrardów",
        "numerStacji": "5104415",
        "lat": "52.051948",
        "lon": "20.448059"
    },
    {
        "name": "Żywiec Sporysz",
        "numerStacji": "5104416",
        "lat": "49.676108",
        "lon": "19.223054"
    },
    {
        "name": "Żytkowice",
        "numerStacji": "5104417",
        "lat": "51.483056",
        "lon": "21.558056"
    },
    {
        "name": "Żywiec",
        "numerStacji": "5104418",
        "lat": "49.679443",
        "lon": "19.18583"
    },
    {
        "name": "Zarzecze",
        "numerStacji": "5104420",
        "lat": "50.363612",
        "lon": "19.699447"
    },
    {
        "name": "Częstochowa Gnaszyn",
        "numerStacji": "5104421",
        "lat": "50.79139",
        "lon": "19.028887"
    },
    {
        "name": "Zielone Wzgórza",
        "numerStacji": "5104422",
        "lat": "52.565277",
        "lon": "17.008607"
    },
    {
        "name": "Porosiuki",
        "numerStacji": "5104424",
        "lat": "52.011946",
        "lon": "23.062221"
    },
    {
        "name": "Gałęzinowo",
        "numerStacji": "5104430",
        "lat": "54.522777",
        "lon": "16.94028"
    },
    {
        "name": "Kaczorowo",
        "numerStacji": "5104431",
        "lat": "52.726948",
        "lon": "20.173331"
    },
    {
        "name": "Wieliczka Rynek-Kopalnia",
        "numerStacji": "5104446",
        "lat": "49.985552",
        "lon": "20.056669"
    },
    {
        "name": "Marcinków",
        "numerStacji": "5104453",
        "lat": "51.093329",
        "lon": "20.980275"
    },
    {
        "name": "Podzamcze",
        "numerStacji": "5104477",
        "lat": "51.209721",
        "lon": "22.787223"
    },
    {
        "name": "Jastarnia Wczasy",
        "numerStacji": "5104478",
        "lat": "54.708053",
        "lon": "18.655556"
    },
    {
        "name": "Milówka Zabawa",
        "numerStacji": "5104494",
        "lat": "49.540002",
        "lon": "19.102779"
    },
    {
        "name": "Pszczyna Czarków",
        "numerStacji": "5104497",
        "lat": "50.011387",
        "lon": "18.921385"
    },
    {
        "name": "Wrocław Stadion",
        "numerStacji": "5104501",
        "lat": "51.136945",
        "lon": "16.940558"
    },
    {
        "name": "Rajcza Centrum",
        "numerStacji": "5104519",
        "lat": "49.50667",
        "lon": "19.10028"
    },
    {
        "name": "Mińsk Mazowiecki Anielina",
        "numerStacji": "5104520",
        "lat": "52.167774",
        "lon": "21.585554"
    },
    {
        "name": "Medyka",
        "numerStacji": "5104533",
        "lat": "49.804447",
        "lon": "22.945829"
    },
    {
        "name": "Miasteczko Śląskie",
        "numerStacji": "5104536",
        "lat": "50.497497",
        "lon": "18.900279"
    },
    {
        "name": "Żakowice Południowe",
        "numerStacji": "5104541",
        "lat": "51.729442",
        "lon": "19.790274"
    },
    {
        "name": "Łowczówek Pleśna",
        "numerStacji": "5104542",
        "lat": "49.928336",
        "lon": "20.94972"
    },
    {
        "name": "Cięcina Dolna",
        "numerStacji": "5104563",
        "lat": "49.62139",
        "lon": "19.151941"
    },
    {
        "name": "Siedlce Wschodnie",
        "numerStacji": "5104580",
        "lat": "52.144447",
        "lon": "22.297779"
    },
    {
        "name": "Łuków Zapowiednik",
        "numerStacji": "5104581",
        "lat": "51.931942",
        "lon": "22.414441"
    },
    {
        "name": "Kobylany",
        "numerStacji": "5104583",
        "lat": "52.037781",
        "lon": "23.561114"
    },
    {
        "name": "Gdynia Cisowa",
        "numerStacji": "5104585",
        "lat": "54.549726",
        "lon": "18.447222"
    },
    {
        "name": "Kraków Lotnisko",
        "numerStacji": "5104659",
        "lat": "50.071112",
        "lon": "19.801393"
    },
    {
        "name": "Włoszczowa Północ",
        "numerStacji": "5104660",
        "lat": "50.850279",
        "lon": "19.943054"
    },
    {
        "name": "Port Lotniczy Lublin - Airport",
        "numerStacji": "5104674",
        "lat": "51.23028",
        "lon": "22.708891"
    },
    {
        "name": "Lublin Zadębie",
        "numerStacji": "5104675",
        "lat": "51.258056",
        "lon": "22.610001"
    },
    {
        "name": "Lublin Ponikwoda",
        "numerStacji": "5104676",
        "lat": "51.266111",
        "lon": "22.606109"
    },
    {
        "name": "Niemce",
        "numerStacji": "5104677",
        "lat": "51.362781",
        "lon": "22.646389"
    },
    {
        "name": "Kołobrzeg Stadion",
        "numerStacji": "5104678",
        "lat": "54.175002",
        "lon": "15.559168"
    },
    {
        "name": "Warszawa Zacisze Wilno",
        "numerStacji": "5104679",
        "lat": "52.277775",
        "lon": "21.08028"
    },
    {
        "name": "Ozorków Nowe Miasto",
        "numerStacji": "5104683",
        "lat": "51.958891",
        "lon": "19.269726"
    },
    {
        "name": "Parczew Kolejowa",
        "numerStacji": "5104684",
        "lat": "51.634444",
        "lon": "22.880837"
    },
    {
        "name": "Zgierz Jaracza",
        "numerStacji": "5104685",
        "lat": "51.863893",
        "lon": "19.422219"
    },
    {
        "name": "Warszawa Ursus Niedźwiadek",
        "numerStacji": "5104686",
        "lat": "52.191667",
        "lon": "20.870831"
    },
    {
        "name": "Łódź Pabianicka",
        "numerStacji": "5104687",
        "lat": "51.726385",
        "lon": "19.444998"
    },
    {
        "name": "Łódź Radogoszcz Zachód",
        "numerStacji": "5104688",
        "lat": "51.821941",
        "lon": "19.415837"
    },
    {
        "name": "Port Lotniczy Szczecin Goleniów",
        "numerStacji": "5104689",
        "lat": "53.593337",
        "lon": "14.898056"
    },
    {
        "name": "Glinnik Wieś",
        "numerStacji": "5104690",
        "lat": "51.88278",
        "lon": "19.481944"
    },
    {
        "name": "Łódź Dąbrowa",
        "numerStacji": "5104691",
        "lat": "51.735833",
        "lon": "19.510556"
    },
    {
        "name": "Domaniewice Centrum",
        "numerStacji": "5104695",
        "lat": "52.011946",
        "lon": "19.791946"
    },
    {
        "name": "Zabiele",
        "numerStacji": "5104696",
        "lat": "51.543608",
        "lon": "22.763609"
    },
    {
        "name": "Pałecznica",
        "numerStacji": "5104699",
        "lat": "51.490553",
        "lon": "22.659442"
    },
    {
        "name": "Sucha Beskidzka Zamek",
        "numerStacji": "5104705",
        "lat": "49.743886",
        "lon": "19.603055"
    },
    {
        "name": "Łódź Stoki",
        "numerStacji": "5104712",
        "lat": "51.776671",
        "lon": "19.510556"
    },
    {
        "name": "Łódź Marysin",
        "numerStacji": "5104713",
        "lat": "51.800277",
        "lon": "19.486115"
    },
    {
        "name": "Łódź Arturówek",
        "numerStacji": "5104714",
        "lat": "51.81528",
        "lon": "19.456666"
    },
    {
        "name": "Opoczno Południe",
        "numerStacji": "5104744",
        "lat": "51.361666",
        "lon": "20.235554"
    },
    {
        "name": "Dębica Wschodnia",
        "numerStacji": "5104745",
        "lat": "50.0625",
        "lon": "21.448891"
    },
    {
        "name": "Grąblewo",
        "numerStacji": "5104746",
        "lat": "52.235831",
        "lon": "16.389448"
    },
    {
        "name": "Wrocław Grabiszyn",
        "numerStacji": "5104747",
        "lat": "51.096664",
        "lon": "16.974169"
    },
    {
        "name": "Gdańsk Śródmieście",
        "numerStacji": "5104748",
        "lat": "54.346669",
        "lon": "18.644167"
    },
    {
        "name": "Zamość Starówka",
        "numerStacji": "5104752",
        "lat": "50.716942",
        "lon": "23.26278"
    },
    {
        "name": "Zamość Wschód",
        "numerStacji": "5104753",
        "lat": "50.722497",
        "lon": "23.276111"
    },
    {
        "name": "Wrocław Różanka",
        "numerStacji": "5104754",
        "lat": "51.138886",
        "lon": "17.003887"
    },
    {
        "name": "Ramiszów",
        "numerStacji": "5104755",
        "lat": "51.193334",
        "lon": "17.098337"
    },
    {
        "name": "Ruda-Huta",
        "numerStacji": "5104757",
        "lat": "51.235835",
        "lon": "23.589169"
    },
    {
        "name": "Majdan Stuleński",
        "numerStacji": "5104758",
        "lat": "51.357504",
        "lon": "23.611112"
    },
    {
        "name": "Okuninka Białe",
        "numerStacji": "5104759",
        "lat": "51.491389",
        "lon": "23.589996"
    },
    {
        "name": "Gdańsk Rębiechowo",
        "numerStacji": "5104760",
        "lat": "54.384999",
        "lon": "18.45694"
    },
    {
        "name": "Gdańsk Port Lotniczy",
        "numerStacji": "5104761",
        "lat": "54.382779",
        "lon": "18.466945"
    },
    {
        "name": "Gdańsk Matarnia",
        "numerStacji": "5104762",
        "lat": "54.373331",
        "lon": "18.506668"
    },
    {
        "name": "Gdańsk Kiełpinek",
        "numerStacji": "5104763",
        "lat": "54.355281",
        "lon": "18.528889"
    },
    {
        "name": "Gdańsk Jasień",
        "numerStacji": "5104764",
        "lat": "54.353887",
        "lon": "18.550553"
    },
    {
        "name": "Gdańsk Brętowo",
        "numerStacji": "5104765",
        "lat": "54.365277",
        "lon": "18.573611"
    },
    {
        "name": "Gdańsk Niedźwiednik",
        "numerStacji": "5104766",
        "lat": "54.377781",
        "lon": "18.571948"
    },
    {
        "name": "Gdańsk Strzyża",
        "numerStacji": "5104767",
        "lat": "54.391669",
        "lon": "18.57833"
    },
    {
        "name": "Kraków Olszanica",
        "numerStacji": "5104768",
        "lat": "50.076388",
        "lon": "19.825556"
    },
    {
        "name": "Kraków Zakliki",
        "numerStacji": "5104769",
        "lat": "50.079723",
        "lon": "19.849441"
    },
    {
        "name": "Łopuchowo Osiedle",
        "numerStacji": "5104771",
        "lat": "52.618888",
        "lon": "17.109726"
    },
    {
        "name": "Przebędowo",
        "numerStacji": "5104772",
        "lat": "52.583615",
        "lon": "17.02361"
    },
    {
        "name": "Szymany Lotnisko",
        "numerStacji": "5104773",
        "lat": "53.48944",
        "lon": "20.9475"
    },
    {
        "name": "Bydgoszcz Błonie",
        "numerStacji": "5104775",
        "lat": "53.117781",
        "lon": "17.951665"
    },
    {
        "name": "Kraków Sanktuarium",
        "numerStacji": "5104780",
        "lat": "50.013886",
        "lon": "19.934443"
    },
    {
        "name": "Medyka Rozrządowa",
        "numerStacji": "5104792",
        "lat": "49.794163",
        "lon": "22.910834"
    },
    {
        "name": "Medyka Towarowa",
        "numerStacji": "5104793",
        "lat": "49.786109",
        "lon": "22.883615"
    },
    {
        "name": "Chmielów Zagumnie",
        "numerStacji": "5104794",
        "lat": "50.521139",
        "lon": "21.706648"
    },
    {
        "name": "Mokre",
        "numerStacji": "5104795",
        "lat": "50.70806",
        "lon": "23.205276"
    },
    {
        "name": "Gorzów Wielkopolski Wschodni",
        "numerStacji": "5104796",
        "lat": "52.731667",
        "lon": "15.249166"
    },
    {
        "name": "Lubartów Lipowa",
        "numerStacji": "5105071",
        "lat": "51.46417",
        "lon": "22.599448"
    },
    {
        "name": "Lubartów Słowackiego",
        "numerStacji": "5105072",
        "lat": "51.47306",
        "lon": "22.605282"
    },
    {
        "name": "Szklarska Poręba Jakuszyce",
        "numerStacji": "5105622",
        "lat": "50.816111",
        "lon": "15.431386"
    },
    {
        "name": "Kraków Business Park",
        "numerStacji": "5108040",
        "lat": "50.105558",
        "lon": "19.823615"
    },
    {
        "name": "Tarnowska Wola",
        "numerStacji": "5112002",
        "lat": "50.45167",
        "lon": "21.735836"
    },
    {
        "name": "Warszawa Aleje Jerozolimskie",
        "numerStacji": "5128148",
        "lat": "52.204171",
        "lon": "20.943059"
    },
    {
        "name": "Rogoźnica koło Rzeszowa",
        "numerStacji": "5141772",
        "lat": "50.116948",
        "lon": "21.96889"
    },
    {
        "name": "Warszawa Żwirki i Wigury",
        "numerStacji": "5149451",
        "lat": "52.193609",
        "lon": "20.979996"
    },
    {
        "name": "Szklarska Poręba Huta",
        "numerStacji": "5163718",
        "lat": "50.830278",
        "lon": "15.5025"
    },
    {
        "name": "Miłocin",
        "numerStacji": "5175822",
        "lat": "50.075552",
        "lon": "21.987219"
    },
    {
        "name": "Cygany",
        "numerStacji": "5181456",
        "lat": "50.512779",
        "lon": "21.69694"
    },
    {
        "name": "Świnoujście Centrum",
        "numerStacji": "5189954",
        "lat": "53.914719",
        "lon": "14.23361"
    },
    {
        "name": "Słubice",
        "numerStacji": "5193610",
        "lat": "52.336115",
        "lon": "14.595282"
    },
    {
        "name": "Siedlce Zachodnie",
        "numerStacji": "5197725",
        "lat": "52.173608",
        "lon": "22.235555"
    },
    {
        "name": "Lubiana",
        "numerStacji": "5102122",
        "lat": "53.103558104739136",
        "lon": "15.333013991921153"
    },
    {
        "name": "Trakiszki",
        "numerStacji": "5100301",
        "lat": "54.239324814300225",
        "lon": "23.20814609527588"
    },
    {
        "name": "Grodzisk Mazowiecki Radońska WKD",
        "numerStacji": "5101198",
        "lat": "52.10053790515294",
        "lon": "20.628279447555542"
    },
    {
        "name": "Kazimierówka WKD",
        "numerStacji": "5101896",
        "lat": "52.11105837462331",
        "lon": "20.698263645172123"
    },
    {
        "name": "Milanówek Grudów WKD",
        "numerStacji": "5102240",
        "lat": "52.12224168234261",
        "lon": "20.682250857353214"
    },
    {
        "name": "Lebork",
        "numerStacji": "5100129",
        "lat": "54.532836478496826",
        "lon": "17.751846313476566"
    },
    {
        "name": "Szczecin Pomorzany",
        "numerStacji": "5100129",
        "lat": "53.413522374224996",
        "lon": "14.531060457229616"
    },
    {
        "name": "Brzózki",
        "numerStacji": "5100669",
        "lat": "52.1048602",
        "lon": "20.6777155"
    },
    {
        "name": "Grodzisk Mazowiecki Jordanowice",
        "numerStacji": "5101194",
        "lat": "52.1031029",
        "lon": "20.6362719"
    },
    {
        "name": "Grodzisk Mazowiecki Okrężna",
        "numerStacji": "5101196",
        "lat": "52.1007111",
        "lon": "20.6602404"
    },
    {
        "name": "Grodzisk Mazowiecki Piaskowa",
        "numerStacji": "5101197",
        "lat": "52.1025166",
        "lon": "20.6516105"
    },
    {
        "name": "Kanie Helenowskie",
        "numerStacji": "5101511",
        "lat": "52.1316542",
        "lon": "20.7743104"
    },
    {
        "name": "Komorów",
        "numerStacji": "5101687",
        "lat": "52.1481148",
        "lon": "20.8113718"
    },
    {
        "name": "Malichy",
        "numerStacji": "5102282",
        "lat": "52.1693938",
        "lon": "20.8411745"
    },
    {
        "name": "Michałowice",
        "numerStacji": "5102199",
        "lat": "52.175364",
        "lon": "20.88126"
    },
    {
        "name": "Nowa Wieś Warszawska",
        "numerStacji": "5102492",
        "lat": "52.1404731",
        "lon": "20.7955551"
    },
    {
        "name": "Opacz",
        "numerStacji": "5102586",
        "lat": "52.1813883",
        "lon": "20.9046686"
    },
    {
        "name": "Otrębusy",
        "numerStacji": "5102635",
        "lat": "52.1263593",
        "lon": "20.7615032"
    },
    {
        "name": "Podkowa Leśna Główna",
        "numerStacji": "5102705",
        "lat": "52.1223735",
        "lon": "20.7251691"
    },
    {
        "name": "Podkowa Leśna Wschodnia",
        "numerStacji": "5102706",
        "lat": "52.1237526",
        "lon": "20.738135"
    },
    {
        "name": "Podkowa Leśna Zachodnia",
        "numerStacji": "5102792",
        "lat": "52.1207027",
        "lon": "20.7113163"
    },
    {
        "name": "Polesie",
        "numerStacji": "5102875",
        "lat": "52.1218348",
        "lon": "20.6971558"
    },
    {
        "name": "Pruszków WKD",
        "numerStacji": "5102940",
        "lat": "52.1616122",
        "lon": "20.8165804"
    },
    {
        "name": "Reguły",
        "numerStacji": "5103090",
        "lat": "52.1704176",
        "lon": "20.8591854"
    },
    {
        "name": "Tworki",
        "numerStacji": "5103861",
        "lat": "52.1689418",
        "lon": "20.8232513"
    },
    {
        "name": "Warszawa Aleje Jerozolimskie WKD",
        "numerStacji": "5103929",
        "lat": "52.2053112",
        "lon": "20.9422822"
    },
    {
        "name": "Warszawa Raków",
        "numerStacji": "5104229",
        "lat": "52.1944886",
        "lon": "20.9358283"
    },
    {
        "name": "Warszawa Salomea",
        "numerStacji": "5104162",
        "lat": "52.1864913",
        "lon": "20.9245286"
    },
    {
        "name": "Warszawa Śródmieście WKD",
        "numerStacji": "5104221",
        "lat": "52.2274779",
        "lon": "20.9993834"
    },
    {
        "name": "Warszawa Reduta Ordona",
        "numerStacji": "5104163",
        "lat": "52.21437805018606",
        "lon": "20.947848558425903"
    },
    {
        "name": "Bogdaniec",
        "numerStacji": "5100298",
        "lat": "52.68898173869621",
        "lon": "15.079412006966528"
    },
    {
        "name": "Laskowice Pomorskie",
        "numerStacji": "5100128",
        "lat": "53.491278",
        "lon": "18.455917"
    },
    {
        "name": "Ustka Uroczysko",
        "numerStacji": "5100358",
        "lat": "54.580227",
        "lon": "16.846936"
    },
    {
        "name": "Wrocław Szczepin",
        "numerStacji": "5104131",
        "lat": "51.122433",
        "lon": "17.012748"
    },
    {
        "name": "Dębska Wola",
        "numerStacji": "5100916",
        "lat": "50.7017206434897",
        "lon": "20.59767930087835"
    },
    {
        "name": "Świeradów-Zdrój",
        "numerStacji": "5103422",
        "lat": "50.91140382089952",
        "lon": "15.343545252594314"
    },
    {
        "name": "Karpacz",
        "numerStacji": "5100019",
        "lat": "50.78240193355829",
        "lon": "15.761797428131105"
    },
    {
        "name": "Gorzów Wielkopolski",
        "numerStacji": "5100014",
        "lat": "52.72676726984486",
        "lon": "15.228928327560427"
    },
    {
        "name": "Sobótka",
        "numerStacji": "5103287",
        "lat": "50.905279081158824",
        "lon": "16.74013810642801"
    },
    {
        "name": "Gdynia Wielki Kack",
        "numerStacji": "5101124",
        "lat": "54.465282",
        "lon": "18.503333"
    },
    {
        "name": "Kraków Podgórze",
        "numerStacji": "5101638",
        "lat": "50.040836",
        "lon": "19.958893"
    }
]

module.exports = stationData;