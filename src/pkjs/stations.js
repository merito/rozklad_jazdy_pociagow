const stationData = [
  {
    "numerStacji": "12963",
    "bilkomNumerStacji": "5100089",
    "name": "Augustów",
    "lat": "53.852496",
    "lon": "23.02639"
  },
  {
    "numerStacji": "78709",
    "bilkomNumerStacji": "5100091",
    "name": "Chabówka",
    "lat": "49.59694",
    "lon": "19.936393"
  },
  {
    "numerStacji": "16188",
    "bilkomNumerStacji": "5100092",
    "name": "Chodzież",
    "lat": "52.993891",
    "lon": "16.909447"
  },
  {
    "numerStacji": "29405",
    "bilkomNumerStacji": "5100094",
    "name": "Choszczno",
    "lat": "53.16528",
    "lon": "15.403052"
  },
  {
    "numerStacji": "36939",
    "bilkomNumerStacji": "5100095",
    "name": "Ciechanów",
    "lat": "52.883612",
    "lon": "20.591114"
  },
  {
    "numerStacji": "27508",
    "bilkomNumerStacji": "5100096",
    "name": "Czerwieńsk",
    "lat": "52.015281",
    "lon": "15.412221"
  },
  {
    "numerStacji": "24737",
    "bilkomNumerStacji": "5100097",
    "name": "Czyżew",
    "lat": "52.799724",
    "lon": "22.342221"
  },
  {
    "numerStacji": "74500",
    "bilkomNumerStacji": "5100098",
    "name": "Dąbrowa Górnicza Ząbkowice",
    "lat": "50.366947",
    "lon": "19.264998"
  },
  {
    "numerStacji": "49809",
    "bilkomNumerStacji": "5100099",
    "name": "Dęblin",
    "lat": "51.577497",
    "lon": "21.835275"
  },
  {
    "numerStacji": "22442",
    "bilkomNumerStacji": "5100100",
    "name": "Działdowo",
    "lat": "53.237499",
    "lon": "20.167776"
  },
  {
    "numerStacji": "61507",
    "bilkomNumerStacji": "5100101",
    "name": "Fosowskie",
    "lat": "50.660552",
    "lon": "18.36"
  },
  {
    "numerStacji": "12609",
    "bilkomNumerStacji": "5100102",
    "name": "Giżycko",
    "lat": "54.03139",
    "lon": "21.778058"
  },
  {
    "numerStacji": "13250",
    "bilkomNumerStacji": "5100103",
    "name": "Godkow - Jädickendorf",
    "lat": "52.9013",
    "lon": "14.4586"
  },
  {
    "numerStacji": "1404",
    "bilkomNumerStacji": "5100105",
    "name": "Goleniów",
    "lat": "53.559448",
    "lon": "14.839725"
  },
  {
    "numerStacji": "13961",
    "bilkomNumerStacji": "5100106",
    "name": "Gorzów Wielkopolski Wieprzyce",
    "lat": "52.717779",
    "lon": "15.18083"
  },
  {
    "numerStacji": "2170",
    "bilkomNumerStacji": "5100107",
    "name": "Gryfice",
    "lat": "53.914998",
    "lon": "15.191671"
  },
  {
    "numerStacji": "851",
    "bilkomNumerStacji": "5100108",
    "name": "Gryfino",
    "lat": "53.254444",
    "lon": "14.493056"
  },
  {
    "numerStacji": "52357",
    "bilkomNumerStacji": "5100109",
    "name": "Gryfów Śląski",
    "lat": "51.033892",
    "lon": "15.428887"
  },
  {
    "numerStacji": "3988",
    "bilkomNumerStacji": "5100110",
    "name": "Grzmiąca",
    "lat": "53.832504",
    "lon": "16.419445"
  },
  {
    "numerStacji": "63305",
    "bilkomNumerStacji": "5100111",
    "name": "Herby Stare",
    "lat": "50.747226",
    "lon": "18.880278"
  },
  {
    "numerStacji": "20909",
    "bilkomNumerStacji": "5100113",
    "name": "Jabłonowo Pomorskie",
    "lat": "53.393336",
    "lon": "19.161946"
  },
  {
    "numerStacji": "55145",
    "bilkomNumerStacji": "5100114",
    "name": "Jedlina-Zdrój",
    "lat": "50.711386",
    "lon": "16.343333"
  },
  {
    "numerStacji": "64451",
    "bilkomNumerStacji": "5100115",
    "name": "Jędrzejów",
    "lat": "50.645001",
    "lon": "20.276114"
  },
  {
    "numerStacji": "78584",
    "bilkomNumerStacji": "5100116",
    "name": "Jordanów",
    "lat": "49.637499",
    "lon": "19.832226"
  },
  {
    "numerStacji": "72108",
    "bilkomNumerStacji": "5100117",
    "name": "Kalety",
    "lat": "50.565833",
    "lon": "18.888611"
  },
  {
    "numerStacji": "3905",
    "bilkomNumerStacji": "5100001",
    "name": "Białogard",
    "lat": "54.009726",
    "lon": "15.977778"
  },
  {
    "numerStacji": "24000",
    "bilkomNumerStacji": "5100002",
    "name": "Białystok",
    "lat": "53.133889",
    "lon": "23.135834",
    "category": "premium"
  },
  {
    "numerStacji": "62109",
    "bilkomNumerStacji": "5100003",
    "name": "Brzeg",
    "lat": "50.853056",
    "lon": "17.470553"
  },
  {
    "numerStacji": "60269",
    "bilkomNumerStacji": "5100004",
    "name": "Brzeg Dolny",
    "lat": "51.266668",
    "lon": "16.726112"
  },
  {
    "numerStacji": "18408",
    "bilkomNumerStacji": "5100005",
    "name": "Bydgoszcz Główna",
    "lat": "53.135274",
    "lon": "17.991388",
    "category": "premium"
  },
  {
    "numerStacji": "72306",
    "bilkomNumerStacji": "5100006",
    "name": "Bytom",
    "lat": "50.343053",
    "lon": "18.915282"
  },
  {
    "numerStacji": "62653",
    "bilkomNumerStacji": "5100007",
    "name": "Częstochowa",
    "lat": "50.808614",
    "lon": "19.121108",
    "category": "premium"
  },
  {
    "numerStacji": "57521",
    "bilkomNumerStacji": "5100008",
    "name": "Duszniki-Zdrój",
    "lat": "50.40889",
    "lon": "16.386113"
  },
  {
    "numerStacji": "7500",
    "bilkomNumerStacji": "5100009",
    "name": "Gdańsk Główny",
    "lat": "54.355829",
    "lon": "18.644167",
    "category": "premium"
  },
  {
    "numerStacji": "5900",
    "bilkomNumerStacji": "5100010",
    "name": "Gdynia Główna",
    "lat": "54.520835",
    "lon": "18.529168",
    "category": "premium"
  },
  {
    "numerStacji": "69708",
    "bilkomNumerStacji": "5100011",
    "name": "Gliwice",
    "lat": "50.30111",
    "lon": "18.676942",
    "category": "premium"
  },
  {
    "numerStacji": "30809",
    "bilkomNumerStacji": "5100013",
    "name": "Gniezno",
    "lat": "52.529724",
    "lon": "17.603333"
  },
  {
    "numerStacji": "18705",
    "bilkomNumerStacji": "5100015",
    "name": "Inowrocław",
    "lat": "52.80528",
    "lon": "18.244444"
  },
  {
    "numerStacji": "44701",
    "bilkomNumerStacji": "5100016",
    "name": "Jarocin",
    "lat": "51.968887",
    "lon": "17.494725"
  },
  {
    "numerStacji": "45245",
    "bilkomNumerStacji": "5100017",
    "name": "Kalisz",
    "lat": "51.742782",
    "lon": "18.071392",
    "category": "premium"
  },
  {
    "numerStacji": "56408",
    "bilkomNumerStacji": "5100018",
    "name": "Kamieniec Ząbkowicki",
    "lat": "50.536115",
    "lon": "16.8975"
  },
  {
    "numerStacji": "73312",
    "bilkomNumerStacji": "5100020",
    "name": "Katowice",
    "lat": "50.257503",
    "lon": "19.017219",
    "category": "premium"
  },
  {
    "numerStacji": "63552",
    "bilkomNumerStacji": "5100022",
    "name": "Kielce Główne",
    "lat": "50.874163",
    "lon": "20.618054",
    "category": "premium"
  },
  {
    "numerStacji": "45401",
    "bilkomNumerStacji": "5100023",
    "name": "Kępno",
    "lat": "51.291667",
    "lon": "18.0"
  },
  {
    "numerStacji": "47258",
    "bilkomNumerStacji": "5100024",
    "name": "Koluszki",
    "lat": "51.745281",
    "lon": "19.819444"
  },
  {
    "numerStacji": "4101",
    "bilkomNumerStacji": "5100025",
    "name": "Kołobrzeg",
    "lat": "54.18222",
    "lon": "15.570279"
  },
  {
    "numerStacji": "33100",
    "bilkomNumerStacji": "5100026",
    "name": "Konin",
    "lat": "52.23139",
    "lon": "18.251114"
  },
  {
    "numerStacji": "4408",
    "bilkomNumerStacji": "5100027",
    "name": "Koszalin",
    "lat": "54.190832",
    "lon": "16.169724"
  },
  {
    "numerStacji": "80416",
    "bilkomNumerStacji": "5100028",
    "name": "Kraków Główny",
    "lat": "50.065835",
    "lon": "19.947774",
    "category": "premium"
  },
  {
    "numerStacji": "82487",
    "bilkomNumerStacji": "5100029",
    "name": "Krynica-Zdrój",
    "lat": "49.409721",
    "lon": "20.957226"
  },
  {
    "numerStacji": "29108",
    "bilkomNumerStacji": "5100030",
    "name": "Krzyż",
    "lat": "52.877499",
    "lon": "16.018607"
  },
  {
    "numerStacji": "57554",
    "bilkomNumerStacji": "5100031",
    "name": "Kudowa-Zdrój",
    "lat": "50.429718",
    "lon": "16.244443"
  },
  {
    "numerStacji": "32201",
    "bilkomNumerStacji": "5100032",
    "name": "Kutno",
    "lat": "52.227498",
    "lon": "19.347222"
  },
  {
    "numerStacji": "25007",
    "bilkomNumerStacji": "5100033",
    "name": "Kuźnica Białostocka",
    "lat": "53.511113",
    "lon": "23.641945"
  },
  {
    "numerStacji": "53009",
    "bilkomNumerStacji": "5100035",
    "name": "Legnica",
    "lat": "51.213614",
    "lon": "16.168052",
    "category": "premium"
  },
  {
    "numerStacji": "42606",
    "bilkomNumerStacji": "5100036",
    "name": "Leszno",
    "lat": "51.846113",
    "lon": "16.565277"
  },
  {
    "numerStacji": "50500",
    "bilkomNumerStacji": "5100037",
    "name": "Lublin Główny",
    "lat": "51.231385",
    "lon": "22.568893",
    "category": "premium"
  },
  {
    "numerStacji": "46706",
    "bilkomNumerStacji": "5100039",
    "name": "Łódź Kaliska",
    "lat": "51.758054",
    "lon": "19.430004",
    "category": "premium"
  },
  {
    "numerStacji": "7872",
    "bilkomNumerStacji": "5100040",
    "name": "Malbork",
    "lat": "54.0359714",
    "lon": "19.0431501"
  },
  {
    "numerStacji": "82404",
    "bilkomNumerStacji": "5100041",
    "name": "Muszyna",
    "lat": "49.347498",
    "lon": "20.895003"
  },
  {
    "numerStacji": "81901",
    "bilkomNumerStacji": "5100042",
    "name": "Nowy Sącz",
    "lat": "49.606666",
    "lon": "20.703056"
  },
  {
    "numerStacji": "42002",
    "bilkomNumerStacji": "5100043",
    "name": "Nowa Sól",
    "lat": "51.799441",
    "lon": "15.708614"
  },
  {
    "numerStacji": "56606",
    "bilkomNumerStacji": "5100044",
    "name": "Nysa",
    "lat": "50.477775",
    "lon": "17.341945"
  },
  {
    "numerStacji": "9209",
    "bilkomNumerStacji": "5100045",
    "name": "Olsztyn Główny",
    "lat": "53.785832",
    "lon": "20.497221",
    "category": "premium"
  },
  {
    "numerStacji": "60608",
    "bilkomNumerStacji": "5100046",
    "name": "Opole Główne",
    "lat": "50.661946",
    "lon": "17.926945",
    "category": "premium"
  },
  {
    "numerStacji": "45906",
    "bilkomNumerStacji": "5100047",
    "name": "Ostrów Wielkopolski",
    "lat": "51.649168",
    "lon": "17.805276"
  },
  {
    "numerStacji": "77107",
    "bilkomNumerStacji": "5100048",
    "name": "Oświęcim",
    "lat": "50.041393",
    "lon": "19.199718"
  },
  {
    "numerStacji": "14407",
    "bilkomNumerStacji": "5100049",
    "name": "Piła Główna",
    "lat": "53.14278",
    "lon": "16.744441"
  },
  {
    "numerStacji": "57497",
    "bilkomNumerStacji": "5100050",
    "name": "Polanica-Zdrój",
    "lat": "50.397501",
    "lon": "16.514721"
  },
  {
    "numerStacji": "56903",
    "bilkomNumerStacji": "5100051",
    "name": "Prudnik",
    "lat": "50.329444",
    "lon": "17.578613"
  },
  {
    "numerStacji": "48355",
    "bilkomNumerStacji": "5100052",
    "name": "Radom Główny",
    "lat": "51.390836",
    "lon": "21.155277",
    "category": "premium"
  },
  {
    "numerStacji": "39404",
    "bilkomNumerStacji": "5100053",
    "name": "Siedlce",
    "lat": "52.16194",
    "lon": "22.271386"
  },
  {
    "numerStacji": "19489",
    "bilkomNumerStacji": "5100054",
    "name": "Sieradz",
    "lat": "51.597777",
    "lon": "18.714723"
  },
  {
    "numerStacji": "4705",
    "bilkomNumerStacji": "5100055",
    "name": "Słupsk",
    "lat": "54.467223",
    "lon": "17.01667",
    "category": "premium"
  },
  {
    "numerStacji": "5942",
    "bilkomNumerStacji": "5100056",
    "name": "Sopot",
    "lat": "54.4400543",
    "lon": "18.5623213"
  },
  {
    "numerStacji": "273",
    "bilkomNumerStacji": "5100057",
    "name": "Szczecin Główny",
    "lat": "53.419719",
    "lon": "14.551945",
    "category": "premium"
  },
  {
    "numerStacji": "56184",
    "bilkomNumerStacji": "5100058",
    "name": "Szklarska Poręba Górna",
    "lat": "50.832498",
    "lon": "15.518887"
  },
  {
    "numerStacji": "1008",
    "bilkomNumerStacji": "5100059",
    "name": "Świnoujście",
    "lat": "53.904723",
    "lon": "14.266663"
  },
  {
    "numerStacji": "7112",
    "bilkomNumerStacji": "5100061",
    "name": "Tczew",
    "lat": "54.097497",
    "lon": "18.790278"
  },
  {
    "numerStacji": "19703",
    "bilkomNumerStacji": "5100062",
    "name": "Toruń Główny",
    "lat": "53.000004",
    "lon": "18.61444"
  },
  {
    "numerStacji": "4952",
    "bilkomNumerStacji": "5100063",
    "name": "Ustka",
    "lat": "54.578887",
    "lon": "16.860554"
  },
  {
    "numerStacji": "55103",
    "bilkomNumerStacji": "5100064",
    "name": "Wałbrzych Główny",
    "lat": "50.743334",
    "lon": "16.281667",
    "category": "premium"
  },
  {
    "numerStacji": "33605",
    "bilkomNumerStacji": "5100065",
    "name": "Warszawa Centralna",
    "lat": "52.228613",
    "lon": "21.002775",
    "category": "premium"
  },
  {
    "numerStacji": "38653",
    "bilkomNumerStacji": "5100066",
    "name": "Warszawa Wschodnia",
    "lat": "52.2515246",
    "lon": "20.9821647",
    "category": "premium"
  },
  {
    "numerStacji": "33506",
    "bilkomNumerStacji": "5100067",
    "name": "Warszawa Zachodnia",
    "lat": "52.220001",
    "lon": "20.965281",
    "category": "premium"
  },
  {
    "numerStacji": "51805",
    "bilkomNumerStacji": "5100068",
    "name": "Węgliniec",
    "lat": "51.290552",
    "lon": "15.223331"
  },
  {
    "numerStacji": "60103",
    "bilkomNumerStacji": "5100069",
    "name": "Wrocław Główny",
    "lat": "51.098057",
    "lon": "17.036392",
    "category": "premium"
  },
  {
    "numerStacji": "69823",
    "bilkomNumerStacji": "5100070",
    "name": "Zabrze",
    "lat": "50.305281",
    "lon": "18.786664"
  },
  {
    "numerStacji": "26104",
    "bilkomNumerStacji": "5100071",
    "name": "Zbąszynek",
    "lat": "52.241944",
    "lon": "15.8175"
  },
  {
    "numerStacji": "77503",
    "bilkomNumerStacji": "5100072",
    "name": "Trzebinia",
    "lat": "50.154163",
    "lon": "19.453052"
  },
  {
    "numerStacji": "72272",
    "bilkomNumerStacji": "5100073",
    "name": "Chorzów Miasto",
    "lat": "50.298053",
    "lon": "18.948892"
  },
  {
    "numerStacji": "71001",
    "bilkomNumerStacji": "5100074",
    "name": "Tarnowskie Góry",
    "lat": "50.446942",
    "lon": "18.864996"
  },
  {
    "numerStacji": "21808",
    "bilkomNumerStacji": "5100075",
    "name": "Iława Główna",
    "lat": "53.582775",
    "lon": "19.574164"
  },
  {
    "numerStacji": "59808",
    "bilkomNumerStacji": "5100076",
    "name": "Strzelin",
    "lat": "50.78472",
    "lon": "17.060277"
  },
  {
    "numerStacji": "54403",
    "bilkomNumerStacji": "5100077",
    "name": "Jaworzyna Śląska",
    "lat": "50.912502",
    "lon": "16.428335"
  },
  {
    "numerStacji": "55608",
    "bilkomNumerStacji": "5100078",
    "name": "Marciszów",
    "lat": "50.851393",
    "lon": "16.007775"
  },
  {
    "numerStacji": "53850",
    "bilkomNumerStacji": "5100079",
    "name": "Bolesławiec",
    "lat": "51.267774",
    "lon": "15.558889"
  },
  {
    "numerStacji": "59501",
    "bilkomNumerStacji": "5100080",
    "name": "Oleśnica",
    "lat": "51.200552",
    "lon": "17.387223"
  },
  {
    "numerStacji": "30601",
    "bilkomNumerStacji": "5100081",
    "name": "Poznań Główny",
    "lat": "52.401385",
    "lon": "16.911667",
    "category": "premium"
  },
  {
    "numerStacji": "25809",
    "bilkomNumerStacji": "5100082",
    "name": "Rzepin",
    "lat": "52.350003",
    "lon": "14.815275"
  },
  {
    "numerStacji": "25924",
    "bilkomNumerStacji": "5100083",
    "name": "Kunowice",
    "lat": "52.34167",
    "lon": "14.637504"
  },
  {
    "numerStacji": "40998",
    "bilkomNumerStacji": "5100084",
    "name": "Terespol",
    "lat": "52.074169",
    "lon": "23.601107"
  },
  {
    "numerStacji": "51847",
    "bilkomNumerStacji": "5100085",
    "name": "Zgorzelec",
    "lat": "51.14028",
    "lon": "15.004165"
  },
  {
    "numerStacji": "40808",
    "bilkomNumerStacji": "5100086",
    "name": "Biała Podlaska",
    "lat": "52.020279",
    "lon": "23.130557"
  },
  {
    "numerStacji": "47886",
    "bilkomNumerStacji": "5100088",
    "name": "Radomsko",
    "lat": "51.074443",
    "lon": "19.43778"
  },
  {
    "numerStacji": "78345",
    "bilkomNumerStacji": "5100118",
    "name": "Kalwaria Zebrzydowska Lanckorona",
    "lat": "49.871111",
    "lon": "19.688615"
  },
  {
    "numerStacji": "67009",
    "bilkomNumerStacji": "5100119",
    "name": "Kędzierzyn-Koźle",
    "lat": "50.344447",
    "lon": "18.205278"
  },
  {
    "numerStacji": "10405",
    "bilkomNumerStacji": "5100120",
    "name": "Kętrzyn",
    "lat": "54.072777",
    "lon": "21.385275"
  },
  {
    "numerStacji": "63503",
    "bilkomNumerStacji": "5100121",
    "name": "Kielce Herbskie",
    "lat": "50.885831",
    "lon": "20.603887"
  },
  {
    "numerStacji": "63073",
    "bilkomNumerStacji": "5100122",
    "name": "Koniecpol",
    "lat": "50.776387",
    "lon": "19.699168"
  },
  {
    "numerStacji": "10009",
    "bilkomNumerStacji": "5100123",
    "name": "Korsze",
    "lat": "54.172503",
    "lon": "21.136112"
  },
  {
    "numerStacji": "43406",
    "bilkomNumerStacji": "5100124",
    "name": "Kościan",
    "lat": "52.078888",
    "lon": "16.642224"
  },
  {
    "numerStacji": "20719",
    "bilkomNumerStacji": "5100125",
    "name": "Kowalewo Pomorskie",
    "lat": "53.164444",
    "lon": "18.869724"
  },
  {
    "numerStacji": "3509",
    "bilkomNumerStacji": "5100126",
    "name": "Łobez",
    "lat": "53.636665",
    "lon": "15.627774"
  },
  {
    "numerStacji": "24539",
    "bilkomNumerStacji": "5100127",
    "name": "Łapy",
    "lat": "52.990278",
    "lon": "22.883893"
  },
  {
    "numerStacji": "80101",
    "bilkomNumerStacji": "5100130",
    "name": "Skawina",
    "lat": "49.977219",
    "lon": "19.821943"
  },
  {
    "numerStacji": "24802",
    "bilkomNumerStacji": "5100132",
    "name": "Sokółka",
    "lat": "53.403332",
    "lon": "23.508059"
  },
  {
    "numerStacji": "74658",
    "bilkomNumerStacji": "5100133",
    "name": "Sosnowiec Główny",
    "lat": "50.278888",
    "lon": "19.126115",
    "category": "premium"
  },
  {
    "numerStacji": "29132",
    "bilkomNumerStacji": "5100135",
    "name": "Stare Bielice",
    "lat": "52.853615",
    "lon": "15.92333"
  },
  {
    "numerStacji": "78469",
    "bilkomNumerStacji": "5100136",
    "name": "Stronie",
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
    "numerStacji": "61705",
    "bilkomNumerStacji": "5100138",
    "name": "Strzelce Opolskie",
    "lat": "50.516671",
    "lon": "18.306667"
  },
  {
    "numerStacji": "81604",
    "bilkomNumerStacji": "5100139",
    "name": "Stróże",
    "lat": "49.654165",
    "lon": "20.97667"
  },
  {
    "numerStacji": "78402",
    "bilkomNumerStacji": "5100140",
    "name": "Sucha Beskidzka",
    "lat": "49.74056",
    "lon": "19.580555"
  },
  {
    "numerStacji": "12807",
    "bilkomNumerStacji": "5100141",
    "name": "Suwałki",
    "lat": "54.10583",
    "lon": "22.945002"
  },
  {
    "numerStacji": "3632",
    "bilkomNumerStacji": "5100142",
    "name": "Świdwin",
    "lat": "53.781113",
    "lon": "15.772779"
  },
  {
    "numerStacji": "28803",
    "bilkomNumerStacji": "5100143",
    "name": "Szamotuły",
    "lat": "52.603337",
    "lon": "16.585556"
  },
  {
    "numerStacji": "1107",
    "bilkomNumerStacji": "5100144",
    "name": "Szczecin Dąbie",
    "lat": "53.390837",
    "lon": "14.668058"
  },
  {
    "numerStacji": "208",
    "bilkomNumerStacji": "5100145",
    "name": "Szczecin Gumieńce",
    "lat": "53.3979",
    "lon": "14.494705"
  },
  {
    "numerStacji": "802",
    "bilkomNumerStacji": "5100146",
    "name": "Szczecin Podjuchy",
    "lat": "53.360274",
    "lon": "14.586391"
  },
  {
    "numerStacji": "10603",
    "bilkomNumerStacji": "5100147",
    "name": "Szczytno",
    "lat": "53.560275",
    "lon": "20.996941"
  },
  {
    "numerStacji": "24638",
    "bilkomNumerStacji": "5100148",
    "name": "Szepietowo",
    "lat": "52.870002",
    "lon": "22.541108"
  },
  {
    "numerStacji": "14548",
    "bilkomNumerStacji": "5100149",
    "name": "Trzcianka",
    "lat": "53.033615",
    "lon": "16.466108"
  },
  {
    "numerStacji": "2147",
    "bilkomNumerStacji": "5100150",
    "name": "Trzebiatów",
    "lat": "54.06056",
    "lon": "15.2775"
  },
  {
    "numerStacji": "64626",
    "bilkomNumerStacji": "5100151",
    "name": "Tunel",
    "lat": "50.435004",
    "lon": "19.992225"
  },
  {
    "numerStacji": "4135",
    "bilkomNumerStacji": "5100152",
    "name": "Ustronie Morskie",
    "lat": "54.200558",
    "lon": "15.749164"
  },
  {
    "numerStacji": "6304",
    "bilkomNumerStacji": "5100153",
    "name": "Wejherowo",
    "lat": "54.605837",
    "lon": "18.228892"
  },
  {
    "numerStacji": "64808",
    "bilkomNumerStacji": "5100154",
    "name": "Włoszczowa",
    "lat": "50.837775",
    "lon": "20.014447"
  },
  {
    "numerStacji": "60335",
    "bilkomNumerStacji": "5100155",
    "name": "Wołów",
    "lat": "51.333611",
    "lon": "16.633334"
  },
  {
    "numerStacji": "30007",
    "bilkomNumerStacji": "5100157",
    "name": "Września",
    "lat": "52.32833",
    "lon": "17.555277"
  },
  {
    "numerStacji": "79020",
    "bilkomNumerStacji": "5100158",
    "name": "Zakopane",
    "lat": "49.300835",
    "lon": "19.963055"
  },
  {
    "numerStacji": "41715",
    "bilkomNumerStacji": "5100159",
    "name": "Zasieki",
    "lat": "51.735554",
    "lon": "14.668885"
  },
  {
    "numerStacji": "56424",
    "bilkomNumerStacji": "5100162",
    "name": "Ziębice",
    "lat": "50.608613",
    "lon": "17.033893"
  },
  {
    "numerStacji": "9704",
    "bilkomNumerStacji": "5100164",
    "name": "Czerwonka",
    "lat": "53.914719",
    "lon": "20.894167"
  },
  {
    "numerStacji": "56093",
    "bilkomNumerStacji": "5100165",
    "name": "Jelenia Góra Cieplice",
    "lat": "50.870001",
    "lon": "15.688613"
  },
  {
    "numerStacji": "32904",
    "bilkomNumerStacji": "5100167",
    "name": "Łowicz Główny",
    "lat": "52.106108",
    "lon": "19.953608"
  },
  {
    "numerStacji": "39909",
    "bilkomNumerStacji": "5100168",
    "name": "Łuków",
    "lat": "51.941668",
    "lon": "22.389163"
  },
  {
    "numerStacji": "22079",
    "bilkomNumerStacji": "5100169",
    "name": "Stare Jabłonki",
    "lat": "53.691391",
    "lon": "20.093336"
  },
  {
    "numerStacji": "36103",
    "bilkomNumerStacji": "5100172",
    "name": "Warszawa Gdańska",
    "lat": "52.258888",
    "lon": "20.99472"
  },
  {
    "numerStacji": "39875",
    "bilkomNumerStacji": "5100174",
    "name": "Mrozy",
    "lat": "52.164448",
    "lon": "21.802779"
  },
  {
    "numerStacji": "73502",
    "bilkomNumerStacji": "5100175",
    "name": "Mysłowice",
    "lat": "50.237781",
    "lon": "19.141666"
  },
  {
    "numerStacji": "50104",
    "bilkomNumerStacji": "5100176",
    "name": "Nałęczów",
    "lat": "51.318059",
    "lon": "22.213055"
  },
  {
    "numerStacji": "62307",
    "bilkomNumerStacji": "5100177",
    "name": "Namysłów",
    "lat": "51.074443",
    "lon": "17.71639"
  },
  {
    "numerStacji": "57943",
    "bilkomNumerStacji": "5100179",
    "name": "Nowa Ruda",
    "lat": "50.577222",
    "lon": "16.496941"
  },
  {
    "numerStacji": "1859",
    "bilkomNumerStacji": "5100180",
    "name": "Nowogard",
    "lat": "53.666114",
    "lon": "15.121115"
  },
  {
    "numerStacji": "78907",
    "bilkomNumerStacji": "5100181",
    "name": "Nowy Targ",
    "lat": "49.473329",
    "lon": "20.015274"
  },
  {
    "numerStacji": "58784",
    "bilkomNumerStacji": "5100182",
    "name": "Oborniki Śląskie",
    "lat": "51.303056",
    "lon": "16.90639"
  },
  {
    "numerStacji": "29603",
    "bilkomNumerStacji": "5100183",
    "name": "Oborniki Wielkopolskie",
    "lat": "52.657497",
    "lon": "16.829721"
  },
  {
    "numerStacji": "46581",
    "bilkomNumerStacji": "5100188",
    "name": "Pabianice",
    "lat": "51.660836",
    "lon": "19.325001"
  },
  {
    "numerStacji": "47704",
    "bilkomNumerStacji": "5100190",
    "name": "Piotrków Trybunalski",
    "lat": "51.410558",
    "lon": "19.684722"
  },
  {
    "numerStacji": "12369",
    "bilkomNumerStacji": "5100191",
    "name": "Pisz",
    "lat": "53.631946",
    "lon": "21.793052"
  },
  {
    "numerStacji": "44842",
    "bilkomNumerStacji": "5100192",
    "name": "Pleszew",
    "lat": "51.892218",
    "lon": "17.733056"
  },
  {
    "numerStacji": "1958",
    "bilkomNumerStacji": "5100193",
    "name": "Płoty",
    "lat": "53.808889",
    "lon": "15.260555"
  },
  {
    "numerStacji": "22905",
    "bilkomNumerStacji": "5100194",
    "name": "Prabuty",
    "lat": "53.758891",
    "lon": "19.209723"
  },
  {
    "numerStacji": "83105",
    "bilkomNumerStacji": "5100195",
    "name": "Przeworsk",
    "lat": "50.067219",
    "lon": "22.501663"
  },
  {
    "numerStacji": "73478",
    "bilkomNumerStacji": "5100197",
    "name": "Sosnowiec Południowy",
    "lat": "50.269441",
    "lon": "19.125557"
  },
  {
    "numerStacji": "2204",
    "bilkomNumerStacji": "5100198",
    "name": "Stargard",
    "lat": "53.339446",
    "lon": "15.031115"
  },
  {
    "numerStacji": "60400",
    "bilkomNumerStacji": "5100199",
    "name": "Ścinawa",
    "lat": "51.409444",
    "lon": "16.421108"
  },
  {
    "numerStacji": "67488",
    "bilkomNumerStacji": "5100201",
    "name": "Racławice Śląskie",
    "lat": "50.311942",
    "lon": "17.76139"
  },
  {
    "numerStacji": "44305",
    "bilkomNumerStacji": "5100202",
    "name": "Rawicz",
    "lat": "51.608609",
    "lon": "16.839726"
  },
  {
    "numerStacji": "16139",
    "bilkomNumerStacji": "5100203",
    "name": "Rogoźno Wielkopolskie",
    "lat": "52.754446",
    "lon": "16.97167"
  },
  {
    "numerStacji": "10827",
    "bilkomNumerStacji": "5100204",
    "name": "Ruciane-Nida",
    "lat": "53.648333",
    "lon": "21.56389"
  },
  {
    "numerStacji": "60442",
    "bilkomNumerStacji": "5100206",
    "name": "Rudna Gwizdanów",
    "lat": "51.529998",
    "lon": "16.280552"
  },
  {
    "numerStacji": "3467",
    "bilkomNumerStacji": "5100207",
    "name": "Runowo Pomorskie",
    "lat": "53.555834",
    "lon": "15.529441"
  },
  {
    "numerStacji": "64303",
    "bilkomNumerStacji": "5100208",
    "name": "Sędziszów",
    "lat": "50.564997",
    "lon": "20.053334"
  },
  {
    "numerStacji": "48009",
    "bilkomNumerStacji": "5100209",
    "name": "Skarżysko-Kamienna",
    "lat": "51.115829",
    "lon": "20.881663"
  },
  {
    "numerStacji": "54551",
    "bilkomNumerStacji": "5100210",
    "name": "Wałbrzych Miasto",
    "lat": "50.78472",
    "lon": "16.284166"
  },
  {
    "numerStacji": "41202",
    "bilkomNumerStacji": "5100211",
    "name": "Żagań",
    "lat": "51.604168",
    "lon": "15.315003"
  },
  {
    "numerStacji": "75309",
    "bilkomNumerStacji": "5100212",
    "name": "Zawiercie",
    "lat": "50.48111",
    "lon": "19.423055"
  },
  {
    "numerStacji": "73908",
    "bilkomNumerStacji": "5100213",
    "name": "Jaworzno Szczakowa",
    "lat": "50.246941",
    "lon": "19.293332"
  },
  {
    "numerStacji": "13003",
    "bilkomNumerStacji": "5100214",
    "name": "Kostrzyn nad Odrą",
    "lat": "52.591948",
    "lon": "14.648893"
  },
  {
    "numerStacji": "251575",
    "bilkomNumerStacji": "5100215",
    "name": "Małaszewicze",
    "lat": "52.026391",
    "lon": "23.527782"
  },
  {
    "numerStacji": "22004",
    "bilkomNumerStacji": "5100216",
    "name": "Ostróda",
    "lat": "53.699724",
    "lon": "19.951387"
  },
  {
    "numerStacji": "79467",
    "bilkomNumerStacji": "5100218",
    "name": "Miechów",
    "lat": "50.354721",
    "lon": "20.01139"
  },
  {
    "numerStacji": "37226",
    "bilkomNumerStacji": "5100219",
    "name": "Mława",
    "lat": "53.126392",
    "lon": "20.350553"
  },
  {
    "numerStacji": "32003",
    "bilkomNumerStacji": "5100220",
    "name": "Mogilno",
    "lat": "52.658612",
    "lon": "17.94611"
  },
  {
    "numerStacji": "1560",
    "bilkomNumerStacji": "5100221",
    "name": "Wysoka Kamieńska",
    "lat": "53.825555",
    "lon": "14.832219"
  },
  {
    "numerStacji": "27805",
    "bilkomNumerStacji": "5100222",
    "name": "Zielona Góra Główna",
    "lat": "51.947502",
    "lon": "15.514168",
    "category": "premium"
  },
  {
    "numerStacji": "45476",
    "bilkomNumerStacji": "5100223",
    "name": "Ostrzeszów",
    "lat": "51.429445",
    "lon": "17.940554"
  },
  {
    "numerStacji": "52506",
    "bilkomNumerStacji": "5100224",
    "name": "Lubań Śląski",
    "lat": "51.111388",
    "lon": "15.293609"
  },
  {
    "numerStacji": "57208",
    "bilkomNumerStacji": "5100225",
    "name": "Międzylesie",
    "lat": "50.14361",
    "lon": "16.654998"
  },
  {
    "numerStacji": "28522",
    "bilkomNumerStacji": "5100226",
    "name": "Poznań Starołęka",
    "lat": "52.367496",
    "lon": "16.931389"
  },
  {
    "numerStacji": "79657",
    "bilkomNumerStacji": "5100227",
    "name": "Bochnia",
    "lat": "49.977219",
    "lon": "20.431393"
  },
  {
    "numerStacji": "81208",
    "bilkomNumerStacji": "5100228",
    "name": "Dębica",
    "lat": "50.054167",
    "lon": "21.404997"
  },
  {
    "numerStacji": "82669",
    "bilkomNumerStacji": "5100229",
    "name": "Rzeszów Główny",
    "lat": "50.043056",
    "lon": "22.006663",
    "category": "premium"
  },
  {
    "numerStacji": "80630",
    "bilkomNumerStacji": "5100230",
    "name": "Tarnów",
    "lat": "50.005275",
    "lon": "20.974441",
    "category": "premium"
  },
  {
    "numerStacji": "19430",
    "bilkomNumerStacji": "5100231",
    "name": "Zduńska Wola",
    "lat": "51.611386",
    "lon": "18.946942"
  },
  {
    "numerStacji": "51862",
    "bilkomNumerStacji": "5100232",
    "name": "Zgorzelec Miasto",
    "lat": "51.153332",
    "lon": "15.020274"
  },
  {
    "numerStacji": "83261",
    "bilkomNumerStacji": "5100233",
    "name": "Jarosław",
    "lat": "50.01056",
    "lon": "22.677222"
  },
  {
    "numerStacji": "84400",
    "bilkomNumerStacji": "5100234",
    "name": "Przemyśl Główny",
    "lat": "49.78361",
    "lon": "22.776113"
  },
  {
    "numerStacji": "62802",
    "bilkomNumerStacji": "5100235",
    "name": "Częstochowa Stradom",
    "lat": "50.797224",
    "lon": "19.107219"
  },
  {
    "numerStacji": "61200",
    "bilkomNumerStacji": "5100236",
    "name": "Kluczbork",
    "lat": "50.971112",
    "lon": "18.200558"
  },
  {
    "numerStacji": "71407",
    "bilkomNumerStacji": "5100237",
    "name": "Lubliniec",
    "lat": "50.673335",
    "lon": "18.690003"
  },
  {
    "numerStacji": "79210",
    "bilkomNumerStacji": "5100238",
    "name": "Kraków Prokocim",
    "lat": "50.02639",
    "lon": "19.998886"
  },
  {
    "numerStacji": "3004",
    "bilkomNumerStacji": "5100239",
    "name": "Szczecinek",
    "lat": "53.693612",
    "lon": "16.704996"
  },
  {
    "numerStacji": "79905",
    "bilkomNumerStacji": "5100240",
    "name": "Kraków Płaszów",
    "lat": "50.035002",
    "lon": "19.975002"
  },
  {
    "numerStacji": "41707",
    "bilkomNumerStacji": "5100242",
    "name": "Tuplice",
    "lat": "51.671389",
    "lon": "14.838611"
  },
  {
    "numerStacji": "41558",
    "bilkomNumerStacji": "5100243",
    "name": "Żary",
    "lat": "51.634444",
    "lon": "15.137781"
  },
  {
    "numerStacji": "52852",
    "bilkomNumerStacji": "5100244",
    "name": "Krzewina Zgorzelecka",
    "lat": "51.015554",
    "lon": "14.939721"
  },
  {
    "numerStacji": "59576",
    "bilkomNumerStacji": "5100245",
    "name": "Oleśnica Rataje",
    "lat": "51.216113",
    "lon": "17.364445"
  },
  {
    "numerStacji": "33571",
    "bilkomNumerStacji": "5100246",
    "name": "Warszawa Śródmieście",
    "lat": "52.22944",
    "lon": "21.007782"
  },
  {
    "numerStacji": "1651",
    "bilkomNumerStacji": "5100247",
    "name": "Kamień Pomorski",
    "lat": "53.966111",
    "lon": "14.773888"
  },
  {
    "numerStacji": "22202",
    "bilkomNumerStacji": "5100248",
    "name": "Nidzica",
    "lat": "53.357226",
    "lon": "20.413891"
  },
  {
    "numerStacji": "74583",
    "bilkomNumerStacji": "5100250",
    "name": "Dąbrowa Górnicza",
    "lat": "50.33028",
    "lon": "19.185282",
    "category": "premium"
  },
  {
    "numerStacji": "76000",
    "bilkomNumerStacji": "5100251",
    "name": "Czechowice-Dziedzice",
    "lat": "49.914996",
    "lon": "19.005003"
  },
  {
    "numerStacji": "1024",
    "bilkomNumerStacji": "5100252",
    "name": "Międzyzdroje",
    "lat": "53.924167",
    "lon": "14.454996"
  },
  {
    "numerStacji": "8151",
    "bilkomNumerStacji": "5100253",
    "name": "Elbląg",
    "lat": "54.15083",
    "lon": "19.416385"
  },
  {
    "numerStacji": "18200",
    "bilkomNumerStacji": "5100254",
    "name": "Nakło nad Notecią",
    "lat": "53.142501",
    "lon": "17.607504"
  },
  {
    "numerStacji": "59105",
    "bilkomNumerStacji": "5100255",
    "name": "Wrocław Nadodrze",
    "lat": "51.125834",
    "lon": "17.032779"
  },
  {
    "numerStacji": "45674",
    "bilkomNumerStacji": "5100256",
    "name": "Wieluń Dąbrowa",
    "lat": "51.23944",
    "lon": "18.551389"
  },
  {
    "numerStacji": "75739",
    "bilkomNumerStacji": "5100257",
    "name": "Zabrzeg",
    "lat": "49.907778",
    "lon": "18.939166"
  },
  {
    "numerStacji": "33191",
    "bilkomNumerStacji": "5100258",
    "name": "Koło",
    "lat": "52.211111",
    "lon": "18.63222"
  },
  {
    "numerStacji": "55806",
    "bilkomNumerStacji": "5100259",
    "name": "Jelenia Góra",
    "lat": "50.902497",
    "lon": "15.755277"
  },
  {
    "numerStacji": "73700",
    "bilkomNumerStacji": "5100260",
    "name": "Tychy",
    "lat": "50.13694",
    "lon": "18.964165"
  },
  {
    "numerStacji": "14043",
    "bilkomNumerStacji": "5100261",
    "name": "Witnica",
    "lat": "52.667502",
    "lon": "14.896115"
  },
  {
    "numerStacji": "68205",
    "bilkomNumerStacji": "5100262",
    "name": "Rybnik",
    "lat": "50.088892",
    "lon": "18.547497"
  },
  {
    "numerStacji": "68700",
    "bilkomNumerStacji": "5100263",
    "name": "Racibórz",
    "lat": "50.089998",
    "lon": "18.226115"
  },
  {
    "numerStacji": "75507",
    "bilkomNumerStacji": "5100264",
    "name": "Zebrzydowice",
    "lat": "49.869996",
    "lon": "18.624723"
  },
  {
    "numerStacji": "242839",
    "bilkomNumerStacji": "5100276",
    "name": "Tychy Lodowisko",
    "lat": "50.108057",
    "lon": "18.999996"
  },
  {
    "numerStacji": "242837",
    "bilkomNumerStacji": "5100277",
    "name": "Tychy Grota Roweckiego",
    "lat": "50.11417",
    "lon": "18.986108"
  },
  {
    "numerStacji": "242838",
    "bilkomNumerStacji": "5100278",
    "name": "Tychy Aleja Bielska",
    "lat": "50.117226",
    "lon": "18.982503"
  },
  {
    "numerStacji": "242822",
    "bilkomNumerStacji": "5100279",
    "name": "Wieliczka Bogucice",
    "lat": "49.998614",
    "lon": "20.034996"
  },
  {
    "numerStacji": "47001",
    "bilkomNumerStacji": "5100294",
    "name": "Skierniewice",
    "lat": "51.967224",
    "lon": "20.150004"
  },
  {
    "numerStacji": "14068",
    "bilkomNumerStacji": "5100295",
    "name": "Dąbroszyn",
    "lat": "52.618888",
    "lon": "14.712222"
  },
  {
    "numerStacji": "14050",
    "bilkomNumerStacji": "5100296",
    "name": "Kamień Mały",
    "lat": "52.641946",
    "lon": "14.780837"
  },
  {
    "numerStacji": "14035",
    "bilkomNumerStacji": "5100297",
    "name": "Nowiny Wielkie",
    "lat": "52.672779",
    "lon": "15.002781"
  },
  {
    "numerStacji": "14019",
    "bilkomNumerStacji": "5100299",
    "name": "Łupowo",
    "lat": "52.700555",
    "lon": "15.122499"
  },
  {
    "numerStacji": "11254",
    "bilkomNumerStacji": "5100302",
    "name": "Braniewo",
    "lat": "54.381107",
    "lon": "19.841944"
  },
  {
    "numerStacji": "50906",
    "bilkomNumerStacji": "5100303",
    "name": "Chełm",
    "lat": "51.141107",
    "lon": "23.493892"
  },
  {
    "numerStacji": "15602",
    "bilkomNumerStacji": "5100304",
    "name": "Chojnice",
    "lat": "53.687778",
    "lon": "17.576114"
  },
  {
    "numerStacji": "11809",
    "bilkomNumerStacji": "5100305",
    "name": "Ełk",
    "lat": "53.825277",
    "lon": "22.362222"
  },
  {
    "numerStacji": "83410",
    "bilkomNumerStacji": "5100306",
    "name": "Jasło",
    "lat": "49.737504",
    "lon": "21.470834"
  },
  {
    "numerStacji": "44008",
    "bilkomNumerStacji": "5100307",
    "name": "Krotoszyn",
    "lat": "51.702501",
    "lon": "17.426947"
  },
  {
    "numerStacji": "10983",
    "bilkomNumerStacji": "5100309",
    "name": "Małdyty",
    "lat": "53.921111",
    "lon": "19.736114"
  },
  {
    "numerStacji": "10900",
    "bilkomNumerStacji": "5100310",
    "name": "Morąg",
    "lat": "53.919169",
    "lon": "19.922496"
  },
  {
    "numerStacji": "10934",
    "bilkomNumerStacji": "5100311",
    "name": "Pasłęk",
    "lat": "54.056947",
    "lon": "19.65611"
  },
  {
    "numerStacji": "83600",
    "bilkomNumerStacji": "5100312",
    "name": "Sanok",
    "lat": "49.553054",
    "lon": "22.210835"
  },
  {
    "numerStacji": "65037",
    "bilkomNumerStacji": "5100313",
    "name": "Stalowa Wola",
    "lat": "50.562777",
    "lon": "22.060553"
  },
  {
    "numerStacji": "65003",
    "bilkomNumerStacji": "5100314",
    "name": "Stalowa Wola-Rozwadów",
    "lat": "50.591389",
    "lon": "22.041946"
  },
  {
    "numerStacji": "21600",
    "bilkomNumerStacji": "5100315",
    "name": "Włocławek",
    "lat": "52.653056",
    "lon": "19.059163",
    "category": "premium"
  },
  {
    "numerStacji": "76109",
    "bilkomNumerStacji": "5100316",
    "name": "Bielsko-Biała Główna",
    "lat": "49.829724",
    "lon": "19.045275",
    "category": "premium"
  },
  {
    "numerStacji": "46458",
    "bilkomNumerStacji": "5100317",
    "name": "Łódź Fabryczna",
    "lat": "51.769165",
    "lon": "19.467777",
    "category": "premium"
  },
  {
    "numerStacji": "27524",
    "bilkomNumerStacji": "5100319",
    "name": "Będów",
    "lat": "52.073333",
    "lon": "15.311389"
  },
  {
    "numerStacji": "40147",
    "bilkomNumerStacji": "5100320",
    "name": "Hordzieżka",
    "lat": "51.754719",
    "lon": "22.161107"
  },
  {
    "numerStacji": "50831",
    "bilkomNumerStacji": "5100322",
    "name": "Wólka Kańska",
    "lat": "51.128333",
    "lon": "23.066392"
  },
  {
    "numerStacji": "36525",
    "bilkomNumerStacji": "5100323",
    "name": "Legionowo Piaski",
    "lat": "52.412496",
    "lon": "20.942781"
  },
  {
    "numerStacji": "11320",
    "bilkomNumerStacji": "5100324",
    "name": "Żugienie",
    "lat": "54.258889",
    "lon": "20.089165"
  },
  {
    "numerStacji": "46862",
    "bilkomNumerStacji": "5100326",
    "name": "Głowno",
    "lat": "51.96139",
    "lon": "19.702782"
  },
  {
    "numerStacji": "32821",
    "bilkomNumerStacji": "5100327",
    "name": "Mieszaki",
    "lat": "52.83667",
    "lon": "19.745274"
  },
  {
    "numerStacji": "61143",
    "bilkomNumerStacji": "5100328",
    "name": "Tarnowiec Brzeski",
    "lat": "50.913329",
    "lon": "17.652774"
  },
  {
    "numerStacji": "34108",
    "bilkomNumerStacji": "5100330",
    "name": "Pruszków",
    "lat": "52.167225",
    "lon": "20.796113"
  },
  {
    "numerStacji": "47605",
    "bilkomNumerStacji": "5100331",
    "name": "Tomaszów Mazowiecki",
    "lat": "51.546943",
    "lon": "20.033333"
  },
  {
    "numerStacji": "18564",
    "bilkomNumerStacji": "5100332",
    "name": "Trzciniec",
    "lat": "53.085276",
    "lon": "17.94833"
  },
  {
    "numerStacji": "48769",
    "bilkomNumerStacji": "5100334",
    "name": "Antoniówka",
    "lat": "51.424725",
    "lon": "21.278887"
  },
  {
    "numerStacji": "46490",
    "bilkomNumerStacji": "5100335",
    "name": "Łódź Andrzejów",
    "lat": "51.741946",
    "lon": "19.615002"
  },
  {
    "numerStacji": "76265",
    "bilkomNumerStacji": "5100336",
    "name": "Andrychów Górnica",
    "lat": "49.858607",
    "lon": "19.323886"
  },
  {
    "numerStacji": "18242",
    "bilkomNumerStacji": "5100337",
    "name": "Anieliny",
    "lat": "53.12917",
    "lon": "17.486671"
  },
  {
    "numerStacji": "82545",
    "bilkomNumerStacji": "5100338",
    "name": "Andrzejówka",
    "lat": "49.341943",
    "lon": "20.819997"
  },
  {
    "numerStacji": "21501",
    "bilkomNumerStacji": "5100339",
    "name": "Aleksandrów Kujawski",
    "lat": "52.875836",
    "lon": "18.696385"
  },
  {
    "numerStacji": "46011",
    "bilkomNumerStacji": "5100342",
    "name": "Antonin",
    "lat": "51.513889",
    "lon": "17.860002"
  },
  {
    "numerStacji": "12955",
    "bilkomNumerStacji": "5100344",
    "name": "Augustów Port",
    "lat": "53.862222",
    "lon": "23.004169"
  },
  {
    "numerStacji": "36772",
    "bilkomNumerStacji": "5100345",
    "name": "Arcelin",
    "lat": "52.659726",
    "lon": "20.318336"
  },
  {
    "numerStacji": "38984",
    "bilkomNumerStacji": "5100347",
    "name": "Augustówka",
    "lat": "51.988052",
    "lon": "21.513335"
  },
  {
    "numerStacji": "32326",
    "bilkomNumerStacji": "5100349",
    "name": "Azory",
    "lat": "52.239723",
    "lon": "19.304443"
  },
  {
    "numerStacji": "82750",
    "bilkomNumerStacji": "5100350",
    "name": "Babica",
    "lat": "49.935276",
    "lon": "21.901948"
  },
  {
    "numerStacji": "19174",
    "bilkomNumerStacji": "5100351",
    "name": "Babiak",
    "lat": "52.353608",
    "lon": "18.670281"
  },
  {
    "numerStacji": "84822",
    "bilkomNumerStacji": "5100355",
    "name": "Basznia Dolna",
    "lat": "50.190003",
    "lon": "23.207226"
  },
  {
    "numerStacji": "34397",
    "bilkomNumerStacji": "5100357",
    "name": "Boża Wola",
    "lat": "52.190004",
    "lon": "20.52667"
  },
  {
    "numerStacji": "37929",
    "bilkomNumerStacji": "5100359",
    "name": "Barchów",
    "lat": "52.517778",
    "lon": "21.648056"
  },
  {
    "numerStacji": "24562",
    "bilkomNumerStacji": "5100360",
    "name": "Baciuty",
    "lat": "53.046946",
    "lon": "22.983611"
  },
  {
    "numerStacji": "12260",
    "bilkomNumerStacji": "5100361",
    "name": "Bajtkowo",
    "lat": "53.737218",
    "lon": "22.239726"
  },
  {
    "numerStacji": "77537",
    "bilkomNumerStacji": "5100363",
    "name": "Balin",
    "lat": "50.178892",
    "lon": "19.383332"
  },
  {
    "numerStacji": "28936",
    "bilkomNumerStacji": "5100366",
    "name": "Baborówko",
    "lat": "52.582779",
    "lon": "16.626943"
  },
  {
    "numerStacji": "56481",
    "bilkomNumerStacji": "5100367",
    "name": "Bardo Przyłęk",
    "lat": "50.509722",
    "lon": "16.758329"
  },
  {
    "numerStacji": "179240",
    "bilkomNumerStacji": "5100369",
    "name": "Basznia",
    "lat": "50.178614",
    "lon": "23.247777"
  },
  {
    "numerStacji": "52530",
    "bilkomNumerStacji": "5100370",
    "name": "Batowice Lubańskie",
    "lat": "51.09083",
    "lon": "15.155274"
  },
  {
    "numerStacji": "61366",
    "bilkomNumerStacji": "5100371",
    "name": "Bąków",
    "lat": "50.956666",
    "lon": "18.31278"
  },
  {
    "numerStacji": "47399",
    "bilkomNumerStacji": "5100372",
    "name": "Baby",
    "lat": "51.536947",
    "lon": "19.71694"
  },
  {
    "numerStacji": "36780",
    "bilkomNumerStacji": "5100373",
    "name": "Baboszewo",
    "lat": "52.683332",
    "lon": "20.259726"
  },
  {
    "numerStacji": "18572",
    "bilkomNumerStacji": "5100376",
    "name": "Brzoza Bydgoska",
    "lat": "53.028329",
    "lon": "18.019444"
  },
  {
    "numerStacji": "76349",
    "bilkomNumerStacji": "5100379",
    "name": "Bielsko-Biała Leszczyny",
    "lat": "49.797777",
    "lon": "19.05972"
  },
  {
    "numerStacji": "76356",
    "bilkomNumerStacji": "5100380",
    "name": "Bielsko-Biała Lipnik",
    "lat": "49.816115",
    "lon": "19.049446"
  },
  {
    "numerStacji": "76364",
    "bilkomNumerStacji": "5100381",
    "name": "Bielsko-Biała Mikuszowice",
    "lat": "49.78361",
    "lon": "19.073609"
  },
  {
    "numerStacji": "3087",
    "bilkomNumerStacji": "5100382",
    "name": "Biały Bór",
    "lat": "53.886943",
    "lon": "16.855556"
  },
  {
    "numerStacji": "76133",
    "bilkomNumerStacji": "5100383",
    "name": "Bielsko-Biała Północ",
    "lat": "49.841671",
    "lon": "19.041391"
  },
  {
    "numerStacji": "40055",
    "bilkomNumerStacji": "5100386",
    "name": "Brzeźnica Bychawska",
    "lat": "51.528614",
    "lon": "22.742502"
  },
  {
    "numerStacji": "26336",
    "bilkomNumerStacji": "5100388",
    "name": "Belęcin Wielkopolski",
    "lat": "52.203614",
    "lon": "16.008332"
  },
  {
    "numerStacji": "82065",
    "bilkomNumerStacji": "5100392",
    "name": "Barcice",
    "lat": "49.526114",
    "lon": "20.648609"
  },
  {
    "numerStacji": "15586",
    "bilkomNumerStacji": "5100396",
    "name": "Brzeźno Człuchowskie",
    "lat": "53.671112",
    "lon": "17.482779"
  },
  {
    "numerStacji": "25973",
    "bilkomNumerStacji": "5100397",
    "name": "Boczów",
    "lat": "52.326946",
    "lon": "14.94889"
  },
  {
    "numerStacji": "17822",
    "bilkomNumerStacji": "5100398",
    "name": "Babi Dół",
    "lat": "54.301112",
    "lon": "18.287502"
  },
  {
    "numerStacji": "49288",
    "bilkomNumerStacji": "5100399",
    "name": "Brody Iłżeckie",
    "lat": "51.021667",
    "lon": "21.20167"
  },
  {
    "numerStacji": "33175",
    "bilkomNumerStacji": "5100400",
    "name": "Budki Nowe",
    "lat": "52.244443",
    "lon": "18.56472"
  },
  {
    "numerStacji": "21204",
    "bilkomNumerStacji": "5100401",
    "name": "Brodnica",
    "lat": "53.263613",
    "lon": "19.405275"
  },
  {
    "numerStacji": "66258",
    "bilkomNumerStacji": "5100403",
    "name": "Bełżec Drugi",
    "lat": "50.380835",
    "lon": "23.403614"
  },
  {
    "numerStacji": "78964",
    "bilkomNumerStacji": "5100404",
    "name": "Biały Dunajec",
    "lat": "49.375553",
    "lon": "20.006941"
  },
  {
    "numerStacji": "36483",
    "bilkomNumerStacji": "5100405",
    "name": "Brody Warszawskie",
    "lat": "52.513885",
    "lon": "20.748056"
  },
  {
    "numerStacji": "48421",
    "bilkomNumerStacji": "5100406",
    "name": "Bartodzieje",
    "lat": "51.524164",
    "lon": "21.178334"
  },
  {
    "numerStacji": "46466",
    "bilkomNumerStacji": "5100407",
    "name": "Bedoń",
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
    "numerStacji": "33027",
    "bilkomNumerStacji": "5100411",
    "name": "Bełchów",
    "lat": "52.026113",
    "lon": "20.033333"
  },
  {
    "numerStacji": "68536",
    "bilkomNumerStacji": "5100413",
    "name": "Bełsznica",
    "lat": "49.972779",
    "lon": "18.372504"
  },
  {
    "numerStacji": "4424",
    "bilkomNumerStacji": "5100414",
    "name": "Będzino",
    "lat": "54.211112",
    "lon": "15.991945"
  },
  {
    "numerStacji": "48264",
    "bilkomNumerStacji": "5100415",
    "name": "Berezow",
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
    "numerStacji": "10942",
    "bilkomNumerStacji": "5100420",
    "name": "Bogaczewo",
    "lat": "54.099996",
    "lon": "19.573058"
  },
  {
    "numerStacji": "27888",
    "bilkomNumerStacji": "5100421",
    "name": "Bogaczów",
    "lat": "51.844171",
    "lon": "15.268052"
  },
  {
    "numerStacji": "42473",
    "bilkomNumerStacji": "5100422",
    "name": "Brzeg Głogowski",
    "lat": "51.690833",
    "lon": "15.918889"
  },
  {
    "numerStacji": "80663",
    "bilkomNumerStacji": "5100423",
    "name": "Bogumiłowice",
    "lat": "50.007504",
    "lon": "20.870552"
  },
  {
    "numerStacji": "20966",
    "bilkomNumerStacji": "5100427",
    "name": "Boguszewo",
    "lat": "53.42194",
    "lon": "19.001111"
  },
  {
    "numerStacji": "55251",
    "bilkomNumerStacji": "5100428",
    "name": "Boguszów-Gorce Wschód",
    "lat": "50.747775",
    "lon": "16.221664"
  },
  {
    "numerStacji": "55228",
    "bilkomNumerStacji": "5100429",
    "name": "Boguszów-Gorce",
    "lat": "50.750274",
    "lon": "16.201942"
  },
  {
    "numerStacji": "44040",
    "bilkomNumerStacji": "5100432",
    "name": "Biadki",
    "lat": "51.676945",
    "lon": "17.567502"
  },
  {
    "numerStacji": "24059",
    "bilkomNumerStacji": "5100433",
    "name": "Białystok Bacieczki",
    "lat": "53.151113",
    "lon": "23.071669"
  },
  {
    "numerStacji": "79848",
    "bilkomNumerStacji": "5100435",
    "name": "Biadoliny",
    "lat": "50.003612",
    "lon": "20.734168"
  },
  {
    "numerStacji": "81786",
    "bilkomNumerStacji": "5100436",
    "name": "Biecz",
    "lat": "49.732497",
    "lon": "21.263057"
  },
  {
    "numerStacji": "66407",
    "bilkomNumerStacji": "5100438",
    "name": "Biłgoraj",
    "lat": "50.551387",
    "lon": "22.73167"
  },
  {
    "numerStacji": "76158",
    "bilkomNumerStacji": "5100439",
    "name": "Bielsko-Biała Wschód",
    "lat": "49.834722",
    "lon": "19.057221"
  },
  {
    "numerStacji": "13433",
    "bilkomNumerStacji": "5100441",
    "name": "Bielin",
    "lat": "52.82306",
    "lon": "14.466385"
  },
  {
    "numerStacji": "1420",
    "bilkomNumerStacji": "5100443",
    "name": "Białuń",
    "lat": "53.614444",
    "lon": "14.840552"
  },
  {
    "numerStacji": "76141",
    "bilkomNumerStacji": "5100444",
    "name": "Bielsko Biala Komorowice",
    "lat": "49.860557",
    "lon": "19.035836"
  },
  {
    "numerStacji": "12336",
    "bilkomNumerStacji": "5100447",
    "name": "Biała koło Piszu",
    "lat": "53.614722",
    "lon": "22.069444"
  },
  {
    "numerStacji": "14480",
    "bilkomNumerStacji": "5100450",
    "name": "Białośliwie",
    "lat": "53.097222",
    "lon": "17.121943"
  },
  {
    "numerStacji": "61333",
    "bilkomNumerStacji": "5100452",
    "name": "Biskupice koło Kluczborka",
    "lat": "51.072501",
    "lon": "18.210276"
  },
  {
    "numerStacji": "22095",
    "bilkomNumerStacji": "5100455",
    "name": "Biesal",
    "lat": "53.720274",
    "lon": "20.193889"
  },
  {
    "numerStacji": "59832",
    "bilkomNumerStacji": "5100456",
    "name": "Biały Kościół",
    "lat": "50.728331",
    "lon": "17.030001"
  },
  {
    "numerStacji": "3178",
    "bilkomNumerStacji": "5100457",
    "name": "Bińcze",
    "lat": "53.66028",
    "lon": "17.128613"
  },
  {
    "numerStacji": "9472",
    "bilkomNumerStacji": "5100458",
    "name": "Bujaki",
    "lat": "53.467497",
    "lon": "20.375274"
  },
  {
    "numerStacji": "44511",
    "bilkomNumerStacji": "5100459",
    "name": "Bojanowo",
    "lat": "51.700559",
    "lon": "16.744441"
  },
  {
    "numerStacji": "82792",
    "bilkomNumerStacji": "5100464",
    "name": "Babica Kolonia",
    "lat": "49.933613",
    "lon": "21.868885"
  },
  {
    "numerStacji": "79335",
    "bilkomNumerStacji": "5100465",
    "name": "Baranówka",
    "lat": "50.146666",
    "lon": "20.095556"
  },
  {
    "numerStacji": "57356",
    "bilkomNumerStacji": "5100466",
    "name": "Bierkowice",
    "lat": "50.475554",
    "lon": "16.605"
  },
  {
    "numerStacji": "61424",
    "bilkomNumerStacji": "5100467",
    "name": "Borkowice",
    "lat": "50.932224",
    "lon": "18.156107"
  },
  {
    "numerStacji": "9258",
    "bilkomNumerStacji": "5100470",
    "name": "Bukwałd",
    "lat": "53.868614",
    "lon": "20.380002"
  },
  {
    "numerStacji": "3228",
    "bilkomNumerStacji": "5100471",
    "name": "Brokęcino",
    "lat": "53.562225",
    "lon": "16.818053"
  },
  {
    "numerStacji": "2436",
    "bilkomNumerStacji": "5100472",
    "name": "Barzkowice",
    "lat": "53.326942",
    "lon": "15.264169"
  },
  {
    "numerStacji": "74625",
    "bilkomNumerStacji": "5100474",
    "name": "Będzin Ksawera",
    "lat": "50.330558",
    "lon": "19.158611"
  },
  {
    "numerStacji": "3186",
    "bilkomNumerStacji": "5100475",
    "name": "Biskupnica",
    "lat": "53.655003",
    "lon": "17.211664"
  },
  {
    "numerStacji": "50203",
    "bilkomNumerStacji": "5100476",
    "name": "Bąkowiec",
    "lat": "51.517224",
    "lon": "21.723611"
  },
  {
    "numerStacji": "46136",
    "bilkomNumerStacji": "5100477",
    "name": "Bukowina Sycowska",
    "lat": "51.388058",
    "lon": "17.583332"
  },
  {
    "numerStacji": "265741",
    "bilkomNumerStacji": "5100479",
    "name": "Blachownia",
    "lat": "50.773331",
    "lon": "18.968057"
  },
  {
    "numerStacji": "13425",
    "bilkomNumerStacji": "5100480",
    "name": "Boleszkowice",
    "lat": "52.737501",
    "lon": "14.518334"
  },
  {
    "numerStacji": "29868",
    "bilkomNumerStacji": "5100481",
    "name": "Bolechowo",
    "lat": "52.53972",
    "lon": "16.979167"
  },
  {
    "numerStacji": "24943",
    "bilkomNumerStacji": "5100482",
    "name": "Balinka",
    "lat": "53.76806",
    "lon": "23.161112"
  },
  {
    "numerStacji": "55491",
    "bilkomNumerStacji": "5100483",
    "name": "Błażkowa",
    "lat": "50.74417",
    "lon": "15.990003"
  },
  {
    "numerStacji": "16584",
    "bilkomNumerStacji": "5100484",
    "name": "Błądzim",
    "lat": "53.476109",
    "lon": "18.115278"
  },
  {
    "numerStacji": "43331",
    "bilkomNumerStacji": "5100486",
    "name": "Błotnica",
    "lat": "51.993059",
    "lon": "16.300553"
  },
  {
    "numerStacji": "45344",
    "bilkomNumerStacji": "5100487",
    "name": "Błaszki",
    "lat": "51.67361",
    "lon": "18.471107"
  },
  {
    "numerStacji": "50674",
    "bilkomNumerStacji": "5100488",
    "name": "Biskupice Lubelskie",
    "lat": "51.160559",
    "lon": "22.947501"
  },
  {
    "numerStacji": "12948",
    "bilkomNumerStacji": "5100491",
    "name": "Blizna",
    "lat": "53.906386",
    "lon": "23.015001"
  },
  {
    "numerStacji": "26161",
    "bilkomNumerStacji": "5100492",
    "name": "Babimost",
    "lat": "52.168331",
    "lon": "15.81528"
  },
  {
    "numerStacji": "74633",
    "bilkomNumerStacji": "5100493",
    "name": "Będzin Miasto",
    "lat": "50.31889",
    "lon": "19.135553"
  },
  {
    "numerStacji": "3343",
    "bilkomNumerStacji": "5100494",
    "name": "Bobrowo Pomorskie",
    "lat": "53.528336",
    "lon": "16.077774"
  },
  {
    "numerStacji": "9035",
    "bilkomNumerStacji": "5100495",
    "name": "Będźmierowice",
    "lat": "53.788052",
    "lon": "18.04278"
  },
  {
    "numerStacji": "34363",
    "bilkomNumerStacji": "5100496",
    "name": "Błonie",
    "lat": "52.18639",
    "lon": "20.608337"
  },
  {
    "numerStacji": "44883",
    "bilkomNumerStacji": "5100499",
    "name": "Biniew",
    "lat": "51.740004",
    "lon": "17.792223"
  },
  {
    "numerStacji": "41368",
    "bilkomNumerStacji": "5100503",
    "name": "Bieniów",
    "lat": "51.716111",
    "lon": "15.17861"
  },
  {
    "numerStacji": "29231",
    "bilkomNumerStacji": "5100505",
    "name": "Biernatowo",
    "lat": "52.957224",
    "lon": "16.342776"
  },
  {
    "numerStacji": "47878",
    "bilkomNumerStacji": "5100507",
    "name": "Bobry",
    "lat": "51.028885",
    "lon": "19.404996"
  },
  {
    "numerStacji": "81091",
    "bilkomNumerStacji": "5100508",
    "name": "Bobowa",
    "lat": "49.716667",
    "lon": "20.957496"
  },
  {
    "numerStacji": "81125",
    "bilkomNumerStacji": "5100509",
    "name": "Bobowa-Miasto",
    "lat": "49.707777",
    "lon": "20.93861"
  },
  {
    "numerStacji": "55269",
    "bilkomNumerStacji": "5100511",
    "name": "Boguszów Gorce Zachód",
    "lat": "50.762499",
    "lon": "16.166947"
  },
  {
    "numerStacji": "82727",
    "bilkomNumerStacji": "5100515",
    "name": "Boguchwała",
    "lat": "49.984168",
    "lon": "21.934444"
  },
  {
    "numerStacji": "24554",
    "bilkomNumerStacji": "5100517",
    "name": "Bojary",
    "lat": "53.027781",
    "lon": "22.949721"
  },
  {
    "numerStacji": "49262",
    "bilkomNumerStacji": "5100518",
    "name": "Boksycka",
    "lat": "50.949726",
    "lon": "21.32333"
  },
  {
    "numerStacji": "58388",
    "bilkomNumerStacji": "5100519",
    "name": "Biskupice Oławskie",
    "lat": "50.993612",
    "lon": "17.516947"
  },
  {
    "numerStacji": "48850",
    "bilkomNumerStacji": "5100523",
    "name": "Bieliny Opoczyńskie",
    "lat": "51.423889",
    "lon": "20.502498"
  },
  {
    "numerStacji": "17848",
    "bilkomNumerStacji": "5100524",
    "name": "Borkowo",
    "lat": "54.333329",
    "lon": "18.333608"
  },
  {
    "numerStacji": "39487",
    "bilkomNumerStacji": "5100525",
    "name": "Borki-Kosy",
    "lat": "52.088893",
    "lon": "22.35833"
  },
  {
    "numerStacji": "43356",
    "bilkomNumerStacji": "5100526",
    "name": "Boszkowo",
    "lat": "51.960554",
    "lon": "16.335836"
  },
  {
    "numerStacji": "24083",
    "bilkomNumerStacji": "5100528",
    "name": "Borsukówka",
    "lat": "53.227224",
    "lon": "22.931114"
  },
  {
    "numerStacji": "33019",
    "bilkomNumerStacji": "5100530",
    "name": "Bobrowniki",
    "lat": "52.058609",
    "lon": "20.010276"
  },
  {
    "numerStacji": "46250",
    "bilkomNumerStacji": "5100533",
    "name": "Bożacin",
    "lat": "51.733334",
    "lon": "17.433886"
  },
  {
    "numerStacji": "14530",
    "bilkomNumerStacji": "5100537",
    "name": "Biała Pilska",
    "lat": "53.061113",
    "lon": "16.516942"
  },
  {
    "numerStacji": "21071",
    "bilkomNumerStacji": "5100538",
    "name": "Biskupiec Pomorski",
    "lat": "53.48944",
    "lon": "19.389166"
  },
  {
    "numerStacji": "24430",
    "bilkomNumerStacji": "5100539",
    "name": "Bielsk Podlaski",
    "lat": "52.761385",
    "lon": "23.188052"
  },
  {
    "numerStacji": "4226",
    "bilkomNumerStacji": "5100541",
    "name": "Bieczyno Pomorskie",
    "lat": "54.095555",
    "lon": "15.352776"
  },
  {
    "numerStacji": "5421",
    "bilkomNumerStacji": "5100544",
    "name": "Bożepole Wielkie",
    "lat": "54.56917",
    "lon": "17.965553"
  },
  {
    "numerStacji": "25320",
    "bilkomNumerStacji": "5100545",
    "name": "Borowiki",
    "lat": "52.482225",
    "lon": "23.215281"
  },
  {
    "numerStacji": "60160",
    "bilkomNumerStacji": "5100548",
    "name": "Boreczek",
    "lat": "50.878891",
    "lon": "17.024446"
  },
  {
    "numerStacji": "26534",
    "bilkomNumerStacji": "5100552",
    "name": "Brzozowiec Gorzowski",
    "lat": "52.653056",
    "lon": "15.367779"
  },
  {
    "numerStacji": "23192",
    "bilkomNumerStacji": "5100553",
    "name": "Brachlewo",
    "lat": "53.802777",
    "lon": "18.96083"
  },
  {
    "numerStacji": "77222",
    "bilkomNumerStacji": "5100555",
    "name": "Brzeszcze Jawiszowice",
    "lat": "49.9725",
    "lon": "19.128614"
  },
  {
    "numerStacji": "33217",
    "bilkomNumerStacji": "5100557",
    "name": "Barłogi",
    "lat": "52.216109",
    "lon": "18.768614"
  },
  {
    "numerStacji": "44867",
    "bilkomNumerStacji": "5100558",
    "name": "Bronów",
    "lat": "51.795836",
    "lon": "17.773607"
  },
  {
    "numerStacji": "72066",
    "bilkomNumerStacji": "5100559",
    "name": "Boronów",
    "lat": "50.666386",
    "lon": "18.900557"
  },
  {
    "numerStacji": "84731",
    "bilkomNumerStacji": "5100560",
    "name": "Bobrówka",
    "lat": "50.049726",
    "lon": "22.859164"
  },
  {
    "numerStacji": "61069",
    "bilkomNumerStacji": "5100561",
    "name": "Borki Opolskie",
    "lat": "50.742777",
    "lon": "17.881945"
  },
  {
    "numerStacji": "59386",
    "bilkomNumerStacji": "5100563",
    "name": "Brochocin Trzebnicki",
    "lat": "51.276107",
    "lon": "17.094166"
  },
  {
    "numerStacji": "55194",
    "bilkomNumerStacji": "5100565",
    "name": "Bartnica",
    "lat": "50.641945",
    "lon": "16.408055"
  },
  {
    "numerStacji": "59584",
    "bilkomNumerStacji": "5100566",
    "name": "Bierutów",
    "lat": "51.128333",
    "lon": "17.546386"
  },
  {
    "numerStacji": "46656",
    "bilkomNumerStacji": "5100570",
    "name": "Borszewice",
    "lat": "51.609723",
    "lon": "19.035557"
  },
  {
    "numerStacji": "60285",
    "bilkomNumerStacji": "5100574",
    "name": "Brzezinka Średzka",
    "lat": "51.219726",
    "lon": "16.83694"
  },
  {
    "numerStacji": "39461",
    "bilkomNumerStacji": "5100575",
    "name": "Białki Siedleckie",
    "lat": "52.128608",
    "lon": "22.309447"
  },
  {
    "numerStacji": "56523",
    "bilkomNumerStacji": "5100576",
    "name": "Bardo Śląskie",
    "lat": "50.505003",
    "lon": "16.73333"
  },
  {
    "numerStacji": "54692",
    "bilkomNumerStacji": "5100578",
    "name": "Bolesławice Świdnickie",
    "lat": "50.88806",
    "lon": "16.464445"
  },
  {
    "numerStacji": "24042",
    "bilkomNumerStacji": "5100579",
    "name": "Białystok Starosielce",
    "lat": "53.121943",
    "lon": "23.086115"
  },
  {
    "numerStacji": "61739",
    "bilkomNumerStacji": "5100580",
    "name": "Błotnica Strzelecka",
    "lat": "50.483887",
    "lon": "18.403607"
  },
  {
    "numerStacji": "24372",
    "bilkomNumerStacji": "5100581",
    "name": "Białystok Stadion",
    "lat": "53.098058",
    "lon": "23.129164"
  },
  {
    "numerStacji": "4630",
    "bilkomNumerStacji": "5100582",
    "name": "Biesowice",
    "lat": "54.193331",
    "lon": "16.888052"
  },
  {
    "numerStacji": "2188",
    "bilkomNumerStacji": "5100584",
    "name": "Baszewice",
    "lat": "53.863058",
    "lon": "15.192219"
  },
  {
    "numerStacji": "9423",
    "bilkomNumerStacji": "5100586",
    "name": "Bartąg",
    "lat": "53.712777",
    "lon": "20.447223"
  },
  {
    "numerStacji": "49742",
    "bilkomNumerStacji": "5100589",
    "name": "Bratków",
    "lat": "51.455001",
    "lon": "20.115279"
  },
  {
    "numerStacji": "8698",
    "bilkomNumerStacji": "5100590",
    "name": "Bytonia",
    "lat": "53.931943",
    "lon": "18.267501"
  },
  {
    "numerStacji": "19760",
    "bilkomNumerStacji": "5100592",
    "name": "Brzoza Torunska Pbsz",
    "lat": "52.961386",
    "lon": "18.685275"
  },
  {
    "numerStacji": "46854",
    "bilkomNumerStacji": "5100593",
    "name": "Bratoszewice",
    "lat": "51.938612",
    "lon": "19.652775"
  },
  {
    "numerStacji": "32953",
    "bilkomNumerStacji": "5100594",
    "name": "Bednary",
    "lat": "52.105281",
    "lon": "20.063887"
  },
  {
    "numerStacji": "27235",
    "bilkomNumerStacji": "5100596",
    "name": "Buk",
    "lat": "52.344996",
    "lon": "16.525553"
  },
  {
    "numerStacji": "27839",
    "bilkomNumerStacji": "5100597",
    "name": "Buchałów",
    "lat": "51.918053",
    "lon": "15.365001"
  },
  {
    "numerStacji": "27565",
    "bilkomNumerStacji": "5100600",
    "name": "Budachów",
    "lat": "52.15278",
    "lon": "15.08167"
  },
  {
    "numerStacji": "56739",
    "bilkomNumerStacji": "5100602",
    "name": "Budziszowice",
    "lat": "50.522775",
    "lon": "17.533334"
  },
  {
    "numerStacji": "82958",
    "bilkomNumerStacji": "5100603",
    "name": "Budy Głogowskie",
    "lat": "50.16806",
    "lon": "21.918056"
  },
  {
    "numerStacji": "64741",
    "bilkomNumerStacji": "5100607",
    "name": "Bukowa",
    "lat": "50.859169",
    "lon": "20.203058"
  },
  {
    "numerStacji": "76257",
    "bilkomNumerStacji": "5100608",
    "name": "Bulowice",
    "lat": "49.87583",
    "lon": "19.290554"
  },
  {
    "numerStacji": "26278",
    "bilkomNumerStacji": "5100609",
    "name": "Bukowiec Międzyrzecki",
    "lat": "52.385555",
    "lon": "15.705836"
  },
  {
    "numerStacji": "74203",
    "bilkomNumerStacji": "5100610",
    "name": "Bukowno",
    "lat": "50.263885",
    "lon": "19.459444"
  },
  {
    "numerStacji": "61382",
    "bilkomNumerStacji": "5100611",
    "name": "Bukowo",
    "lat": "50.896393",
    "lon": "18.106945"
  },
  {
    "numerStacji": "22459",
    "bilkomNumerStacji": "5100614",
    "name": "Burkat",
    "lat": "53.275559",
    "lon": "20.135001"
  },
  {
    "numerStacji": "15669",
    "bilkomNumerStacji": "5100615",
    "name": "Brusy",
    "lat": "53.882502",
    "lon": "17.728058"
  },
  {
    "numerStacji": "20941",
    "bilkomNumerStacji": "5100616",
    "name": "Bursztynowo",
    "lat": "53.40139",
    "lon": "19.069447"
  },
  {
    "numerStacji": "15891",
    "bilkomNumerStacji": "5100617",
    "name": "Bukowo Człuchowskie",
    "lat": "53.573057",
    "lon": "17.371393"
  },
  {
    "numerStacji": "178068",
    "bilkomNumerStacji": "5100627",
    "name": "Barwałd Średni",
    "lat": "49.872504",
    "lon": "19.598057"
  },
  {
    "numerStacji": "59345",
    "bilkomNumerStacji": "5100628",
    "name": "Borowa Oleśnicka",
    "lat": "51.184165",
    "lon": "17.277501"
  },
  {
    "numerStacji": "78329",
    "bilkomNumerStacji": "5100629",
    "name": "Barwałd Górny",
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
    "numerStacji": "34132",
    "bilkomNumerStacji": "5100633",
    "name": "Brwinów",
    "lat": "52.141669",
    "lon": "20.718059"
  },
  {
    "numerStacji": "30973",
    "bilkomNumerStacji": "5100635",
    "name": "Biskupice Wielkopolskie",
    "lat": "52.466944",
    "lon": "17.170278"
  },
  {
    "numerStacji": "40139",
    "bilkomNumerStacji": "5100640",
    "name": "Borowina",
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
    "numerStacji": "16725",
    "bilkomNumerStacji": "5100642",
    "name": "Bydgoszcz Bielawy",
    "lat": "53.131669",
    "lon": "18.055275"
  },
  {
    "numerStacji": "61341",
    "bilkomNumerStacji": "5100643",
    "name": "Byczyna Kluczborska",
    "lat": "51.114166",
    "lon": "18.200001"
  },
  {
    "numerStacji": "16741",
    "bilkomNumerStacji": "5100644",
    "name": "Bydgoszcz Brdyujście",
    "lat": "53.133889",
    "lon": "18.111943"
  },
  {
    "numerStacji": "18580",
    "bilkomNumerStacji": "5100646",
    "name": "Bydgoszcz Fordon",
    "lat": "53.146393",
    "lon": "18.157221"
  },
  {
    "numerStacji": "18374",
    "bilkomNumerStacji": "5100647",
    "name": "Bydgoszcz Leśna",
    "lat": "53.142501",
    "lon": "18.033611"
  },
  {
    "numerStacji": "16717",
    "bilkomNumerStacji": "5100648",
    "name": "Bydgoszcz Wschód",
    "lat": "53.127777",
    "lon": "18.086108"
  },
  {
    "numerStacji": "27557",
    "bilkomNumerStacji": "5100649",
    "name": "Bytnica",
    "lat": "52.131385",
    "lon": "15.148334"
  },
  {
    "numerStacji": "71068",
    "bilkomNumerStacji": "5100650",
    "name": "Radzionków Rojca",
    "lat": "50.395829",
    "lon": "18.9"
  },
  {
    "numerStacji": "72413",
    "bilkomNumerStacji": "5100651",
    "name": "Bytom Karb",
    "lat": "50.351944",
    "lon": "18.881671"
  },
  {
    "numerStacji": "16782",
    "bilkomNumerStacji": "5100652",
    "name": "Bydgoszcz Łęgnowo",
    "lat": "53.108054",
    "lon": "18.113336"
  },
  {
    "numerStacji": "16162",
    "bilkomNumerStacji": "5100653",
    "name": "Budzyń",
    "lat": "52.894165",
    "lon": "16.966115"
  },
  {
    "numerStacji": "42127",
    "bilkomNumerStacji": "5100654",
    "name": "Bytom Odrzański",
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
    "numerStacji": "57414",
    "bilkomNumerStacji": "5100656",
    "name": "Bystrzyca Kłodzka",
    "lat": "50.296948",
    "lon": "16.654998"
  },
  {
    "numerStacji": "71050",
    "bilkomNumerStacji": "5100657",
    "name": "Radzionków",
    "lat": "50.40889",
    "lon": "18.915003"
  },
  {
    "numerStacji": "78576",
    "bilkomNumerStacji": "5100658",
    "name": "Bystra Podhalańska",
    "lat": "49.658057",
    "lon": "19.787775"
  },
  {
    "numerStacji": "50625",
    "bilkomNumerStacji": "5100660",
    "name": "Bystrzyca koło Lublina",
    "lat": "51.348335",
    "lon": "22.637778"
  },
  {
    "numerStacji": "18523",
    "bilkomNumerStacji": "5100661",
    "name": "Bydgoszcz Osowa Góra",
    "lat": "53.148056",
    "lon": "17.912499"
  },
  {
    "numerStacji": "18515",
    "bilkomNumerStacji": "5100664",
    "name": "Bydgoszcz Zachód",
    "lat": "53.135552",
    "lon": "17.950559"
  },
  {
    "numerStacji": "9290",
    "bilkomNumerStacji": "5100665",
    "name": "Bzowiec",
    "lat": "54.019444",
    "lon": "20.316107"
  },
  {
    "numerStacji": "39081",
    "bilkomNumerStacji": "5100666",
    "name": "Barcząca",
    "lat": "52.156942",
    "lon": "21.626392"
  },
  {
    "numerStacji": "40865",
    "bilkomNumerStacji": "5100667",
    "name": "Brzozowica",
    "lat": "51.953615",
    "lon": "22.607502"
  },
  {
    "numerStacji": "66209",
    "bilkomNumerStacji": "5100668",
    "name": "Bełżec",
    "lat": "50.3775",
    "lon": "23.448614"
  },
  {
    "numerStacji": "79806",
    "bilkomNumerStacji": "5100671",
    "name": "Brzesko Okocim",
    "lat": "49.986667",
    "lon": "20.610557"
  },
  {
    "numerStacji": "29199",
    "bilkomNumerStacji": "5100673",
    "name": "Bierzwnik",
    "lat": "53.024446",
    "lon": "15.657501"
  },
  {
    "numerStacji": "57398",
    "bilkomNumerStacji": "5100675",
    "name": "Bystrzyca Kłodzka Przedmieście",
    "lat": "50.28528",
    "lon": "16.646944"
  },
  {
    "numerStacji": "15032",
    "bilkomNumerStacji": "5100678",
    "name": "Biały Zdrój Południowy",
    "lat": "53.256664",
    "lon": "15.954442"
  },
  {
    "numerStacji": "81273",
    "bilkomNumerStacji": "5100679",
    "name": "Będziemyśl",
    "lat": "50.066392",
    "lon": "21.77306"
  },
  {
    "numerStacji": "9365",
    "bilkomNumerStacji": "5100683",
    "name": "Barczewo",
    "lat": "53.844442",
    "lon": "20.699721"
  },
  {
    "numerStacji": "178222",
    "bilkomNumerStacji": "5100685",
    "name": "Brzeszcze",
    "lat": "49.995836",
    "lon": "19.154997"
  },
  {
    "numerStacji": "6734",
    "bilkomNumerStacji": "5100686",
    "name": "Chałupy",
    "lat": "54.761386",
    "lon": "18.503054"
  },
  {
    "numerStacji": "64600",
    "bilkomNumerStacji": "5100687",
    "name": "Charsznica",
    "lat": "50.396108",
    "lon": "19.94194"
  },
  {
    "numerStacji": "24216",
    "bilkomNumerStacji": "5100688",
    "name": "Czarny Blok",
    "lat": "53.249167",
    "lon": "23.209725"
  },
  {
    "numerStacji": "76752",
    "bilkomNumerStacji": "5100694",
    "name": "Cięcina",
    "lat": "49.610558",
    "lon": "19.137504"
  },
  {
    "numerStacji": "26294",
    "bilkomNumerStacji": "5100695",
    "name": "Chociszewo Rogoziniec",
    "lat": "52.306945",
    "lon": "15.770001"
  },
  {
    "numerStacji": "32557",
    "bilkomNumerStacji": "5100696",
    "name": "Chociszew",
    "lat": "51.924166",
    "lon": "19.267218"
  },
  {
    "numerStacji": "58321",
    "bilkomNumerStacji": "5100697",
    "name": "Czernica Wrocławska",
    "lat": "51.049722",
    "lon": "17.23722"
  },
  {
    "numerStacji": "39883",
    "bilkomNumerStacji": "5100700",
    "name": "Cegłów",
    "lat": "52.14833",
    "lon": "21.736393"
  },
  {
    "numerStacji": "15768",
    "bilkomNumerStacji": "5100701",
    "name": "Cekcyn",
    "lat": "53.576392",
    "lon": "18.027777"
  },
  {
    "numerStacji": "38943",
    "bilkomNumerStacji": "5100702",
    "name": "Celestynów",
    "lat": "52.05833",
    "lon": "21.393329"
  },
  {
    "numerStacji": "9266",
    "bilkomNumerStacji": "5100705",
    "name": "Cerkiewnik",
    "lat": "53.909721",
    "lon": "20.396668"
  },
  {
    "numerStacji": "40436",
    "bilkomNumerStacji": "5100707",
    "name": "Czachówek Górny",
    "lat": "51.96806",
    "lon": "21.077502"
  },
  {
    "numerStacji": "67900",
    "bilkomNumerStacji": "5100708",
    "name": "Chałupki",
    "lat": "49.925558",
    "lon": "18.311386"
  },
  {
    "numerStacji": "19075",
    "bilkomNumerStacji": "5100709",
    "name": "Chmielniki Bydgoskie",
    "lat": "53.00306",
    "lon": "18.048614"
  },
  {
    "numerStacji": "46615",
    "bilkomNumerStacji": "5100710",
    "name": "Chechło",
    "lat": "51.644997",
    "lon": "19.286671"
  },
  {
    "numerStacji": "77958",
    "bilkomNumerStacji": "5100712",
    "name": "Chełmek Fabryka",
    "lat": "50.099724",
    "lon": "19.254445"
  },
  {
    "numerStacji": "76281",
    "bilkomNumerStacji": "5100713",
    "name": "Chocznia Górna",
    "lat": "49.864441",
    "lon": "19.435002"
  },
  {
    "numerStacji": "4978",
    "bilkomNumerStacji": "5100719",
    "name": "Charnowo Słupskie",
    "lat": "54.532224",
    "lon": "16.919443"
  },
  {
    "numerStacji": "13334",
    "bilkomNumerStacji": "5100720",
    "name": "Chojna",
    "lat": "52.96278",
    "lon": "14.444721"
  },
  {
    "numerStacji": "38968",
    "bilkomNumerStacji": "5100722",
    "name": "Chrosna",
    "lat": "52.034724",
    "lon": "21.445278"
  },
  {
    "numerStacji": "75796",
    "bilkomNumerStacji": "5100727",
    "name": "Chybie",
    "lat": "49.893053",
    "lon": "18.811663"
  },
  {
    "numerStacji": "77800",
    "bilkomNumerStacji": "5100728",
    "name": "Chrzanów",
    "lat": "50.133335",
    "lon": "19.398614"
  },
  {
    "numerStacji": "39149",
    "bilkomNumerStacji": "5100729",
    "name": "Cisie",
    "lat": "52.209996",
    "lon": "21.39056"
  },
  {
    "numerStacji": "71522",
    "bilkomNumerStacji": "5100730",
    "name": "Ciasna",
    "lat": "50.756944",
    "lon": "18.628885"
  },
  {
    "numerStacji": "55673",
    "bilkomNumerStacji": "5100732",
    "name": "Ciechanowice",
    "lat": "50.86556",
    "lon": "15.979998"
  },
  {
    "numerStacji": "39727",
    "bilkomNumerStacji": "5100733",
    "name": "Cierpigórz",
    "lat": "52.226114",
    "lon": "22.595277"
  },
  {
    "numerStacji": "33365",
    "bilkomNumerStacji": "5100735",
    "name": "Cienin",
    "lat": "52.272498",
    "lon": "17.967504"
  },
  {
    "numerStacji": "36749",
    "bilkomNumerStacji": "5100736",
    "name": "Cieksyn",
    "lat": "52.577502",
    "lon": "20.66389"
  },
  {
    "numerStacji": "4622",
    "bilkomNumerStacji": "5100740",
    "name": "Ciecholub",
    "lat": "54.17306",
    "lon": "16.887774"
  },
  {
    "numerStacji": "36913",
    "bilkomNumerStacji": "5100741",
    "name": "Ciechanów Przemysłowy",
    "lat": "52.861948",
    "lon": "20.618054"
  },
  {
    "numerStacji": "50633",
    "bilkomNumerStacji": "5100742",
    "name": "Ciecierzyn",
    "lat": "51.318886",
    "lon": "22.608059"
  },
  {
    "numerStacji": "7328",
    "bilkomNumerStacji": "5100743",
    "name": "Cieplewo",
    "lat": "54.234448",
    "lon": "18.647502"
  },
  {
    "numerStacji": "33373",
    "bilkomNumerStacji": "5100745",
    "name": "Cienin Kościelny",
    "lat": "52.269999",
    "lon": "18.009448"
  },
  {
    "numerStacji": "45971",
    "bilkomNumerStacji": "5100746",
    "name": "Czekanów",
    "lat": "51.685835",
    "lon": "17.861386"
  },
  {
    "numerStacji": "79756",
    "bilkomNumerStacji": "5100747",
    "name": "Cikowice",
    "lat": "49.983889",
    "lon": "20.384164"
  },
  {
    "numerStacji": "19976",
    "bilkomNumerStacji": "5100749",
    "name": "Czernikowo",
    "lat": "52.939444",
    "lon": "18.951113"
  },
  {
    "numerStacji": "3558",
    "bilkomNumerStacji": "5100752",
    "name": "Cieszyno Łobeskie",
    "lat": "53.52083",
    "lon": "15.469168"
  },
  {
    "numerStacji": "44156",
    "bilkomNumerStacji": "5100753",
    "name": "Czeluścin",
    "lat": "51.728057",
    "lon": "17.163329"
  },
  {
    "numerStacji": "15594",
    "bilkomNumerStacji": "5100755",
    "name": "Człuchów",
    "lat": "53.657781",
    "lon": "17.371115"
  },
  {
    "numerStacji": "28696",
    "bilkomNumerStacji": "5100759",
    "name": "Chludowo",
    "lat": "52.560279",
    "lon": "16.825281"
  },
  {
    "numerStacji": "49510",
    "bilkomNumerStacji": "5100760",
    "name": "Czesławice",
    "lat": "51.308054",
    "lon": "22.262496"
  },
  {
    "numerStacji": "20164",
    "bilkomNumerStacji": "5100761",
    "name": "Chełmża",
    "lat": "53.184723",
    "lon": "18.59861"
  },
  {
    "numerStacji": "3376",
    "bilkomNumerStacji": "5100762",
    "name": "Czarne Male",
    "lat": "53.557776",
    "lon": "16.319718"
  },
  {
    "numerStacji": "60731",
    "bilkomNumerStacji": "5100764",
    "name": "Chmielowice",
    "lat": "50.645001",
    "lon": "17.86722"
  },
  {
    "numerStacji": "49353",
    "bilkomNumerStacji": "5100766",
    "name": "Ćmielów",
    "lat": "50.88806",
    "lon": "21.528608"
  },
  {
    "numerStacji": "75648",
    "bilkomNumerStacji": "5100767",
    "name": "Cieszyn Marklowice",
    "lat": "49.78556",
    "lon": "18.603886"
  },
  {
    "numerStacji": "50948",
    "bilkomNumerStacji": "5100768",
    "name": "Chełm Miasto",
    "lat": "51.138329",
    "lon": "23.459167"
  },
  {
    "numerStacji": "82990",
    "bilkomNumerStacji": "5100770",
    "name": "Cmolas",
    "lat": "50.293891",
    "lon": "21.751945"
  },
  {
    "numerStacji": "43448",
    "bilkomNumerStacji": "5100771",
    "name": "Czempiń",
    "lat": "52.139718",
    "lon": "16.753331"
  },
  {
    "numerStacji": "8540",
    "bilkomNumerStacji": "5100774",
    "name": "Czarlin",
    "lat": "54.048892",
    "lon": "18.76722"
  },
  {
    "numerStacji": "42481",
    "bilkomNumerStacji": "5100775",
    "name": "Czerna",
    "lat": "51.701944",
    "lon": "15.885557"
  },
  {
    "numerStacji": "3145",
    "bilkomNumerStacji": "5100776",
    "name": "Czarnobór",
    "lat": "53.699724",
    "lon": "16.766941"
  },
  {
    "numerStacji": "47449",
    "bilkomNumerStacji": "5100777",
    "name": "Wolbórka",
    "lat": "51.593615",
    "lon": "19.72361"
  },
  {
    "numerStacji": "3137",
    "bilkomNumerStacji": "5100778",
    "name": "Czarne",
    "lat": "53.680002",
    "lon": "16.938059"
  },
  {
    "numerStacji": "60327",
    "bilkomNumerStacji": "5100781",
    "name": "Czerna Mala",
    "lat": "51.230001",
    "lon": "16.803608"
  },
  {
    "numerStacji": "47415",
    "bilkomNumerStacji": "5100782",
    "name": "Chrusty Nowe",
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
    "numerStacji": "56853",
    "bilkomNumerStacji": "5100784",
    "name": "Chróścina Nyska",
    "lat": "50.616946",
    "lon": "17.378054"
  },
  {
    "numerStacji": "74336",
    "bilkomNumerStacji": "5100785",
    "name": "Chrząstowice Olkuskie",
    "lat": "50.342775",
    "lon": "19.685001"
  },
  {
    "numerStacji": "73106",
    "bilkomNumerStacji": "5100786",
    "name": "Chorzów Batory",
    "lat": "50.278331",
    "lon": "18.944721"
  },
  {
    "numerStacji": "30288",
    "bilkomNumerStacji": "5100788",
    "name": "Chocicza",
    "lat": "52.069998",
    "lon": "17.349999"
  },
  {
    "numerStacji": "81042",
    "bilkomNumerStacji": "5100789",
    "name": "Chojnik",
    "lat": "49.851388",
    "lon": "20.984167"
  },
  {
    "numerStacji": "78212",
    "bilkomNumerStacji": "5100792",
    "name": "Chocznia",
    "lat": "49.873888",
    "lon": "19.451668"
  },
  {
    "numerStacji": "54007",
    "bilkomNumerStacji": "5100793",
    "name": "Chojnów",
    "lat": "51.2775",
    "lon": "15.934719"
  },
  {
    "numerStacji": "60699",
    "bilkomNumerStacji": "5100794",
    "name": "Chróścina Opolska Po",
    "lat": "50.669721",
    "lon": "17.818058"
  },
  {
    "numerStacji": "3517",
    "bilkomNumerStacji": "5100796",
    "name": "Chociwel",
    "lat": "53.470553",
    "lon": "15.335831"
  },
  {
    "numerStacji": "259135",
    "bilkomNumerStacji": "5100800",
    "name": "Cierpice Kąkol",
    "lat": "52.991392",
    "lon": "18.448337"
  },
  {
    "numerStacji": "836",
    "bilkomNumerStacji": "5100801",
    "name": "Czepino",
    "lat": "53.284719",
    "lon": "14.5125"
  },
  {
    "numerStacji": "24844",
    "bilkomNumerStacji": "5100802",
    "name": "Czuprynowo",
    "lat": "53.472225",
    "lon": "23.63167"
  },
  {
    "numerStacji": "8904",
    "bilkomNumerStacji": "5100803",
    "name": "Czersk",
    "lat": "53.800556",
    "lon": "17.970003"
  },
  {
    "numerStacji": "61085",
    "bilkomNumerStacji": "5100805",
    "name": "Chróścice",
    "lat": "50.793332",
    "lon": "17.816108"
  },
  {
    "numerStacji": "38125",
    "bilkomNumerStacji": "5100806",
    "name": "Chrzęsne",
    "lat": "52.446664",
    "lon": "21.47389"
  },
  {
    "numerStacji": "49056",
    "bilkomNumerStacji": "5100807",
    "name": "Chronów",
    "lat": "51.358052",
    "lon": "20.929998"
  },
  {
    "numerStacji": "26187",
    "bilkomNumerStacji": "5100809",
    "name": "Chrośnica",
    "lat": "52.281388",
    "lon": "15.992223"
  },
  {
    "numerStacji": "75242",
    "bilkomNumerStacji": "5100811",
    "name": "Chruszczobród",
    "lat": "50.400279",
    "lon": "19.329163"
  },
  {
    "numerStacji": "36947",
    "bilkomNumerStacji": "5100813",
    "name": "Czeruchy Po",
    "lat": "52.936945",
    "lon": "20.504997"
  },
  {
    "numerStacji": "60848",
    "bilkomNumerStacji": "5100814",
    "name": "Chrząstowice",
    "lat": "50.660274",
    "lon": "18.073055"
  },
  {
    "numerStacji": "76760",
    "bilkomNumerStacji": "5100815",
    "name": "Cisiec",
    "lat": "49.58306",
    "lon": "19.104999"
  },
  {
    "numerStacji": "77321",
    "bilkomNumerStacji": "5100817",
    "name": "Chełm Śląski",
    "lat": "50.111941",
    "lon": "19.183052"
  },
  {
    "numerStacji": "77834",
    "bilkomNumerStacji": "5100819",
    "name": "Chrzanów Śródmieście",
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
    "numerStacji": "63099",
    "bilkomNumerStacji": "5100824",
    "name": "Częstochowa Aniołów",
    "lat": "50.835276",
    "lon": "19.151941"
  },
  {
    "numerStacji": "178633",
    "bilkomNumerStacji": "5100826",
    "name": "Chotomów",
    "lat": "52.415831",
    "lon": "20.884441"
  },
  {
    "numerStacji": "62687",
    "bilkomNumerStacji": "5100827",
    "name": "Częstochowa Raków",
    "lat": "50.788334",
    "lon": "19.15444"
  },
  {
    "numerStacji": "40949",
    "bilkomNumerStacji": "5100828",
    "name": "Chotyłów",
    "lat": "51.996943",
    "lon": "23.356663"
  },
  {
    "numerStacji": "21683",
    "bilkomNumerStacji": "5100831",
    "name": "Czerniewice",
    "lat": "52.508887",
    "lon": "19.089448"
  },
  {
    "numerStacji": "62232",
    "bilkomNumerStacji": "5100832",
    "name": "Czeska Wieś",
    "lat": "50.758337",
    "lon": "17.459721"
  },
  {
    "numerStacji": "29843",
    "bilkomNumerStacji": "5100837",
    "name": "Czerwonak",
    "lat": "52.468607",
    "lon": "16.979724"
  },
  {
    "numerStacji": "60483",
    "bilkomNumerStacji": "5100838",
    "name": "Chełmek Wołowski",
    "lat": "51.456385",
    "lon": "16.359163"
  },
  {
    "numerStacji": "4010",
    "bilkomNumerStacji": "5100839",
    "name": "Czarnowęsy Pomorskie",
    "lat": "53.93944",
    "lon": "15.98167"
  },
  {
    "numerStacji": "24125",
    "bilkomNumerStacji": "5100843",
    "name": "Czechowizna",
    "lat": "53.351114",
    "lon": "22.836664"
  },
  {
    "numerStacji": "178587",
    "bilkomNumerStacji": "5100844",
    "name": "Czyżowice",
    "lat": "49.974442",
    "lon": "18.426385"
  },
  {
    "numerStacji": "15149",
    "bilkomNumerStacji": "5100845",
    "name": "Cybowo",
    "lat": "53.293331",
    "lon": "15.816107"
  },
  {
    "numerStacji": "75820",
    "bilkomNumerStacji": "5100849",
    "name": "Chybie Mnich",
    "lat": "49.887498",
    "lon": "18.820832"
  },
  {
    "numerStacji": "48595",
    "bilkomNumerStacji": "5100850",
    "name": "Chynów",
    "lat": "51.903608",
    "lon": "21.100559"
  },
  {
    "numerStacji": "40444",
    "bilkomNumerStacji": "5100852",
    "name": "Czachówek Południowy",
    "lat": "51.959718",
    "lon": "21.081107"
  },
  {
    "numerStacji": "24232",
    "bilkomNumerStacji": "5100853",
    "name": "Czarna Białostocka",
    "lat": "53.305835",
    "lon": "23.280282"
  },
  {
    "numerStacji": "76075",
    "bilkomNumerStacji": "5100855",
    "name": "Czechowice-Dziedzice Przystanek",
    "lat": "49.906393",
    "lon": "19.022496"
  },
  {
    "numerStacji": "76067",
    "bilkomNumerStacji": "5100856",
    "name": "Czechowice Dziedzice Południowe",
    "lat": "49.890276",
    "lon": "19.024168"
  },
  {
    "numerStacji": "40360",
    "bilkomNumerStacji": "5100858",
    "name": "Czachówek Wschodni",
    "lat": "51.971944",
    "lon": "21.09611"
  },
  {
    "numerStacji": "75655",
    "bilkomNumerStacji": "5100861",
    "name": "Cieszyn",
    "lat": "49.751114",
    "lon": "18.63694"
  },
  {
    "numerStacji": "25205",
    "bilkomNumerStacji": "5100863",
    "name": "Czeremcha",
    "lat": "52.519441",
    "lon": "23.353607"
  },
  {
    "numerStacji": "8961",
    "bilkomNumerStacji": "5100864",
    "name": "Czarna Woda",
    "lat": "53.851112",
    "lon": "18.108608"
  },
  {
    "numerStacji": "3368",
    "bilkomNumerStacji": "5100866",
    "name": "Czaplinek",
    "lat": "53.537496",
    "lon": "16.238887"
  },
  {
    "numerStacji": "20057",
    "bilkomNumerStacji": "5100867",
    "name": "Czermno",
    "lat": "52.863611",
    "lon": "19.424718"
  },
  {
    "numerStacji": "64949",
    "bilkomNumerStacji": "5100868",
    "name": "Czarnca",
    "lat": "50.823886",
    "lon": "19.945275"
  },
  {
    "numerStacji": "80945",
    "bilkomNumerStacji": "5100870",
    "name": "Czarna Tarnowska",
    "lat": "50.06028",
    "lon": "21.248612"
  },
  {
    "numerStacji": "82768",
    "bilkomNumerStacji": "5100871",
    "name": "Czudec",
    "lat": "49.940274",
    "lon": "21.833333"
  },
  {
    "numerStacji": "23713",
    "bilkomNumerStacji": "5100875",
    "name": "Dalekie",
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
    "numerStacji": "17285",
    "bilkomNumerStacji": "5100877",
    "name": "Dąbrowy",
    "lat": "53.517504",
    "lon": "18.489445"
  },
  {
    "numerStacji": "18614",
    "bilkomNumerStacji": "5100878",
    "name": "Dąbrowa Chełmińska",
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
    "numerStacji": "43059",
    "bilkomNumerStacji": "5100880",
    "name": "Drzymałowo",
    "lat": "52.156942",
    "lon": "16.29694"
  },
  {
    "numerStacji": "36640",
    "bilkomNumerStacji": "5100884",
    "name": "Dąbkowizna",
    "lat": "52.423885",
    "lon": "21.085278"
  },
  {
    "numerStacji": "3038",
    "bilkomNumerStacji": "5100885",
    "name": "Dalęcino",
    "lat": "53.747781",
    "lon": "16.608614"
  },
  {
    "numerStacji": "4895",
    "bilkomNumerStacji": "5100886",
    "name": "Damnica",
    "lat": "54.497778",
    "lon": "17.270831"
  },
  {
    "numerStacji": "5157",
    "bilkomNumerStacji": "5100891",
    "name": "Darłowo",
    "lat": "54.416947",
    "lon": "16.404442"
  },
  {
    "numerStacji": "26310",
    "bilkomNumerStacji": "5100893",
    "name": "Dąbrówka Wielkopolska",
    "lat": "52.277496",
    "lon": "15.800277"
  },
  {
    "numerStacji": "44081",
    "bilkomNumerStacji": "5100894",
    "name": "Daniszyn",
    "lat": "51.667497",
    "lon": "17.614444"
  },
  {
    "numerStacji": "24893",
    "bilkomNumerStacji": "5100900",
    "name": "Dąbrowa Białostocka",
    "lat": "53.648333",
    "lon": "23.364726"
  },
  {
    "numerStacji": "178887",
    "bilkomNumerStacji": "5100905",
    "name": "Dąbrowa Oleśnicka",
    "lat": "51.231385",
    "lon": "17.369443"
  },
  {
    "numerStacji": "17392",
    "bilkomNumerStacji": "5100912",
    "name": "Drzycim",
    "lat": "53.506942",
    "lon": "18.30611"
  },
  {
    "numerStacji": "42796",
    "bilkomNumerStacji": "5100913",
    "name": "Dzięczyn",
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
    "numerStacji": "61564",
    "bilkomNumerStacji": "5100918",
    "name": "Dębska Kuźnia",
    "lat": "50.664445",
    "lon": "18.111943"
  },
  {
    "numerStacji": "65524",
    "bilkomNumerStacji": "5100922",
    "name": "Dęba Rozalin",
    "lat": "50.428613",
    "lon": "21.743054"
  },
  {
    "numerStacji": "26559",
    "bilkomNumerStacji": "5100923",
    "name": "Deszczno",
    "lat": "52.671664",
    "lon": "15.30667"
  },
  {
    "numerStacji": "39123",
    "bilkomNumerStacji": "5100924",
    "name": "Dębe Wielkie",
    "lat": "52.199164",
    "lon": "21.422778"
  },
  {
    "numerStacji": "74567",
    "bilkomNumerStacji": "5100925",
    "name": "Dąbrowa Górnicza Gołonóg",
    "lat": "50.343889",
    "lon": "19.226111"
  },
  {
    "numerStacji": "74542",
    "bilkomNumerStacji": "5100927",
    "name": "Dąbrowa Górnicza Pogoria",
    "lat": "50.350559",
    "lon": "19.241392"
  },
  {
    "numerStacji": "74534",
    "bilkomNumerStacji": "5100928",
    "name": "Dąbrowa Górnicza Sikorka",
    "lat": "50.388889",
    "lon": "19.299166"
  },
  {
    "numerStacji": "74815",
    "bilkomNumerStacji": "5100929",
    "name": "Dąbrowa Górnicza Strzemieszyce",
    "lat": "50.311115",
    "lon": "19.267776"
  },
  {
    "numerStacji": "74880",
    "bilkomNumerStacji": "5100930",
    "name": "Dąbrowa Górnicza Wschodnia",
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
    "numerStacji": "17632",
    "bilkomNumerStacji": "5100935",
    "name": "Dziemiany Kaszubskie",
    "lat": "54.011668",
    "lon": "17.775557"
  },
  {
    "numerStacji": "77255",
    "bilkomNumerStacji": "5100937",
    "name": "Dankowice",
    "lat": "49.937226",
    "lon": "19.081942"
  },
  {
    "numerStacji": "47860",
    "bilkomNumerStacji": "5100938",
    "name": "Dobryszyce koło Radomska",
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
    "numerStacji": "59337",
    "bilkomNumerStacji": "5100944",
    "name": "Długołęka",
    "lat": "51.178331",
    "lon": "17.194171"
  },
  {
    "numerStacji": "66282",
    "bilkomNumerStacji": "5100946",
    "name": "Długi Kąt",
    "lat": "50.482503",
    "lon": "23.101666"
  },
  {
    "numerStacji": "57422",
    "bilkomNumerStacji": "5100947",
    "name": "Długopole-Zdrój",
    "lat": "50.239165",
    "lon": "16.636948"
  },
  {
    "numerStacji": "242220",
    "bilkomNumerStacji": "5100950",
    "name": "Czerwonak Osiedle",
    "lat": "52.480275",
    "lon": "16.978052"
  },
  {
    "numerStacji": "50690",
    "bilkomNumerStacji": "5100951",
    "name": "Dominów",
    "lat": "51.212499",
    "lon": "22.841941"
  },
  {
    "numerStacji": "60673",
    "bilkomNumerStacji": "5100956",
    "name": "Dąbrowa Niemodlińska",
    "lat": "50.6925",
    "lon": "17.751943"
  },
  {
    "numerStacji": "3079",
    "bilkomNumerStacji": "5100958",
    "name": "Drzonowo",
    "lat": "53.806948",
    "lon": "16.86611"
  },
  {
    "numerStacji": "2386",
    "bilkomNumerStacji": "5100959",
    "name": "Dolice",
    "lat": "53.198612",
    "lon": "15.210836"
  },
  {
    "numerStacji": "36384",
    "bilkomNumerStacji": "5100961",
    "name": "Dobczyn",
    "lat": "52.378885",
    "lon": "21.313613"
  },
  {
    "numerStacji": "11148",
    "bilkomNumerStacji": "5100962",
    "name": "Dobrocin",
    "lat": "53.91",
    "lon": "19.82944"
  },
  {
    "numerStacji": "24075",
    "bilkomNumerStacji": "5100963",
    "name": "Dobrzyniewo Duże",
    "lat": "53.194171",
    "lon": "23.003333"
  },
  {
    "numerStacji": "9282",
    "bilkomNumerStacji": "5100964",
    "name": "Dobre Miasto",
    "lat": "53.98417",
    "lon": "20.384443"
  },
  {
    "numerStacji": "29181",
    "bilkomNumerStacji": "5100966",
    "name": "Dobiegniew",
    "lat": "52.968335",
    "lon": "15.747222"
  },
  {
    "numerStacji": "15545",
    "bilkomNumerStacji": "5100969",
    "name": "Dolnik",
    "lat": "53.256107",
    "lon": "16.930832"
  },
  {
    "numerStacji": "45468",
    "bilkomNumerStacji": "5100970",
    "name": "Domanin",
    "lat": "51.344721",
    "lon": "17.995281"
  },
  {
    "numerStacji": "46870",
    "bilkomNumerStacji": "5100971",
    "name": "Domaniewice",
    "lat": "52.020557",
    "lon": "19.821107"
  },
  {
    "numerStacji": "844",
    "bilkomNumerStacji": "5100972",
    "name": "Dolna Odra",
    "lat": "53.211107",
    "lon": "14.48111"
  },
  {
    "numerStacji": "27268",
    "bilkomNumerStacji": "5100973",
    "name": "Dopiewo",
    "lat": "52.353886",
    "lon": "16.678055"
  },
  {
    "numerStacji": "51102",
    "bilkomNumerStacji": "5100974",
    "name": "Dorohusk",
    "lat": "51.172218",
    "lon": "23.786671"
  },
  {
    "numerStacji": "57430",
    "bilkomNumerStacji": "5100975",
    "name": "Domaszków",
    "lat": "50.212503",
    "lon": "16.655277"
  },
  {
    "numerStacji": "3160",
    "bilkomNumerStacji": "5100977",
    "name": "Domisław",
    "lat": "53.668055",
    "lon": "17.0325"
  },
  {
    "numerStacji": "9480",
    "bilkomNumerStacji": "5100978",
    "name": "Dobrzyń",
    "lat": "53.436385",
    "lon": "20.384721"
  },
  {
    "numerStacji": "62356",
    "bilkomNumerStacji": "5100979",
    "name": "Domaszowice",
    "lat": "51.048329",
    "lon": "17.884165"
  },
  {
    "numerStacji": "3335",
    "bilkomNumerStacji": "5100980",
    "name": "Drawsko Pomorskie",
    "lat": "53.523329",
    "lon": "15.824718"
  },
  {
    "numerStacji": "28233",
    "bilkomNumerStacji": "5100983",
    "name": "Drzewce",
    "lat": "52.267221",
    "lon": "15.166663"
  },
  {
    "numerStacji": "12328",
    "bilkomNumerStacji": "5100985",
    "name": "Drygały",
    "lat": "53.680002",
    "lon": "22.104996"
  },
  {
    "numerStacji": "48827",
    "bilkomNumerStacji": "5100986",
    "name": "Drzewica",
    "lat": "51.437778",
    "lon": "20.464447"
  },
  {
    "numerStacji": "29017",
    "bilkomNumerStacji": "5100987",
    "name": "Drawski Młyn",
    "lat": "52.859997",
    "lon": "16.09417"
  },
  {
    "numerStacji": "178637",
    "bilkomNumerStacji": "5100988",
    "name": "Dobroń",
    "lat": "51.630003",
    "lon": "19.242498"
  },
  {
    "numerStacji": "75861",
    "bilkomNumerStacji": "5100989",
    "name": "Drogomyśl",
    "lat": "49.886671",
    "lon": "18.757503"
  },
  {
    "numerStacji": "30460",
    "bilkomNumerStacji": "5100990",
    "name": "Drużyna Poznańska",
    "lat": "52.210275",
    "lon": "16.823887"
  },
  {
    "numerStacji": "29157",
    "bilkomNumerStacji": "5100992",
    "name": "Drawiny",
    "lat": "52.897221",
    "lon": "15.949444"
  },
  {
    "numerStacji": "25874",
    "bilkomNumerStacji": "5100994",
    "name": "Drzeńsko",
    "lat": "52.369725",
    "lon": "14.771389"
  },
  {
    "numerStacji": "47381",
    "bilkomNumerStacji": "5100995",
    "name": "Dąbrowice Skierniewickie",
    "lat": "51.933335",
    "lon": "20.102226"
  },
  {
    "numerStacji": "17442",
    "bilkomNumerStacji": "5101000",
    "name": "Dubielno",
    "lat": "53.508614",
    "lon": "18.556666"
  },
  {
    "numerStacji": "77578",
    "bilkomNumerStacji": "5101002",
    "name": "Dulowa",
    "lat": "50.140275",
    "lon": "19.520552"
  },
  {
    "numerStacji": "3939",
    "bilkomNumerStacji": "5101004",
    "name": "Dunowo",
    "lat": "54.122496",
    "lon": "16.092498"
  },
  {
    "numerStacji": "14779",
    "bilkomNumerStacji": "5101007",
    "name": "Dobino Wałeckie",
    "lat": "53.226388",
    "lon": "16.524996"
  },
  {
    "numerStacji": "25254",
    "bilkomNumerStacji": "5101009",
    "name": "Dobrowoda",
    "lat": "52.561393",
    "lon": "23.39111"
  },
  {
    "numerStacji": "65334",
    "bilkomNumerStacji": "5101010",
    "name": "Dwikozy",
    "lat": "50.732223",
    "lon": "21.791111"
  },
  {
    "numerStacji": "23168",
    "bilkomNumerStacji": "5101013",
    "name": "Dziwno",
    "lat": "53.618615",
    "lon": "18.901663"
  },
  {
    "numerStacji": "39495",
    "bilkomNumerStacji": "5101015",
    "name": "Dziewule",
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
    "numerStacji": "4143",
    "bilkomNumerStacji": "5101017",
    "name": "Dygowo",
    "lat": "54.140834",
    "lon": "15.726943"
  },
  {
    "numerStacji": "40980",
    "bilkomNumerStacji": "5101018",
    "name": "Dobrynka",
    "lat": "51.998615",
    "lon": "23.441386"
  },
  {
    "numerStacji": "56945",
    "bilkomNumerStacji": "5101020",
    "name": "Dytmarów",
    "lat": "50.329722",
    "lon": "17.676667"
  },
  {
    "numerStacji": "59550",
    "bilkomNumerStacji": "5101026",
    "name": "Dobroszyce",
    "lat": "51.270003",
    "lon": "17.363609"
  },
  {
    "numerStacji": "82826",
    "bilkomNumerStacji": "5101027",
    "name": "Dobrzechów",
    "lat": "49.873331",
    "lon": "21.74194"
  },
  {
    "numerStacji": "19950",
    "bilkomNumerStacji": "5101029",
    "name": "Dobrzejewice",
    "lat": "52.999725",
    "lon": "18.820832"
  },
  {
    "numerStacji": "61077",
    "bilkomNumerStacji": "5101030",
    "name": "Dobrzeń Wielki",
    "lat": "50.771111",
    "lon": "17.859723"
  },
  {
    "numerStacji": "14431",
    "bilkomNumerStacji": "5101031",
    "name": "Dziembowko",
    "lat": "53.07083",
    "lon": "16.815276"
  },
  {
    "numerStacji": "44115",
    "bilkomNumerStacji": "5101032",
    "name": "Dzierżanów Wielkopolski",
    "lat": "51.712218",
    "lon": "17.353891"
  },
  {
    "numerStacji": "117168",
    "bilkomNumerStacji": "5101033",
    "name": "Dzierżążno",
    "lat": "54.315279",
    "lon": "18.263609"
  },
  {
    "numerStacji": "54908",
    "bilkomNumerStacji": "5101035",
    "name": "Dzierżoniów Śląski",
    "lat": "50.724726",
    "lon": "16.640274"
  },
  {
    "numerStacji": "48520",
    "bilkomNumerStacji": "5101038",
    "name": "Dobieszyn",
    "lat": "51.63056",
    "lon": "21.176392"
  },
  {
    "numerStacji": "12237",
    "bilkomNumerStacji": "5101040",
    "name": "Ełk Szyba Wschód",
    "lat": "53.801392",
    "lon": "22.372776"
  },
  {
    "numerStacji": "12278",
    "bilkomNumerStacji": "5101042",
    "name": "Ełk Szyba Zachód",
    "lat": "53.802498",
    "lon": "22.370555"
  },
  {
    "numerStacji": "30940",
    "bilkomNumerStacji": "5101045",
    "name": "Fałkowo",
    "lat": "52.498613",
    "lon": "17.424448"
  },
  {
    "numerStacji": "24067",
    "bilkomNumerStacji": "5101046",
    "name": "Fasty",
    "lat": "53.176948",
    "lon": "23.024718"
  },
  {
    "numerStacji": "20271",
    "bilkomNumerStacji": "5101048",
    "name": "Firlus",
    "lat": "53.269168",
    "lon": "18.629443"
  },
  {
    "numerStacji": "82859",
    "bilkomNumerStacji": "5101049",
    "name": "Frysztak",
    "lat": "49.83083",
    "lon": "21.618886"
  },
  {
    "numerStacji": "39784",
    "bilkomNumerStacji": "5101050",
    "name": "Fronołów",
    "lat": "52.360556",
    "lon": "22.928893"
  },
  {
    "numerStacji": "7914",
    "bilkomNumerStacji": "5101054",
    "name": "Fiszewo",
    "lat": "54.0675",
    "lon": "19.248889"
  },
  {
    "numerStacji": "44438",
    "bilkomNumerStacji": "5101056",
    "name": "Garbce",
    "lat": "51.513889",
    "lon": "16.889724"
  },
  {
    "numerStacji": "30239",
    "bilkomNumerStacji": "5101058",
    "name": "Gądki",
    "lat": "52.302225",
    "lon": "17.045274"
  },
  {
    "numerStacji": "61937",
    "bilkomNumerStacji": "5101059",
    "name": "Górażdże",
    "lat": "50.529166",
    "lon": "18.003335"
  },
  {
    "numerStacji": "9431",
    "bilkomNumerStacji": "5101060",
    "name": "Gągławki",
    "lat": "53.680559",
    "lon": "20.437497"
  },
  {
    "numerStacji": "64576",
    "bilkomNumerStacji": "5101063",
    "name": "Gajówka",
    "lat": "50.394723",
    "lon": "19.878611"
  },
  {
    "numerStacji": "46516",
    "bilkomNumerStacji": "5101064",
    "name": "Gałkówek",
    "lat": "51.72972",
    "lon": "19.73028"
  },
  {
    "numerStacji": "9555",
    "bilkomNumerStacji": "5101066",
    "name": "Gamerki Wielkie",
    "lat": "53.845278",
    "lon": "20.1375"
  },
  {
    "numerStacji": "39263",
    "bilkomNumerStacji": "5101067",
    "name": "Garwolin",
    "lat": "51.900282",
    "lon": "21.554443"
  },
  {
    "numerStacji": "49155",
    "bilkomNumerStacji": "5101069",
    "name": "Gąsawy Plebańskie",
    "lat": "51.232221",
    "lon": "20.947221"
  },
  {
    "numerStacji": "36871",
    "bilkomNumerStacji": "5101071",
    "name": "Gąsocin",
    "lat": "52.738607",
    "lon": "20.72028"
  },
  {
    "numerStacji": "50286",
    "bilkomNumerStacji": "5101072",
    "name": "Garbatka-Letnisko",
    "lat": "51.50028",
    "lon": "21.653333"
  },
  {
    "numerStacji": "46078",
    "bilkomNumerStacji": "5101073",
    "name": "Granowiec",
    "lat": "51.511948",
    "lon": "17.645277"
  },
  {
    "numerStacji": "17590",
    "bilkomNumerStacji": "5101075",
    "name": "Garczyn",
    "lat": "54.123611",
    "lon": "17.911115"
  },
  {
    "numerStacji": "49890",
    "bilkomNumerStacji": "5101079",
    "name": "Grabów Szlachecki",
    "lat": "51.703058",
    "lon": "22.095279"
  },
  {
    "numerStacji": "2154",
    "bilkomNumerStacji": "5101081",
    "name": "Gąbin",
    "lat": "54.010553",
    "lon": "15.286948"
  },
  {
    "numerStacji": "59543",
    "bilkomNumerStacji": "5101082",
    "name": "Grabowno Wielkie",
    "lat": "51.343337",
    "lon": "17.403332"
  },
  {
    "numerStacji": "48546",
    "bilkomNumerStacji": "5101086",
    "name": "Grabów nad Pilicą",
    "lat": "51.741946",
    "lon": "21.182226"
  },
  {
    "numerStacji": "81463",
    "bilkomNumerStacji": "5101089",
    "name": "Grabiny",
    "lat": "50.046113",
    "lon": "21.331942"
  },
  {
    "numerStacji": "62364",
    "bilkomNumerStacji": "5101090",
    "name": "Gręboszów",
    "lat": "51.065274",
    "lon": "17.800278"
  },
  {
    "numerStacji": "6031",
    "bilkomNumerStacji": "5101091",
    "name": "Gdynia Chylonia",
    "lat": "54.546113",
    "lon": "18.462504"
  },
  {
    "numerStacji": "75937",
    "bilkomNumerStacji": "5101092",
    "name": "Goczałkowice",
    "lat": "49.945002",
    "lon": "18.965837"
  },
  {
    "numerStacji": "20453",
    "bilkomNumerStacji": "5101095",
    "name": "Głuchowo",
    "lat": "53.201947",
    "lon": "18.543614"
  },
  {
    "numerStacji": "8094",
    "bilkomNumerStacji": "5101096",
    "name": "Gościszewo",
    "lat": "53.975001",
    "lon": "19.018055"
  },
  {
    "numerStacji": "77123",
    "bilkomNumerStacji": "5101097",
    "name": "Gorzów Chrzanowski",
    "lat": "50.073611",
    "lon": "19.242219"
  },
  {
    "numerStacji": "56366",
    "bilkomNumerStacji": "5101098",
    "name": "Goczałków",
    "lat": "51.009163",
    "lon": "16.324168"
  },
  {
    "numerStacji": "28688",
    "bilkomNumerStacji": "5101100",
    "name": "Golęczewo",
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
    "numerStacji": "5280",
    "bilkomNumerStacji": "5101103",
    "name": "Garczegorze",
    "lat": "54.589441",
    "lon": "17.703059"
  },
  {
    "numerStacji": "7583",
    "bilkomNumerStacji": "5101104",
    "name": "Gdaǹsk Oliwa",
    "lat": "54.409441",
    "lon": "18.571948"
  },
  {
    "numerStacji": "23051",
    "bilkomNumerStacji": "5101105",
    "name": "Gdakowo",
    "lat": "53.818337",
    "lon": "19.168885"
  },
  {
    "numerStacji": "42655",
    "bilkomNumerStacji": "5101107",
    "name": "Górka Duchowna",
    "lat": "51.954163",
    "lon": "16.576945"
  },
  {
    "numerStacji": "6056",
    "bilkomNumerStacji": "5101110",
    "name": "Gdynia Grabówek",
    "lat": "54.534723",
    "lon": "18.494721"
  },
  {
    "numerStacji": "11494",
    "bilkomNumerStacji": "5101111",
    "name": "Grodzie",
    "lat": "54.345276",
    "lon": "19.961941"
  },
  {
    "numerStacji": "20552",
    "bilkomNumerStacji": "5101112",
    "name": "Gardeja",
    "lat": "53.591665",
    "lon": "18.933053"
  },
  {
    "numerStacji": "7245",
    "bilkomNumerStacji": "5101114",
    "name": "Gdańsk Lipce",
    "lat": "54.302226",
    "lon": "18.635555"
  },
  {
    "numerStacji": "7252",
    "bilkomNumerStacji": "5101116",
    "name": "Gdańsk Orunia",
    "lat": "54.324448",
    "lon": "18.634441"
  },
  {
    "numerStacji": "7526",
    "bilkomNumerStacji": "5101117",
    "name": "Gdańsk Politechnika",
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
    "numerStacji": "7559",
    "bilkomNumerStacji": "5101127",
    "name": "Gdańsk Zaspa",
    "lat": "54.389718",
    "lon": "18.59167"
  },
  {
    "numerStacji": "8227",
    "bilkomNumerStacji": "5101129",
    "name": "Gronowo Elbląskie",
    "lat": "54.089443",
    "lon": "19.305"
  },
  {
    "numerStacji": "19943",
    "bilkomNumerStacji": "5101131",
    "name": "Grębocin",
    "lat": "53.045831",
    "lon": "18.690282"
  },
  {
    "numerStacji": "40048",
    "bilkomNumerStacji": "5101132",
    "name": "Grodek",
    "lat": "51.571393",
    "lon": "22.787781"
  },
  {
    "numerStacji": "55210",
    "bilkomNumerStacji": "5101135",
    "name": "Głuszyca Górna",
    "lat": "50.673056",
    "lon": "16.371388"
  },
  {
    "numerStacji": "81778",
    "bilkomNumerStacji": "5101138",
    "name": "Gorlice Glinik",
    "lat": "49.671667",
    "lon": "21.173057"
  },
  {
    "numerStacji": "61903",
    "bilkomNumerStacji": "5101140",
    "name": "Gogolin",
    "lat": "50.492499",
    "lon": "18.019165"
  },
  {
    "numerStacji": "37788",
    "bilkomNumerStacji": "5101141",
    "name": "Grzegorzewo",
    "lat": "52.485282",
    "lon": "21.42889"
  },
  {
    "numerStacji": "57133",
    "bilkomNumerStacji": "5101144",
    "name": "Głuchołazy Miasto",
    "lat": "50.31694",
    "lon": "17.390001"
  },
  {
    "numerStacji": "24141",
    "bilkomNumerStacji": "5101147",
    "name": "Goniądz",
    "lat": "53.459443",
    "lon": "22.725836"
  },
  {
    "numerStacji": "190012",
    "bilkomNumerStacji": "5101149",
    "name": "Geniusze",
    "lat": "53.383052",
    "lon": "23.439445"
  },
  {
    "numerStacji": "23655",
    "bilkomNumerStacji": "5101151",
    "name": "Gierwaty",
    "lat": "52.993891",
    "lon": "21.603892"
  },
  {
    "numerStacji": "51938",
    "bilkomNumerStacji": "5101154",
    "name": "Gierałtów",
    "lat": "51.191392",
    "lon": "15.300279"
  },
  {
    "numerStacji": "51920",
    "bilkomNumerStacji": "5101155",
    "name": "Gierałtów Wykroty",
    "lat": "51.21694",
    "lon": "15.28444"
  },
  {
    "numerStacji": "12252",
    "bilkomNumerStacji": "5101158",
    "name": "Grajewo",
    "lat": "53.649726",
    "lon": "22.44833"
  },
  {
    "numerStacji": "17749",
    "bilkomNumerStacji": "5101160",
    "name": "Gołubie Kaszubskie",
    "lat": "54.212775",
    "lon": "18.037224"
  },
  {
    "numerStacji": "83170",
    "bilkomNumerStacji": "5101162",
    "name": "Grodzisko Dolne",
    "lat": "50.169445",
    "lon": "22.509169"
  },
  {
    "numerStacji": "46060",
    "bilkomNumerStacji": "5101164",
    "name": "Garki",
    "lat": "51.54056",
    "lon": "17.64889"
  },
  {
    "numerStacji": "57349",
    "bilkomNumerStacji": "5101165",
    "name": "Gorzuchów Kłodzki",
    "lat": "50.49",
    "lon": "16.571389"
  },
  {
    "numerStacji": "6122",
    "bilkomNumerStacji": "5101166",
    "name": "Gdańsk Osowa",
    "lat": "54.421109",
    "lon": "18.451663"
  },
  {
    "numerStacji": "40345",
    "bilkomNumerStacji": "5101167",
    "name": "Góra Kalwaria",
    "lat": "51.989446",
    "lon": "21.194443"
  },
  {
    "numerStacji": "68866",
    "bilkomNumerStacji": "5101168",
    "name": "Górki Śląskie",
    "lat": "50.141947",
    "lon": "18.390276"
  },
  {
    "numerStacji": "14340",
    "bilkomNumerStacji": "5101169",
    "name": "Górki Noteckie",
    "lat": "52.793333",
    "lon": "15.488333"
  },
  {
    "numerStacji": "21733",
    "bilkomNumerStacji": "5101170",
    "name": "Gołaszewo Kujawskie",
    "lat": "52.545833",
    "lon": "19.091389"
  },
  {
    "numerStacji": "25908",
    "bilkomNumerStacji": "5101171",
    "name": "Gądków Wielki",
    "lat": "52.246115",
    "lon": "14.963615"
  },
  {
    "numerStacji": "50054",
    "bilkomNumerStacji": "5101175",
    "name": "Gołąb",
    "lat": "51.500558",
    "lon": "21.919998"
  },
  {
    "numerStacji": "83030",
    "bilkomNumerStacji": "5101176",
    "name": "Głuchów",
    "lat": "50.083337",
    "lon": "22.279719"
  },
  {
    "numerStacji": "26583",
    "bilkomNumerStacji": "5101177",
    "name": "Głębokie Międzyrzeckie",
    "lat": "52.484724",
    "lon": "15.534169"
  },
  {
    "numerStacji": "82941",
    "bilkomNumerStacji": "5101178",
    "name": "Głogów Małopolski",
    "lat": "50.148608",
    "lon": "21.958058"
  },
  {
    "numerStacji": "42465",
    "bilkomNumerStacji": "5101179",
    "name": "Głogów Huta",
    "lat": "51.67583",
    "lon": "15.991666"
  },
  {
    "numerStacji": "70136",
    "bilkomNumerStacji": "5101180",
    "name": "Gliwice Kuźnica",
    "lat": "50.357499",
    "lon": "18.621946"
  },
  {
    "numerStacji": "70102",
    "bilkomNumerStacji": "5101181",
    "name": "Gliwice Łabędy",
    "lat": "50.339997",
    "lon": "18.622503"
  },
  {
    "numerStacji": "4929",
    "bilkomNumerStacji": "5101185",
    "name": "Głuszyno Pomorskie",
    "lat": "54.490002",
    "lon": "17.417778"
  },
  {
    "numerStacji": "36889",
    "bilkomNumerStacji": "5101187",
    "name": "Gołotczyzna",
    "lat": "52.784164",
    "lon": "20.682219"
  },
  {
    "numerStacji": "22475",
    "bilkomNumerStacji": "5101189",
    "name": "Gralewo",
    "lat": "53.320002",
    "lon": "20.036111"
  },
  {
    "numerStacji": "55186",
    "bilkomNumerStacji": "5101191",
    "name": "Głuszyca",
    "lat": "50.688059",
    "lon": "16.353886"
  },
  {
    "numerStacji": "20628",
    "bilkomNumerStacji": "5101195",
    "name": "Grudziądz Mniszek",
    "lat": "53.433059",
    "lon": "18.725277"
  },
  {
    "numerStacji": "83139",
    "bilkomNumerStacji": "5101202",
    "name": "Gniewczyna",
    "lat": "50.099724",
    "lon": "22.520837"
  },
  {
    "numerStacji": "83378",
    "bilkomNumerStacji": "5101203",
    "name": "Gliniczek",
    "lat": "49.736947",
    "lon": "21.538613"
  },
  {
    "numerStacji": "8060",
    "bilkomNumerStacji": "5101204",
    "name": "Gronajny",
    "lat": "53.992224",
    "lon": "19.052223"
  },
  {
    "numerStacji": "18796",
    "bilkomNumerStacji": "5101205",
    "name": "Gniewkowo",
    "lat": "52.888052",
    "lon": "18.403885"
  },
  {
    "numerStacji": "43125",
    "bilkomNumerStacji": "5101207",
    "name": "Granowo Nowotomyskie",
    "lat": "52.225556",
    "lon": "16.530003"
  },
  {
    "numerStacji": "46938",
    "bilkomNumerStacji": "5101208",
    "name": "Glinnik",
    "lat": "51.887778",
    "lon": "19.501109"
  },
  {
    "numerStacji": "24851",
    "bilkomNumerStacji": "5101213",
    "name": "Gliniszcze",
    "lat": "53.465834",
    "lon": "23.501111"
  },
  {
    "numerStacji": "46235",
    "bilkomNumerStacji": "5101214",
    "name": "Golina",
    "lat": "51.907221",
    "lon": "17.460279"
  },
  {
    "numerStacji": "2220",
    "bilkomNumerStacji": "5101220",
    "name": "Gogolewo",
    "lat": "53.372499",
    "lon": "15.177225"
  },
  {
    "numerStacji": "20651",
    "bilkomNumerStacji": "5101221",
    "name": "Gorzuchowo Chełmińskie",
    "lat": "53.350278",
    "lon": "18.693059"
  },
  {
    "numerStacji": "75952",
    "bilkomNumerStacji": "5101224",
    "name": "Goczałkowice-Zdrój",
    "lat": "49.935276",
    "lon": "18.976948"
  },
  {
    "numerStacji": "47852",
    "bilkomNumerStacji": "5101226",
    "name": "Gomunice",
    "lat": "51.164164",
    "lon": "19.486942"
  },
  {
    "numerStacji": "9720",
    "bilkomNumerStacji": "5101228",
    "name": "Górowo",
    "lat": "53.959998",
    "lon": "20.984724"
  },
  {
    "numerStacji": "81760",
    "bilkomNumerStacji": "5101230",
    "name": "Gorlice",
    "lat": "49.66444",
    "lon": "21.163052"
  },
  {
    "numerStacji": "9530",
    "bilkomNumerStacji": "5101232",
    "name": "Godki",
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
    "numerStacji": "32847",
    "bilkomNumerStacji": "5101234",
    "name": "Gozdowo",
    "lat": "52.729725",
    "lon": "19.695554"
  },
  {
    "numerStacji": "1685",
    "bilkomNumerStacji": "5101239",
    "name": "Górki Pomorskie",
    "lat": "53.899168",
    "lon": "14.824165"
  },
  {
    "numerStacji": "7567",
    "bilkomNumerStacji": "5101242",
    "name": "Gdańsk Przymorze-Uniwersytet",
    "lat": "54.400002",
    "lon": "18.577224"
  },
  {
    "numerStacji": "65409",
    "bilkomNumerStacji": "5101247",
    "name": "Grębów",
    "lat": "50.603893",
    "lon": "21.836947"
  },
  {
    "numerStacji": "46839",
    "bilkomNumerStacji": "5101251",
    "name": "Grotniki",
    "lat": "51.88722",
    "lon": "19.311113"
  },
  {
    "numerStacji": "62182",
    "bilkomNumerStacji": "5101253",
    "name": "Grodków Śląski",
    "lat": "50.696941",
    "lon": "17.37667"
  },
  {
    "numerStacji": "31344",
    "bilkomNumerStacji": "5101254",
    "name": "Grylewo",
    "lat": "52.887774",
    "lon": "17.227782"
  },
  {
    "numerStacji": "34165",
    "bilkomNumerStacji": "5101255",
    "name": "Grodzisk Mazowiecki",
    "lat": "52.11",
    "lon": "20.622504"
  },
  {
    "numerStacji": "81059",
    "bilkomNumerStacji": "5101256",
    "name": "Gromnik",
    "lat": "49.834165",
    "lon": "20.96111"
  },
  {
    "numerStacji": "10652",
    "bilkomNumerStacji": "5101257",
    "name": "Grom",
    "lat": "53.606389",
    "lon": "20.861941"
  },
  {
    "numerStacji": "20636",
    "bilkomNumerStacji": "5101258",
    "name": "Grudziądz Przedmieście",
    "lat": "53.475003",
    "lon": "18.748891"
  },
  {
    "numerStacji": "24513",
    "bilkomNumerStacji": "5101259",
    "name": "Gregorowce",
    "lat": "52.662774",
    "lon": "23.241107"
  },
  {
    "numerStacji": "2311",
    "bilkomNumerStacji": "5101260",
    "name": "Grzędzice Stargardzkie",
    "lat": "53.358332",
    "lon": "14.972496"
  },
  {
    "numerStacji": "43091",
    "bilkomNumerStacji": "5101263",
    "name": "Grodzisk Wielkopolski",
    "lat": "52.230276",
    "lon": "16.36417"
  },
  {
    "numerStacji": "81679",
    "bilkomNumerStacji": "5101264",
    "name": "Grybów",
    "lat": "49.626667",
    "lon": "20.957775"
  },
  {
    "numerStacji": "7518",
    "bilkomNumerStacji": "5101266",
    "name": "Gdańsk Stocznia",
    "lat": "54.364441",
    "lon": "18.642225"
  },
  {
    "numerStacji": "83063",
    "bilkomNumerStacji": "5101267",
    "name": "Grzęska",
    "lat": "50.080002",
    "lon": "22.45278"
  },
  {
    "numerStacji": "79350",
    "bilkomNumerStacji": "5101268",
    "name": "Goszcza",
    "lat": "50.184996",
    "lon": "20.06111"
  },
  {
    "numerStacji": "48645",
    "bilkomNumerStacji": "5101269",
    "name": "Gośniewice",
    "lat": "51.816943",
    "lon": "21.139168"
  },
  {
    "numerStacji": "63628",
    "bilkomNumerStacji": "5101274",
    "name": "Górki Szczukowskie",
    "lat": "50.883611",
    "lon": "20.523614"
  },
  {
    "numerStacji": "76901",
    "bilkomNumerStacji": "5101277",
    "name": "Goleszów",
    "lat": "49.746943",
    "lon": "18.74917"
  },
  {
    "numerStacji": "32359",
    "bilkomNumerStacji": "5101279",
    "name": "Gostynin",
    "lat": "52.433612",
    "lon": "19.476388"
  },
  {
    "numerStacji": "17459",
    "bilkomNumerStacji": "5101282",
    "name": "Grupa",
    "lat": "53.503885",
    "lon": "18.629721"
  },
  {
    "numerStacji": "46888",
    "bilkomNumerStacji": "5101284",
    "name": "Grudze",
    "lat": "52.048613",
    "lon": "19.901668"
  },
  {
    "numerStacji": "30072",
    "bilkomNumerStacji": "5101289",
    "name": "Gutowo Wielkopolskie",
    "lat": "52.332501",
    "lon": "17.643892"
  },
  {
    "numerStacji": "9514",
    "bilkomNumerStacji": "5101293",
    "name": "Gutkowo",
    "lat": "53.808889",
    "lon": "20.402502"
  },
  {
    "numerStacji": "8920",
    "bilkomNumerStacji": "5101294",
    "name": "Gutowiec",
    "lat": "53.777499",
    "lon": "17.860002"
  },
  {
    "numerStacji": "30148",
    "bilkomNumerStacji": "5101295",
    "name": "Gułtowy",
    "lat": "52.368053",
    "lon": "17.316388"
  },
  {
    "numerStacji": "20503",
    "bilkomNumerStacji": "5101296",
    "name": "Grudziądz",
    "lat": "53.482221",
    "lon": "18.760829"
  },
  {
    "numerStacji": "4176",
    "bilkomNumerStacji": "5101297",
    "name": "Głowaczewo",
    "lat": "54.130559",
    "lon": "15.438056"
  },
  {
    "numerStacji": "3053",
    "bilkomNumerStacji": "5101299",
    "name": "Gwda Mała",
    "lat": "53.731942",
    "lon": "16.82778"
  },
  {
    "numerStacji": "6593",
    "bilkomNumerStacji": "5101302",
    "name": "Gościcino Wejherowskie",
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
    "numerStacji": "32581",
    "bilkomNumerStacji": "5101305",
    "name": "Gawrony",
    "lat": "52.11222",
    "lon": "19.219719"
  },
  {
    "numerStacji": "23663",
    "bilkomNumerStacji": "5101306",
    "name": "Goworowo",
    "lat": "52.921115",
    "lon": "21.581941"
  },
  {
    "numerStacji": "7534",
    "bilkomNumerStacji": "5101307",
    "name": "Gdańsk Wrzeszcz",
    "lat": "54.381943",
    "lon": "18.605001"
  },
  {
    "numerStacji": "13086",
    "bilkomNumerStacji": "5101310",
    "name": "Górzyca",
    "lat": "52.499718",
    "lon": "14.656948"
  },
  {
    "numerStacji": "6064",
    "bilkomNumerStacji": "5101311",
    "name": "Gdynia Leszczynki",
    "lat": "54.541393",
    "lon": "18.477777"
  },
  {
    "numerStacji": "56150",
    "bilkomNumerStacji": "5101312",
    "name": "Górzyniec",
    "lat": "50.859996",
    "lon": "15.568058"
  },
  {
    "numerStacji": "20388",
    "bilkomNumerStacji": "5101315",
    "name": "Grzywna",
    "lat": "53.154448",
    "lon": "18.617226"
  },
  {
    "numerStacji": "9449",
    "bilkomNumerStacji": "5101316",
    "name": "Gryźliny",
    "lat": "53.613329",
    "lon": "20.349448"
  },
  {
    "numerStacji": "7617",
    "bilkomNumerStacji": "5101317",
    "name": "Gdańsk Żabianka-AWFiS",
    "lat": "54.4208562",
    "lon": "18.5680397"
  },
  {
    "numerStacji": "20420",
    "bilkomNumerStacji": "5101318",
    "name": "Grzybno",
    "lat": "53.20361",
    "lon": "18.446108"
  },
  {
    "numerStacji": "31369",
    "bilkomNumerStacji": "5101319",
    "name": "Gołańcz",
    "lat": "52.947498",
    "lon": "17.305835"
  },
  {
    "numerStacji": "47837",
    "bilkomNumerStacji": "5101320",
    "name": "Gorzędów",
    "lat": "51.196948",
    "lon": "19.54361"
  },
  {
    "numerStacji": "13938",
    "bilkomNumerStacji": "5101321",
    "name": "Gorzów Wielkopolski Zieleniec",
    "lat": "52.699719",
    "lon": "15.26167"
  },
  {
    "numerStacji": "81703",
    "bilkomNumerStacji": "5101322",
    "name": "Gorlice Zagórzany",
    "lat": "49.693888",
    "lon": "21.195"
  },
  {
    "numerStacji": "18622",
    "bilkomNumerStacji": "5101323",
    "name": "Gzin",
    "lat": "53.191942",
    "lon": "18.331945"
  },
  {
    "numerStacji": "47829",
    "bilkomNumerStacji": "5101324",
    "name": "Gorzkowice",
    "lat": "51.218333",
    "lon": "19.603334"
  },
  {
    "numerStacji": "13953",
    "bilkomNumerStacji": "5101326",
    "name": "Gorzów Wielkopolski Zamoście",
    "lat": "52.722777",
    "lon": "15.238891"
  },
  {
    "numerStacji": "57380",
    "bilkomNumerStacji": "5101327",
    "name": "Gorzanów",
    "lat": "50.354164",
    "lon": "16.640831"
  },
  {
    "numerStacji": "44057",
    "bilkomNumerStacji": "5101329",
    "name": "Gorzupia",
    "lat": "51.691948",
    "lon": "17.503885"
  },
  {
    "numerStacji": "57109",
    "bilkomNumerStacji": "5101331",
    "name": "Głuchołazy",
    "lat": "50.33028",
    "lon": "17.394442"
  },
  {
    "numerStacji": "39867",
    "bilkomNumerStacji": "5101332",
    "name": "Grodziszcze Mazowieckie",
    "lat": "52.160834",
    "lon": "21.872499"
  },
  {
    "numerStacji": "25403",
    "bilkomNumerStacji": "5101334",
    "name": "Hajnówka",
    "lat": "52.73333",
    "lon": "23.583056"
  },
  {
    "numerStacji": "84954",
    "bilkomNumerStacji": "5101335",
    "name": "Hrebenne",
    "lat": "50.298332",
    "lon": "23.576944"
  },
  {
    "numerStacji": "84848",
    "bilkomNumerStacji": "5101337",
    "name": "Horyniec-Zdrój",
    "lat": "50.194444",
    "lon": "23.356393"
  },
  {
    "numerStacji": "24380",
    "bilkomNumerStacji": "5101338",
    "name": "Hołówki Duże",
    "lat": "52.97167",
    "lon": "23.095553"
  },
  {
    "numerStacji": "11338",
    "bilkomNumerStacji": "5101339",
    "name": "Henrykowo",
    "lat": "54.184719",
    "lon": "20.130003"
  },
  {
    "numerStacji": "6791",
    "bilkomNumerStacji": "5101340",
    "name": "Hel",
    "lat": "54.6109936",
    "lon": "18.8012524"
  },
  {
    "numerStacji": "56457",
    "bilkomNumerStacji": "5101341",
    "name": "Henryków",
    "lat": "50.66333",
    "lon": "17.030001"
  },
  {
    "numerStacji": "39131",
    "bilkomNumerStacji": "5101343",
    "name": "Halinów",
    "lat": "52.223336",
    "lon": "21.35028"
  },
  {
    "numerStacji": "178392",
    "bilkomNumerStacji": "5101346",
    "name": "Hurko",
    "lat": "49.785282",
    "lon": "22.862778"
  },
  {
    "numerStacji": "76687",
    "bilkomNumerStacji": "5101347",
    "name": "Hucisko",
    "lat": "49.689169",
    "lon": "19.407504"
  },
  {
    "numerStacji": "21899",
    "bilkomNumerStacji": "5101351",
    "name": "Hartowiec",
    "lat": "53.395556",
    "lon": "19.845557"
  },
  {
    "numerStacji": "54627",
    "bilkomNumerStacji": "5101352",
    "name": "Imbramowice",
    "lat": "50.963615",
    "lon": "16.579444"
  },
  {
    "numerStacji": "30478",
    "bilkomNumerStacji": "5101357",
    "name": "Iłowiec",
    "lat": "52.183891",
    "lon": "16.799446"
  },
  {
    "numerStacji": "21816",
    "bilkomNumerStacji": "5101358",
    "name": "Iława Miasto",
    "lat": "53.596115",
    "lon": "19.547223"
  },
  {
    "numerStacji": "77339",
    "bilkomNumerStacji": "5101359",
    "name": "Imielin",
    "lat": "50.142504",
    "lon": "19.176113"
  },
  {
    "numerStacji": "76299",
    "bilkomNumerStacji": "5101360",
    "name": "Inwałd",
    "lat": "49.85306",
    "lon": "19.387782"
  },
  {
    "numerStacji": "22400",
    "bilkomNumerStacji": "5101361",
    "name": "Iłowo",
    "lat": "53.1675",
    "lon": "20.289723"
  },
  {
    "numerStacji": "18838",
    "bilkomNumerStacji": "5101362",
    "name": "Inowrocław Rąbinek",
    "lat": "52.769997",
    "lon": "18.240282"
  },
  {
    "numerStacji": "3012",
    "bilkomNumerStacji": "5101363",
    "name": "Iwin",
    "lat": "53.795001",
    "lon": "16.515557"
  },
  {
    "numerStacji": "254539",
    "bilkomNumerStacji": "5101366",
    "name": "Izbica",
    "lat": "50.890559",
    "lon": "23.155278"
  },
  {
    "numerStacji": "63446",
    "bilkomNumerStacji": "5101368",
    "name": "Jacków",
    "lat": "50.964442",
    "lon": "19.354719"
  },
  {
    "numerStacji": "32474",
    "bilkomNumerStacji": "5101371",
    "name": "Jackowice",
    "lat": "52.15722",
    "lon": "19.794723"
  },
  {
    "numerStacji": "65490",
    "bilkomNumerStacji": "5101372",
    "name": "Jadachy",
    "lat": "50.482782",
    "lon": "21.696391"
  },
  {
    "numerStacji": "19034",
    "bilkomNumerStacji": "5101377",
    "name": "Jaksice",
    "lat": "52.856941",
    "lon": "18.198059"
  },
  {
    "numerStacji": "37770",
    "bilkomNumerStacji": "5101378",
    "name": "Jarzębia Łąka",
    "lat": "52.458053",
    "lon": "21.447777"
  },
  {
    "numerStacji": "47746",
    "bilkomNumerStacji": "5101381",
    "name": "Jarosty",
    "lat": "51.461392",
    "lon": "19.693055"
  },
  {
    "numerStacji": "17418",
    "bilkomNumerStacji": "5101382",
    "name": "Jastrzębie Pomorskie",
    "lat": "53.519724",
    "lon": "18.266665"
  },
  {
    "numerStacji": "1677",
    "bilkomNumerStacji": "5101383",
    "name": "Jarszewo",
    "lat": "53.929444",
    "lon": "14.800002"
  },
  {
    "numerStacji": "6775",
    "bilkomNumerStacji": "5101385",
    "name": "Jastarnia",
    "lat": "54.701114",
    "lon": "18.677499"
  },
  {
    "numerStacji": "4150",
    "bilkomNumerStacji": "5101388",
    "name": "Jazy",
    "lat": "54.129166",
    "lon": "15.790829"
  },
  {
    "numerStacji": "46821",
    "bilkomNumerStacji": "5101392",
    "name": "Zgierz Kontrewers",
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
    "numerStacji": "48751",
    "bilkomNumerStacji": "5101395",
    "name": "Jedlnia-Letnisko",
    "lat": "51.429723",
    "lon": "21.32778"
  },
  {
    "numerStacji": "83394",
    "bilkomNumerStacji": "5101396",
    "name": "Jedlicze",
    "lat": "49.719166",
    "lon": "21.648056"
  },
  {
    "numerStacji": "83386",
    "bilkomNumerStacji": "5101397",
    "name": "Jedlicze Męcinka",
    "lat": "49.726115",
    "lon": "21.626114"
  },
  {
    "numerStacji": "36855",
    "bilkomNumerStacji": "5101400",
    "name": "Jackowo Dworskie",
    "lat": "52.631941",
    "lon": "20.775276"
  },
  {
    "numerStacji": "18259",
    "bilkomNumerStacji": "5101401",
    "name": "Jadwiżyn",
    "lat": "53.123893",
    "lon": "17.371942"
  },
  {
    "numerStacji": "83238",
    "bilkomNumerStacji": "5101402",
    "name": "Jelna",
    "lat": "50.304445",
    "lon": "22.364443"
  },
  {
    "numerStacji": "17434",
    "bilkomNumerStacji": "5101403",
    "name": "Jeżewo",
    "lat": "53.50722",
    "lon": "18.488887"
  },
  {
    "numerStacji": "49759",
    "bilkomNumerStacji": "5101406",
    "name": "Jeleń",
    "lat": "51.502221",
    "lon": "20.072778"
  },
  {
    "numerStacji": "21923",
    "bilkomNumerStacji": "5101407",
    "name": "Jeglia",
    "lat": "53.390558",
    "lon": "19.88306"
  },
  {
    "numerStacji": "51961",
    "bilkomNumerStacji": "5101408",
    "name": "Jędrzychowice",
    "lat": "51.172497",
    "lon": "15.018053"
  },
  {
    "numerStacji": "48744",
    "bilkomNumerStacji": "5101410",
    "name": "Jedlnia Kościelna",
    "lat": "51.45528",
    "lon": "21.408332"
  },
  {
    "numerStacji": "58172",
    "bilkomNumerStacji": "5101411",
    "name": "Jelcz Miłoszyce",
    "lat": "51.044446",
    "lon": "17.305835"
  },
  {
    "numerStacji": "34231",
    "bilkomNumerStacji": "5101414",
    "name": "Jesionka",
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
    "numerStacji": "15065",
    "bilkomNumerStacji": "5101418",
    "name": "Jeziorki Wałeckie",
    "lat": "53.225552",
    "lon": "16.108058"
  },
  {
    "numerStacji": "10744",
    "bilkomNumerStacji": "5101419",
    "name": "Jeruty",
    "lat": "53.552778",
    "lon": "21.154998"
  },
  {
    "numerStacji": "52035",
    "bilkomNumerStacji": "5101421",
    "name": "Jagodzin",
    "lat": "51.355275",
    "lon": "15.170277"
  },
  {
    "numerStacji": "56127",
    "bilkomNumerStacji": "5101423",
    "name": "Jelenia Góra Sobieszów",
    "lat": "50.851942",
    "lon": "15.645554"
  },
  {
    "numerStacji": "56077",
    "bilkomNumerStacji": "5101424",
    "name": "Jelenia Góra Zachodnia",
    "lat": "50.900555",
    "lon": "15.719446"
  },
  {
    "numerStacji": "3111",
    "bilkomNumerStacji": "5101425",
    "name": "Jelenino",
    "lat": "53.659444",
    "lon": "16.625837"
  },
  {
    "numerStacji": "77230",
    "bilkomNumerStacji": "5101426",
    "name": "Jawiszowice Jaźnik",
    "lat": "49.949721",
    "lon": "19.115831"
  },
  {
    "numerStacji": "24687",
    "bilkomNumerStacji": "5101428",
    "name": "Jabłoń Kościelna",
    "lat": "52.908053",
    "lon": "22.650003"
  },
  {
    "numerStacji": "34322",
    "bilkomNumerStacji": "5101429",
    "name": "Jaktorów",
    "lat": "52.086664",
    "lon": "20.552226"
  },
  {
    "numerStacji": "49452",
    "bilkomNumerStacji": "5101430",
    "name": "Jakubowice",
    "lat": "50.811113",
    "lon": "21.664722"
  },
  {
    "numerStacji": "53132",
    "bilkomNumerStacji": "5101432",
    "name": "Jaśkowice Legnickie",
    "lat": "51.214998",
    "lon": "16.312779"
  },
  {
    "numerStacji": "56119",
    "bilkomNumerStacji": "5101433",
    "name": "Jelenia Góra Orle",
    "lat": "50.864167",
    "lon": "15.65778"
  },
  {
    "numerStacji": "83352",
    "bilkomNumerStacji": "5101434",
    "name": "Jasło Niegłowice",
    "lat": "49.742232",
    "lon": "21.446105"
  },
  {
    "numerStacji": "76653",
    "bilkomNumerStacji": "5101435",
    "name": "Jeleśnia",
    "lat": "49.652502",
    "lon": "19.320282"
  },
  {
    "numerStacji": "25890",
    "bilkomNumerStacji": "5101436",
    "name": "Jerzmanice Lubuskie",
    "lat": "52.306666",
    "lon": "14.867502"
  },
  {
    "numerStacji": "60939",
    "bilkomNumerStacji": "5101437",
    "name": "Jełowa",
    "lat": "50.793611",
    "lon": "18.046663"
  },
  {
    "numerStacji": "21931",
    "bilkomNumerStacji": "5101438",
    "name": "Jamielnik",
    "lat": "53.529442",
    "lon": "19.502223"
  },
  {
    "numerStacji": "32060",
    "bilkomNumerStacji": "5101441",
    "name": "Jankowo Dolne",
    "lat": "52.538893",
    "lon": "17.719725"
  },
  {
    "numerStacji": "19091",
    "bilkomNumerStacji": "5101442",
    "name": "Janikowo",
    "lat": "52.748612",
    "lon": "18.115835"
  },
  {
    "numerStacji": "81133",
    "bilkomNumerStacji": "5101443",
    "name": "Jankowa",
    "lat": "49.69583",
    "lon": "20.934169"
  },
  {
    "numerStacji": "3277",
    "bilkomNumerStacji": "5101446",
    "name": "Jankowo Pomorskie",
    "lat": "53.516668",
    "lon": "15.774163"
  },
  {
    "numerStacji": "74310",
    "bilkomNumerStacji": "5101449",
    "name": "Jaroszowiec Olkuski",
    "lat": "50.341112",
    "lon": "19.619443"
  },
  {
    "numerStacji": "9522",
    "bilkomNumerStacji": "5101450",
    "name": "Jonkowo",
    "lat": "53.815829",
    "lon": "20.296942"
  },
  {
    "numerStacji": "38851",
    "bilkomNumerStacji": "5101453",
    "name": "Józefów",
    "lat": "52.135835",
    "lon": "21.236944"
  },
  {
    "numerStacji": "45989",
    "bilkomNumerStacji": "5101454",
    "name": "Janków Przygodzki",
    "lat": "51.608887",
    "lon": "17.809725"
  },
  {
    "numerStacji": "51995",
    "bilkomNumerStacji": "5101455",
    "name": "Jerzmanki",
    "lat": "51.129996",
    "lon": "15.055835"
  },
  {
    "numerStacji": "11288",
    "bilkomNumerStacji": "5101456",
    "name": "Jarzębiec",
    "lat": "54.312501",
    "lon": "19.993331"
  },
  {
    "numerStacji": "56721",
    "bilkomNumerStacji": "5101460",
    "name": "Jasienica Dolna",
    "lat": "50.504167",
    "lon": "17.503885"
  },
  {
    "numerStacji": "24935",
    "bilkomNumerStacji": "5101461",
    "name": "Jastrzębna",
    "lat": "53.74556",
    "lon": "23.198615"
  },
  {
    "numerStacji": "26195",
    "bilkomNumerStacji": "5101464",
    "name": "Jastrzębsko",
    "lat": "52.294998",
    "lon": "16.060829"
  },
  {
    "numerStacji": "32961",
    "bilkomNumerStacji": "5101465",
    "name": "Jasionna Łowicka",
    "lat": "52.124446",
    "lon": "20.123054"
  },
  {
    "numerStacji": "79673",
    "bilkomNumerStacji": "5101467",
    "name": "Jasień Brzeski",
    "lat": "49.986946",
    "lon": "20.559445"
  },
  {
    "numerStacji": "67124",
    "bilkomNumerStacji": "5101468",
    "name": "Jasiona",
    "lat": "50.458888",
    "lon": "18.075833"
  },
  {
    "numerStacji": "49106",
    "bilkomNumerStacji": "5101469",
    "name": "Jastrząb",
    "lat": "51.24833",
    "lon": "20.98361"
  },
  {
    "numerStacji": "16402",
    "bilkomNumerStacji": "5101471",
    "name": "Jastrowie",
    "lat": "53.40806",
    "lon": "16.798052"
  },
  {
    "numerStacji": "63024",
    "bilkomNumerStacji": "5101476",
    "name": "Julianka",
    "lat": "50.764719",
    "lon": "19.473053"
  },
  {
    "numerStacji": "6759",
    "bilkomNumerStacji": "5101478",
    "name": "Jurata",
    "lat": "54.685275",
    "lon": "18.712503"
  },
  {
    "numerStacji": "46524",
    "bilkomNumerStacji": "5101479",
    "name": "Justynów",
    "lat": "51.730835",
    "lon": "19.683329"
  },
  {
    "numerStacji": "78543",
    "bilkomNumerStacji": "5101481",
    "name": "Juszczyn",
    "lat": "49.707219",
    "lon": "19.691671"
  },
  {
    "numerStacji": "77545",
    "bilkomNumerStacji": "5101482",
    "name": "Jaworzno Ciężkowice",
    "lat": "50.211946",
    "lon": "19.337496"
  },
  {
    "numerStacji": "55665",
    "bilkomNumerStacji": "5101483",
    "name": "Janowice Wielkie",
    "lat": "50.878613",
    "lon": "15.918611"
  },
  {
    "numerStacji": "36541",
    "bilkomNumerStacji": "5101486",
    "name": "Janówek",
    "lat": "52.425279",
    "lon": "20.78111"
  },
  {
    "numerStacji": "53553",
    "bilkomNumerStacji": "5101487",
    "name": "Jawor",
    "lat": "51.055278",
    "lon": "16.196944"
  },
  {
    "numerStacji": "50658",
    "bilkomNumerStacji": "5101491",
    "name": "Jaszczów",
    "lat": "51.202224",
    "lon": "22.910555"
  },
  {
    "numerStacji": "178885",
    "bilkomNumerStacji": "5101493",
    "name": "Jezierzany",
    "lat": "51.233057",
    "lon": "16.104166"
  },
  {
    "numerStacji": "74385",
    "bilkomNumerStacji": "5101496",
    "name": "Jeżówka",
    "lat": "50.399721",
    "lon": "19.821664"
  },
  {
    "numerStacji": "4887",
    "bilkomNumerStacji": "5101502",
    "name": "Jezierzyce Słupskie",
    "lat": "54.504169",
    "lon": "17.123057"
  },
  {
    "numerStacji": "8995",
    "bilkomNumerStacji": "5101504",
    "name": "Kaliska",
    "lat": "53.903609",
    "lon": "18.216667"
  },
  {
    "numerStacji": "42861",
    "bilkomNumerStacji": "5101506",
    "name": "Kaczkowo",
    "lat": "51.74333",
    "lon": "16.679718"
  },
  {
    "numerStacji": "8987",
    "bilkomNumerStacji": "5101508",
    "name": "Kamienna Karczma",
    "lat": "53.877225",
    "lon": "18.162777"
  },
  {
    "numerStacji": "20776",
    "bilkomNumerStacji": "5101513",
    "name": "Kamionki Jezioro",
    "lat": "53.129718",
    "lon": "18.779724"
  },
  {
    "numerStacji": "21758",
    "bilkomNumerStacji": "5101514",
    "name": "Kaliska Kujawskie",
    "lat": "52.411948",
    "lon": "19.123885"
  },
  {
    "numerStacji": "61440",
    "bilkomNumerStacji": "5101515",
    "name": "Kały",
    "lat": "50.827221",
    "lon": "18.080552"
  },
  {
    "numerStacji": "50856",
    "bilkomNumerStacji": "5101517",
    "name": "Kanie",
    "lat": "51.124719",
    "lon": "23.104722"
  },
  {
    "numerStacji": "4028",
    "bilkomNumerStacji": "5101518",
    "name": "Karlino",
    "lat": "54.045279",
    "lon": "15.883337"
  },
  {
    "numerStacji": "15008",
    "bilkomNumerStacji": "5101519",
    "name": "Kalisz Pomorski",
    "lat": "53.27778",
    "lon": "15.880829"
  },
  {
    "numerStacji": "72900",
    "bilkomNumerStacji": "5101522",
    "name": "Katowice Ligota",
    "lat": "50.226113",
    "lon": "18.977775"
  },
  {
    "numerStacji": "76034",
    "bilkomNumerStacji": "5101524",
    "name": "Kaniów",
    "lat": "49.926107",
    "lon": "19.052502"
  },
  {
    "numerStacji": "4572",
    "bilkomNumerStacji": "5101525",
    "name": "Kawcze",
    "lat": "54.072498",
    "lon": "16.883054"
  },
  {
    "numerStacji": "14464",
    "bilkomNumerStacji": "5101526",
    "name": "Kaczory",
    "lat": "53.105277",
    "lon": "16.882218"
  },
  {
    "numerStacji": "73338",
    "bilkomNumerStacji": "5101527",
    "name": "Katowice Załęże",
    "lat": "50.263607",
    "lon": "18.990279"
  },
  {
    "numerStacji": "80002",
    "bilkomNumerStacji": "5101528",
    "name": "Krakow Bonarka",
    "lat": "50.029168",
    "lon": "19.946111"
  },
  {
    "numerStacji": "31336",
    "bilkomNumerStacji": "5101529",
    "name": "Kobylec",
    "lat": "52.848329",
    "lon": "17.200832"
  },
  {
    "numerStacji": "80036",
    "bilkomNumerStacji": "5101531",
    "name": "Kraków Łagiewniki",
    "lat": "50.023613",
    "lon": "19.933885"
  },
  {
    "numerStacji": "42838",
    "bilkomNumerStacji": "5101533",
    "name": "Krobia",
    "lat": "51.759169",
    "lon": "16.971391"
  },
  {
    "numerStacji": "36335",
    "bilkomNumerStacji": "5101534",
    "name": "Kobyłka",
    "lat": "52.335557",
    "lon": "21.212502"
  },
  {
    "numerStacji": "69278",
    "bilkomNumerStacji": "5101535",
    "name": "Radostowice",
    "lat": "50.020556",
    "lon": "18.888611"
  },
  {
    "numerStacji": "31021",
    "bilkomNumerStacji": "5101536",
    "name": "Kobylnica",
    "lat": "52.445558",
    "lon": "17.078893"
  },
  {
    "numerStacji": "73619",
    "bilkomNumerStacji": "5101537",
    "name": "Katowice Zawodzie",
    "lat": "50.257503",
    "lon": "19.05528"
  },
  {
    "numerStacji": "4713",
    "bilkomNumerStacji": "5101539",
    "name": "Kobylnica Słupska",
    "lat": "54.442782",
    "lon": "16.9875"
  },
  {
    "numerStacji": "82974",
    "bilkomNumerStacji": "5101540",
    "name": "Kolbuszowa",
    "lat": "50.246671",
    "lon": "21.783892"
  },
  {
    "numerStacji": "75580",
    "bilkomNumerStacji": "5101546",
    "name": "Kaczyce",
    "lat": "49.832781",
    "lon": "18.612777"
  },
  {
    "numerStacji": "57364",
    "bilkomNumerStacji": "5101547",
    "name": "Krosnowice Kłodzkie",
    "lat": "50.392503",
    "lon": "16.636948"
  },
  {
    "numerStacji": "71571",
    "bilkomNumerStacji": "5101550",
    "name": "Kochanowice",
    "lat": "50.69917",
    "lon": "18.747777"
  },
  {
    "numerStacji": "4218",
    "bilkomNumerStacji": "5101551",
    "name": "Karcino",
    "lat": "54.108886",
    "lon": "15.397218"
  },
  {
    "numerStacji": "3913",
    "bilkomNumerStacji": "5101558",
    "name": "Kościernica",
    "lat": "54.053612",
    "lon": "16.010274"
  },
  {
    "numerStacji": "27870",
    "bilkomNumerStacji": "5101559",
    "name": "Koźla Kożuchowska",
    "lat": "51.872226",
    "lon": "15.318608"
  },
  {
    "numerStacji": "32250",
    "bilkomNumerStacji": "5101563",
    "name": "Kłodawa",
    "lat": "52.227219",
    "lon": "18.890552"
  },
  {
    "numerStacji": "57307",
    "bilkomNumerStacji": "5101564",
    "name": "Kłodzko Główne",
    "lat": "50.451391",
    "lon": "16.65667"
  },
  {
    "numerStacji": "19125",
    "bilkomNumerStacji": "5101565",
    "name": "Kołodziejewo",
    "lat": "52.712781",
    "lon": "18.035004"
  },
  {
    "numerStacji": "57455",
    "bilkomNumerStacji": "5101566",
    "name": "Kłodzko Książek",
    "lat": "50.41556",
    "lon": "16.64111"
  },
  {
    "numerStacji": "57463",
    "bilkomNumerStacji": "5101567",
    "name": "Kłodzko Miasto",
    "lat": "50.43611",
    "lon": "16.658612"
  },
  {
    "numerStacji": "65284",
    "bilkomNumerStacji": "5101569",
    "name": "Kępa",
    "lat": "50.65417",
    "lon": "22.032777"
  },
  {
    "numerStacji": "36863",
    "bilkomNumerStacji": "5101571",
    "name": "Kałęczyn",
    "lat": "52.713608",
    "lon": "20.742501"
  },
  {
    "numerStacji": "72124",
    "bilkomNumerStacji": "5101574",
    "name": "Koszęcin",
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
    "numerStacji": "51508",
    "bilkomNumerStacji": "5101576",
    "name": "Kraśnik",
    "lat": "50.929725",
    "lon": "22.283054"
  },
  {
    "numerStacji": "67264",
    "bilkomNumerStacji": "5101577",
    "name": "Kędzierzyn Koźle Zachodnie",
    "lat": "50.346667",
    "lon": "18.131386"
  },
  {
    "numerStacji": "67157",
    "bilkomNumerStacji": "5101579",
    "name": "Kędzierzyn Koźle Azoty",
    "lat": "50.310557",
    "lon": "18.239724"
  },
  {
    "numerStacji": "82834",
    "bilkomNumerStacji": "5101581",
    "name": "Kalembina",
    "lat": "49.869169",
    "lon": "21.685559"
  },
  {
    "numerStacji": "4945",
    "bilkomNumerStacji": "5101584",
    "name": "Kępice",
    "lat": "54.24056",
    "lon": "16.89083"
  },
  {
    "numerStacji": "48629",
    "bilkomNumerStacji": "5101585",
    "name": "Krężel",
    "lat": "51.87139",
    "lon": "21.111391"
  },
  {
    "numerStacji": "32979",
    "bilkomNumerStacji": "5101587",
    "name": "Kęszyce",
    "lat": "52.138334",
    "lon": "20.148332"
  },
  {
    "numerStacji": "76232",
    "bilkomNumerStacji": "5101588",
    "name": "Kęty",
    "lat": "49.880558",
    "lon": "19.225553"
  },
  {
    "numerStacji": "36962",
    "bilkomNumerStacji": "5101589",
    "name": "Krośnice Mazowieckie",
    "lat": "52.966115",
    "lon": "20.492502"
  },
  {
    "numerStacji": "9407",
    "bilkomNumerStacji": "5101591",
    "name": "Klewki",
    "lat": "53.736113",
    "lon": "20.568335"
  },
  {
    "numerStacji": "76224",
    "bilkomNumerStacji": "5101592",
    "name": "Kęty Podlesie",
    "lat": "49.878059",
    "lon": "19.196671"
  },
  {
    "numerStacji": "67272",
    "bilkomNumerStacji": "5101593",
    "name": "Kędzierzyn Koźle Przystanek",
    "lat": "50.350829",
    "lon": "18.155558"
  },
  {
    "numerStacji": "893",
    "bilkomNumerStacji": "5101595",
    "name": "Krzywin Gryfinski",
    "lat": "53.087775",
    "lon": "14.45389"
  },
  {
    "numerStacji": "76190",
    "bilkomNumerStacji": "5101596",
    "name": "Kozy Zagroda",
    "lat": "49.857501",
    "lon": "19.164445"
  },
  {
    "numerStacji": "55277",
    "bilkomNumerStacji": "5101599",
    "name": "Kamienna Góra",
    "lat": "50.785556",
    "lon": "16.023335"
  },
  {
    "numerStacji": "63586",
    "bilkomNumerStacji": "5101603",
    "name": "Kielce Białogon",
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
    "numerStacji": "58354",
    "bilkomNumerStacji": "5101605",
    "name": "Kopalina",
    "lat": "51.02111",
    "lon": "17.404447"
  },
  {
    "numerStacji": "30668",
    "bilkomNumerStacji": "5101606",
    "name": "Kiekrz",
    "lat": "52.475834",
    "lon": "16.789998"
  },
  {
    "numerStacji": "12344",
    "bilkomNumerStacji": "5101609",
    "name": "Kaliszki",
    "lat": "53.619163",
    "lon": "21.988613"
  },
  {
    "numerStacji": "17798",
    "bilkomNumerStacji": "5101612",
    "name": "Kiełpino Kartuskie",
    "lat": "54.287223",
    "lon": "18.231391"
  },
  {
    "numerStacji": "64352",
    "bilkomNumerStacji": "5101613",
    "name": "Klimontów",
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
    "numerStacji": "30247",
    "bilkomNumerStacji": "5101620",
    "name": "Kórnik",
    "lat": "52.28333",
    "lon": "17.099721"
  },
  {
    "numerStacji": "17509",
    "bilkomNumerStacji": "5101624",
    "name": "Kościerzyna",
    "lat": "54.121112",
    "lon": "17.993887"
  },
  {
    "numerStacji": "51383",
    "bilkomNumerStacji": "5101626",
    "name": "Krężnica Jara",
    "lat": "51.153053",
    "lon": "22.465553"
  },
  {
    "numerStacji": "15537",
    "bilkomNumerStacji": "5101630",
    "name": "Krajenka",
    "lat": "53.28889",
    "lon": "16.991114"
  },
  {
    "numerStacji": "8953",
    "bilkomNumerStacji": "5101631",
    "name": "Krojanty",
    "lat": "53.727416",
    "lon": "17.6117353"
  },
  {
    "numerStacji": "17624",
    "bilkomNumerStacji": "5101632",
    "name": "Kalisz Kaszubski",
    "lat": "54.045",
    "lon": "17.786111"
  },
  {
    "numerStacji": "80374",
    "bilkomNumerStacji": "5101633",
    "name": "Kraków Łobzów",
    "lat": "50.081944",
    "lon": "19.918055"
  },
  {
    "numerStacji": "42697",
    "bilkomNumerStacji": "5101635",
    "name": "Kąkolewo",
    "lat": "51.857781",
    "lon": "16.686946"
  },
  {
    "numerStacji": "57539",
    "bilkomNumerStacji": "5101639",
    "name": "Kulin Kłodzki",
    "lat": "50.419444",
    "lon": "16.325552"
  },
  {
    "numerStacji": "80044",
    "bilkomNumerStacji": "5101642",
    "name": "Kraków Swoszowice",
    "lat": "50.000277",
    "lon": "19.92806"
  },
  {
    "numerStacji": "79541",
    "bilkomNumerStacji": "5101643",
    "name": "Kokotów",
    "lat": "50.017779",
    "lon": "20.069721"
  },
  {
    "numerStacji": "20032",
    "bilkomNumerStacji": "5101644",
    "name": "Karnkowo",
    "lat": "52.866946",
    "lon": "19.264719"
  },
  {
    "numerStacji": "79939",
    "bilkomNumerStacji": "5101645",
    "name": "Kraków Zabłocie",
    "lat": "50.048054",
    "lon": "19.9575"
  },
  {
    "numerStacji": "24612",
    "bilkomNumerStacji": "5101648",
    "name": "Klepacze",
    "lat": "53.102778",
    "lon": "23.080559"
  },
  {
    "numerStacji": "78287",
    "bilkomNumerStacji": "5101650",
    "name": "Klecza Dolna",
    "lat": "49.878608",
    "lon": "19.533892"
  },
  {
    "numerStacji": "78279",
    "bilkomNumerStacji": "5101652",
    "name": "Klecza Górna",
    "lat": "49.865277",
    "lon": "19.56806"
  },
  {
    "numerStacji": "61135",
    "bilkomNumerStacji": "5101654",
    "name": "Karłowice",
    "lat": "50.879718",
    "lon": "17.699167"
  },
  {
    "numerStacji": "79681",
    "bilkomNumerStacji": "5101655",
    "name": "Kłaj",
    "lat": "50.00194",
    "lon": "20.300555"
  },
  {
    "numerStacji": "25296",
    "bilkomNumerStacji": "5101657",
    "name": "Kleszczele",
    "lat": "52.561115",
    "lon": "23.329165"
  },
  {
    "numerStacji": "38950",
    "bilkomNumerStacji": "5101661",
    "name": "Kołbiel",
    "lat": "52.040558",
    "lon": "21.433052"
  },
  {
    "numerStacji": "57471",
    "bilkomNumerStacji": "5101662",
    "name": "Kłodzko Zagórze",
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
    "numerStacji": "50179",
    "bilkomNumerStacji": "5101664",
    "name": "Klementowice",
    "lat": "51.363059",
    "lon": "22.109446"
  },
  {
    "numerStacji": "178473",
    "bilkomNumerStacji": "5101666",
    "name": "Kłokowa",
    "lat": "49.953335",
    "lon": "20.957226"
  },
  {
    "numerStacji": "178639",
    "bilkomNumerStacji": "5101668",
    "name": "Kolumna",
    "lat": "51.614721",
    "lon": "19.195278"
  },
  {
    "numerStacji": "82131",
    "bilkomNumerStacji": "5101670",
    "name": "Kamionka Wielka",
    "lat": "49.578053",
    "lon": "20.78111"
  },
  {
    "numerStacji": "63420",
    "bilkomNumerStacji": "5101672",
    "name": "Kłomnice",
    "lat": "50.915837",
    "lon": "19.341667"
  },
  {
    "numerStacji": "80358",
    "bilkomNumerStacji": "5101673",
    "name": "Kraków Mydlniki-Wapiennik",
    "lat": "50.090834",
    "lon": "19.844721"
  },
  {
    "numerStacji": "79459",
    "bilkomNumerStacji": "5101674",
    "name": "Kamieńczyce",
    "lat": "50.327223",
    "lon": "20.005835"
  },
  {
    "numerStacji": "46201",
    "bilkomNumerStacji": "5101675",
    "name": "Koźmin Wielkopolski",
    "lat": "51.831946",
    "lon": "17.443891"
  },
  {
    "numerStacji": "47845",
    "bilkomNumerStacji": "5101677",
    "name": "Kamieńsk",
    "lat": "51.186385",
    "lon": "19.499446"
  },
  {
    "numerStacji": "46912",
    "bilkomNumerStacji": "5101678",
    "name": "Kamień Łowicki",
    "lat": "51.98861",
    "lon": "19.753058"
  },
  {
    "numerStacji": "60723",
    "bilkomNumerStacji": "5101681",
    "name": "Komprachcice",
    "lat": "50.63167",
    "lon": "17.821393"
  },
  {
    "numerStacji": "76174",
    "bilkomNumerStacji": "5101682",
    "name": "Krzemionki",
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
    "numerStacji": "82651",
    "bilkomNumerStacji": "5101688",
    "name": "Krzemienica",
    "lat": "50.081665",
    "lon": "22.186942"
  },
  {
    "numerStacji": "80333",
    "bilkomNumerStacji": "5101689",
    "name": "Kraków Mydlniki",
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
    "numerStacji": "50963",
    "bilkomNumerStacji": "5101691",
    "name": "Karolinówka",
    "lat": "51.189163",
    "lon": "23.550282"
  },
  {
    "numerStacji": "21055",
    "bilkomNumerStacji": "5101700",
    "name": "Konojady",
    "lat": "53.349999",
    "lon": "19.226947"
  },
  {
    "numerStacji": "63065",
    "bilkomNumerStacji": "5101703",
    "name": "Koniecpol Magdasz",
    "lat": "50.772504",
    "lon": "19.653332"
  },
  {
    "numerStacji": "24919",
    "bilkomNumerStacji": "5101704",
    "name": "Kamienna Nowa",
    "lat": "53.691113",
    "lon": "23.263058"
  },
  {
    "numerStacji": "36970",
    "bilkomNumerStacji": "5101706",
    "name": "Konopki",
    "lat": "52.99639",
    "lon": "20.459997"
  },
  {
    "numerStacji": "17756",
    "bilkomNumerStacji": "5101712",
    "name": "Krzeszna",
    "lat": "54.235553",
    "lon": "18.089164"
  },
  {
    "numerStacji": "24091",
    "bilkomNumerStacji": "5101713",
    "name": "Knyszyn",
    "lat": "53.284719",
    "lon": "22.895831"
  },
  {
    "numerStacji": "44131",
    "bilkomNumerStacji": "5101716",
    "name": "Kobylin",
    "lat": "51.720003",
    "lon": "17.223889"
  },
  {
    "numerStacji": "10751",
    "bilkomNumerStacji": "5101720",
    "name": "Kolonia",
    "lat": "53.567223",
    "lon": "21.271948"
  },
  {
    "numerStacji": "2329",
    "bilkomNumerStacji": "5101723",
    "name": "Kolin",
    "lat": "53.245275",
    "lon": "15.123892"
  },
  {
    "numerStacji": "78550",
    "bilkomNumerStacji": "5101724",
    "name": "Kojszówka",
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
    "numerStacji": "264895",
    "bilkomNumerStacji": "5101733",
    "name": "Kotuń",
    "lat": "52.174722",
    "lon": "22.060832"
  },
  {
    "numerStacji": "13128",
    "bilkomNumerStacji": "5101736",
    "name": "Kowalów",
    "lat": "52.397223",
    "lon": "14.76"
  },
  {
    "numerStacji": "76182",
    "bilkomNumerStacji": "5101737",
    "name": "Kozy",
    "lat": "49.849447",
    "lon": "19.141666"
  },
  {
    "numerStacji": "65557",
    "bilkomNumerStacji": "5101741",
    "name": "Komorów Podmurynia",
    "lat": "50.349445",
    "lon": "21.733058"
  },
  {
    "numerStacji": "4648",
    "bilkomNumerStacji": "5101745",
    "name": "Kepka",
    "lat": "54.215274",
    "lon": "16.897221"
  },
  {
    "numerStacji": "3483",
    "bilkomNumerStacji": "5101748",
    "name": "Klępnica",
    "lat": "53.716669",
    "lon": "15.653887"
  },
  {
    "numerStacji": "15057",
    "bilkomNumerStacji": "5101749",
    "name": "Krępa Krajeńska",
    "lat": "53.227782",
    "lon": "16.057782"
  },
  {
    "numerStacji": "83568",
    "bilkomNumerStacji": "5101750",
    "name": "Krosno Polanka",
    "lat": "49.701943",
    "lon": "21.722226"
  },
  {
    "numerStacji": "33159",
    "bilkomNumerStacji": "5101755",
    "name": "Kramsk",
    "lat": "52.245279",
    "lon": "18.476114"
  },
  {
    "numerStacji": "79236",
    "bilkomNumerStacji": "5101756",
    "name": "Kraków Batowice",
    "lat": "50.1075",
    "lon": "19.99556"
  },
  {
    "numerStacji": "79947",
    "bilkomNumerStacji": "5101757",
    "name": "Kraków Bieżanów",
    "lat": "50.021114",
    "lon": "20.029719"
  },
  {
    "numerStacji": "79954",
    "bilkomNumerStacji": "5101759",
    "name": "Kraków Bieżanów Drożdżownia",
    "lat": "50.010003",
    "lon": "20.035275"
  },
  {
    "numerStacji": "51219",
    "bilkomNumerStacji": "5101761",
    "name": "Krasnystaw Fabryczny",
    "lat": "51.024445",
    "lon": "23.182776"
  },
  {
    "numerStacji": "34629",
    "bilkomNumerStacji": "5101763",
    "name": "Kornelin",
    "lat": "52.183055",
    "lon": "20.206115"
  },
  {
    "numerStacji": "61580",
    "bilkomNumerStacji": "5101765",
    "name": "Krasiejów",
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
    "numerStacji": "83501",
    "bilkomNumerStacji": "5101770",
    "name": "Krosno",
    "lat": "49.693888",
    "lon": "21.748331"
  },
  {
    "numerStacji": "20263",
    "bilkomNumerStacji": "5101771",
    "name": "Kornatowo",
    "lat": "53.296945",
    "lon": "18.647781"
  },
  {
    "numerStacji": "80051",
    "bilkomNumerStacji": "5101773",
    "name": "Kraków Sidzina",
    "lat": "49.985552",
    "lon": "19.874718"
  },
  {
    "numerStacji": "83550",
    "bilkomNumerStacji": "5101774",
    "name": "Krosno Turaszówka",
    "lat": "49.70917",
    "lon": "21.698612"
  },
  {
    "numerStacji": "39925",
    "bilkomNumerStacji": "5101778",
    "name": "Krynka Łukowska",
    "lat": "52.006948",
    "lon": "22.375832"
  },
  {
    "numerStacji": "20933",
    "bilkomNumerStacji": "5101780",
    "name": "Książki",
    "lat": "53.329719",
    "lon": "19.067496"
  },
  {
    "numerStacji": "45278",
    "bilkomNumerStacji": "5101781",
    "name": "Kalisz Szczypiorno",
    "lat": "51.726385",
    "lon": "18.028055"
  },
  {
    "numerStacji": "60392",
    "bilkomNumerStacji": "5101784",
    "name": "Księginice",
    "lat": "51.242226",
    "lon": "16.764442"
  },
  {
    "numerStacji": "1198",
    "bilkomNumerStacji": "5101786",
    "name": "Kliniska",
    "lat": "53.460836",
    "lon": "14.783893"
  },
  {
    "numerStacji": "51177",
    "bilkomNumerStacji": "5101788",
    "name": "Krasnystaw Miasto",
    "lat": "50.985",
    "lon": "23.183054"
  },
  {
    "numerStacji": "39479",
    "bilkomNumerStacji": "5101793",
    "name": "Kosiorki",
    "lat": "52.107222",
    "lon": "22.33583"
  },
  {
    "numerStacji": "76711",
    "bilkomNumerStacji": "5101796",
    "name": "Kurów Suski",
    "lat": "49.707777",
    "lon": "19.43333"
  },
  {
    "numerStacji": "39834",
    "bilkomNumerStacji": "5101797",
    "name": "Koszewnica",
    "lat": "52.169167",
    "lon": "21.986941"
  },
  {
    "numerStacji": "47340",
    "bilkomNumerStacji": "5101799",
    "name": "Krosnowa",
    "lat": "51.863336",
    "lon": "19.923332"
  },
  {
    "numerStacji": "77347",
    "bilkomNumerStacji": "5101800",
    "name": "Mysłowice Kosztowy",
    "lat": "50.174443",
    "lon": "19.160274"
  },
  {
    "numerStacji": "36848",
    "bilkomNumerStacji": "5101803",
    "name": "Kątne",
    "lat": "52.60722",
    "lon": "20.762502"
  },
  {
    "numerStacji": "16691",
    "bilkomNumerStacji": "5101804",
    "name": "Kotomierz",
    "lat": "53.284998",
    "lon": "18.121669"
  },
  {
    "numerStacji": "20016",
    "bilkomNumerStacji": "5101805",
    "name": "Konotopie",
    "lat": "52.869723",
    "lon": "19.102779"
  },
  {
    "numerStacji": "44834",
    "bilkomNumerStacji": "5101806",
    "name": "Kotlin",
    "lat": "51.914718",
    "lon": "17.648612"
  },
  {
    "numerStacji": "72975",
    "bilkomNumerStacji": "5101808",
    "name": "Katowice Podlesie",
    "lat": "50.183054",
    "lon": "18.960282"
  },
  {
    "numerStacji": "63784",
    "bilkomNumerStacji": "5101809",
    "name": "Kostomłoty",
    "lat": "50.921114",
    "lon": "20.61667"
  },
  {
    "numerStacji": "73650",
    "bilkomNumerStacji": "5101812",
    "name": "Katowice Szopienice Południowe",
    "lat": "50.258887",
    "lon": "19.093052"
  },
  {
    "numerStacji": "61358",
    "bilkomNumerStacji": "5101815",
    "name": "Kostow",
    "lat": "51.164721",
    "lon": "18.147504"
  },
  {
    "numerStacji": "18002",
    "bilkomNumerStacji": "5101816",
    "name": "Kartuzy",
    "lat": "54.333886",
    "lon": "18.206114"
  },
  {
    "numerStacji": "58933",
    "bilkomNumerStacji": "5101817",
    "name": "Kąty Wrocławskie",
    "lat": "51.038333",
    "lon": "16.751111"
  },
  {
    "numerStacji": "14498",
    "bilkomNumerStacji": "5101818",
    "name": "Krostkowo",
    "lat": "53.107776",
    "lon": "17.208329"
  },
  {
    "numerStacji": "30064",
    "bilkomNumerStacji": "5101819",
    "name": "Kostrzyn Wielkopolski",
    "lat": "52.393331",
    "lon": "17.225004"
  },
  {
    "numerStacji": "56788",
    "bilkomNumerStacji": "5101821",
    "name": "Kubice",
    "lat": "50.475554",
    "lon": "17.442498"
  },
  {
    "numerStacji": "24836",
    "bilkomNumerStacji": "5101823",
    "name": "Kundzin",
    "lat": "53.439442",
    "lon": "23.590832"
  },
  {
    "numerStacji": "37622",
    "bilkomNumerStacji": "5101826",
    "name": "Krusze",
    "lat": "52.42722",
    "lon": "21.370281"
  },
  {
    "numerStacji": "6767",
    "bilkomNumerStacji": "5101827",
    "name": "Kuźnica Hel",
    "lat": "54.736109",
    "lon": "18.577503"
  },
  {
    "numerStacji": "44123",
    "bilkomNumerStacji": "5101830",
    "name": "Kuklinów",
    "lat": "51.719167",
    "lon": "17.319166"
  },
  {
    "numerStacji": "242218",
    "bilkomNumerStacji": "5101832",
    "name": "Kotowo",
    "lat": "52.228334",
    "lon": "16.483331"
  },
  {
    "numerStacji": "49254",
    "bilkomNumerStacji": "5101833",
    "name": "Kunów",
    "lat": "50.968891",
    "lon": "21.293612"
  },
  {
    "numerStacji": "28142",
    "bilkomNumerStacji": "5101835",
    "name": "Kupienino",
    "lat": "52.257225",
    "lon": "15.613337"
  },
  {
    "numerStacji": "62877",
    "bilkomNumerStacji": "5101837",
    "name": "Kusięta Nowe",
    "lat": "50.778059",
    "lon": "19.262778"
  },
  {
    "numerStacji": "8425",
    "bilkomNumerStacji": "5101838",
    "name": "Kulice Tczewskie",
    "lat": "53.879446",
    "lon": "18.69056"
  },
  {
    "numerStacji": "68882",
    "bilkomNumerStacji": "5101843",
    "name": "Kuźnia Raciborska",
    "lat": "50.200556",
    "lon": "18.298334"
  },
  {
    "numerStacji": "32227",
    "bilkomNumerStacji": "5101844",
    "name": "Krzewie",
    "lat": "52.235274",
    "lon": "19.165559"
  },
  {
    "numerStacji": "7898",
    "bilkomNumerStacji": "5101848",
    "name": "Królewo Malborskie",
    "lat": "54.037503",
    "lon": "19.118609"
  },
  {
    "numerStacji": "55855",
    "bilkomNumerStacji": "5101849",
    "name": "Kwieciszowice",
    "lat": "50.924997",
    "lon": "15.502779"
  },
  {
    "numerStacji": "23101",
    "bilkomNumerStacji": "5101850",
    "name": "Kwidzyn",
    "lat": "53.731393",
    "lon": "18.933611"
  },
  {
    "numerStacji": "33332",
    "bilkomNumerStacji": "5101851",
    "name": "Kawnice",
    "lat": "52.249719",
    "lon": "18.151109"
  },
  {
    "numerStacji": "42432",
    "bilkomNumerStacji": "5101854",
    "name": "Krzepow",
    "lat": "51.64444",
    "lon": "16.134163"
  },
  {
    "numerStacji": "17293",
    "bilkomNumerStacji": "5101855",
    "name": "Kwiatki",
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
    "numerStacji": "45294",
    "bilkomNumerStacji": "5101860",
    "name": "Kalisz Winiary",
    "lat": "51.733613",
    "lon": "18.143054"
  },
  {
    "numerStacji": "77701",
    "bilkomNumerStacji": "5101863",
    "name": "Krzeszowice",
    "lat": "50.130836",
    "lon": "19.632225"
  },
  {
    "numerStacji": "61531",
    "bilkomNumerStacji": "5101864",
    "name": "Kolonowskie",
    "lat": "50.651941",
    "lon": "18.388055"
  },
  {
    "numerStacji": "42960",
    "bilkomNumerStacji": "5101866",
    "name": "Krzycko Wielkie",
    "lat": "51.904165",
    "lon": "16.452777"
  },
  {
    "numerStacji": "62729",
    "bilkomNumerStacji": "5101868",
    "name": "Korwinów",
    "lat": "50.738893",
    "lon": "19.176391"
  },
  {
    "numerStacji": "5132",
    "bilkomNumerStacji": "5101875",
    "name": "Korzybie",
    "lat": "54.296114",
    "lon": "16.873885"
  },
  {
    "numerStacji": "75622",
    "bilkomNumerStacji": "5101876",
    "name": "Kończyce",
    "lat": "49.850552",
    "lon": "18.625281"
  },
  {
    "numerStacji": "40154",
    "bilkomNumerStacji": "5101877",
    "name": "Krzywda",
    "lat": "51.794721",
    "lon": "22.204722"
  },
  {
    "numerStacji": "39453",
    "bilkomNumerStacji": "5101880",
    "name": "Krzymosze",
    "lat": "52.178057",
    "lon": "22.43917"
  },
  {
    "numerStacji": "48587",
    "bilkomNumerStacji": "5101881",
    "name": "Kruszyna",
    "lat": "51.571942",
    "lon": "21.178613"
  },
  {
    "numerStacji": "48470",
    "bilkomNumerStacji": "5101883",
    "name": "Kończyce Radomskie",
    "lat": "51.349171",
    "lon": "21.043891"
  },
  {
    "numerStacji": "54981",
    "bilkomNumerStacji": "5101885",
    "name": "Krzyżowa",
    "lat": "50.793889",
    "lon": "16.530003"
  },
  {
    "numerStacji": "61325",
    "bilkomNumerStacji": "5101887",
    "name": "Krzywizna",
    "lat": "51.027222",
    "lon": "18.201943"
  },
  {
    "numerStacji": "78337",
    "bilkomNumerStacji": "5101889",
    "name": "Kalwaria Zebrzydowska",
    "lat": "49.873888",
    "lon": "19.673612"
  },
  {
    "numerStacji": "42820",
    "bilkomNumerStacji": "5101890",
    "name": "Karzec",
    "lat": "51.754719",
    "lon": "16.90417"
  },
  {
    "numerStacji": "22236",
    "bilkomNumerStacji": "5101893",
    "name": "Kozłowo",
    "lat": "53.310276",
    "lon": "20.312502"
  },
  {
    "numerStacji": "41640",
    "bilkomNumerStacji": "5101894",
    "name": "Konin Żagański",
    "lat": "51.545558",
    "lon": "15.191671"
  },
  {
    "numerStacji": "33357",
    "bilkomNumerStacji": "5101895",
    "name": "Konin Zachód",
    "lat": "52.236667",
    "lon": "18.222222"
  },
  {
    "numerStacji": "64535",
    "bilkomNumerStacji": "5101897",
    "name": "Krzcięcice",
    "lat": "50.587497",
    "lon": "20.140278"
  },
  {
    "numerStacji": "32722",
    "bilkomNumerStacji": "5101898",
    "name": "Koziołek",
    "lat": "52.865831",
    "lon": "19.498888"
  },
  {
    "numerStacji": "60871",
    "bilkomNumerStacji": "5101900",
    "name": "Kotórz Mały",
    "lat": "50.729167",
    "lon": "18.036388"
  },
  {
    "numerStacji": "84756",
    "bilkomNumerStacji": "5101901",
    "name": "Korzenica",
    "lat": "50.05583",
    "lon": "22.936948"
  },
  {
    "numerStacji": "11171",
    "bilkomNumerStacji": "5101902",
    "name": "Kozia Góra",
    "lat": "53.853332",
    "lon": "20.080553"
  },
  {
    "numerStacji": "36822",
    "bilkomNumerStacji": "5101905",
    "name": "Koziebrody",
    "lat": "52.802223",
    "lon": "19.972503"
  },
  {
    "numerStacji": "44453",
    "bilkomNumerStacji": "5101906",
    "name": "Korzeńsko",
    "lat": "51.543886",
    "lon": "16.87278"
  },
  {
    "numerStacji": "64337",
    "bilkomNumerStacji": "5101911",
    "name": "Kozłów",
    "lat": "50.47444",
    "lon": "20.012226"
  },
  {
    "numerStacji": "1628",
    "bilkomNumerStacji": "5101917",
    "name": "Ładzin",
    "lat": "53.910557",
    "lon": "14.562777"
  },
  {
    "numerStacji": "78931",
    "bilkomNumerStacji": "5101918",
    "name": "Lasek",
    "lat": "49.499443",
    "lon": "19.979443"
  },
  {
    "numerStacji": "8979",
    "bilkomNumerStacji": "5101919",
    "name": "Łąg",
    "lat": "53.831111",
    "lon": "18.062781"
  },
  {
    "numerStacji": "78436",
    "bilkomNumerStacji": "5101920",
    "name": "Lachowice",
    "lat": "49.723337",
    "lon": "19.503608"
  },
  {
    "numerStacji": "76851",
    "bilkomNumerStacji": "5101924",
    "name": "Laliki",
    "lat": "49.523057",
    "lon": "19.006109"
  },
  {
    "numerStacji": "56747",
    "bilkomNumerStacji": "5101925",
    "name": "Łambinowice",
    "lat": "50.537499",
    "lon": "17.565003"
  },
  {
    "numerStacji": "10025",
    "bilkomNumerStacji": "5101926",
    "name": "Łankiejmy",
    "lat": "54.142218",
    "lon": "21.069726"
  },
  {
    "numerStacji": "24646",
    "bilkomNumerStacji": "5101927",
    "name": "Łapy Osse",
    "lat": "52.97389",
    "lon": "22.839999"
  },
  {
    "numerStacji": "44073",
    "bilkomNumerStacji": "5101929",
    "name": "Łąkociny",
    "lat": "51.656944",
    "lon": "17.668891"
  },
  {
    "numerStacji": "46649",
    "bilkomNumerStacji": "5101931",
    "name": "Łask",
    "lat": "51.603889",
    "lon": "19.111948"
  },
  {
    "numerStacji": "83022",
    "bilkomNumerStacji": "5101932",
    "name": "Łańcut",
    "lat": "50.081665",
    "lon": "22.227501"
  },
  {
    "numerStacji": "51953",
    "bilkomNumerStacji": "5101933",
    "name": "Lasów",
    "lat": "51.22556",
    "lon": "15.035277"
  },
  {
    "numerStacji": "56531",
    "bilkomNumerStacji": "5101934",
    "name": "Ławica",
    "lat": "50.477226",
    "lon": "16.67028"
  },
  {
    "numerStacji": "47431",
    "bilkomNumerStacji": "5101935",
    "name": "Łaznów",
    "lat": "51.631387",
    "lon": "19.755"
  },
  {
    "numerStacji": "75200",
    "bilkomNumerStacji": "5101936",
    "name": "Łazy",
    "lat": "50.42917",
    "lon": "19.390829"
  },
  {
    "numerStacji": "17335",
    "bilkomNumerStacji": "5101937",
    "name": "Łazek",
    "lat": "53.640557",
    "lon": "18.215274"
  },
  {
    "numerStacji": "84780",
    "bilkomNumerStacji": "5101939",
    "name": "Lubaczów",
    "lat": "50.165552",
    "lon": "23.124445"
  },
  {
    "numerStacji": "16550",
    "bilkomNumerStacji": "5101943",
    "name": "Lubania-Lipiny",
    "lat": "53.388886",
    "lon": "18.09694"
  },
  {
    "numerStacji": "55509",
    "bilkomNumerStacji": "5101944",
    "name": "Lubawka",
    "lat": "50.706388",
    "lon": "16.003334"
  },
  {
    "numerStacji": "41582",
    "bilkomNumerStacji": "5101947",
    "name": "Lubanice",
    "lat": "51.692226",
    "lon": "15.120557"
  },
  {
    "numerStacji": "235669",
    "bilkomNumerStacji": "5101950",
    "name": "Lewin Brzeski Po",
    "lat": "50.757501",
    "lon": "17.616664"
  },
  {
    "numerStacji": "81026",
    "bilkomNumerStacji": "5101951",
    "name": "Lubaszowa",
    "lat": "49.864719",
    "lon": "21.035837"
  },
  {
    "numerStacji": "50609",
    "bilkomNumerStacji": "5101952",
    "name": "Lubartów",
    "lat": "51.445832",
    "lon": "22.608059"
  },
  {
    "numerStacji": "19935",
    "bilkomNumerStacji": "5101954",
    "name": "Lubicz",
    "lat": "53.028059",
    "lon": "18.745278"
  },
  {
    "numerStacji": "76729",
    "bilkomNumerStacji": "5101955",
    "name": "Lachowice Centrum",
    "lat": "49.711948",
    "lon": "19.472775"
  },
  {
    "numerStacji": "47803",
    "bilkomNumerStacji": "5101956",
    "name": "Luciążanka",
    "lat": "51.277221",
    "lon": "19.648055"
  },
  {
    "numerStacji": "3624",
    "bilkomNumerStacji": "5101958",
    "name": "Lesięcin",
    "lat": "53.585552",
    "lon": "15.57"
  },
  {
    "numerStacji": "32383",
    "bilkomNumerStacji": "5101959",
    "name": "Łąck",
    "lat": "52.486945",
    "lon": "19.595837"
  },
  {
    "numerStacji": "68122",
    "bilkomNumerStacji": "5101963",
    "name": "Czerwionka",
    "lat": "50.149165",
    "lon": "18.684726"
  },
  {
    "numerStacji": "32524",
    "bilkomNumerStacji": "5101964",
    "name": "Łęczyca",
    "lat": "52.04917",
    "lon": "19.193336"
  },
  {
    "numerStacji": "63735",
    "bilkomNumerStacji": "5101965",
    "name": "Łączna",
    "lat": "50.99167",
    "lon": "20.798612"
  },
  {
    "numerStacji": "178592",
    "bilkomNumerStacji": "5101966",
    "name": "Czerwionka Dębieńsko",
    "lat": "50.156941",
    "lon": "18.663611"
  },
  {
    "numerStacji": "64758",
    "bilkomNumerStacji": "5101967",
    "name": "Ludynia Dwór",
    "lat": "50.847501",
    "lon": "20.115836"
  },
  {
    "numerStacji": "178896",
    "bilkomNumerStacji": "5101970",
    "name": "Ludwikowice Kłodzkie",
    "lat": "50.619445",
    "lon": "16.481947"
  },
  {
    "numerStacji": "46409",
    "bilkomNumerStacji": "5101974",
    "name": "Łódź Widzew",
    "lat": "51.763052",
    "lon": "19.543331"
  },
  {
    "numerStacji": "5355",
    "bilkomNumerStacji": "5101977",
    "name": "Łeba",
    "lat": "54.756667",
    "lon": "17.552778"
  },
  {
    "numerStacji": "30957",
    "bilkomNumerStacji": "5101979",
    "name": "Lednogóra",
    "lat": "52.490837",
    "lon": "17.36306"
  },
  {
    "numerStacji": "36509",
    "bilkomNumerStacji": "5101981",
    "name": "Legionowo",
    "lat": "52.402221",
    "lon": "20.94083"
  },
  {
    "numerStacji": "53165",
    "bilkomNumerStacji": "5101982",
    "name": "Legnica Piekary",
    "lat": "51.20111",
    "lon": "16.19778"
  },
  {
    "numerStacji": "80176",
    "bilkomNumerStacji": "5101987",
    "name": "Leńcze",
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
    "numerStacji": "17384",
    "bilkomNumerStacji": "5101990",
    "name": "Leosia",
    "lat": "53.486392",
    "lon": "18.387498"
  },
  {
    "numerStacji": "68064",
    "bilkomNumerStacji": "5101991",
    "name": "Leszczyny",
    "lat": "50.141111",
    "lon": "18.618332"
  },
  {
    "numerStacji": "65151",
    "bilkomNumerStacji": "5101992",
    "name": "Łętownia",
    "lat": "50.363612",
    "lon": "22.255835"
  },
  {
    "numerStacji": "48371",
    "bilkomNumerStacji": "5101994",
    "name": "Lesiów",
    "lat": "51.477501",
    "lon": "21.194721"
  },
  {
    "numerStacji": "24455",
    "bilkomNumerStacji": "5101995",
    "name": "Lewki",
    "lat": "52.730274",
    "lon": "23.211388"
  },
  {
    "numerStacji": "9357",
    "bilkomNumerStacji": "5101996",
    "name": "Łęgajny",
    "lat": "53.821115",
    "lon": "20.617218"
  },
  {
    "numerStacji": "83220",
    "bilkomNumerStacji": "5101997",
    "name": "Leżajsk",
    "lat": "50.262222",
    "lon": "22.420832"
  },
  {
    "numerStacji": "41285",
    "bilkomNumerStacji": "5101998",
    "name": "Leszno Górne",
    "lat": "51.466948",
    "lon": "15.615836"
  },
  {
    "numerStacji": "69047",
    "bilkomNumerStacji": "5101999",
    "name": "Łaziska Górne Brada",
    "lat": "50.157498",
    "lon": "18.821947"
  },
  {
    "numerStacji": "31039",
    "bilkomNumerStacji": "5102001",
    "name": "Ligowiec",
    "lat": "52.435275",
    "lon": "17.038055"
  },
  {
    "numerStacji": "42754",
    "bilkomNumerStacji": "5102003",
    "name": "Leszno Grzybowo",
    "lat": "51.86028",
    "lon": "16.612497"
  },
  {
    "numerStacji": "27334",
    "bilkomNumerStacji": "5102006",
    "name": "Łęgowo Sulechowskie",
    "lat": "52.1325",
    "lon": "15.67556"
  },
  {
    "numerStacji": "77909",
    "bilkomNumerStacji": "5102009",
    "name": "Libiąż",
    "lat": "50.112777",
    "lon": "19.3275"
  },
  {
    "numerStacji": "81828",
    "bilkomNumerStacji": "5102010",
    "name": "Libusza",
    "lat": "49.711948",
    "lon": "21.241115"
  },
  {
    "numerStacji": "13359",
    "bilkomNumerStacji": "5102013",
    "name": "Lisie Pole Po",
    "lat": "53.022504",
    "lon": "14.450834"
  },
  {
    "numerStacji": "17616",
    "bilkomNumerStacji": "5102015",
    "name": "Lipuska Huta",
    "lat": "54.070278",
    "lon": "17.767224"
  },
  {
    "numerStacji": "20958",
    "bilkomNumerStacji": "5102021",
    "name": "Linowo",
    "lat": "53.411108",
    "lon": "19.033337"
  },
  {
    "numerStacji": "20024",
    "bilkomNumerStacji": "5102022",
    "name": "Lipno",
    "lat": "52.854163",
    "lon": "19.17889"
  },
  {
    "numerStacji": "58289",
    "bilkomNumerStacji": "5102023",
    "name": "Lipki",
    "lat": "50.898335",
    "lon": "17.372499"
  },
  {
    "numerStacji": "3525",
    "bilkomNumerStacji": "5102024",
    "name": "Lisowo",
    "lat": "53.431387",
    "lon": "15.297501"
  },
  {
    "numerStacji": "16667",
    "bilkomNumerStacji": "5102027",
    "name": "Lipowa Tucholska",
    "lat": "53.753336",
    "lon": "18.108886"
  },
  {
    "numerStacji": "17608",
    "bilkomNumerStacji": "5102028",
    "name": "Lipusz",
    "lat": "54.09694",
    "lon": "17.780277"
  },
  {
    "numerStacji": "7161",
    "bilkomNumerStacji": "5102030",
    "name": "Lisewo",
    "lat": "54.092778",
    "lon": "18.82556"
  },
  {
    "numerStacji": "58263",
    "bilkomNumerStacji": "5102033",
    "name": "Lizawice",
    "lat": "50.971948",
    "lon": "17.21472"
  },
  {
    "numerStacji": "39313",
    "bilkomNumerStacji": "5102038",
    "name": "Leokadia",
    "lat": "51.767502",
    "lon": "21.632496"
  },
  {
    "numerStacji": "57547",
    "bilkomNumerStacji": "5102041",
    "name": "Lewin Kłodzki",
    "lat": "50.405555",
    "lon": "16.27444"
  },
  {
    "numerStacji": "45732",
    "bilkomNumerStacji": "5102043",
    "name": "Łęka Opatowska",
    "lat": "51.21694",
    "lon": "18.091942"
  },
  {
    "numerStacji": "30403",
    "bilkomNumerStacji": "5102044",
    "name": "Luboń koło Poznania",
    "lat": "52.344169",
    "lon": "16.893059"
  },
  {
    "numerStacji": "68361",
    "bilkomNumerStacji": "5102047",
    "name": "Łuków Śląski",
    "lat": "50.100003",
    "lon": "18.409171"
  },
  {
    "numerStacji": "13094",
    "bilkomNumerStacji": "5102049",
    "name": "Laski Lubuskie",
    "lat": "52.459725",
    "lon": "14.713058"
  },
  {
    "numerStacji": "46573",
    "bilkomNumerStacji": "5102051",
    "name": "Lublinek",
    "lat": "51.720003",
    "lon": "19.358054"
  },
  {
    "numerStacji": "62885",
    "bilkomNumerStacji": "5102053",
    "name": "Lusławice",
    "lat": "50.760836",
    "lon": "19.387503"
  },
  {
    "numerStacji": "12245",
    "bilkomNumerStacji": "5102057",
    "name": "Lipińskie Małe",
    "lat": "53.73694",
    "lon": "22.397226"
  },
  {
    "numerStacji": "9340",
    "bilkomNumerStacji": "5102058",
    "name": "Lubomino",
    "lat": "54.065558",
    "lon": "20.233055"
  },
  {
    "numerStacji": "15677",
    "bilkomNumerStacji": "5102061",
    "name": "Lubnia",
    "lat": "53.935556",
    "lon": "17.742225"
  },
  {
    "numerStacji": "51334",
    "bilkomNumerStacji": "5102062",
    "name": "Leśniczówka",
    "lat": "51.049444",
    "lon": "22.356667"
  },
  {
    "numerStacji": "17426",
    "bilkomNumerStacji": "5102063",
    "name": "Lniano",
    "lat": "53.526664",
    "lon": "18.205556"
  },
  {
    "numerStacji": "10272",
    "bilkomNumerStacji": "5102064",
    "name": "Linkowo",
    "lat": "54.090836",
    "lon": "21.264999"
  },
  {
    "numerStacji": "42648",
    "bilkomNumerStacji": "5102069",
    "name": "Lipno Nowe",
    "lat": "51.919447",
    "lon": "16.570553"
  },
  {
    "numerStacji": "1438",
    "bilkomNumerStacji": "5102071",
    "name": "Loznica",
    "lat": "53.689719",
    "lon": "14.866109"
  },
  {
    "numerStacji": "37911",
    "bilkomNumerStacji": "5102073",
    "name": "Łochów",
    "lat": "52.533886",
    "lon": "21.68778"
  },
  {
    "numerStacji": "76422",
    "bilkomNumerStacji": "5102074",
    "name": "Łodygowice",
    "lat": "49.725279",
    "lon": "19.141109"
  },
  {
    "numerStacji": "60368",
    "bilkomNumerStacji": "5102075",
    "name": "Łososiowice",
    "lat": "51.298607",
    "lon": "16.673336"
  },
  {
    "numerStacji": "76380",
    "bilkomNumerStacji": "5102076",
    "name": "Łodygowice Górne",
    "lat": "49.735275",
    "lon": "19.124443"
  },
  {
    "numerStacji": "33050",
    "bilkomNumerStacji": "5102077",
    "name": "Łowicz Przedmieście",
    "lat": "52.093055",
    "lon": "19.946947"
  },
  {
    "numerStacji": "46433",
    "bilkomNumerStacji": "5102081",
    "name": "Łódź Niciarniana",
    "lat": "51.766666",
    "lon": "19.507779"
  },
  {
    "numerStacji": "29884",
    "bilkomNumerStacji": "5102083",
    "name": "Łopuchowo",
    "lat": "52.613333",
    "lon": "17.094723"
  },
  {
    "numerStacji": "62158",
    "bilkomNumerStacji": "5102085",
    "name": "Łosiów",
    "lat": "50.788334",
    "lon": "17.552499"
  },
  {
    "numerStacji": "3194",
    "bilkomNumerStacji": "5102086",
    "name": "Lotyń",
    "lat": "53.599998",
    "lon": "16.780002"
  },
  {
    "numerStacji": "80978",
    "bilkomNumerStacji": "5102088",
    "name": "Łowczów",
    "lat": "49.912497",
    "lon": "21.003889"
  },
  {
    "numerStacji": "65235",
    "bilkomNumerStacji": "5102090",
    "name": "Lipa",
    "lat": "50.690001",
    "lon": "22.068059"
  },
  {
    "numerStacji": "16576",
    "bilkomNumerStacji": "5102092",
    "name": "Lipienica",
    "lat": "53.446669",
    "lon": "18.1125"
  },
  {
    "numerStacji": "21097",
    "bilkomNumerStacji": "5102093",
    "name": "Lipinki",
    "lat": "53.464441",
    "lon": "19.31861"
  },
  {
    "numerStacji": "41608",
    "bilkomNumerStacji": "5102094",
    "name": "Lipinki Łużyckie",
    "lat": "51.648889",
    "lon": "15.00972"
  },
  {
    "numerStacji": "49882",
    "bilkomNumerStacji": "5102097",
    "name": "Leopoldów",
    "lat": "51.668054",
    "lon": "22.012497"
  },
  {
    "numerStacji": "48124",
    "bilkomNumerStacji": "5102098",
    "name": "Lipowe Pole",
    "lat": "51.155004",
    "lon": "20.901107"
  },
  {
    "numerStacji": "50195",
    "bilkomNumerStacji": "5102100",
    "name": "Łopatki",
    "lat": "51.32944",
    "lon": "22.152225"
  },
  {
    "numerStacji": "62174",
    "bilkomNumerStacji": "5102101",
    "name": "Lipowa Śląska",
    "lat": "50.736943",
    "lon": "17.426947"
  },
  {
    "numerStacji": "31351",
    "bilkomNumerStacji": "5102107",
    "name": "Laskownica",
    "lat": "52.915829",
    "lon": "17.25083"
  },
  {
    "numerStacji": "58347",
    "bilkomNumerStacji": "5102108",
    "name": "Jelcz-Laskowice",
    "lat": "51.037218",
    "lon": "17.345001"
  },
  {
    "numerStacji": "61432",
    "bilkomNumerStacji": "5102111",
    "name": "Laskowice Oleskie",
    "lat": "50.856391",
    "lon": "18.095277"
  },
  {
    "numerStacji": "17368",
    "bilkomNumerStacji": "5102113",
    "name": "Laski Tucholskie",
    "lat": "53.666392",
    "lon": "18.208055"
  },
  {
    "numerStacji": "23721",
    "bilkomNumerStacji": "5102115",
    "name": "Leszczydół",
    "lat": "52.646386",
    "lon": "21.469441"
  },
  {
    "numerStacji": "27862",
    "bilkomNumerStacji": "5102118",
    "name": "Letnica",
    "lat": "51.889998",
    "lon": "15.318886"
  },
  {
    "numerStacji": "50468",
    "bilkomNumerStacji": "5102121",
    "name": "Lublin Północny",
    "lat": "51.241948",
    "lon": "22.59889"
  },
  {
    "numerStacji": "17582",
    "bilkomNumerStacji": "5102122",
    "name": "Łubiana",
    "lat": "54.114999",
    "lon": "17.867499"
  },
  {
    "numerStacji": "79343",
    "bilkomNumerStacji": "5102124",
    "name": "Łuczyce",
    "lat": "50.162775",
    "lon": "20.074441"
  },
  {
    "numerStacji": "21659",
    "bilkomNumerStacji": "5102126",
    "name": "Lubanie",
    "lat": "52.741942",
    "lon": "18.924442"
  },
  {
    "numerStacji": "13078",
    "bilkomNumerStacji": "5102128",
    "name": "Ługi Górzyckie",
    "lat": "52.516115",
    "lon": "14.651114"
  },
  {
    "numerStacji": "1032",
    "bilkomNumerStacji": "5102130",
    "name": "Lubiewo",
    "lat": "53.915277",
    "lon": "14.418059"
  },
  {
    "numerStacji": "22087",
    "bilkomNumerStacji": "5102131",
    "name": "Lubajny",
    "lat": "53.700282",
    "lon": "20.025557"
  },
  {
    "numerStacji": "40113",
    "bilkomNumerStacji": "5102132",
    "name": "Łuków Łapiguz",
    "lat": "51.92333",
    "lon": "22.359445"
  },
  {
    "numerStacji": "3020",
    "bilkomNumerStacji": "5102136",
    "name": "Łubowo",
    "lat": "53.583889",
    "lon": "16.389726"
  },
  {
    "numerStacji": "26252",
    "bilkomNumerStacji": "5102140",
    "name": "Lutol Suchy",
    "lat": "52.343612",
    "lon": "15.754719"
  },
  {
    "numerStacji": "64725",
    "bilkomNumerStacji": "5102145",
    "name": "Ludynia",
    "lat": "50.851942",
    "lon": "20.162778"
  },
  {
    "numerStacji": "5447",
    "bilkomNumerStacji": "5102146",
    "name": "Luzino",
    "lat": "54.567219",
    "lon": "18.10361"
  },
  {
    "numerStacji": "24364",
    "bilkomNumerStacji": "5102150",
    "name": "Lewickie",
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
    "numerStacji": "66233",
    "bilkomNumerStacji": "5102158",
    "name": "Lubycza Królewska",
    "lat": "50.339718",
    "lon": "23.530281"
  },
  {
    "numerStacji": "37820",
    "bilkomNumerStacji": "5102161",
    "name": "Lucynów",
    "lat": "52.553609",
    "lon": "21.459445"
  },
  {
    "numerStacji": "20396",
    "bilkomNumerStacji": "5102162",
    "name": "Łysomice",
    "lat": "53.085833",
    "lon": "18.620274"
  },
  {
    "numerStacji": "39297",
    "bilkomNumerStacji": "5102163",
    "name": "Łaskarzew Przystanek",
    "lat": "51.798056",
    "lon": "21.608612"
  },
  {
    "numerStacji": "82586",
    "bilkomNumerStacji": "5102166",
    "name": "Łomnica-Zdrój",
    "lat": "49.419996",
    "lon": "20.72472"
  },
  {
    "numerStacji": "69054",
    "bilkomNumerStacji": "5102167",
    "name": "Łaziska Górne",
    "lat": "50.159718",
    "lon": "18.846667"
  },
  {
    "numerStacji": "81240",
    "bilkomNumerStacji": "5102168",
    "name": "Lubzina",
    "lat": "50.072226",
    "lon": "21.529165"
  },
  {
    "numerStacji": "51375",
    "bilkomNumerStacji": "5102169",
    "name": "Lublin Zemborzyce",
    "lat": "51.171113",
    "lon": "22.50222"
  },
  {
    "numerStacji": "51391",
    "bilkomNumerStacji": "5102174",
    "name": "Majdan",
    "lat": "51.148334",
    "lon": "22.426387"
  },
  {
    "numerStacji": "83048",
    "bilkomNumerStacji": "5102175",
    "name": "Kosina",
    "lat": "50.083607",
    "lon": "22.322499"
  },
  {
    "numerStacji": "16634",
    "bilkomNumerStacji": "5102178",
    "name": "Małe Gacno",
    "lat": "53.610003",
    "lon": "18.109444"
  },
  {
    "numerStacji": "78535",
    "bilkomNumerStacji": "5102179",
    "name": "Maków Podhalański",
    "lat": "49.726663",
    "lon": "19.67861"
  },
  {
    "numerStacji": "8482",
    "bilkomNumerStacji": "5102181",
    "name": "Majewo",
    "lat": "53.802219",
    "lon": "18.679441"
  },
  {
    "numerStacji": "16501",
    "bilkomNumerStacji": "5102182",
    "name": "Maksymilianowo",
    "lat": "53.21472",
    "lon": "18.029718"
  },
  {
    "numerStacji": "41277",
    "bilkomNumerStacji": "5102184",
    "name": "Małomice",
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
    "numerStacji": "62745",
    "bilkomNumerStacji": "5102188",
    "name": "Masłońskie Natalin",
    "lat": "50.650556",
    "lon": "19.254166"
  },
  {
    "numerStacji": "39958",
    "bilkomNumerStacji": "5102189",
    "name": "Matysy",
    "lat": "51.939996",
    "lon": "22.493887"
  },
  {
    "numerStacji": "66266",
    "bilkomNumerStacji": "5102192",
    "name": "Maziły",
    "lat": "50.404998",
    "lon": "23.314441"
  },
  {
    "numerStacji": "73676",
    "bilkomNumerStacji": "5102194",
    "name": "Mysłowice Brzezinka",
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
    "numerStacji": "54973",
    "bilkomNumerStacji": "5102197",
    "name": "Mościsko Dzierżoniowskie",
    "lat": "50.771947",
    "lon": "16.580558"
  },
  {
    "numerStacji": "9381",
    "bilkomNumerStacji": "5102201",
    "name": "Marcinkowo",
    "lat": "53.695553",
    "lon": "20.67083"
  },
  {
    "numerStacji": "36574",
    "bilkomNumerStacji": "5102203",
    "name": "Michałów-Reginów",
    "lat": "52.422222",
    "lon": "20.962224"
  },
  {
    "numerStacji": "34330",
    "bilkomNumerStacji": "5102205",
    "name": "Międzyborów",
    "lat": "52.063607",
    "lon": "20.482776"
  },
  {
    "numerStacji": "36467",
    "bilkomNumerStacji": "5102206",
    "name": "Modlin",
    "lat": "52.443608",
    "lon": "20.704171"
  },
  {
    "numerStacji": "2279",
    "bilkomNumerStacji": "5102208",
    "name": "Miedwiecko",
    "lat": "53.364723",
    "lon": "14.92417"
  },
  {
    "numerStacji": "39693",
    "bilkomNumerStacji": "5102209",
    "name": "Mordy",
    "lat": "52.195829",
    "lon": "22.496944"
  },
  {
    "numerStacji": "20578",
    "bilkomNumerStacji": "5102211",
    "name": "Melno",
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
    "numerStacji": "15644",
    "bilkomNumerStacji": "5102218",
    "name": "Męcikał",
    "lat": "53.832225",
    "lon": "17.671112"
  },
  {
    "numerStacji": "13417",
    "bilkomNumerStacji": "5102220",
    "name": "Mieszkowice",
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
    "numerStacji": "19471",
    "bilkomNumerStacji": "5102228",
    "name": "Męcka Wola",
    "lat": "51.608887",
    "lon": "18.845004"
  },
  {
    "numerStacji": "26708",
    "bilkomNumerStacji": "5102229",
    "name": "Międzyrzecz",
    "lat": "52.44528",
    "lon": "15.592779"
  },
  {
    "numerStacji": "11163",
    "bilkomNumerStacji": "5102231",
    "name": "Morąg Kolonia",
    "lat": "53.909164",
    "lon": "19.946947"
  },
  {
    "numerStacji": "28993",
    "bilkomNumerStacji": "5102234",
    "name": "Miały",
    "lat": "52.809442",
    "lon": "16.175837"
  },
  {
    "numerStacji": "48637",
    "bilkomNumerStacji": "5102236",
    "name": "Michalczew",
    "lat": "51.843892",
    "lon": "21.12083"
  },
  {
    "numerStacji": "4556",
    "bilkomNumerStacji": "5102239",
    "name": "Miastko",
    "lat": "53.996944",
    "lon": "16.966393"
  },
  {
    "numerStacji": "38844",
    "bilkomNumerStacji": "5102241",
    "name": "Michalin",
    "lat": "52.14806",
    "lon": "21.224718"
  },
  {
    "numerStacji": "39073",
    "bilkomNumerStacji": "5102242",
    "name": "Mienia",
    "lat": "52.149445",
    "lon": "21.687222"
  },
  {
    "numerStacji": "47738",
    "bilkomNumerStacji": "5102243",
    "name": "Milejów",
    "lat": "51.355832",
    "lon": "19.675832"
  },
  {
    "numerStacji": "69062",
    "bilkomNumerStacji": "5102244",
    "name": "Mikołów",
    "lat": "50.17278",
    "lon": "18.899164"
  },
  {
    "numerStacji": "16196",
    "bilkomNumerStacji": "5102245",
    "name": "Milcz",
    "lat": "53.042226",
    "lon": "16.856671"
  },
  {
    "numerStacji": "50682",
    "bilkomNumerStacji": "5102247",
    "name": "Minkowice",
    "lat": "51.217497",
    "lon": "22.763609"
  },
  {
    "numerStacji": "40832",
    "bilkomNumerStacji": "5102249",
    "name": "Międzyrzec Podlaski",
    "lat": "51.976115",
    "lon": "22.78556"
  },
  {
    "numerStacji": "40873",
    "bilkomNumerStacji": "5102252",
    "name": "Misie",
    "lat": "51.95917",
    "lon": "22.688333"
  },
  {
    "numerStacji": "82537",
    "bilkomNumerStacji": "5102256",
    "name": "Milik",
    "lat": "49.346671",
    "lon": "20.851387"
  },
  {
    "numerStacji": "69070",
    "bilkomNumerStacji": "5102259",
    "name": "Mikołów Jamna",
    "lat": "50.193608",
    "lon": "18.921664"
  },
  {
    "numerStacji": "65540",
    "bilkomNumerStacji": "5102260",
    "name": "Majdan Królewski",
    "lat": "50.378893",
    "lon": "21.725274"
  },
  {
    "numerStacji": "39347",
    "bilkomNumerStacji": "5102262",
    "name": "Mika",
    "lat": "51.673052",
    "lon": "21.748052"
  },
  {
    "numerStacji": "52902",
    "bilkomNumerStacji": "5102263",
    "name": "Miłkowice",
    "lat": "51.256115",
    "lon": "16.053611"
  },
  {
    "numerStacji": "65078",
    "bilkomNumerStacji": "5102264",
    "name": "Moskale",
    "lat": "50.524168",
    "lon": "22.109724"
  },
  {
    "numerStacji": "59022",
    "bilkomNumerStacji": "5102265",
    "name": "Miękinia",
    "lat": "51.188057",
    "lon": "16.74"
  },
  {
    "numerStacji": "14472",
    "bilkomNumerStacji": "5102266",
    "name": "Miasteczko Krajeńskie",
    "lat": "53.0927794",
    "lon": "16.9482605"
  },
  {
    "numerStacji": "47373",
    "bilkomNumerStacji": "5102269",
    "name": "Maków",
    "lat": "51.942225",
    "lon": "20.045558"
  },
  {
    "numerStacji": "61150",
    "bilkomNumerStacji": "5102271",
    "name": "Mąkoszyce",
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
    "numerStacji": "7096",
    "bilkomNumerStacji": "5102277",
    "name": "Miłobądz",
    "lat": "54.147225",
    "lon": "18.74028"
  },
  {
    "numerStacji": "53405",
    "bilkomNumerStacji": "5102278",
    "name": "Malczyce",
    "lat": "51.215834",
    "lon": "16.488059"
  },
  {
    "numerStacji": "8078",
    "bilkomNumerStacji": "5102279",
    "name": "Mleczewo",
    "lat": "53.919726",
    "lon": "19.122222"
  },
  {
    "numerStacji": "64709",
    "bilkomNumerStacji": "5102280",
    "name": "Małogoszcz",
    "lat": "50.850279",
    "lon": "20.273336"
  },
  {
    "numerStacji": "23044",
    "bilkomNumerStacji": "5102283",
    "name": "Mikołajki Pomorskie",
    "lat": "53.849718",
    "lon": "19.158053"
  },
  {
    "numerStacji": "52373",
    "bilkomNumerStacji": "5102284",
    "name": "Młyńsko",
    "lat": "50.989171",
    "lon": "15.45056"
  },
  {
    "numerStacji": "50146",
    "bilkomNumerStacji": "5102285",
    "name": "Miłocin Lubelski",
    "lat": "51.268052",
    "lon": "22.313609"
  },
  {
    "numerStacji": "82081",
    "bilkomNumerStacji": "5102287",
    "name": "Młodów",
    "lat": "49.46861",
    "lon": "20.696108"
  },
  {
    "numerStacji": "4457",
    "bilkomNumerStacji": "5102288",
    "name": "Miłogoszcz",
    "lat": "54.205278",
    "lon": "15.908893"
  },
  {
    "numerStacji": "37218",
    "bilkomNumerStacji": "5102292",
    "name": "Mława Miasto",
    "lat": "53.105555",
    "lon": "20.365556"
  },
  {
    "numerStacji": "39008",
    "bilkomNumerStacji": "5102293",
    "name": "Mińsk Mazowiecki",
    "lat": "52.175837",
    "lon": "21.551665"
  },
  {
    "numerStacji": "24240",
    "bilkomNumerStacji": "5102295",
    "name": "Machnacz",
    "lat": "53.332497",
    "lon": "23.319169"
  },
  {
    "numerStacji": "34140",
    "bilkomNumerStacji": "5102298",
    "name": "Milanówek",
    "lat": "52.125003",
    "lon": "20.668331"
  },
  {
    "numerStacji": "56770",
    "bilkomNumerStacji": "5102300",
    "name": "Mańkowice",
    "lat": "50.489164",
    "lon": "17.477781"
  },
  {
    "numerStacji": "58362",
    "bilkomNumerStacji": "5102301",
    "name": "Minkowice Oławskie",
    "lat": "51.011941",
    "lon": "17.456386"
  },
  {
    "numerStacji": "75432",
    "bilkomNumerStacji": "5102302",
    "name": "Myszków Nowa Wieś",
    "lat": "50.594724",
    "lon": "19.291669"
  },
  {
    "numerStacji": "33035",
    "bilkomNumerStacji": "5102303",
    "name": "Mokra",
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
    "numerStacji": "24133",
    "bilkomNumerStacji": "5102308",
    "name": "Mońki",
    "lat": "53.402496",
    "lon": "22.796671"
  },
  {
    "numerStacji": "28985",
    "bilkomNumerStacji": "5102310",
    "name": "Mokrz",
    "lat": "52.741115",
    "lon": "16.278332"
  },
  {
    "numerStacji": "54239",
    "bilkomNumerStacji": "5102311",
    "name": "Modla",
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
    "numerStacji": "21881",
    "bilkomNumerStacji": "5102313",
    "name": "Montowo",
    "lat": "53.416115",
    "lon": "19.779999"
  },
  {
    "numerStacji": "28167",
    "bilkomNumerStacji": "5102317",
    "name": "Mostki",
    "lat": "52.269442",
    "lon": "15.394171"
  },
  {
    "numerStacji": "50153",
    "bilkomNumerStacji": "5102318",
    "name": "Motycz",
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
    "numerStacji": "6890",
    "bilkomNumerStacji": "5102324",
    "name": "Mrzezino",
    "lat": "54.652779",
    "lon": "18.412776"
  },
  {
    "numerStacji": "75457",
    "bilkomNumerStacji": "5102325",
    "name": "Myszków Mrzygłód",
    "lat": "50.543054",
    "lon": "19.377498"
  },
  {
    "numerStacji": "10413",
    "bilkomNumerStacji": "5102332",
    "name": "Martiany",
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
    "numerStacji": "4416",
    "bilkomNumerStacji": "5102340",
    "name": "Mścice",
    "lat": "54.214168",
    "lon": "16.073612"
  },
  {
    "numerStacji": "75424",
    "bilkomNumerStacji": "5102341",
    "name": "Myszków",
    "lat": "50.574445",
    "lon": "19.328336"
  },
  {
    "numerStacji": "30452",
    "bilkomNumerStacji": "5102343",
    "name": "Mosina",
    "lat": "52.241108",
    "lon": "16.852221"
  },
  {
    "numerStacji": "64550",
    "bilkomNumerStacji": "5102344",
    "name": "Miąsowa",
    "lat": "50.719441",
    "lon": "20.364999"
  },
  {
    "numerStacji": "81737",
    "bilkomNumerStacji": "5102349",
    "name": "Mszalnica",
    "lat": "49.593056",
    "lon": "20.830002"
  },
  {
    "numerStacji": "1883",
    "bilkomNumerStacji": "5102350",
    "name": "Mosty",
    "lat": "53.574163",
    "lon": "14.94"
  },
  {
    "numerStacji": "58941",
    "bilkomNumerStacji": "5102353",
    "name": "Mietków",
    "lat": "50.984721",
    "lon": "16.654719"
  },
  {
    "numerStacji": "37796",
    "bilkomNumerStacji": "5102354",
    "name": "Mostówka",
    "lat": "52.519998",
    "lon": "21.442779"
  },
  {
    "numerStacji": "50161",
    "bilkomNumerStacji": "5102355",
    "name": "Motycz Leśny",
    "lat": "51.243889",
    "lon": "22.359166"
  },
  {
    "numerStacji": "84707",
    "bilkomNumerStacji": "5102356",
    "name": "Munina",
    "lat": "49.989723",
    "lon": "22.719166"
  },
  {
    "numerStacji": "29876",
    "bilkomNumerStacji": "5102357",
    "name": "Murowana Goślina",
    "lat": "52.575003",
    "lon": "17.015834"
  },
  {
    "numerStacji": "82446",
    "bilkomNumerStacji": "5102362",
    "name": "Muszyna Zdrój",
    "lat": "49.357782",
    "lon": "20.896387"
  },
  {
    "numerStacji": "76778",
    "bilkomNumerStacji": "5102364",
    "name": "Milówka",
    "lat": "49.555832",
    "lon": "19.093888"
  },
  {
    "numerStacji": "60566",
    "bilkomNumerStacji": "5102366",
    "name": "Małowice Wołowskie",
    "lat": "51.404446",
    "lon": "16.471663"
  },
  {
    "numerStacji": "33068",
    "bilkomNumerStacji": "5102367",
    "name": "Mysłaków",
    "lat": "52.091941",
    "lon": "20.013889"
  },
  {
    "numerStacji": "39719",
    "bilkomNumerStacji": "5102374",
    "name": "Mordy Miasto",
    "lat": "52.203056",
    "lon": "22.520558"
  },
  {
    "numerStacji": "56820",
    "bilkomNumerStacji": "5102375",
    "name": "Myśliczyn",
    "lat": "50.525552",
    "lon": "17.328335"
  },
  {
    "numerStacji": "75440",
    "bilkomNumerStacji": "5102379",
    "name": "Myszków Światowit",
    "lat": "50.565554",
    "lon": "19.359726"
  },
  {
    "numerStacji": "47787",
    "bilkomNumerStacji": "5102383",
    "name": "Moszczenica",
    "lat": "51.502779",
    "lon": "19.700004"
  },
  {
    "numerStacji": "8433",
    "bilkomNumerStacji": "5102384",
    "name": "Morzeszczyn",
    "lat": "53.837223",
    "lon": "18.686668"
  },
  {
    "numerStacji": "44735",
    "bilkomNumerStacji": "5102385",
    "name": "Mieszków",
    "lat": "52.023614",
    "lon": "17.440278"
  },
  {
    "numerStacji": "15883",
    "bilkomNumerStacji": "5102388",
    "name": "Moszczenica Pomorska",
    "lat": "53.641942",
    "lon": "17.488055"
  },
  {
    "numerStacji": "2360",
    "bilkomNumerStacji": "5102390",
    "name": "Morzyca",
    "lat": "53.218613",
    "lon": "15.155552"
  },
  {
    "numerStacji": "21352",
    "bilkomNumerStacji": "5102394",
    "name": "Najmowo",
    "lat": "53.307219",
    "lon": "19.321109"
  },
  {
    "numerStacji": "13052",
    "bilkomNumerStacji": "5102396",
    "name": "Namyślin",
    "lat": "52.678334",
    "lon": "14.570274"
  },
  {
    "numerStacji": "9613",
    "bilkomNumerStacji": "5102400",
    "name": "Naterki",
    "lat": "53.746109",
    "lon": "20.376667"
  },
  {
    "numerStacji": "22434",
    "bilkomNumerStacji": "5102403",
    "name": "Narzym",
    "lat": "53.189443",
    "lon": "20.254719"
  },
  {
    "numerStacji": "65532",
    "bilkomNumerStacji": "5102407",
    "name": "Nowa Dęba",
    "lat": "50.41556",
    "lon": "21.739719"
  },
  {
    "numerStacji": "36459",
    "bilkomNumerStacji": "5102409",
    "name": "Nowy Dwór Mazowiecki",
    "lat": "52.425279",
    "lon": "20.724999"
  },
  {
    "numerStacji": "30049",
    "bilkomNumerStacji": "5102411",
    "name": "Nekla",
    "lat": "52.354444",
    "lon": "17.399997"
  },
  {
    "numerStacji": "27946",
    "bilkomNumerStacji": "5102412",
    "name": "Niedoradz",
    "lat": "51.865556",
    "lon": "15.664441"
  },
  {
    "numerStacji": "68783",
    "bilkomNumerStacji": "5102415",
    "name": "Nędza",
    "lat": "50.156671",
    "lon": "18.291664"
  },
  {
    "numerStacji": "79368",
    "bilkomNumerStacji": "5102416",
    "name": "Niedźwiedź",
    "lat": "50.205833",
    "lon": "20.081668"
  },
  {
    "numerStacji": "21535",
    "bilkomNumerStacji": "5102417",
    "name": "Nieszawa Waganiec",
    "lat": "52.803059",
    "lon": "18.870003"
  },
  {
    "numerStacji": "45526",
    "bilkomNumerStacji": "5102418",
    "name": "Niedźwiedź Wielkopolski",
    "lat": "51.485834",
    "lon": "17.883886"
  },
  {
    "numerStacji": "32482",
    "bilkomNumerStacji": "5102420",
    "name": "Niedźwiada Łowicka",
    "lat": "52.140276",
    "lon": "19.884723"
  },
  {
    "numerStacji": "39743",
    "bilkomNumerStacji": "5102423",
    "name": "Niemojki",
    "lat": "52.25861",
    "lon": "22.700558"
  },
  {
    "numerStacji": "24596",
    "bilkomNumerStacji": "5102428",
    "name": "Niewodnica",
    "lat": "53.082777",
    "lon": "23.045834"
  },
  {
    "numerStacji": "68833",
    "bilkomNumerStacji": "5102429",
    "name": "Nędza Wieś",
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
    "numerStacji": "51300",
    "bilkomNumerStacji": "5102433",
    "name": "Niedrzwica",
    "lat": "51.114445",
    "lon": "22.376947"
  },
  {
    "numerStacji": "20560",
    "bilkomNumerStacji": "5102435",
    "name": "Nicwałd",
    "lat": "53.459721",
    "lon": "18.880278"
  },
  {
    "numerStacji": "65128",
    "bilkomNumerStacji": "5102440",
    "name": "Nisko Podwolina",
    "lat": "50.495277",
    "lon": "22.173611"
  },
  {
    "numerStacji": "65086",
    "bilkomNumerStacji": "5102445",
    "name": "Nisko Osiedle",
    "lat": "50.520833",
    "lon": "22.122777"
  },
  {
    "numerStacji": "36624",
    "bilkomNumerStacji": "5102446",
    "name": "Nieporęt",
    "lat": "52.430834",
    "lon": "21.031666"
  },
  {
    "numerStacji": "65094",
    "bilkomNumerStacji": "5102447",
    "name": "Nisko",
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
    "numerStacji": "84335",
    "bilkomNumerStacji": "5102451",
    "name": "Niziny",
    "lat": "49.878608",
    "lon": "22.861942"
  },
  {
    "numerStacji": "71043",
    "bilkomNumerStacji": "5102453",
    "name": "Nakło Śląskie",
    "lat": "50.429718",
    "lon": "18.903335"
  },
  {
    "numerStacji": "51326",
    "bilkomNumerStacji": "5102454",
    "name": "Niedrzwica Kościelna",
    "lat": "51.081391",
    "lon": "22.362222"
  },
  {
    "numerStacji": "56655",
    "bilkomNumerStacji": "5102456",
    "name": "Nowy Las",
    "lat": "50.362218",
    "lon": "17.413607"
  },
  {
    "numerStacji": "5272",
    "bilkomNumerStacji": "5102457",
    "name": "Nowa Wieś Lęborska",
    "lat": "54.558329",
    "lon": "17.721667"
  },
  {
    "numerStacji": "10280",
    "bilkomNumerStacji": "5102458",
    "name": "Nowy Młyn",
    "lat": "54.066385",
    "lon": "21.32778"
  },
  {
    "numerStacji": "27896",
    "bilkomNumerStacji": "5102459",
    "name": "Nowogród Bobrzański",
    "lat": "51.811945",
    "lon": "15.244168"
  },
  {
    "numerStacji": "29215",
    "bilkomNumerStacji": "5102461",
    "name": "Nowe Drezdenko",
    "lat": "52.853893",
    "lon": "15.833609"
  },
  {
    "numerStacji": "84764",
    "bilkomNumerStacji": "5102462",
    "name": "Nowa Grobla",
    "lat": "50.088614",
    "lon": "22.993337"
  },
  {
    "numerStacji": "33910",
    "bilkomNumerStacji": "5102463",
    "name": "Nowa Iwiczna",
    "lat": "52.089163",
    "lon": "20.996114"
  },
  {
    "numerStacji": "3921",
    "bilkomNumerStacji": "5102469",
    "name": "Nosówko",
    "lat": "54.093335",
    "lon": "16.053053"
  },
  {
    "numerStacji": "32235",
    "bilkomNumerStacji": "5102470",
    "name": "Nowe Kutnowskie",
    "lat": "52.237782",
    "lon": "19.226389"
  },
  {
    "numerStacji": "3996",
    "bilkomNumerStacji": "5102472",
    "name": "Nielep",
    "lat": "53.829726",
    "lon": "15.870833"
  },
  {
    "numerStacji": "65110",
    "bilkomNumerStacji": "5102475",
    "name": "Nisko Racławice",
    "lat": "50.503888",
    "lon": "22.158886"
  },
  {
    "numerStacji": "57950",
    "bilkomNumerStacji": "5102476",
    "name": "Nowa Ruda Przedmieście",
    "lat": "50.588333",
    "lon": "16.515279"
  },
  {
    "numerStacji": "82057",
    "bilkomNumerStacji": "5102477",
    "name": "Nowy Sącz Biegonice",
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
    "numerStacji": "82149",
    "bilkomNumerStacji": "5102480",
    "name": "Nowy Sącz Jamnica",
    "lat": "49.586665",
    "lon": "20.744164"
  },
  {
    "numerStacji": "83253",
    "bilkomNumerStacji": "5102481",
    "name": "Nowa Sarzyna Kolonia",
    "lat": "50.331107",
    "lon": "22.33583"
  },
  {
    "numerStacji": "45203",
    "bilkomNumerStacji": "5102482",
    "name": "Nowe Skalmierzyce",
    "lat": "51.708892",
    "lon": "17.998337"
  },
  {
    "numerStacji": "83246",
    "bilkomNumerStacji": "5102484",
    "name": "Nowa Sarzyna",
    "lat": "50.321111",
    "lon": "22.347219"
  },
  {
    "numerStacji": "56622",
    "bilkomNumerStacji": "5102486",
    "name": "Nowy Świętów",
    "lat": "50.377779",
    "lon": "17.369164"
  },
  {
    "numerStacji": "27532",
    "bilkomNumerStacji": "5102487",
    "name": "Nietkowice",
    "lat": "52.057224",
    "lon": "15.352218"
  },
  {
    "numerStacji": "25353",
    "bilkomNumerStacji": "5102490",
    "name": "Nurzec",
    "lat": "52.460004",
    "lon": "23.08278"
  },
  {
    "numerStacji": "43273",
    "bilkomNumerStacji": "5102491",
    "name": "Nowy Widzim",
    "lat": "52.081387",
    "lon": "16.141948"
  },
  {
    "numerStacji": "10926",
    "bilkomNumerStacji": "5102493",
    "name": "Nowa Wieś Cierpkie",
    "lat": "54.024163",
    "lon": "19.656388"
  },
  {
    "numerStacji": "27912",
    "bilkomNumerStacji": "5102494",
    "name": "Nowogród Osiedle",
    "lat": "51.795279",
    "lon": "15.22583"
  },
  {
    "numerStacji": "12286",
    "bilkomNumerStacji": "5102495",
    "name": "Nowa Wieś Ełcka",
    "lat": "53.770281",
    "lon": "22.320557"
  },
  {
    "numerStacji": "19059",
    "bilkomNumerStacji": "5102497",
    "name": "Nowa Wieś Wielka",
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
    "numerStacji": "20446",
    "bilkomNumerStacji": "5102504",
    "name": "Nawra",
    "lat": "53.203331",
    "lon": "18.484447"
  },
  {
    "numerStacji": "25346",
    "bilkomNumerStacji": "5102512",
    "name": "Nowy Nurzec",
    "lat": "52.472778",
    "lon": "23.17722"
  },
  {
    "numerStacji": "43281",
    "bilkomNumerStacji": "5102513",
    "name": "Nowy Solec",
    "lat": "52.030832",
    "lon": "16.194723"
  },
  {
    "numerStacji": "26211",
    "bilkomNumerStacji": "5102514",
    "name": "Nowy Tomyśl",
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
    "numerStacji": "242927",
    "bilkomNumerStacji": "5102516",
    "name": "Pierwoszów Miłocin",
    "lat": "51.255279",
    "lon": "17.098885"
  },
  {
    "numerStacji": "19968",
    "bilkomNumerStacji": "5102522",
    "name": "Obrowo",
    "lat": "52.968335",
    "lon": "18.882777"
  },
  {
    "numerStacji": "43430",
    "bilkomNumerStacji": "5102523",
    "name": "Oborzyska Stare",
    "lat": "52.11222",
    "lon": "16.704726"
  },
  {
    "numerStacji": "46227",
    "bilkomNumerStacji": "5102524",
    "name": "Obra Stara",
    "lat": "51.888335",
    "lon": "17.449447"
  },
  {
    "numerStacji": "45229",
    "bilkomNumerStacji": "5102527",
    "name": "Ociąż",
    "lat": "51.701944",
    "lon": "17.933336"
  },
  {
    "numerStacji": "16170",
    "bilkomNumerStacji": "5102529",
    "name": "Ostrówki koło Chodzieży",
    "lat": "52.933052",
    "lon": "16.92694"
  },
  {
    "numerStacji": "46052",
    "bilkomNumerStacji": "5102538",
    "name": "Odolanów",
    "lat": "51.574719",
    "lon": "17.667777"
  },
  {
    "numerStacji": "2451",
    "bilkomNumerStacji": "5102540",
    "name": "Ognica",
    "lat": "53.31611",
    "lon": "15.454165"
  },
  {
    "numerStacji": "40956",
    "bilkomNumerStacji": "5102541",
    "name": "Ogrodniki",
    "lat": "52.000835",
    "lon": "23.239722"
  },
  {
    "numerStacji": "19984",
    "bilkomNumerStacji": "5102544",
    "name": "Ograszka",
    "lat": "52.905833",
    "lon": "19.02611"
  },
  {
    "numerStacji": "62034",
    "bilkomNumerStacji": "5102545",
    "name": "Opole Grotowice",
    "lat": "50.609718",
    "lon": "17.976107"
  },
  {
    "numerStacji": "78568",
    "bilkomNumerStacji": "5102548",
    "name": "Osielec",
    "lat": "49.674723",
    "lon": "19.756663"
  },
  {
    "numerStacji": "21063",
    "bilkomNumerStacji": "5102549",
    "name": "Ostrowite koło Jabłonowa",
    "lat": "53.433886",
    "lon": "19.268612"
  },
  {
    "numerStacji": "54031",
    "bilkomNumerStacji": "5102554",
    "name": "Okmiany",
    "lat": "51.27083",
    "lon": "15.778891"
  },
  {
    "numerStacji": "3236",
    "bilkomNumerStacji": "5102556",
    "name": "Okonek",
    "lat": "53.520003",
    "lon": "16.830557"
  },
  {
    "numerStacji": "52043",
    "bilkomNumerStacji": "5102557",
    "name": "Okrąglica",
    "lat": "51.43722",
    "lon": "15.181666"
  },
  {
    "numerStacji": "40162",
    "bilkomNumerStacji": "5102559",
    "name": "Okrzeja",
    "lat": "51.732219",
    "lon": "22.136944"
  },
  {
    "numerStacji": "58271",
    "bilkomNumerStacji": "5102560",
    "name": "Oława",
    "lat": "50.930831",
    "lon": "17.296945"
  },
  {
    "numerStacji": "52589",
    "bilkomNumerStacji": "5102567",
    "name": "Olszyna Lubanska",
    "lat": "51.069723",
    "lon": "15.380004"
  },
  {
    "numerStacji": "62166",
    "bilkomNumerStacji": "5102569",
    "name": "Olszanka",
    "lat": "50.795274",
    "lon": "17.477781"
  },
  {
    "numerStacji": "74294",
    "bilkomNumerStacji": "5102573",
    "name": "Olkusz",
    "lat": "50.27389",
    "lon": "19.573885"
  },
  {
    "numerStacji": "84772",
    "bilkomNumerStacji": "5102574",
    "name": "Oleszyce",
    "lat": "50.157219",
    "lon": "23.036665"
  },
  {
    "numerStacji": "34348",
    "bilkomNumerStacji": "5102577",
    "name": "Ożarów Mazowiecki",
    "lat": "52.207218",
    "lon": "20.795834"
  },
  {
    "numerStacji": "18598",
    "bilkomNumerStacji": "5102578",
    "name": "Ostromecko",
    "lat": "53.144164",
    "lon": "18.214725"
  },
  {
    "numerStacji": "24158",
    "bilkomNumerStacji": "5102584",
    "name": "Osowiec",
    "lat": "53.471947",
    "lon": "22.658336"
  },
  {
    "numerStacji": "32276",
    "bilkomNumerStacji": "5102585",
    "name": "Ostrowy",
    "lat": "52.299448",
    "lon": "19.191385"
  },
  {
    "numerStacji": "68502",
    "bilkomNumerStacji": "5102586",
    "name": "Olza",
    "lat": "49.959996",
    "lon": "18.338057"
  },
  {
    "numerStacji": "61002",
    "bilkomNumerStacji": "5102587",
    "name": "Opole Wschodnie",
    "lat": "50.674719",
    "lon": "17.933615"
  },
  {
    "numerStacji": "62000",
    "bilkomNumerStacji": "5102588",
    "name": "Opole Groszowice",
    "lat": "50.636111",
    "lon": "17.955836"
  },
  {
    "numerStacji": "60863",
    "bilkomNumerStacji": "5102589",
    "name": "Opole Gosławice",
    "lat": "50.674998",
    "lon": "17.988889"
  },
  {
    "numerStacji": "27201",
    "bilkomNumerStacji": "5102591",
    "name": "Opalenica",
    "lat": "52.310001",
    "lon": "16.402779"
  },
  {
    "numerStacji": "49700",
    "bilkomNumerStacji": "5102592",
    "name": "Opoczno",
    "lat": "51.372777",
    "lon": "20.271385"
  },
  {
    "numerStacji": "60889",
    "bilkomNumerStacji": "5102593",
    "name": "Osowiec Przystanek",
    "lat": "50.751667",
    "lon": "18.043337"
  },
  {
    "numerStacji": "45310",
    "bilkomNumerStacji": "5102595",
    "name": "Opatówek",
    "lat": "51.74333",
    "lon": "18.22722"
  },
  {
    "numerStacji": "60665",
    "bilkomNumerStacji": "5102597",
    "name": "Opole Zachodnie",
    "lat": "50.660831",
    "lon": "17.898053"
  },
  {
    "numerStacji": "69005",
    "bilkomNumerStacji": "5102600",
    "name": "Orzesze",
    "lat": "50.154442",
    "lon": "18.777504"
  },
  {
    "numerStacji": "68148",
    "bilkomNumerStacji": "5102601",
    "name": "Orzesze Jaśkowice",
    "lat": "50.144724",
    "lon": "18.740837"
  },
  {
    "numerStacji": "25437",
    "bilkomNumerStacji": "5102602",
    "name": "Orzeszkowo",
    "lat": "52.681669",
    "lon": "23.533607"
  },
  {
    "numerStacji": "11346",
    "bilkomNumerStacji": "5102605",
    "name": "Orneta",
    "lat": "54.115556",
    "lon": "20.150274"
  },
  {
    "numerStacji": "60574",
    "bilkomNumerStacji": "5102608",
    "name": "Orzeszków",
    "lat": "51.394171",
    "lon": "16.506946"
  },
  {
    "numerStacji": "17319",
    "bilkomNumerStacji": "5102611",
    "name": "Osie",
    "lat": "53.593607",
    "lon": "18.347775"
  },
  {
    "numerStacji": "24927",
    "bilkomNumerStacji": "5102613",
    "name": "Ostrowie Biebrzańskie",
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
    "numerStacji": "1875",
    "bilkomNumerStacji": "5102622",
    "name": "Osina",
    "lat": "53.608888",
    "lon": "15.012498"
  },
  {
    "numerStacji": "58792",
    "bilkomNumerStacji": "5102623",
    "name": "Osola",
    "lat": "51.337503",
    "lon": "16.86611"
  },
  {
    "numerStacji": "23309",
    "bilkomNumerStacji": "5102624",
    "name": "Ostrołęka",
    "lat": "53.056115",
    "lon": "21.617223"
  },
  {
    "numerStacji": "20370",
    "bilkomNumerStacji": "5102626",
    "name": "Ostaszewo Toruńskie",
    "lat": "53.105555",
    "lon": "18.627222"
  },
  {
    "numerStacji": "19778",
    "bilkomNumerStacji": "5102632",
    "name": "Otłoczyn",
    "lat": "52.912782",
    "lon": "18.692781"
  },
  {
    "numerStacji": "30080",
    "bilkomNumerStacji": "5102634",
    "name": "Otoczna",
    "lat": "52.325552",
    "lon": "17.689441"
  },
  {
    "numerStacji": "27250",
    "bilkomNumerStacji": "5102636",
    "name": "Otusz",
    "lat": "52.346668",
    "lon": "16.594168"
  },
  {
    "numerStacji": "38885",
    "bilkomNumerStacji": "5102637",
    "name": "Otwock",
    "lat": "52.108607",
    "lon": "21.264442"
  },
  {
    "numerStacji": "36327",
    "bilkomNumerStacji": "5102639",
    "name": "Kobyłka Ossów",
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
    "numerStacji": "38133",
    "bilkomNumerStacji": "5102642",
    "name": "Ostrówek Węgrowski",
    "lat": "52.560005",
    "lon": "21.751666"
  },
  {
    "numerStacji": "29850",
    "bilkomNumerStacji": "5102643",
    "name": "Owińska",
    "lat": "52.511386",
    "lon": "16.9875"
  },
  {
    "numerStacji": "45963",
    "bilkomNumerStacji": "5102645",
    "name": "Ostrów Wielkopolski Gorzyce",
    "lat": "51.647775",
    "lon": "17.729721"
  },
  {
    "numerStacji": "29645",
    "bilkomNumerStacji": "5102646",
    "name": "Oborniki Wielkopolskie Miasto",
    "lat": "52.645829",
    "lon": "16.820274"
  },
  {
    "numerStacji": "49205",
    "bilkomNumerStacji": "5102647",
    "name": "Ostrowiec Świętokrzyski",
    "lat": "50.933887",
    "lon": "21.376942"
  },
  {
    "numerStacji": "10736",
    "bilkomNumerStacji": "5102649",
    "name": "Olszyny",
    "lat": "53.553614",
    "lon": "21.110834"
  },
  {
    "numerStacji": "9233",
    "bilkomNumerStacji": "5102650",
    "name": "Olsztyn Zachodni",
    "lat": "53.778056",
    "lon": "20.466946"
  },
  {
    "numerStacji": "61572",
    "bilkomNumerStacji": "5102652",
    "name": "Ozimek",
    "lat": "50.67",
    "lon": "18.208334"
  },
  {
    "numerStacji": "32540",
    "bilkomNumerStacji": "5102654",
    "name": "Ozorków",
    "lat": "51.972501",
    "lon": "19.265834"
  },
  {
    "numerStacji": "9456",
    "bilkomNumerStacji": "5102656",
    "name": "Olsztynek",
    "lat": "53.585004",
    "lon": "20.295279"
  },
  {
    "numerStacji": "70243",
    "bilkomNumerStacji": "5102658",
    "name": "Paczyna",
    "lat": "50.413052",
    "lon": "18.570554"
  },
  {
    "numerStacji": "28498",
    "bilkomNumerStacji": "5102660",
    "name": "Paczkowo",
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
    "numerStacji": "23671",
    "bilkomNumerStacji": "5102666",
    "name": "Pasieki",
    "lat": "52.853893",
    "lon": "21.560555"
  },
  {
    "numerStacji": "28944",
    "bilkomNumerStacji": "5102670",
    "name": "Pamiątkowo",
    "lat": "52.55333",
    "lon": "16.685831"
  },
  {
    "numerStacji": "46094",
    "bilkomNumerStacji": "5102674",
    "name": "Pawłów Wielkopolski",
    "lat": "51.421948",
    "lon": "17.654724"
  },
  {
    "numerStacji": "39750",
    "bilkomNumerStacji": "5102676",
    "name": "Patków",
    "lat": "52.271114",
    "lon": "22.746107"
  },
  {
    "numerStacji": "45690",
    "bilkomNumerStacji": "5102677",
    "name": "Pątnów Wieluński",
    "lat": "51.159166",
    "lon": "18.633614"
  },
  {
    "numerStacji": "42770",
    "bilkomNumerStacji": "5102679",
    "name": "Pawłowice",
    "lat": "51.819999",
    "lon": "16.758886"
  },
  {
    "numerStacji": "17079",
    "bilkomNumerStacji": "5102680",
    "name": "Parlin",
    "lat": "53.371115",
    "lon": "18.270557"
  },
  {
    "numerStacji": "23689",
    "bilkomNumerStacji": "5102684",
    "name": "Prabuty Góry",
    "lat": "52.806385",
    "lon": "21.569724"
  },
  {
    "numerStacji": "30981",
    "bilkomNumerStacji": "5102685",
    "name": "Pobiedziska Letnisko",
    "lat": "52.474171",
    "lon": "17.239998"
  },
  {
    "numerStacji": "75762",
    "bilkomNumerStacji": "5102689",
    "name": "Pierściec",
    "lat": "49.830282",
    "lon": "18.813335"
  },
  {
    "numerStacji": "40030",
    "bilkomNumerStacji": "5102690",
    "name": "Parczew",
    "lat": "51.626111",
    "lon": "22.871668"
  },
  {
    "numerStacji": "33902",
    "bilkomNumerStacji": "5102694",
    "name": "Piaseczno",
    "lat": "52.066942",
    "lon": "21.016942"
  },
  {
    "numerStacji": "62141",
    "bilkomNumerStacji": "5102696",
    "name": "Przecza",
    "lat": "50.733059",
    "lon": "17.667498"
  },
  {
    "numerStacji": "3954",
    "bilkomNumerStacji": "5102699",
    "name": "Podborsko",
    "lat": "53.934163",
    "lon": "16.138891"
  },
  {
    "numerStacji": "29165",
    "bilkomNumerStacji": "5102700",
    "name": "Podlesiec",
    "lat": "52.936945",
    "lon": "15.876388"
  },
  {
    "numerStacji": "24166",
    "bilkomNumerStacji": "5102702",
    "name": "Podlasek",
    "lat": "53.557218",
    "lon": "22.535004"
  },
  {
    "numerStacji": "63040",
    "bilkomNumerStacji": "5102704",
    "name": "Podlesie",
    "lat": "50.764998",
    "lon": "19.60444"
  },
  {
    "numerStacji": "59030",
    "bilkomNumerStacji": "5102707",
    "name": "Przedmoście Święte",
    "lat": "51.190556",
    "lon": "16.666109"
  },
  {
    "numerStacji": "49064",
    "bilkomNumerStacji": "5102710",
    "name": "Podbor",
    "lat": "51.36056",
    "lon": "20.876108"
  },
  {
    "numerStacji": "30031",
    "bilkomNumerStacji": "5102712",
    "name": "Podstolice",
    "lat": "52.34194",
    "lon": "17.479722"
  },
  {
    "numerStacji": "178077",
    "bilkomNumerStacji": "5102714",
    "name": "Podolany",
    "lat": "49.898887",
    "lon": "19.754721"
  },
  {
    "numerStacji": "79525",
    "bilkomNumerStacji": "5102715",
    "name": "Podłęże",
    "lat": "50.018893",
    "lon": "20.165834"
  },
  {
    "numerStacji": "30932",
    "bilkomNumerStacji": "5102717",
    "name": "Pierzyska",
    "lat": "52.505552",
    "lon": "17.481385"
  },
  {
    "numerStacji": "28951",
    "bilkomNumerStacji": "5102718",
    "name": "Pęckowo",
    "lat": "52.663888",
    "lon": "16.489722"
  },
  {
    "numerStacji": "40972",
    "bilkomNumerStacji": "5102720",
    "name": "Perkowice",
    "lat": "51.996664",
    "lon": "23.279724"
  },
  {
    "numerStacji": "58776",
    "bilkomNumerStacji": "5102721",
    "name": "Pęgów",
    "lat": "51.244447",
    "lon": "16.929448"
  },
  {
    "numerStacji": "83279",
    "bilkomNumerStacji": "5102722",
    "name": "Pełkinie",
    "lat": "50.047776",
    "lon": "22.611664"
  },
  {
    "numerStacji": "17863",
    "bilkomNumerStacji": "5102723",
    "name": "Pępowo Kartuskie",
    "lat": "54.36694",
    "lon": "18.401665"
  },
  {
    "numerStacji": "8409",
    "bilkomNumerStacji": "5102724",
    "name": "Pelplin",
    "lat": "53.926666",
    "lon": "18.706669"
  },
  {
    "numerStacji": "76646",
    "bilkomNumerStacji": "5102725",
    "name": "Pewel Mała",
    "lat": "49.667496",
    "lon": "19.278329"
  },
  {
    "numerStacji": "44164",
    "bilkomNumerStacji": "5102728",
    "name": "Pępowo",
    "lat": "51.736948",
    "lon": "17.112774"
  },
  {
    "numerStacji": "43323",
    "bilkomNumerStacji": "5102729",
    "name": "Perkowo",
    "lat": "52.003613",
    "lon": "16.26972"
  },
  {
    "numerStacji": "8664",
    "bilkomNumerStacji": "5102730",
    "name": "Piesienice",
    "lat": "53.964996",
    "lon": "18.396388"
  },
  {
    "numerStacji": "76679",
    "bilkomNumerStacji": "5102732",
    "name": "Pewel Wielka",
    "lat": "49.669447",
    "lon": "19.380276"
  },
  {
    "numerStacji": "2485",
    "bilkomNumerStacji": "5102735",
    "name": "Pęzino",
    "lat": "53.335553",
    "lon": "15.196112"
  },
  {
    "numerStacji": "29892",
    "bilkomNumerStacji": "5102737",
    "name": "Poznań Garbary",
    "lat": "52.41611",
    "lon": "16.938329"
  },
  {
    "numerStacji": "28720",
    "bilkomNumerStacji": "5102738",
    "name": "Poznań Górczyn",
    "lat": "52.380279",
    "lon": "16.879998"
  },
  {
    "numerStacji": "75630",
    "bilkomNumerStacji": "5102740",
    "name": "Pogwizdów",
    "lat": "49.80611",
    "lon": "18.597774"
  },
  {
    "numerStacji": "12294",
    "bilkomNumerStacji": "5102741",
    "name": "Pogorzel Wielka",
    "lat": "53.707221",
    "lon": "22.149996"
  },
  {
    "numerStacji": "5363",
    "bilkomNumerStacji": "5102742",
    "name": "Pogorzelice",
    "lat": "54.50389",
    "lon": "17.641115"
  },
  {
    "numerStacji": "54999",
    "bilkomNumerStacji": "5102743",
    "name": "Piława Górna",
    "lat": "50.678054",
    "lon": "16.773053"
  },
  {
    "numerStacji": "38927",
    "bilkomNumerStacji": "5102746",
    "name": "Pogorzel Warszawska",
    "lat": "52.097226",
    "lon": "21.335277"
  },
  {
    "numerStacji": "51557",
    "bilkomNumerStacji": "5102748",
    "name": "Polichna Kraśnicka",
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
    "numerStacji": "75986",
    "bilkomNumerStacji": "5102752",
    "name": "Piasek",
    "lat": "50.012502",
    "lon": "18.940002"
  },
  {
    "numerStacji": "56135",
    "bilkomNumerStacji": "5102755",
    "name": "Piechowice Dolne",
    "lat": "50.850836",
    "lon": "15.615836"
  },
  {
    "numerStacji": "51946",
    "bilkomNumerStacji": "5102756",
    "name": "Pieńsk",
    "lat": "51.245274",
    "lon": "15.046945"
  },
  {
    "numerStacji": "56143",
    "bilkomNumerStacji": "5102759",
    "name": "Piechowice",
    "lat": "50.851663",
    "lon": "15.591664"
  },
  {
    "numerStacji": "65276",
    "bilkomNumerStacji": "5102761",
    "name": "Pilchów",
    "lat": "50.617224",
    "lon": "22.026943"
  },
  {
    "numerStacji": "21832",
    "bilkomNumerStacji": "5102762",
    "name": "Pikus",
    "lat": "53.656387",
    "lon": "19.738055"
  },
  {
    "numerStacji": "8672",
    "bilkomNumerStacji": "5102765",
    "name": "Pinczyn",
    "lat": "53.96194",
    "lon": "18.347496"
  },
  {
    "numerStacji": "48702",
    "bilkomNumerStacji": "5102766",
    "name": "Pionki",
    "lat": "51.479721",
    "lon": "21.46278"
  },
  {
    "numerStacji": "19190",
    "bilkomNumerStacji": "5102768",
    "name": "Piotrków Kujawski",
    "lat": "52.537779",
    "lon": "18.519442"
  },
  {
    "numerStacji": "34124",
    "bilkomNumerStacji": "5102772",
    "name": "Piastów",
    "lat": "52.182498",
    "lon": "20.842218"
  },
  {
    "numerStacji": "82115",
    "bilkomNumerStacji": "5102773",
    "name": "Piwniczna",
    "lat": "49.431664",
    "lon": "20.716109"
  },
  {
    "numerStacji": "48736",
    "bilkomNumerStacji": "5102775",
    "name": "Pionki Zachodnie",
    "lat": "51.471946",
    "lon": "21.441385"
  },
  {
    "numerStacji": "14456",
    "bilkomNumerStacji": "5102779",
    "name": "Piła Kalina",
    "lat": "53.101663",
    "lon": "16.788056"
  },
  {
    "numerStacji": "56838",
    "bilkomNumerStacji": "5102783",
    "name": "Pakosławice",
    "lat": "50.544996",
    "lon": "17.353334"
  },
  {
    "numerStacji": "65250",
    "bilkomNumerStacji": "5102789",
    "name": "Potok Kraśnicki",
    "lat": "50.795552",
    "lon": "22.163615"
  },
  {
    "numerStacji": "280410",
    "bilkomNumerStacji": "5102790",
    "name": "Piekoszów",
    "lat": "50.870558",
    "lon": "20.448329"
  },
  {
    "numerStacji": "29637",
    "bilkomNumerStacji": "5102791",
    "name": "Parkowo",
    "lat": "52.708052",
    "lon": "16.915002"
  },
  {
    "numerStacji": "32607",
    "bilkomNumerStacji": "5102795",
    "name": "Płock",
    "lat": "52.552782",
    "lon": "19.712778"
  },
  {
    "numerStacji": "28753",
    "bilkomNumerStacji": "5102796",
    "name": "Palędzie",
    "lat": "52.374445",
    "lon": "16.746113"
  },
  {
    "numerStacji": "34355",
    "bilkomNumerStacji": "5102800",
    "name": "Płochocin",
    "lat": "52.200007",
    "lon": "20.699963"
  },
  {
    "numerStacji": "27573",
    "bilkomNumerStacji": "5102801",
    "name": "Pliszka",
    "lat": "52.204441",
    "lon": "15.016948"
  },
  {
    "numerStacji": "36764",
    "bilkomNumerStacji": "5102803",
    "name": "Płońsk",
    "lat": "52.616111",
    "lon": "20.365835"
  },
  {
    "numerStacji": "81083",
    "bilkomNumerStacji": "5102808",
    "name": "Pławna",
    "lat": "49.75444",
    "lon": "20.950556"
  },
  {
    "numerStacji": "32417",
    "bilkomNumerStacji": "5102809",
    "name": "Płock Radziwie",
    "lat": "52.524448",
    "lon": "19.672218"
  },
  {
    "numerStacji": "12922",
    "bilkomNumerStacji": "5102810",
    "name": "Płociczno koło Suwałk",
    "lat": "54.038887",
    "lon": "22.948607"
  },
  {
    "numerStacji": "32623",
    "bilkomNumerStacji": "5102811",
    "name": "Płock Trzepowo",
    "lat": "52.590276",
    "lon": "19.733057"
  },
  {
    "numerStacji": "242953",
    "bilkomNumerStacji": "5102813",
    "name": "Zagrody Kościół",
    "lat": "51.078614",
    "lon": "23.19056"
  },
  {
    "numerStacji": "47365",
    "bilkomNumerStacji": "5102816",
    "name": "Płyćwia",
    "lat": "51.916669",
    "lon": "20.001943"
  },
  {
    "numerStacji": "30999",
    "bilkomNumerStacji": "5102823",
    "name": "Promno",
    "lat": "52.471663",
    "lon": "17.215835"
  },
  {
    "numerStacji": "84434",
    "bilkomNumerStacji": "5102825",
    "name": "Przemyśl Zasanie",
    "lat": "49.793615",
    "lon": "22.773614"
  },
  {
    "numerStacji": "26245",
    "bilkomNumerStacji": "5102826",
    "name": "Porażyn",
    "lat": "52.302225",
    "lon": "16.290557"
  },
  {
    "numerStacji": "28464",
    "bilkomNumerStacji": "5102827",
    "name": "Poznań Antoninek",
    "lat": "52.409718",
    "lon": "17.028059"
  },
  {
    "numerStacji": "28555",
    "bilkomNumerStacji": "5102828",
    "name": "Poznań Dębina",
    "lat": "52.373887",
    "lon": "16.909725"
  },
  {
    "numerStacji": "30585",
    "bilkomNumerStacji": "5102830",
    "name": "Poznań Dębiec",
    "lat": "52.369168",
    "lon": "16.901392"
  },
  {
    "numerStacji": "30650",
    "bilkomNumerStacji": "5102835",
    "name": "Poznań Wola",
    "lat": "52.433612",
    "lon": "16.850558"
  },
  {
    "numerStacji": "29835",
    "bilkomNumerStacji": "5102838",
    "name": "Poznań Karolin",
    "lat": "52.438888",
    "lon": "16.981666"
  },
  {
    "numerStacji": "26260",
    "bilkomNumerStacji": "5102840",
    "name": "Panowice",
    "lat": "52.360835",
    "lon": "15.73444"
  },
  {
    "numerStacji": "28563",
    "bilkomNumerStacji": "5102841",
    "name": "Poznań Krzesiny",
    "lat": "52.340555",
    "lon": "16.977504"
  },
  {
    "numerStacji": "11312",
    "bilkomNumerStacji": "5102842",
    "name": "Pieniężno",
    "lat": "54.24056",
    "lon": "20.124996"
  },
  {
    "numerStacji": "30965",
    "bilkomNumerStacji": "5102845",
    "name": "Pobiedziska",
    "lat": "52.479169",
    "lon": "17.277222"
  },
  {
    "numerStacji": "24521",
    "bilkomNumerStacji": "5102847",
    "name": "Podbiele",
    "lat": "52.692222",
    "lon": "23.210274"
  },
  {
    "numerStacji": "28738",
    "bilkomNumerStacji": "5102853",
    "name": "Poznań Junikowo",
    "lat": "52.37778",
    "lon": "16.825559"
  },
  {
    "numerStacji": "67454",
    "bilkomNumerStacji": "5102854",
    "name": "Pokrzywnica",
    "lat": "50.343889",
    "lon": "18.08111"
  },
  {
    "numerStacji": "42788",
    "bilkomNumerStacji": "5102857",
    "name": "Poniec",
    "lat": "51.761668",
    "lon": "16.808057"
  },
  {
    "numerStacji": "264927",
    "bilkomNumerStacji": "5102860",
    "name": "Poraj",
    "lat": "50.67694",
    "lon": "19.219441"
  },
  {
    "numerStacji": "64519",
    "bilkomNumerStacji": "5102862",
    "name": "Potok",
    "lat": "50.617503",
    "lon": "20.196946"
  },
  {
    "numerStacji": "25262",
    "bilkomNumerStacji": "5102863",
    "name": "Policzna",
    "lat": "52.589718",
    "lon": "23.423893"
  },
  {
    "numerStacji": "15610",
    "bilkomNumerStacji": "5102865",
    "name": "Powałki",
    "lat": "53.743052",
    "lon": "17.599719"
  },
  {
    "numerStacji": "29801",
    "bilkomNumerStacji": "5102867",
    "name": "Poznań Wschód",
    "lat": "52.418887",
    "lon": "16.974169"
  },
  {
    "numerStacji": "61127",
    "bilkomNumerStacji": "5102871",
    "name": "Popielów",
    "lat": "50.829442",
    "lon": "17.762775"
  },
  {
    "numerStacji": "15560",
    "bilkomNumerStacji": "5102872",
    "name": "Piła Podlasie",
    "lat": "53.163329",
    "lon": "16.777503"
  },
  {
    "numerStacji": "26567",
    "bilkomNumerStacji": "5102873",
    "name": "Popowo Skwierzyńskie",
    "lat": "52.536107",
    "lon": "15.522222"
  },
  {
    "numerStacji": "20065",
    "bilkomNumerStacji": "5102874",
    "name": "Papowo Toruńskie",
    "lat": "53.067225",
    "lon": "18.692223"
  },
  {
    "numerStacji": "47332",
    "bilkomNumerStacji": "5102878",
    "name": "Przyłęk Duży",
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
    "numerStacji": "12229",
    "bilkomNumerStacji": "5102889",
    "name": "Prostki",
    "lat": "53.696111",
    "lon": "22.431107"
  },
  {
    "numerStacji": "32870",
    "bilkomNumerStacji": "5102890",
    "name": "Proboszczewice Płockie",
    "lat": "52.660275",
    "lon": "19.713892"
  },
  {
    "numerStacji": "78980",
    "bilkomNumerStacji": "5102891",
    "name": "Poronin",
    "lat": "49.343893",
    "lon": "20.003615"
  },
  {
    "numerStacji": "19828",
    "bilkomNumerStacji": "5102895",
    "name": "Przyłubie",
    "lat": "53.050002",
    "lon": "18.32389"
  },
  {
    "numerStacji": "34462",
    "bilkomNumerStacji": "5102903",
    "name": "Piasecznica",
    "lat": "52.209996",
    "lon": "20.343892"
  },
  {
    "numerStacji": "9399",
    "bilkomNumerStacji": "5102908",
    "name": "Pasym",
    "lat": "53.631946",
    "lon": "20.765558"
  },
  {
    "numerStacji": "30643",
    "bilkomNumerStacji": "5102914",
    "name": "Poznań Strzeszyn",
    "lat": "52.460004",
    "lon": "16.866388"
  },
  {
    "numerStacji": "15735",
    "bilkomNumerStacji": "5102915",
    "name": "Piastoszyn",
    "lat": "53.621941",
    "lon": "17.728885"
  },
  {
    "numerStacji": "59378",
    "bilkomNumerStacji": "5102916",
    "name": "Pasikurowice",
    "lat": "51.209164",
    "lon": "17.109726"
  },
  {
    "numerStacji": "75903",
    "bilkomNumerStacji": "5102920",
    "name": "Pszczyna",
    "lat": "49.975278",
    "lon": "18.953333"
  },
  {
    "numerStacji": "7088",
    "bilkomNumerStacji": "5102921",
    "name": "Pszczółki",
    "lat": "54.174723",
    "lon": "18.701941"
  },
  {
    "numerStacji": "81687",
    "bilkomNumerStacji": "5102922",
    "name": "Ptaszkowa",
    "lat": "49.603331",
    "lon": "20.881663"
  },
  {
    "numerStacji": "39768",
    "bilkomNumerStacji": "5102924",
    "name": "Platerów",
    "lat": "52.301111",
    "lon": "22.821113"
  },
  {
    "numerStacji": "4937",
    "bilkomNumerStacji": "5102925",
    "name": "Potęgowo",
    "lat": "54.485004",
    "lon": "17.487219"
  },
  {
    "numerStacji": "15131",
    "bilkomNumerStacji": "5102926",
    "name": "Prostynia",
    "lat": "53.305278",
    "lon": "15.773893"
  },
  {
    "numerStacji": "76430",
    "bilkomNumerStacji": "5102927",
    "name": "Pietrzykowice Żywieckie",
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
    "numerStacji": "16428",
    "bilkomNumerStacji": "5102932",
    "name": "Ptusza",
    "lat": "53.364723",
    "lon": "16.783885"
  },
  {
    "numerStacji": "6700",
    "bilkomNumerStacji": "5102936",
    "name": "Puck",
    "lat": "54.715829",
    "lon": "18.408335"
  },
  {
    "numerStacji": "7302",
    "bilkomNumerStacji": "5102942",
    "name": "Pruszcz Gdański",
    "lat": "54.258611",
    "lon": "18.646945"
  },
  {
    "numerStacji": "50013",
    "bilkomNumerStacji": "5102943",
    "name": "Puławy Chemia",
    "lat": "51.446668",
    "lon": "21.968054"
  },
  {
    "numerStacji": "51367",
    "bilkomNumerStacji": "5102945",
    "name": "Pułankowice",
    "lat": "50.958886",
    "lon": "22.306112"
  },
  {
    "numerStacji": "50039",
    "bilkomNumerStacji": "5102946",
    "name": "Puławy",
    "lat": "51.410001",
    "lon": "22.012497"
  },
  {
    "numerStacji": "50021",
    "bilkomNumerStacji": "5102947",
    "name": "Puławy Miasto",
    "lat": "51.426667",
    "lon": "21.985556"
  },
  {
    "numerStacji": "75853",
    "bilkomNumerStacji": "5102948",
    "name": "Pruchna",
    "lat": "49.878608",
    "lon": "18.687774"
  },
  {
    "numerStacji": "30429",
    "bilkomNumerStacji": "5102949",
    "name": "Puszczykowko",
    "lat": "52.272219",
    "lon": "16.863611"
  },
  {
    "numerStacji": "17087",
    "bilkomNumerStacji": "5102950",
    "name": "Pruszcz Pomorski",
    "lat": "53.334448",
    "lon": "18.198886"
  },
  {
    "numerStacji": "30411",
    "bilkomNumerStacji": "5102955",
    "name": "Puszczykowo",
    "lat": "52.294998",
    "lon": "16.870829"
  },
  {
    "numerStacji": "32748",
    "bilkomNumerStacji": "5102960",
    "name": "Podwierzbie",
    "lat": "52.864725",
    "lon": "19.579171"
  },
  {
    "numerStacji": "76661",
    "bilkomNumerStacji": "5102961",
    "name": "Pewel Wielka Centrum",
    "lat": "49.656943",
    "lon": "19.345281"
  },
  {
    "numerStacji": "1578",
    "bilkomNumerStacji": "5102966",
    "name": "Parłówko",
    "lat": "53.845556",
    "lon": "14.750004"
  },
  {
    "numerStacji": "82453",
    "bilkomNumerStacji": "5102972",
    "name": "Powroźnik",
    "lat": "49.369719",
    "lon": "20.942781"
  },
  {
    "numerStacji": "18531",
    "bilkomNumerStacji": "5102975",
    "name": "Pawłówek",
    "lat": "53.152218",
    "lon": "17.855552"
  },
  {
    "numerStacji": "82099",
    "bilkomNumerStacji": "5102976",
    "name": "Piwniczna-Zdrój",
    "lat": "49.440833",
    "lon": "20.717223"
  },
  {
    "numerStacji": "42689",
    "bilkomNumerStacji": "5102978",
    "name": "Przysieka Stara",
    "lat": "52.03583",
    "lon": "16.604164"
  },
  {
    "numerStacji": "16436",
    "bilkomNumerStacji": "5102980",
    "name": "Płytnica",
    "lat": "53.295003",
    "lon": "16.750275"
  },
  {
    "numerStacji": "74260",
    "bilkomNumerStacji": "5102981",
    "name": "Bukowno Przymiarki",
    "lat": "50.275275",
    "lon": "19.409724"
  },
  {
    "numerStacji": "53587",
    "bilkomNumerStacji": "5102982",
    "name": "Przybyłowice",
    "lat": "51.12694",
    "lon": "16.159441"
  },
  {
    "numerStacji": "62042",
    "bilkomNumerStacji": "5102985",
    "name": "Przywory Opolskie",
    "lat": "50.580279",
    "lon": "17.989447"
  },
  {
    "numerStacji": "70201",
    "bilkomNumerStacji": "5102987",
    "name": "Pyskowice",
    "lat": "50.38444",
    "lon": "18.618053"
  },
  {
    "numerStacji": "78949",
    "bilkomNumerStacji": "5102989",
    "name": "Pyzówka",
    "lat": "49.521385",
    "lon": "19.959999"
  },
  {
    "numerStacji": "82867",
    "bilkomNumerStacji": "5102992",
    "name": "Przybówka",
    "lat": "49.79917",
    "lon": "21.646663"
  },
  {
    "numerStacji": "46003",
    "bilkomNumerStacji": "5102996",
    "name": "Przygodzice",
    "lat": "51.571115",
    "lon": "17.829448"
  },
  {
    "numerStacji": "30221",
    "bilkomNumerStacji": "5102997",
    "name": "Pierzchno",
    "lat": "52.263059",
    "lon": "17.158331"
  },
  {
    "numerStacji": "83337",
    "bilkomNumerStacji": "5102998",
    "name": "Przysieki",
    "lat": "49.732776",
    "lon": "21.394444"
  },
  {
    "numerStacji": "80184",
    "bilkomNumerStacji": "5103000",
    "name": "Przytkowice",
    "lat": "49.896388",
    "lon": "19.679724"
  },
  {
    "numerStacji": "4598",
    "bilkomNumerStacji": "5103004",
    "name": "Przytocko",
    "lat": "54.123053",
    "lon": "16.857498"
  },
  {
    "numerStacji": "3046",
    "bilkomNumerStacji": "5103005",
    "name": "Przeradz",
    "lat": "53.770559",
    "lon": "16.536664"
  },
  {
    "numerStacji": "31468",
    "bilkomNumerStacji": "5103006",
    "name": "Przysieczyn",
    "lat": "52.753888",
    "lon": "17.183887"
  },
  {
    "numerStacji": "23697",
    "bilkomNumerStacji": "5103007",
    "name": "Przetycz",
    "lat": "52.76944",
    "lon": "21.551386"
  },
  {
    "numerStacji": "48801",
    "bilkomNumerStacji": "5103008",
    "name": "Przysucha",
    "lat": "51.378053",
    "lon": "20.658614"
  },
  {
    "numerStacji": "77669",
    "bilkomNumerStacji": "5103013",
    "name": "Mysłowice Brzęczkowice",
    "lat": "50.21306",
    "lon": "19.147221"
  },
  {
    "numerStacji": "50005",
    "bilkomNumerStacji": "5103014",
    "name": "Puławy Azoty",
    "lat": "51.480557",
    "lon": "21.943891"
  },
  {
    "numerStacji": "78824",
    "bilkomNumerStacji": "5103015",
    "name": "Raba Wyżna",
    "lat": "49.565558",
    "lon": "19.881946"
  },
  {
    "numerStacji": "24869",
    "bilkomNumerStacji": "5103017",
    "name": "Racewo",
    "lat": "53.49806",
    "lon": "23.484445"
  },
  {
    "numerStacji": "76745",
    "bilkomNumerStacji": "5103021",
    "name": "Radziechowy Wieprz",
    "lat": "49.647774",
    "lon": "19.164166"
  },
  {
    "numerStacji": "24422",
    "bilkomNumerStacji": "5103023",
    "name": "Rajsk",
    "lat": "52.828885",
    "lon": "23.148608"
  },
  {
    "numerStacji": "21865",
    "bilkomNumerStacji": "5103024",
    "name": "Rakowice",
    "lat": "53.478059",
    "lon": "19.641664"
  },
  {
    "numerStacji": "45328",
    "bilkomNumerStacji": "5103025",
    "name": "Radliczyce",
    "lat": "51.723329",
    "lon": "18.350004"
  },
  {
    "numerStacji": "34249",
    "bilkomNumerStacji": "5103026",
    "name": "Radziwiłłów Mazowiecki",
    "lat": "52.000278",
    "lon": "20.290281"
  },
  {
    "numerStacji": "17640",
    "bilkomNumerStacji": "5103027",
    "name": "Raduń",
    "lat": "53.969167",
    "lon": "17.778335"
  },
  {
    "numerStacji": "39529",
    "bilkomNumerStacji": "5103028",
    "name": "Radomyśl",
    "lat": "52.031111",
    "lon": "22.381109"
  },
  {
    "numerStacji": "39974",
    "bilkomNumerStacji": "5103029",
    "name": "Radzyń Podlaski",
    "lat": "51.827496",
    "lon": "22.667496"
  },
  {
    "numerStacji": "67116",
    "bilkomNumerStacji": "5103031",
    "name": "Raszowa",
    "lat": "50.387775",
    "lon": "18.161114"
  },
  {
    "numerStacji": "32334",
    "bilkomNumerStacji": "5103032",
    "name": "Raciborów Kutnowski",
    "lat": "52.280552",
    "lon": "19.341667"
  },
  {
    "numerStacji": "24885",
    "bilkomNumerStacji": "5103036",
    "name": "Różanystok",
    "lat": "53.623055",
    "lon": "23.392503"
  },
  {
    "numerStacji": "68312",
    "bilkomNumerStacji": "5103039",
    "name": "Rybnik Niedobczyce",
    "lat": "50.065835",
    "lon": "18.495557"
  },
  {
    "numerStacji": "68296",
    "bilkomNumerStacji": "5103041",
    "name": "Rybnik Niewiadom",
    "lat": "50.06944",
    "lon": "18.468059"
  },
  {
    "numerStacji": "37838",
    "bilkomNumerStacji": "5103042",
    "name": "Rybienko",
    "lat": "52.5825",
    "lon": "21.45806"
  },
  {
    "numerStacji": "68254",
    "bilkomNumerStacji": "5103043",
    "name": "Rybnik Gotartowice",
    "lat": "50.088056",
    "lon": "18.62306"
  },
  {
    "numerStacji": "52365",
    "bilkomNumerStacji": "5103044",
    "name": "Rębiszów",
    "lat": "50.948333",
    "lon": "15.455837"
  },
  {
    "numerStacji": "78733",
    "bilkomNumerStacji": "5103045",
    "name": "Rabka-Zdrój",
    "lat": "49.610001",
    "lon": "19.951945"
  },
  {
    "numerStacji": "3830",
    "bilkomNumerStacji": "5103046",
    "name": "Rąbino",
    "lat": "53.869719",
    "lon": "15.953057"
  },
  {
    "numerStacji": "29454",
    "bilkomNumerStacji": "5103047",
    "name": "Rębusz",
    "lat": "53.053058",
    "lon": "15.591943"
  },
  {
    "numerStacji": "24661",
    "bilkomNumerStacji": "5103048",
    "name": "Racibory",
    "lat": "52.92889",
    "lon": "22.709718"
  },
  {
    "numerStacji": "20768",
    "bilkomNumerStacji": "5103050",
    "name": "Rychnowo Wielkie",
    "lat": "53.142222",
    "lon": "18.813892"
  },
  {
    "numerStacji": "36814",
    "bilkomNumerStacji": "5103051",
    "name": "Raciąż",
    "lat": "52.778887",
    "lon": "20.104725"
  },
  {
    "numerStacji": "15693",
    "bilkomNumerStacji": "5103052",
    "name": "Racławki",
    "lat": "53.667777",
    "lon": "17.654446"
  },
  {
    "numerStacji": "68791",
    "bilkomNumerStacji": "5103053",
    "name": "Racibórz Markowice",
    "lat": "50.113613",
    "lon": "18.270279"
  },
  {
    "numerStacji": "80150",
    "bilkomNumerStacji": "5103057",
    "name": "Radziszów",
    "lat": "49.918331",
    "lon": "19.809169"
  },
  {
    "numerStacji": "70607",
    "bilkomNumerStacji": "5103058",
    "name": "Ruda Chebzie",
    "lat": "50.303887",
    "lon": "18.878057"
  },
  {
    "numerStacji": "63859",
    "bilkomNumerStacji": "5103060",
    "name": "Radkowice",
    "lat": "50.780558",
    "lon": "20.52889"
  },
  {
    "numerStacji": "48462",
    "bilkomNumerStacji": "5103062",
    "name": "Radom Potkanów",
    "lat": "51.353054",
    "lon": "21.101665"
  },
  {
    "numerStacji": "27540",
    "bilkomNumerStacji": "5103063",
    "name": "Radnica",
    "lat": "52.090278",
    "lon": "15.268888"
  },
  {
    "numerStacji": "281370",
    "bilkomNumerStacji": "5103065",
    "name": "Radom Południowy",
    "lat": "51.349441",
    "lon": "21.101108"
  },
  {
    "numerStacji": "13110",
    "bilkomNumerStacji": "5103067",
    "name": "Radów",
    "lat": "52.43194",
    "lon": "14.742498"
  },
  {
    "numerStacji": "84301",
    "bilkomNumerStacji": "5103068",
    "name": "Radymno",
    "lat": "49.939168",
    "lon": "22.829446"
  },
  {
    "numerStacji": "6106",
    "bilkomNumerStacji": "5103070",
    "name": "Reda",
    "lat": "54.594996",
    "lon": "18.35333"
  },
  {
    "numerStacji": "22954",
    "bilkomNumerStacji": "5103071",
    "name": "Redaki",
    "lat": "53.670554",
    "lon": "19.409446"
  },
  {
    "numerStacji": "4861",
    "bilkomNumerStacji": "5103072",
    "name": "Reblino",
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
    "numerStacji": "6114",
    "bilkomNumerStacji": "5103075",
    "name": "Reda Pieleszewo",
    "lat": "54.602781",
    "lon": "18.318056"
  },
  {
    "numerStacji": "17871",
    "bilkomNumerStacji": "5103077",
    "name": "Rębiechowo",
    "lat": "54.388334",
    "lon": "18.421109"
  },
  {
    "numerStacji": "50807",
    "bilkomNumerStacji": "5103079",
    "name": "Rejowiec",
    "lat": "51.117501",
    "lon": "23.239165"
  },
  {
    "numerStacji": "6882",
    "bilkomNumerStacji": "5103080",
    "name": "Reda Rekowo",
    "lat": "54.631663",
    "lon": "18.363335"
  },
  {
    "numerStacji": "2253",
    "bilkomNumerStacji": "5103084",
    "name": "Reptowo",
    "lat": "53.372778",
    "lon": "14.859448"
  },
  {
    "numerStacji": "2477",
    "bilkomNumerStacji": "5103091",
    "name": "Recz Pomorski",
    "lat": "53.270552",
    "lon": "15.561388"
  },
  {
    "numerStacji": "9316",
    "bilkomNumerStacji": "5103093",
    "name": "Rogiedle",
    "lat": "54.03806",
    "lon": "20.282496"
  },
  {
    "numerStacji": "56358",
    "bilkomNumerStacji": "5103094",
    "name": "Rogoźnica",
    "lat": "51.01444",
    "lon": "16.302225"
  },
  {
    "numerStacji": "20545",
    "bilkomNumerStacji": "5103096",
    "name": "Rogóźno Pomorskie",
    "lat": "53.542782",
    "lon": "18.909996"
  },
  {
    "numerStacji": "47316",
    "bilkomNumerStacji": "5103098",
    "name": "Rogów",
    "lat": "51.817779",
    "lon": "19.885829"
  },
  {
    "numerStacji": "32367",
    "bilkomNumerStacji": "5103099",
    "name": "Rogożew",
    "lat": "52.461667",
    "lon": "19.541389"
  },
  {
    "numerStacji": "6080",
    "bilkomNumerStacji": "5103103",
    "name": "Rumia Janowo",
    "lat": "54.559165",
    "lon": "18.405279"
  },
  {
    "numerStacji": "76786",
    "bilkomNumerStacji": "5103104",
    "name": "Rajcza",
    "lat": "49.516666",
    "lon": "19.112775"
  },
  {
    "numerStacji": "48777",
    "bilkomNumerStacji": "5103106",
    "name": "Rajec Poduchowny",
    "lat": "51.414999",
    "lon": "21.253331"
  },
  {
    "numerStacji": "63354",
    "bilkomNumerStacji": "5103109",
    "name": "Rudniki koło Częstochowy",
    "lat": "50.878055",
    "lon": "19.232223"
  },
  {
    "numerStacji": "1719",
    "bilkomNumerStacji": "5103110",
    "name": "Rokita",
    "lat": "53.765552",
    "lon": "14.855555"
  },
  {
    "numerStacji": "83055",
    "bilkomNumerStacji": "5103111",
    "name": "Rogóżno koło Łańcuta",
    "lat": "50.083607",
    "lon": "22.363337"
  },
  {
    "numerStacji": "65144",
    "bilkomNumerStacji": "5103112",
    "name": "Rudnik Nad Sanem",
    "lat": "50.435004",
    "lon": "22.250558"
  },
  {
    "numerStacji": "49841",
    "bilkomNumerStacji": "5103115",
    "name": "Rokitnia Stara",
    "lat": "51.611665",
    "lon": "21.799722"
  },
  {
    "numerStacji": "30676",
    "bilkomNumerStacji": "5103116",
    "name": "Rokietnica",
    "lat": "52.512222",
    "lon": "16.753888"
  },
  {
    "numerStacji": "64766",
    "bilkomNumerStacji": "5103118",
    "name": "Rykoszyn",
    "lat": "50.868059",
    "lon": "20.378887"
  },
  {
    "numerStacji": "60459",
    "bilkomNumerStacji": "5103121",
    "name": "Rudna Miasto",
    "lat": "51.505278",
    "lon": "16.269163"
  },
  {
    "numerStacji": "18432",
    "bilkomNumerStacji": "5103126",
    "name": "Rynkowo Wiadukt",
    "lat": "53.15194",
    "lon": "18.005555"
  },
  {
    "numerStacji": "43042",
    "bilkomNumerStacji": "5103127",
    "name": "Rakoniewice",
    "lat": "52.138891",
    "lon": "16.26528"
  },
  {
    "numerStacji": "65136",
    "bilkomNumerStacji": "5103128",
    "name": "Rudnik Stróża",
    "lat": "50.458331",
    "lon": "22.216669"
  },
  {
    "numerStacji": "29652",
    "bilkomNumerStacji": "5103130",
    "name": "Rożnowo",
    "lat": "52.67917",
    "lon": "16.871944"
  },
  {
    "numerStacji": "7062",
    "bilkomNumerStacji": "5103133",
    "name": "Różyny",
    "lat": "54.212226",
    "lon": "18.66139"
  },
  {
    "numerStacji": "10835",
    "bilkomNumerStacji": "5103134",
    "name": "Ruciane Nida Zachód",
    "lat": "53.642499",
    "lon": "21.523331"
  },
  {
    "numerStacji": "61176",
    "bilkomNumerStacji": "5103137",
    "name": "Rogalice",
    "lat": "50.963615",
    "lon": "17.597499"
  },
  {
    "numerStacji": "24257",
    "bilkomNumerStacji": "5103138",
    "name": "Rozedranka",
    "lat": "53.359725",
    "lon": "23.366947"
  },
  {
    "numerStacji": "54205",
    "bilkomNumerStacji": "5103142",
    "name": "Rokitki",
    "lat": "51.335552",
    "lon": "15.893333"
  },
  {
    "numerStacji": "47423",
    "bilkomNumerStacji": "5103144",
    "name": "Rokiciny",
    "lat": "51.667497",
    "lon": "19.780835"
  },
  {
    "numerStacji": "16659",
    "bilkomNumerStacji": "5103148",
    "name": "Rosochatka",
    "lat": "53.70528",
    "lon": "18.11472"
  },
  {
    "numerStacji": "78832",
    "bilkomNumerStacji": "5103149",
    "name": "Rokiciny Podhalańskie",
    "lat": "49.578611",
    "lon": "19.90583"
  },
  {
    "numerStacji": "67959",
    "bilkomNumerStacji": "5103150",
    "name": "Roszków Raciborski",
    "lat": "49.964724",
    "lon": "18.294163"
  },
  {
    "numerStacji": "8722",
    "bilkomNumerStacji": "5103152",
    "name": "Rokitki Tczewskie",
    "lat": "54.081388",
    "lon": "18.738059"
  },
  {
    "numerStacji": "68262",
    "bilkomNumerStacji": "5103156",
    "name": "Rybnik Piaski Pods",
    "lat": "50.096389",
    "lon": "18.587499"
  },
  {
    "numerStacji": "81232",
    "bilkomNumerStacji": "5103157",
    "name": "Ropczyce",
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
    "numerStacji": "22517",
    "bilkomNumerStacji": "5103159",
    "name": "Rybno Pomorskie",
    "lat": "53.380832",
    "lon": "19.913057"
  },
  {
    "numerStacji": "47795",
    "bilkomNumerStacji": "5103160",
    "name": "Rozprza",
    "lat": "51.301663",
    "lon": "19.660281"
  },
  {
    "numerStacji": "68056",
    "bilkomNumerStacji": "5103161",
    "name": "Rybnik Rymer",
    "lat": "50.056666",
    "lon": "18.498335"
  },
  {
    "numerStacji": "69849",
    "bilkomNumerStacji": "5103162",
    "name": "Ruda Śląska",
    "lat": "50.315834",
    "lon": "18.851665"
  },
  {
    "numerStacji": "3251",
    "bilkomNumerStacji": "5103164",
    "name": "Rzęśnica",
    "lat": "53.524444",
    "lon": "15.951385"
  },
  {
    "numerStacji": "43026",
    "bilkomNumerStacji": "5103167",
    "name": "Rostarzewo",
    "lat": "52.134999",
    "lon": "16.20694"
  },
  {
    "numerStacji": "57448",
    "bilkomNumerStacji": "5103170",
    "name": "Roztoki Bystrzyckie",
    "lat": "50.187225",
    "lon": "16.66556"
  },
  {
    "numerStacji": "14753",
    "bilkomNumerStacji": "5103171",
    "name": "Rutwica",
    "lat": "53.229445",
    "lon": "16.282503"
  },
  {
    "numerStacji": "21766",
    "bilkomNumerStacji": "5103172",
    "name": "Rutkowice",
    "lat": "52.361392",
    "lon": "19.159168"
  },
  {
    "numerStacji": "24182",
    "bilkomNumerStacji": "5103175",
    "name": "Ruda",
    "lat": "53.589166",
    "lon": "22.520558"
  },
  {
    "numerStacji": "77735",
    "bilkomNumerStacji": "5103176",
    "name": "Rudawa",
    "lat": "50.118889",
    "lon": "19.719448"
  },
  {
    "numerStacji": "43067",
    "bilkomNumerStacji": "5103180",
    "name": "Ruchocice",
    "lat": "52.177221",
    "lon": "16.34194"
  },
  {
    "numerStacji": "67843",
    "bilkomNumerStacji": "5103181",
    "name": "Rudziniec Gliwicki",
    "lat": "50.366389",
    "lon": "18.404721"
  },
  {
    "numerStacji": "6098",
    "bilkomNumerStacji": "5103186",
    "name": "Rumia",
    "lat": "54.56917",
    "lon": "18.386671"
  },
  {
    "numerStacji": "50955",
    "bilkomNumerStacji": "5103188",
    "name": "Ruda-Opalin",
    "lat": "51.247782",
    "lon": "23.601107"
  },
  {
    "numerStacji": "1412",
    "bilkomNumerStacji": "5103190",
    "name": "Rurka",
    "lat": "53.493611",
    "lon": "14.795831"
  },
  {
    "numerStacji": "39370",
    "bilkomNumerStacji": "5103192",
    "name": "Ruda Talubska",
    "lat": "51.857502",
    "lon": "21.585276"
  },
  {
    "numerStacji": "21824",
    "bilkomNumerStacji": "5103193",
    "name": "Rudzienice Suskie",
    "lat": "53.638337",
    "lon": "19.668335"
  },
  {
    "numerStacji": "52027",
    "bilkomNumerStacji": "5103196",
    "name": "Ruszów",
    "lat": "51.403888",
    "lon": "15.176947"
  },
  {
    "numerStacji": "81331",
    "bilkomNumerStacji": "5103199",
    "name": "Rudna Wielka",
    "lat": "50.081108",
    "lon": "21.941392"
  },
  {
    "numerStacji": "31476",
    "bilkomNumerStacji": "5103200",
    "name": "Roszkowo Wągrowieckie",
    "lat": "52.70861",
    "lon": "17.17639"
  },
  {
    "numerStacji": "49130",
    "bilkomNumerStacji": "5103201",
    "name": "Ruda Wielka",
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
    "numerStacji": "76828",
    "bilkomNumerStacji": "5103206",
    "name": "Rycerka",
    "lat": "49.498337",
    "lon": "19.081663"
  },
  {
    "numerStacji": "42853",
    "bilkomNumerStacji": "5103209",
    "name": "Rydzyna",
    "lat": "51.770837",
    "lon": "16.646944"
  },
  {
    "numerStacji": "8946",
    "bilkomNumerStacji": "5103210",
    "name": "Rytel",
    "lat": "53.748329",
    "lon": "17.725829"
  },
  {
    "numerStacji": "55863",
    "bilkomNumerStacji": "5103213",
    "name": "Rybnica",
    "lat": "50.91056",
    "lon": "15.645554"
  },
  {
    "numerStacji": "23218",
    "bilkomNumerStacji": "5103214",
    "name": "Ryjewo",
    "lat": "53.843336",
    "lon": "18.956947"
  },
  {
    "numerStacji": "260715",
    "bilkomNumerStacji": "5103215",
    "name": "Ryki",
    "lat": "51.606388",
    "lon": "21.946669"
  },
  {
    "numerStacji": "38174",
    "bilkomNumerStacji": "5103217",
    "name": "Radzymin",
    "lat": "52.424164",
    "lon": "21.175835"
  },
  {
    "numerStacji": "82073",
    "bilkomNumerStacji": "5103221",
    "name": "Rytro",
    "lat": "49.48639",
    "lon": "20.680278"
  },
  {
    "numerStacji": "67942",
    "bilkomNumerStacji": "5103222",
    "name": "Rudyszwałd",
    "lat": "49.940831",
    "lon": "18.303332"
  },
  {
    "numerStacji": "8938",
    "bilkomNumerStacji": "5103223",
    "name": "Rytel Wieś",
    "lat": "53.760554",
    "lon": "17.772501"
  },
  {
    "numerStacji": "68098",
    "bilkomNumerStacji": "5103224",
    "name": "Rybnik Paruszowiec",
    "lat": "50.102223",
    "lon": "18.56472"
  },
  {
    "numerStacji": "65268",
    "bilkomNumerStacji": "5103230",
    "name": "Rzeczyca",
    "lat": "50.839725",
    "lon": "22.208057"
  },
  {
    "numerStacji": "49163",
    "bilkomNumerStacji": "5103234",
    "name": "Rożki",
    "lat": "51.33806",
    "lon": "21.05333"
  },
  {
    "numerStacji": "51573",
    "bilkomNumerStacji": "5103235",
    "name": "Rzeczyca Kolonia",
    "lat": "50.840274",
    "lon": "22.270002"
  },
  {
    "numerStacji": "80143",
    "bilkomNumerStacji": "5103238",
    "name": "Rzozów",
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
    "numerStacji": "63388",
    "bilkomNumerStacji": "5103240",
    "name": "Rzerzęczyce",
    "lat": "50.89722",
    "lon": "19.328336"
  },
  {
    "numerStacji": "82602",
    "bilkomNumerStacji": "5103241",
    "name": "Rzeszów Staroniwa",
    "lat": "50.038885",
    "lon": "21.989718"
  },
  {
    "numerStacji": "82677",
    "bilkomNumerStacji": "5103242",
    "name": "Rzeszów Osiedle",
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
    "numerStacji": "79665",
    "bilkomNumerStacji": "5103244",
    "name": "Rzezawa",
    "lat": "49.984168",
    "lon": "20.511388"
  },
  {
    "numerStacji": "39776",
    "bilkomNumerStacji": "5103246",
    "name": "Sarnaki",
    "lat": "52.325831",
    "lon": "22.881385"
  },
  {
    "numerStacji": "39818",
    "bilkomNumerStacji": "5103247",
    "name": "Sabinka",
    "lat": "52.173329",
    "lon": "22.172775"
  },
  {
    "numerStacji": "58925",
    "bilkomNumerStacji": "5103248",
    "name": "Sadowice Wrocławskie",
    "lat": "51.056114",
    "lon": "16.825002"
  },
  {
    "numerStacji": "48181",
    "bilkomNumerStacji": "5103253",
    "name": "Starachowice Wschodnie",
    "lat": "51.041668",
    "lon": "21.078886"
  },
  {
    "numerStacji": "23143",
    "bilkomNumerStacji": "5103254",
    "name": "Sadlinki",
    "lat": "53.667498",
    "lon": "18.880556"
  },
  {
    "numerStacji": "48561",
    "bilkomNumerStacji": "5103255",
    "name": "Strzyżyna",
    "lat": "51.693611",
    "lon": "21.172779"
  },
  {
    "numerStacji": "50138",
    "bilkomNumerStacji": "5103256",
    "name": "Sadurki",
    "lat": "51.285833",
    "lon": "22.285275"
  },
  {
    "numerStacji": "21840",
    "bilkomNumerStacji": "5103258",
    "name": "Samborowo",
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
    "numerStacji": "49270",
    "bilkomNumerStacji": "5103261",
    "name": "Staw Kunowski",
    "lat": "51.004165",
    "lon": "21.247776"
  },
  {
    "numerStacji": "40121",
    "bilkomNumerStacji": "5103262",
    "name": "Sarnów",
    "lat": "51.843335",
    "lon": "22.296664"
  },
  {
    "numerStacji": "10033",
    "bilkomNumerStacji": "5103263",
    "name": "Sątopy-Samulewo",
    "lat": "54.073334",
    "lon": "21.024169"
  },
  {
    "numerStacji": "26237",
    "bilkomNumerStacji": "5103264",
    "name": "Sątopy",
    "lat": "52.303331",
    "lon": "16.208054"
  },
  {
    "numerStacji": "65029",
    "bilkomNumerStacji": "5103265",
    "name": "Stalowa Wola Centrum",
    "lat": "50.569725",
    "lon": "22.055277"
  },
  {
    "numerStacji": "38158",
    "bilkomNumerStacji": "5103267",
    "name": "Sadowne Węgrowskie",
    "lat": "52.607778",
    "lon": "21.863609"
  },
  {
    "numerStacji": "18234",
    "bilkomNumerStacji": "5103270",
    "name": "Samostrzel",
    "lat": "53.127777",
    "lon": "17.433886"
  },
  {
    "numerStacji": "4192",
    "bilkomNumerStacji": "5103271",
    "name": "Stary Borek",
    "lat": "54.138056",
    "lon": "15.481663"
  },
  {
    "numerStacji": "24414",
    "bilkomNumerStacji": "5103272",
    "name": "Strabla",
    "lat": "52.901392",
    "lon": "23.113334"
  },
  {
    "numerStacji": "56937",
    "bilkomNumerStacji": "5103274",
    "name": "Szybowice",
    "lat": "50.344725",
    "lon": "17.481107"
  },
  {
    "numerStacji": "54528",
    "bilkomNumerStacji": "5103275",
    "name": "Świebodzice",
    "lat": "50.860275",
    "lon": "16.33278"
  },
  {
    "numerStacji": "42671",
    "bilkomNumerStacji": "5103278",
    "name": "Stare Bojanowo",
    "lat": "51.995837",
    "lon": "16.584999"
  },
  {
    "numerStacji": "63925",
    "bilkomNumerStacji": "5103279",
    "name": "Sobków",
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
    "numerStacji": "28100",
    "bilkomNumerStacji": "5103284",
    "name": "Świebodzin",
    "lat": "52.245279",
    "lon": "15.539724"
  },
  {
    "numerStacji": "16154",
    "bilkomNumerStacji": "5103288",
    "name": "Sokołowo Budzyńskie",
    "lat": "52.837776",
    "lon": "16.969441"
  },
  {
    "numerStacji": "65458",
    "bilkomNumerStacji": "5103289",
    "name": "Sobów",
    "lat": "50.59556",
    "lon": "21.739171"
  },
  {
    "numerStacji": "76844",
    "bilkomNumerStacji": "5103293",
    "name": "Sól Kiczora",
    "lat": "49.516945",
    "lon": "19.031665"
  },
  {
    "numerStacji": "280397",
    "bilkomNumerStacji": "5103294",
    "name": "Szczebrzeszyn",
    "lat": "50.670557",
    "lon": "22.9725"
  },
  {
    "numerStacji": "4853",
    "bilkomNumerStacji": "5103295",
    "name": "Sycewice",
    "lat": "54.414448",
    "lon": "16.849722"
  },
  {
    "numerStacji": "67801",
    "bilkomNumerStacji": "5103301",
    "name": "Sławięcice",
    "lat": "50.351386",
    "lon": "18.314443"
  },
  {
    "numerStacji": "30270",
    "bilkomNumerStacji": "5103303",
    "name": "Solec Wielkopolski",
    "lat": "52.109443",
    "lon": "17.319723"
  },
  {
    "numerStacji": "14746",
    "bilkomNumerStacji": "5103305",
    "name": "Strączno",
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
    "numerStacji": "75788",
    "bilkomNumerStacji": "5103315",
    "name": "Skoczów",
    "lat": "49.793615",
    "lon": "18.790278"
  },
  {
    "numerStacji": "29249",
    "bilkomNumerStacji": "5103319",
    "name": "Siedlisko Czarnkowskie",
    "lat": "52.983886",
    "lon": "16.398886"
  },
  {
    "numerStacji": "73403",
    "bilkomNumerStacji": "5103320",
    "name": "Sosnowiec Dańdówka",
    "lat": "50.265557",
    "lon": "19.174719"
  },
  {
    "numerStacji": "14811",
    "bilkomNumerStacji": "5103324",
    "name": "Szydłowo Krajeńskie",
    "lat": "53.166943",
    "lon": "16.606115"
  },
  {
    "numerStacji": "81034",
    "bilkomNumerStacji": "5103325",
    "name": "Siedliska koło Tuchowa",
    "lat": "49.860279",
    "lon": "21.018614"
  },
  {
    "numerStacji": "54817",
    "bilkomNumerStacji": "5103327",
    "name": "Świdnica Miasto",
    "lat": "50.84111",
    "lon": "16.481668"
  },
  {
    "numerStacji": "49734",
    "bilkomNumerStacji": "5103329",
    "name": "Szadkowice",
    "lat": "51.41944",
    "lon": "20.16889"
  },
  {
    "numerStacji": "84947",
    "bilkomNumerStacji": "5103333",
    "name": "Siedliska Tomaszowskie",
    "lat": "50.261665",
    "lon": "23.554444"
  },
  {
    "numerStacji": "57984",
    "bilkomNumerStacji": "5103334",
    "name": "Świerki Dolne",
    "lat": "50.632497",
    "lon": "16.432218"
  },
  {
    "numerStacji": "53124",
    "bilkomNumerStacji": "5103335",
    "name": "Szczedrzykowice",
    "lat": "51.214998",
    "lon": "16.351945"
  },
  {
    "numerStacji": "45351",
    "bilkomNumerStacji": "5103337",
    "name": "Sędzice",
    "lat": "51.628888",
    "lon": "18.569997"
  },
  {
    "numerStacji": "59352",
    "bilkomNumerStacji": "5103339",
    "name": "Siedlec Trzebnicki",
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
    "numerStacji": "12641",
    "bilkomNumerStacji": "5103342",
    "name": "Sterławki Wielkie",
    "lat": "54.015282",
    "lon": "21.57528"
  },
  {
    "numerStacji": "32318",
    "bilkomNumerStacji": "5103346",
    "name": "Strzelce Kujawskie",
    "lat": "52.322775",
    "lon": "19.368608"
  },
  {
    "numerStacji": "34439",
    "bilkomNumerStacji": "5103347",
    "name": "Seroki",
    "lat": "52.196665",
    "lon": "20.465831"
  },
  {
    "numerStacji": "81265",
    "bilkomNumerStacji": "5103349",
    "name": "Sędziszów Małopolski",
    "lat": "50.075274",
    "lon": "21.695277"
  },
  {
    "numerStacji": "16543",
    "bilkomNumerStacji": "5103351",
    "name": "Serock",
    "lat": "53.36111",
    "lon": "18.089721"
  },
  {
    "numerStacji": "25387",
    "bilkomNumerStacji": "5103355",
    "name": "Siemiatycze",
    "lat": "52.389996",
    "lon": "22.943887"
  },
  {
    "numerStacji": "19513",
    "bilkomNumerStacji": "5103358",
    "name": "Sieradz Warta",
    "lat": "51.603053",
    "lon": "18.730553"
  },
  {
    "numerStacji": "72157",
    "bilkomNumerStacji": "5103359",
    "name": "Strzebiń",
    "lat": "50.617782",
    "lon": "18.899721"
  },
  {
    "numerStacji": "109",
    "bilkomNumerStacji": "5103360",
    "name": "Szczecin Port Centralny",
    "lat": "53.411665",
    "lon": "14.568611"
  },
  {
    "numerStacji": "55632",
    "bilkomNumerStacji": "5103361",
    "name": "Sędzisław",
    "lat": "50.813333",
    "lon": "16.069998"
  },
  {
    "numerStacji": "54429",
    "bilkomNumerStacji": "5103362",
    "name": "Stanowice",
    "lat": "50.930004",
    "lon": "16.374723"
  },
  {
    "numerStacji": "264894",
    "bilkomNumerStacji": "5103364",
    "name": "Szaniawy",
    "lat": "51.946666",
    "lon": "22.543058"
  },
  {
    "numerStacji": "79434",
    "bilkomNumerStacji": "5103366",
    "name": "Szczepanowice",
    "lat": "50.30111",
    "lon": "20.024721"
  },
  {
    "numerStacji": "16568",
    "bilkomNumerStacji": "5103367",
    "name": "Świekatowo",
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
    "numerStacji": "79723",
    "bilkomNumerStacji": "5103375",
    "name": "Szarów",
    "lat": "50.009446",
    "lon": "20.256391"
  },
  {
    "numerStacji": "28134",
    "bilkomNumerStacji": "5103377",
    "name": "Szczaniec",
    "lat": "52.264444",
    "lon": "15.693611"
  },
  {
    "numerStacji": "9415",
    "bilkomNumerStacji": "5103379",
    "name": "Stawiguda",
    "lat": "53.648333",
    "lon": "20.405837"
  },
  {
    "numerStacji": "8607",
    "bilkomNumerStacji": "5103381",
    "name": "Starogard Gdański",
    "lat": "53.976943",
    "lon": "18.525554"
  },
  {
    "numerStacji": "7260",
    "bilkomNumerStacji": "5103382",
    "name": "Stogi Malborskie",
    "lat": "54.063886",
    "lon": "18.969163"
  },
  {
    "numerStacji": "56309",
    "bilkomNumerStacji": "5103386",
    "name": "Strzegom",
    "lat": "50.974447",
    "lon": "16.359163"
  },
  {
    "numerStacji": "62182",
    "bilkomNumerStacji": "5103388",
    "name": "Grodków",
    "lat": "50.650278",
    "lon": "17.377776"
  },
  {
    "numerStacji": "12351",
    "bilkomNumerStacji": "5103389",
    "name": "Stare Guty",
    "lat": "53.61528",
    "lon": "21.920277"
  },
  {
    "numerStacji": "55848",
    "bilkomNumerStacji": "5103390",
    "name": "Stara Kamienica",
    "lat": "50.913886",
    "lon": "15.566386"
  },
  {
    "numerStacji": "12633",
    "bilkomNumerStacji": "5103395",
    "name": "Siedliska",
    "lat": "54.000279",
    "lon": "21.913607"
  },
  {
    "numerStacji": "4481",
    "bilkomNumerStacji": "5103396",
    "name": "Skibno",
    "lat": "54.249163",
    "lon": "16.304446"
  },
  {
    "numerStacji": "24877",
    "bilkomNumerStacji": "5103398",
    "name": "Sidra",
    "lat": "53.544723",
    "lon": "23.446942"
  },
  {
    "numerStacji": "58297",
    "bilkomNumerStacji": "5103403",
    "name": "Siechnice",
    "lat": "51.038333",
    "lon": "17.144164"
  },
  {
    "numerStacji": "1123",
    "bilkomNumerStacji": "5103404",
    "name": "Szczecin Zdroje",
    "lat": "53.37889",
    "lon": "14.637225"
  },
  {
    "numerStacji": "71530",
    "bilkomNumerStacji": "5103405",
    "name": "Sieraków Śląski",
    "lat": "50.799445",
    "lon": "18.592776"
  },
  {
    "numerStacji": "15727",
    "bilkomNumerStacji": "5103406",
    "name": "Silno",
    "lat": "53.644171",
    "lon": "17.693333"
  },
  {
    "numerStacji": "10637",
    "bilkomNumerStacji": "5103409",
    "name": "Siódmak",
    "lat": "53.524444",
    "lon": "20.971393"
  },
  {
    "numerStacji": "32706",
    "bilkomNumerStacji": "5103410",
    "name": "Sierpc",
    "lat": "52.847781",
    "lon": "19.653611"
  },
  {
    "numerStacji": "1214",
    "bilkomNumerStacji": "5103411",
    "name": "Szczecin Zdunowo",
    "lat": "53.383052",
    "lon": "14.765834"
  },
  {
    "numerStacji": "32532",
    "bilkomNumerStacji": "5103412",
    "name": "Sierpów",
    "lat": "52.018337",
    "lon": "19.222776"
  },
  {
    "numerStacji": "33043",
    "bilkomNumerStacji": "5103413",
    "name": "Sierakowice Skierniewickie",
    "lat": "51.998615",
    "lon": "20.061667"
  },
  {
    "numerStacji": "40881",
    "bilkomNumerStacji": "5103414",
    "name": "Sitno",
    "lat": "51.985832",
    "lon": "22.866113"
  },
  {
    "numerStacji": "3095",
    "bilkomNumerStacji": "5103416",
    "name": "Silnowo",
    "lat": "53.635002",
    "lon": "16.491664"
  },
  {
    "numerStacji": "49296",
    "bilkomNumerStacji": "5103418",
    "name": "Styków Iłżecki",
    "lat": "51.010835",
    "lon": "21.152778"
  },
  {
    "numerStacji": "264913",
    "bilkomNumerStacji": "5103420",
    "name": "Sieniawa Żarska",
    "lat": "51.636664",
    "lon": "15.062226"
  },
  {
    "numerStacji": "36830",
    "bilkomNumerStacji": "5103425",
    "name": "Świercze",
    "lat": "52.67028",
    "lon": "20.762781"
  },
  {
    "numerStacji": "78634",
    "bilkomNumerStacji": "5103426",
    "name": "Skawa",
    "lat": "49.630829",
    "lon": "19.88111"
  },
  {
    "numerStacji": "76943",
    "bilkomNumerStacji": "5103427",
    "name": "Skoczów Bładnice",
    "lat": "49.771393",
    "lon": "18.77861"
  },
  {
    "numerStacji": "20040",
    "bilkomNumerStacji": "5103430",
    "name": "Skępe",
    "lat": "52.872222",
    "lon": "19.341667"
  },
  {
    "numerStacji": "15552",
    "bilkomNumerStacji": "5103431",
    "name": "Skórka",
    "lat": "53.218613",
    "lon": "16.870002"
  },
  {
    "numerStacji": "26500",
    "bilkomNumerStacji": "5103432",
    "name": "Skwierzyna",
    "lat": "52.590554",
    "lon": "15.499722"
  },
  {
    "numerStacji": "45336",
    "bilkomNumerStacji": "5103434",
    "name": "Skalmierz",
    "lat": "51.697224",
    "lon": "18.430278"
  },
  {
    "numerStacji": "32441",
    "bilkomNumerStacji": "5103435",
    "name": "Sklęczki",
    "lat": "52.224999",
    "lon": "19.402776"
  },
  {
    "numerStacji": "31252",
    "bilkomNumerStacji": "5103437",
    "name": "Skoki",
    "lat": "52.674442",
    "lon": "17.162223"
  },
  {
    "numerStacji": "58826",
    "bilkomNumerStacji": "5103439",
    "name": "Skokowa",
    "lat": "51.381946",
    "lon": "16.850837"
  },
  {
    "numerStacji": "47563",
    "bilkomNumerStacji": "5103440",
    "name": "Skrzynki",
    "lat": "51.603053",
    "lon": "19.966112"
  },
  {
    "numerStacji": "78642",
    "bilkomNumerStacji": "5103441",
    "name": "Skawa Środkowa",
    "lat": "49.6125",
    "lon": "19.900553"
  },
  {
    "numerStacji": "32342",
    "bilkomNumerStacji": "5103444",
    "name": "Sierakówek",
    "lat": "52.372503",
    "lon": "19.421671"
  },
  {
    "numerStacji": "17731",
    "bilkomNumerStacji": "5103445",
    "name": "Skórzewo",
    "lat": "54.164997",
    "lon": "17.980835"
  },
  {
    "numerStacji": "17772",
    "bilkomNumerStacji": "5103449",
    "name": "Sławki",
    "lat": "54.257226",
    "lon": "18.176108"
  },
  {
    "numerStacji": "18549",
    "bilkomNumerStacji": "5103453",
    "name": "Ślesin",
    "lat": "53.156111",
    "lon": "17.701387"
  },
  {
    "numerStacji": "4440",
    "bilkomNumerStacji": "5103454",
    "name": "Słowienkowo",
    "lat": "54.207219",
    "lon": "15.942504"
  },
  {
    "numerStacji": "12666",
    "bilkomNumerStacji": "5103456",
    "name": "Sterławki Małe",
    "lat": "54.011668",
    "lon": "21.646942"
  },
  {
    "numerStacji": "17350",
    "bilkomNumerStacji": "5103457",
    "name": "Śliwice",
    "lat": "53.713334",
    "lon": "18.18222"
  },
  {
    "numerStacji": "39438",
    "bilkomNumerStacji": "5103458",
    "name": "Stok Lacki",
    "lat": "52.161391",
    "lon": "22.386107"
  },
  {
    "numerStacji": "31203",
    "bilkomNumerStacji": "5103460",
    "name": "Sława Wielkopolska",
    "lat": "52.63417",
    "lon": "17.143885"
  },
  {
    "numerStacji": "79384",
    "bilkomNumerStacji": "5103461",
    "name": "Słomniki",
    "lat": "50.248334",
    "lon": "20.064166"
  },
  {
    "numerStacji": "29447",
    "bilkomNumerStacji": "5103463",
    "name": "Słonice",
    "lat": "53.090831",
    "lon": "15.51833"
  },
  {
    "numerStacji": "45724",
    "bilkomNumerStacji": "5103464",
    "name": "Słupia",
    "lat": "51.251944",
    "lon": "18.041386"
  },
  {
    "numerStacji": "79376",
    "bilkomNumerStacji": "5103465",
    "name": "Słomniki Miasto",
    "lat": "50.23583",
    "lon": "20.076391"
  },
  {
    "numerStacji": "4564",
    "bilkomNumerStacji": "5103467",
    "name": "Słosinko",
    "lat": "53.93917",
    "lon": "16.974448"
  },
  {
    "numerStacji": "47506",
    "bilkomNumerStacji": "5103468",
    "name": "Słotwiny",
    "lat": "51.722223",
    "lon": "19.839445"
  },
  {
    "numerStacji": "30122",
    "bilkomNumerStacji": "5103469",
    "name": "Słupca",
    "lat": "52.287222",
    "lon": "17.852226"
  },
  {
    "numerStacji": "74252",
    "bilkomNumerStacji": "5103470",
    "name": "Sławków",
    "lat": "50.295554",
    "lon": "19.373893"
  },
  {
    "numerStacji": "49726",
    "bilkomNumerStacji": "5103471",
    "name": "Słomianka",
    "lat": "51.401389",
    "lon": "20.204443"
  },
  {
    "numerStacji": "63826",
    "bilkomNumerStacji": "5103472",
    "name": "Słowik Przystanek",
    "lat": "50.833613",
    "lon": "20.538608"
  },
  {
    "numerStacji": "61267",
    "bilkomNumerStacji": "5103474",
    "name": "Smardy",
    "lat": "50.99194",
    "lon": "18.145832"
  },
  {
    "numerStacji": "46946",
    "bilkomNumerStacji": "5103476",
    "name": "Smardzew",
    "lat": "51.871112",
    "lon": "19.467498"
  },
  {
    "numerStacji": "8474",
    "bilkomNumerStacji": "5103477",
    "name": "Smętówo",
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
    "numerStacji": "58883",
    "bilkomNumerStacji": "5103483",
    "name": "Smolec",
    "lat": "51.071665",
    "lon": "16.88167"
  },
  {
    "numerStacji": "21857",
    "bilkomNumerStacji": "5103485",
    "name": "Smolniki",
    "lat": "53.540004",
    "lon": "19.60444"
  },
  {
    "numerStacji": "48835",
    "bilkomNumerStacji": "5103487",
    "name": "Smogorzów Przysuski",
    "lat": "51.395277",
    "lon": "20.604445"
  },
  {
    "numerStacji": "79426",
    "bilkomNumerStacji": "5103489",
    "name": "Smroków",
    "lat": "50.274726",
    "lon": "20.046664"
  },
  {
    "numerStacji": "68379",
    "bilkomNumerStacji": "5103490",
    "name": "Sumina Wieś",
    "lat": "50.12111",
    "lon": "18.410555"
  },
  {
    "numerStacji": "7195",
    "bilkomNumerStacji": "5103492",
    "name": "Szymankowo",
    "lat": "54.072777",
    "lon": "18.926392"
  },
  {
    "numerStacji": "60145",
    "bilkomNumerStacji": "5103493",
    "name": "Smardzów Wrocławski",
    "lat": "51.03",
    "lon": "17.066111"
  },
  {
    "numerStacji": "65300",
    "bilkomNumerStacji": "5103500",
    "name": "Sandomierz",
    "lat": "50.660004",
    "lon": "21.764997"
  },
  {
    "numerStacji": "4739",
    "bilkomNumerStacji": "5103501",
    "name": "Słonowice",
    "lat": "54.3825",
    "lon": "16.925555"
  },
  {
    "numerStacji": "57901",
    "bilkomNumerStacji": "5103502",
    "name": "Ścinawka Średnia",
    "lat": "50.526388",
    "lon": "16.504725"
  },
  {
    "numerStacji": "1073",
    "bilkomNumerStacji": "5103505",
    "name": "Świnoujście Port",
    "lat": "53.90111",
    "lon": "14.260281"
  },
  {
    "numerStacji": "59626",
    "bilkomNumerStacji": "5103507",
    "name": "Solniki Wielkie",
    "lat": "51.154168",
    "lon": "17.493611"
  },
  {
    "numerStacji": "1180",
    "bilkomNumerStacji": "5103508",
    "name": "Szczecin Załom",
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
    "numerStacji": "1040",
    "bilkomNumerStacji": "5103511",
    "name": "Świnoujście Przytór",
    "lat": "53.897496",
    "lon": "14.336671"
  },
  {
    "numerStacji": "79640",
    "bilkomNumerStacji": "5103514",
    "name": "Stanisławice",
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
    "numerStacji": "37945",
    "bilkomNumerStacji": "5103517",
    "name": "Szewnica",
    "lat": "52.479726",
    "lon": "21.554164"
  },
  {
    "numerStacji": "78840",
    "bilkomNumerStacji": "5103518",
    "name": "Sieniawa",
    "lat": "49.538887",
    "lon": "19.923332"
  },
  {
    "numerStacji": "2998",
    "bilkomNumerStacji": "5103519",
    "name": "Szczecinek Chyże",
    "lat": "53.718053",
    "lon": "16.697778"
  },
  {
    "numerStacji": "63800",
    "bilkomNumerStacji": "5103520",
    "name": "Sitkówka-Nowiny",
    "lat": "50.818331",
    "lon": "20.550276"
  },
  {
    "numerStacji": "61598",
    "bilkomNumerStacji": "5103521",
    "name": "Staniszcze Male",
    "lat": "50.664445",
    "lon": "18.318056"
  },
  {
    "numerStacji": "39321",
    "bilkomNumerStacji": "5103522",
    "name": "Sobolew",
    "lat": "51.740831",
    "lon": "21.673891"
  },
  {
    "numerStacji": "51029",
    "bilkomNumerStacji": "5103524",
    "name": "Sobibór",
    "lat": "51.444169",
    "lon": "23.596945"
  },
  {
    "numerStacji": "34603",
    "bilkomNumerStacji": "5103525",
    "name": "Sochaczew",
    "lat": "52.21556",
    "lon": "20.239725"
  },
  {
    "numerStacji": "19844",
    "bilkomNumerStacji": "5103527",
    "name": "Solec Kujawski",
    "lat": "53.078336",
    "lon": "18.224721"
  },
  {
    "numerStacji": "2469",
    "bilkomNumerStacji": "5103528",
    "name": "Sokoliniec",
    "lat": "53.294167",
    "lon": "15.505556"
  },
  {
    "numerStacji": "76836",
    "bilkomNumerStacji": "5103533",
    "name": "Sól",
    "lat": "49.493887",
    "lon": "19.051109"
  },
  {
    "numerStacji": "17780",
    "bilkomNumerStacji": "5103534",
    "name": "Somonino",
    "lat": "54.27",
    "lon": "18.193052"
  },
  {
    "numerStacji": "46086",
    "bilkomNumerStacji": "5103536",
    "name": "Sośnie Ostrowskie",
    "lat": "51.47111",
    "lon": "17.639443"
  },
  {
    "numerStacji": "39842",
    "bilkomNumerStacji": "5103540",
    "name": "Sosnowe",
    "lat": "52.175837",
    "lon": "21.940556"
  },
  {
    "numerStacji": "264896",
    "bilkomNumerStacji": "5103542",
    "name": "Sokule",
    "lat": "51.9975",
    "lon": "22.954171"
  },
  {
    "numerStacji": "56754",
    "bilkomNumerStacji": "5103544",
    "name": "Sowin",
    "lat": "50.55528",
    "lon": "17.608888"
  },
  {
    "numerStacji": "63032",
    "bilkomNumerStacji": "5103549",
    "name": "Staropole Częstochowskie",
    "lat": "50.764719",
    "lon": "19.53"
  },
  {
    "numerStacji": "8714",
    "bilkomNumerStacji": "5103552",
    "name": "Szpęgawsk",
    "lat": "54.00667",
    "lon": "18.609442"
  },
  {
    "numerStacji": "33324",
    "bilkomNumerStacji": "5103556",
    "name": "Spławie",
    "lat": "52.258331",
    "lon": "18.086108"
  },
  {
    "numerStacji": "5959",
    "bilkomNumerStacji": "5103557",
    "name": "Sopot Kamienny Potok",
    "lat": "54.45667",
    "lon": "18.55361"
  },
  {
    "numerStacji": "43133",
    "bilkomNumerStacji": "5103561",
    "name": "Strykowo Poznańskie",
    "lat": "52.243607",
    "lon": "16.61389"
  },
  {
    "numerStacji": "10769",
    "bilkomNumerStacji": "5103565",
    "name": "Spychowo",
    "lat": "53.591386",
    "lon": "21.355556"
  },
  {
    "numerStacji": "79830",
    "bilkomNumerStacji": "5103567",
    "name": "Sterkowiec",
    "lat": "49.993885",
    "lon": "20.679163"
  },
  {
    "numerStacji": "69252",
    "bilkomNumerStacji": "5103568",
    "name": "Suszec Rudziczka",
    "lat": "50.045555",
    "lon": "18.755004"
  },
  {
    "numerStacji": "17343",
    "bilkomNumerStacji": "5103570",
    "name": "Śliwiczki",
    "lat": "53.68722",
    "lon": "18.193052"
  },
  {
    "numerStacji": "59048",
    "bilkomNumerStacji": "5103571",
    "name": "Środa Śląska",
    "lat": "51.189442",
    "lon": "16.605836"
  },
  {
    "numerStacji": "30205",
    "bilkomNumerStacji": "5103572",
    "name": "Środa Wielkopolska",
    "lat": "52.218059",
    "lon": "17.275002"
  },
  {
    "numerStacji": "14332",
    "bilkomNumerStacji": "5103573",
    "name": "Sarbiewo",
    "lat": "52.819447",
    "lon": "15.545837"
  },
  {
    "numerStacji": "71563",
    "bilkomNumerStacji": "5103576",
    "name": "Stare Olesno",
    "lat": "50.91528",
    "lon": "18.37556"
  },
  {
    "numerStacji": "48199",
    "bilkomNumerStacji": "5103577",
    "name": "Starachowice Michałów",
    "lat": "51.015276",
    "lon": "21.107499"
  },
  {
    "numerStacji": "53611",
    "bilkomNumerStacji": "5103579",
    "name": "Stary Jawor",
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
    "numerStacji": "7880",
    "bilkomNumerStacji": "5103586",
    "name": "Stare Pole",
    "lat": "54.053333",
    "lon": "19.205274"
  },
  {
    "numerStacji": "47035",
    "bilkomNumerStacji": "5103587",
    "name": "Skierniewice Rawka",
    "lat": "51.977499",
    "lon": "20.221387"
  },
  {
    "numerStacji": "56846",
    "bilkomNumerStacji": "5103588",
    "name": "Skoroszyce",
    "lat": "50.593331",
    "lon": "17.374998"
  },
  {
    "numerStacji": "16444",
    "bilkomNumerStacji": "5103590",
    "name": "Stara Łubianka",
    "lat": "53.231944",
    "lon": "16.704996"
  },
  {
    "numerStacji": "38935",
    "bilkomNumerStacji": "5103591",
    "name": "Stara Wieś",
    "lat": "52.082502",
    "lon": "21.361669"
  },
  {
    "numerStacji": "43349",
    "bilkomNumerStacji": "5103593",
    "name": "Starkowo",
    "lat": "51.978892",
    "lon": "16.3125"
  },
  {
    "numerStacji": "48058",
    "bilkomNumerStacji": "5103594",
    "name": "Skarżysko Zachodnie",
    "lat": "51.100556",
    "lon": "20.85972"
  },
  {
    "numerStacji": "48033",
    "bilkomNumerStacji": "5103595",
    "name": "Skarżysko Kościelne",
    "lat": "51.12222",
    "lon": "20.917782"
  },
  {
    "numerStacji": "50542",
    "bilkomNumerStacji": "5103596",
    "name": "Stasin Polny",
    "lat": "51.213614",
    "lon": "22.475001"
  },
  {
    "numerStacji": "56515",
    "bilkomNumerStacji": "5103597",
    "name": "Suszka",
    "lat": "50.530829",
    "lon": "16.823609"
  },
  {
    "numerStacji": "3327",
    "bilkomNumerStacji": "5103599",
    "name": "Suliszewo Drawskie",
    "lat": "53.517225",
    "lon": "15.892497"
  },
  {
    "numerStacji": "56168",
    "bilkomNumerStacji": "5103601",
    "name": "Szklarska Poręba Dolna",
    "lat": "50.848607",
    "lon": "15.557226"
  },
  {
    "numerStacji": "84327",
    "bilkomNumerStacji": "5103604",
    "name": "Sośnica Jarosławska",
    "lat": "49.901665",
    "lon": "22.851388"
  },
  {
    "numerStacji": "74971",
    "bilkomNumerStacji": "5103608",
    "name": "Sosnowiec Kazimierz",
    "lat": "50.288893",
    "lon": "19.231945"
  },
  {
    "numerStacji": "51532",
    "bilkomNumerStacji": "5103613",
    "name": "Szastarka",
    "lat": "50.853335",
    "lon": "22.331947"
  },
  {
    "numerStacji": "4911",
    "bilkomNumerStacji": "5103614",
    "name": "Strzyżyno Słupskie",
    "lat": "54.491108",
    "lon": "17.371663"
  },
  {
    "numerStacji": "23226",
    "bilkomNumerStacji": "5103615",
    "name": "Sztumska Wieś",
    "lat": "53.894718",
    "lon": "19.001111"
  },
  {
    "numerStacji": "75036",
    "bilkomNumerStacji": "5103616",
    "name": "Sosnowiec Porąbka",
    "lat": "50.272497",
    "lon": "19.216942"
  },
  {
    "numerStacji": "69260",
    "bilkomNumerStacji": "5103617",
    "name": "Suszec",
    "lat": "50.035002",
    "lon": "18.791941"
  },
  {
    "numerStacji": "5348",
    "bilkomNumerStacji": "5103623",
    "name": "Steknica",
    "lat": "54.714723",
    "lon": "17.582496"
  },
  {
    "numerStacji": "26286",
    "bilkomNumerStacji": "5103624",
    "name": "Stefanowo",
    "lat": "52.23611",
    "lon": "15.971944"
  },
  {
    "numerStacji": "48173",
    "bilkomNumerStacji": "5103626",
    "name": "Starachowice",
    "lat": "51.051385",
    "lon": "21.058607"
  },
  {
    "numerStacji": "79632",
    "bilkomNumerStacji": "5103627",
    "name": "Staniątki",
    "lat": "50.01056",
    "lon": "20.206942"
  },
  {
    "numerStacji": "11833",
    "bilkomNumerStacji": "5103628",
    "name": "Stare Juchy",
    "lat": "53.925003",
    "lon": "22.16917"
  },
  {
    "numerStacji": "4168",
    "bilkomNumerStacji": "5103631",
    "name": "Stramnica",
    "lat": "54.155001",
    "lon": "15.650274"
  },
  {
    "numerStacji": "16527",
    "bilkomNumerStacji": "5103632",
    "name": "Stronno",
    "lat": "53.285555",
    "lon": "18.059167"
  },
  {
    "numerStacji": "14522",
    "bilkomNumerStacji": "5103633",
    "name": "Stobno",
    "lat": "53.109169",
    "lon": "16.626664"
  },
  {
    "numerStacji": "82636",
    "bilkomNumerStacji": "5103635",
    "name": "Strażów",
    "lat": "50.067777",
    "lon": "22.116385"
  },
  {
    "numerStacji": "30536",
    "bilkomNumerStacji": "5103636",
    "name": "Stęszew",
    "lat": "52.280274",
    "lon": "16.709724"
  },
  {
    "numerStacji": "54247",
    "bilkomNumerStacji": "5103638",
    "name": "Studzianka",
    "lat": "51.427224",
    "lon": "15.695004"
  },
  {
    "numerStacji": "65052",
    "bilkomNumerStacji": "5103639",
    "name": "Stalowa Wola Południe",
    "lat": "50.544726",
    "lon": "22.07917"
  },
  {
    "numerStacji": "56432",
    "bilkomNumerStacji": "5103643",
    "name": "Starczów",
    "lat": "50.56417",
    "lon": "16.947219"
  },
  {
    "numerStacji": "32862",
    "bilkomNumerStacji": "5103644",
    "name": "Susk",
    "lat": "52.784721",
    "lon": "19.683329"
  },
  {
    "numerStacji": "8532",
    "bilkomNumerStacji": "5103646",
    "name": "Subkowy",
    "lat": "53.985833",
    "lon": "18.753611"
  },
  {
    "numerStacji": "48231",
    "bilkomNumerStacji": "5103648",
    "name": "Suchedniów",
    "lat": "51.04556",
    "lon": "20.850003"
  },
  {
    "numerStacji": "66241",
    "bilkomNumerStacji": "5103649",
    "name": "Susiec",
    "lat": "50.416109",
    "lon": "23.227218"
  },
  {
    "numerStacji": "36988",
    "bilkomNumerStacji": "5103651",
    "name": "Stupsk Mazowiecki",
    "lat": "53.019996",
    "lon": "20.435277"
  },
  {
    "numerStacji": "25312",
    "bilkomNumerStacji": "5103652",
    "name": "Suchowolce",
    "lat": "52.617774",
    "lon": "23.283329"
  },
  {
    "numerStacji": "2444",
    "bilkomNumerStacji": "5103653",
    "name": "Sulino",
    "lat": "53.31806",
    "lon": "15.315003"
  },
  {
    "numerStacji": "27300",
    "bilkomNumerStacji": "5103656",
    "name": "Sulechów",
    "lat": "52.092777",
    "lon": "15.618614"
  },
  {
    "numerStacji": "68338",
    "bilkomNumerStacji": "5103657",
    "name": "Sumina",
    "lat": "50.13667",
    "lon": "18.402501"
  },
  {
    "numerStacji": "51540",
    "bilkomNumerStacji": "5103659",
    "name": "Sułów",
    "lat": "50.905832",
    "lon": "22.333052"
  },
  {
    "numerStacji": "48249",
    "bilkomNumerStacji": "5103660",
    "name": "Suchedniów Północny",
    "lat": "51.065831",
    "lon": "20.849167"
  },
  {
    "numerStacji": "84723",
    "bilkomNumerStacji": "5103662",
    "name": "Surochów",
    "lat": "50.012502",
    "lon": "22.768885"
  },
  {
    "numerStacji": "22939",
    "bilkomNumerStacji": "5103663",
    "name": "Susz",
    "lat": "53.711114",
    "lon": "19.329163"
  },
  {
    "numerStacji": "18812",
    "bilkomNumerStacji": "5103664",
    "name": "Suchatówka",
    "lat": "52.910831",
    "lon": "18.481669"
  },
  {
    "numerStacji": "51037",
    "bilkomNumerStacji": "5103665",
    "name": "Stulno",
    "lat": "51.375276",
    "lon": "23.612226"
  },
  {
    "numerStacji": "36491",
    "bilkomNumerStacji": "5103666",
    "name": "Studzianki Nowe",
    "lat": "52.537221",
    "lon": "20.751391"
  },
  {
    "numerStacji": "60855",
    "bilkomNumerStacji": "5103669",
    "name": "Suchy Bór Opolski",
    "lat": "50.657226",
    "lon": "18.035552"
  },
  {
    "numerStacji": "30262",
    "bilkomNumerStacji": "5103672",
    "name": "Sulęcinek",
    "lat": "52.138891",
    "lon": "17.308891"
  },
  {
    "numerStacji": "8706",
    "bilkomNumerStacji": "5103673",
    "name": "Swarożyn",
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
    "numerStacji": "46920",
    "bilkomNumerStacji": "5103677",
    "name": "Swędów",
    "lat": "51.905837",
    "lon": "19.540275"
  },
  {
    "numerStacji": "1727",
    "bilkomNumerStacji": "5103678",
    "name": "Stawno",
    "lat": "53.867499",
    "lon": "14.827779"
  },
  {
    "numerStacji": "73148",
    "bilkomNumerStacji": "5103680",
    "name": "Świętochłowice",
    "lat": "50.288893",
    "lon": "18.918329"
  },
  {
    "numerStacji": "1057",
    "bilkomNumerStacji": "5103682",
    "name": "Świnoujście Warszów",
    "lat": "53.900274",
    "lon": "14.285837"
  },
  {
    "numerStacji": "81323",
    "bilkomNumerStacji": "5103683",
    "name": "Świlcza",
    "lat": "50.07806",
    "lon": "21.90139"
  },
  {
    "numerStacji": "50484",
    "bilkomNumerStacji": "5103684",
    "name": "Świdnik Miasto",
    "lat": "51.223888",
    "lon": "22.694724"
  },
  {
    "numerStacji": "50492",
    "bilkomNumerStacji": "5103685",
    "name": "Świdnik Wschód",
    "lat": "51.221111",
    "lon": "22.714447"
  },
  {
    "numerStacji": "9274",
    "bilkomNumerStacji": "5103686",
    "name": "Swobodna",
    "lat": "53.939997",
    "lon": "20.394448"
  },
  {
    "numerStacji": "28472",
    "bilkomNumerStacji": "5103688",
    "name": "Swarzędz",
    "lat": "52.404163",
    "lon": "17.074444"
  },
  {
    "numerStacji": "10728",
    "bilkomNumerStacji": "5103690",
    "name": "Świętajno",
    "lat": "53.56361",
    "lon": "21.231388"
  },
  {
    "numerStacji": "48611",
    "bilkomNumerStacji": "5103691",
    "name": "Sułkowice",
    "lat": "51.926665",
    "lon": "21.092496"
  },
  {
    "numerStacji": "6726",
    "bilkomNumerStacji": "5103692",
    "name": "Swarzewo",
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
    "numerStacji": "7070",
    "bilkomNumerStacji": "5103696",
    "name": "Skowarcz",
    "lat": "54.184171",
    "lon": "18.683333"
  },
  {
    "numerStacji": "12377",
    "bilkomNumerStacji": "5103697",
    "name": "Szeroki Bór",
    "lat": "53.639443",
    "lon": "21.673334"
  },
  {
    "numerStacji": "48082",
    "bilkomNumerStacji": "5103698",
    "name": "Szydłowiec",
    "lat": "51.207501",
    "lon": "20.923337"
  },
  {
    "numerStacji": "58230",
    "bilkomNumerStacji": "5103699",
    "name": "Święta Katarzyna",
    "lat": "51.029721",
    "lon": "17.123057"
  },
  {
    "numerStacji": "58768",
    "bilkomNumerStacji": "5103706",
    "name": "Szewce",
    "lat": "51.214998",
    "lon": "16.955274"
  },
  {
    "numerStacji": "78444",
    "bilkomNumerStacji": "5103710",
    "name": "Stryszawa",
    "lat": "49.734169",
    "lon": "19.526108"
  },
  {
    "numerStacji": "24695",
    "bilkomNumerStacji": "5103711",
    "name": "Szymbory",
    "lat": "52.892502",
    "lon": "22.605282"
  },
  {
    "numerStacji": "25361",
    "bilkomNumerStacji": "5103712",
    "name": "Sycze",
    "lat": "52.429719",
    "lon": "22.999998"
  },
  {
    "numerStacji": "34223",
    "bilkomNumerStacji": "5103713",
    "name": "Sucha Żyrardowska",
    "lat": "52.022778",
    "lon": "20.359444"
  },
  {
    "numerStacji": "60749",
    "bilkomNumerStacji": "5103715",
    "name": "Szydłów",
    "lat": "50.606114",
    "lon": "17.705001"
  },
  {
    "numerStacji": "51821",
    "bilkomNumerStacji": "5103716",
    "name": "Stary Węgliniec",
    "lat": "51.307218",
    "lon": "15.195276"
  },
  {
    "numerStacji": "57513",
    "bilkomNumerStacji": "5103717",
    "name": "Szczytna",
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
    "numerStacji": "34447",
    "bilkomNumerStacji": "5103722",
    "name": "Teresin Niepokalanów",
    "lat": "52.201942",
    "lon": "20.416948"
  },
  {
    "numerStacji": "49072",
    "bilkomNumerStacji": "5103724",
    "name": "Skrzynno",
    "lat": "51.36528",
    "lon": "20.721385"
  },
  {
    "numerStacji": "78477",
    "bilkomNumerStacji": "5103726",
    "name": "Stryszów",
    "lat": "49.825553",
    "lon": "19.62222"
  },
  {
    "numerStacji": "82032",
    "bilkomNumerStacji": "5103727",
    "name": "Stary Sącz",
    "lat": "49.558888",
    "lon": "20.643332"
  },
  {
    "numerStacji": "29439",
    "bilkomNumerStacji": "5103728",
    "name": "Stary Klukom",
    "lat": "53.131948",
    "lon": "15.455001"
  },
  {
    "numerStacji": "46847",
    "bilkomNumerStacji": "5103729",
    "name": "Stryków",
    "lat": "51.910835",
    "lon": "19.594165"
  },
  {
    "numerStacji": "57489",
    "bilkomNumerStacji": "5103730",
    "name": "Stary Wielisław",
    "lat": "50.404998",
    "lon": "16.576109"
  },
  {
    "numerStacji": "82784",
    "bilkomNumerStacji": "5103733",
    "name": "Strzyżów nad Wisłokiem",
    "lat": "49.869169",
    "lon": "21.800558"
  },
  {
    "numerStacji": "40899",
    "bilkomNumerStacji": "5103734",
    "name": "Szachy",
    "lat": "51.991666",
    "lon": "22.910555"
  },
  {
    "numerStacji": "82883",
    "bilkomNumerStacji": "5103735",
    "name": "Szebnie",
    "lat": "49.755554",
    "lon": "21.613052"
  },
  {
    "numerStacji": "12930",
    "bilkomNumerStacji": "5103736",
    "name": "Szczepki",
    "lat": "53.966947",
    "lon": "22.984447"
  },
  {
    "numerStacji": "78956",
    "bilkomNumerStacji": "5103737",
    "name": "Szaflary",
    "lat": "49.43944",
    "lon": "20.017503"
  },
  {
    "numerStacji": "9027",
    "bilkomNumerStacji": "5103739",
    "name": "Szlachta",
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
    "numerStacji": "56176",
    "bilkomNumerStacji": "5103742",
    "name": "Szklarska Poręba Średnia",
    "lat": "50.838611",
    "lon": "15.540003"
  },
  {
    "numerStacji": "30486",
    "bilkomNumerStacji": "5103745",
    "name": "Szreniawa",
    "lat": "52.317498",
    "lon": "16.799167"
  },
  {
    "numerStacji": "30114",
    "bilkomNumerStacji": "5103748",
    "name": "Strzałkowo",
    "lat": "52.31028",
    "lon": "17.807775"
  },
  {
    "numerStacji": "61747",
    "bilkomNumerStacji": "5103750",
    "name": "Szymiszów",
    "lat": "50.52833",
    "lon": "18.223607"
  },
  {
    "numerStacji": "65466",
    "bilkomNumerStacji": "5103757",
    "name": "Tarnobrzeg",
    "lat": "50.568053",
    "lon": "21.696113"
  },
  {
    "numerStacji": "70169",
    "bilkomNumerStacji": "5103758",
    "name": "Taciszów",
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
    "numerStacji": "46045",
    "bilkomNumerStacji": "5103761",
    "name": "Tarchały Wielkie",
    "lat": "51.587223",
    "lon": "17.702502"
  },
  {
    "numerStacji": "16147",
    "bilkomNumerStacji": "5103762",
    "name": "Tarnowo Rogozińskie",
    "lat": "52.804165",
    "lon": "16.975275"
  },
  {
    "numerStacji": "40071",
    "bilkomNumerStacji": "5103764",
    "name": "Tarło",
    "lat": "51.506114",
    "lon": "22.688333"
  },
  {
    "numerStacji": "83360",
    "bilkomNumerStacji": "5103766",
    "name": "Tarnowiec",
    "lat": "49.736111",
    "lon": "21.577779"
  },
  {
    "numerStacji": "62059",
    "bilkomNumerStacji": "5103767",
    "name": "Tarnów Opolski",
    "lat": "50.572224",
    "lon": "18.077496"
  },
  {
    "numerStacji": "2428",
    "bilkomNumerStacji": "5103768",
    "name": "Tarnowo Pomorskie",
    "lat": "53.306392",
    "lon": "15.365837"
  },
  {
    "numerStacji": "51227",
    "bilkomNumerStacji": "5103772",
    "name": "Tarzymiechy",
    "lat": "50.854719",
    "lon": "23.122224"
  },
  {
    "numerStacji": "44859",
    "bilkomNumerStacji": "5103773",
    "name": "Taczanów",
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
    "numerStacji": "66449",
    "bilkomNumerStacji": "5103777",
    "name": "Tereszpol Biłgorajski",
    "lat": "50.574445",
    "lon": "22.885278"
  },
  {
    "numerStacji": "16907",
    "bilkomNumerStacji": "5103781",
    "name": "Terespol Pomorski",
    "lat": "53.409723",
    "lon": "18.351946"
  },
  {
    "numerStacji": "14761",
    "bilkomNumerStacji": "5103786",
    "name": "Tuczno Krajeńskie",
    "lat": "53.218891",
    "lon": "16.17528"
  },
  {
    "numerStacji": "37507",
    "bilkomNumerStacji": "5103787",
    "name": "Tłuszcz",
    "lat": "52.431391",
    "lon": "21.43583"
  },
  {
    "numerStacji": "17327",
    "bilkomNumerStacji": "5103788",
    "name": "Tlen",
    "lat": "53.614165",
    "lon": "18.266665"
  },
  {
    "numerStacji": "43034",
    "bilkomNumerStacji": "5103789",
    "name": "Tłoki",
    "lat": "52.116113",
    "lon": "16.172223"
  },
  {
    "numerStacji": "80671",
    "bilkomNumerStacji": "5103794",
    "name": "Tarnów Mościce",
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
    "numerStacji": "77271",
    "bilkomNumerStacji": "5103796",
    "name": "Nowy Bieruń",
    "lat": "50.073889",
    "lon": "19.184724"
  },
  {
    "numerStacji": "10264",
    "bilkomNumerStacji": "5103797",
    "name": "Tołkiny",
    "lat": "54.1125",
    "lon": "21.239164"
  },
  {
    "numerStacji": "53868",
    "bilkomNumerStacji": "5103799",
    "name": "Tomaszów Bolesławiecki",
    "lat": "51.286112",
    "lon": "15.679722"
  },
  {
    "numerStacji": "19752",
    "bilkomNumerStacji": "5103800",
    "name": "Toruń Czerniewice",
    "lat": "52.975553",
    "lon": "18.673337"
  },
  {
    "numerStacji": "46037",
    "bilkomNumerStacji": "5103806",
    "name": "Topola-Osiedle",
    "lat": "51.613058",
    "lon": "17.762226"
  },
  {
    "numerStacji": "28183",
    "bilkomNumerStacji": "5103807",
    "name": "Toporów",
    "lat": "52.260282",
    "lon": "15.26167"
  },
  {
    "numerStacji": "25981",
    "bilkomNumerStacji": "5103808",
    "name": "Torzym",
    "lat": "52.312779",
    "lon": "15.058334"
  },
  {
    "numerStacji": "70250",
    "bilkomNumerStacji": "5103809",
    "name": "Toszek",
    "lat": "50.441386",
    "lon": "18.513886"
  },
  {
    "numerStacji": "19794",
    "bilkomNumerStacji": "5103810",
    "name": "Toruń Miasto",
    "lat": "53.011942",
    "lon": "18.620004"
  },
  {
    "numerStacji": "19786",
    "bilkomNumerStacji": "5103811",
    "name": "Toruń Kluczyki",
    "lat": "52.98972",
    "lon": "18.57806"
  },
  {
    "numerStacji": "19901",
    "bilkomNumerStacji": "5103812",
    "name": "Toruń Wschodni",
    "lat": "53.026109",
    "lon": "18.633056"
  },
  {
    "numerStacji": "3210",
    "bilkomNumerStacji": "5103816",
    "name": "Turowo Pomorskie",
    "lat": "53.647218",
    "lon": "16.722777"
  },
  {
    "numerStacji": "3541",
    "bilkomNumerStacji": "5103818",
    "name": "Trąbki",
    "lat": "53.395278",
    "lon": "15.238055"
  },
  {
    "numerStacji": "241994",
    "bilkomNumerStacji": "5103819",
    "name": "Warszawa Lotnisko Chopina",
    "lat": "52.169724",
    "lon": "20.975834"
  },
  {
    "numerStacji": "81281",
    "bilkomNumerStacji": "5103821",
    "name": "Trzciana",
    "lat": "50.078609",
    "lon": "21.848057"
  },
  {
    "numerStacji": "1586",
    "bilkomNumerStacji": "5103831",
    "name": "Troszyn",
    "lat": "53.844163",
    "lon": "14.718614"
  },
  {
    "numerStacji": "24570",
    "bilkomNumerStacji": "5103832",
    "name": "Trypucie",
    "lat": "53.07083",
    "lon": "23.025276"
  },
  {
    "numerStacji": "30510",
    "bilkomNumerStacji": "5103833",
    "name": "Trzebaw Rosnówko",
    "lat": "52.29667",
    "lon": "16.768055"
  },
  {
    "numerStacji": "50666",
    "bilkomNumerStacji": "5103837",
    "name": "Trawniki",
    "lat": "51.13556",
    "lon": "22.994164"
  },
  {
    "numerStacji": "83147",
    "bilkomNumerStacji": "5103838",
    "name": "Tryńcza",
    "lat": "50.137218",
    "lon": "22.538609"
  },
  {
    "numerStacji": "55962",
    "bilkomNumerStacji": "5103839",
    "name": "Trzcińsko",
    "lat": "50.883611",
    "lon": "15.871112"
  },
  {
    "numerStacji": "20784",
    "bilkomNumerStacji": "5103841",
    "name": "Turzno",
    "lat": "53.100836",
    "lon": "18.736387"
  },
  {
    "numerStacji": "15750",
    "bilkomNumerStacji": "5103842",
    "name": "Tuchola",
    "lat": "53.584168",
    "lon": "17.859166"
  },
  {
    "numerStacji": "65227",
    "bilkomNumerStacji": "5103843",
    "name": "Turbia",
    "lat": "50.617782",
    "lon": "21.972504"
  },
  {
    "numerStacji": "22467",
    "bilkomNumerStacji": "5103845",
    "name": "Turza Wielka",
    "lat": "53.303615",
    "lon": "20.08556"
  },
  {
    "numerStacji": "80986",
    "bilkomNumerStacji": "5103846",
    "name": "Tuchow",
    "lat": "49.891948",
    "lon": "21.056944"
  },
  {
    "numerStacji": "61374",
    "bilkomNumerStacji": "5103850",
    "name": "Tuły",
    "lat": "50.874163",
    "lon": "18.099996"
  },
  {
    "numerStacji": "63776",
    "bilkomNumerStacji": "5103851",
    "name": "Tumlin",
    "lat": "50.966392",
    "lon": "20.602224"
  },
  {
    "numerStacji": "21543",
    "bilkomNumerStacji": "5103852",
    "name": "Turzno Kujawskie",
    "lat": "52.833614",
    "lon": "18.78056"
  },
  {
    "numerStacji": "26344",
    "bilkomNumerStacji": "5103853",
    "name": "Tuchorza",
    "lat": "52.167504",
    "lon": "16.047498"
  },
  {
    "numerStacji": "41749",
    "bilkomNumerStacji": "5103854",
    "name": "Tuplice Debinka",
    "lat": "51.666113",
    "lon": "14.909724"
  },
  {
    "numerStacji": "62851",
    "bilkomNumerStacji": "5103855",
    "name": "Turów",
    "lat": "50.767776",
    "lon": "19.317504"
  },
  {
    "numerStacji": "32243",
    "bilkomNumerStacji": "5103859",
    "name": "Turzynów",
    "lat": "52.230554",
    "lon": "19.027224"
  },
  {
    "numerStacji": "22491",
    "bilkomNumerStacji": "5103860",
    "name": "Tuczki",
    "lat": "53.352219",
    "lon": "19.954722"
  },
  {
    "numerStacji": "67447",
    "bilkomNumerStacji": "5103864",
    "name": "Twardawa",
    "lat": "50.347224",
    "lon": "17.999164"
  },
  {
    "numerStacji": "68890",
    "bilkomNumerStacji": "5103866",
    "name": "Tworków",
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
    "numerStacji": "75978",
    "bilkomNumerStacji": "5103869",
    "name": "Tychy Żwaków",
    "lat": "50.109999",
    "lon": "18.953054"
  },
  {
    "numerStacji": "3962",
    "bilkomNumerStacji": "5103870",
    "name": "Tychowo",
    "lat": "53.921389",
    "lon": "16.235004"
  },
  {
    "numerStacji": "75960",
    "bilkomNumerStacji": "5103873",
    "name": "Kobiór",
    "lat": "50.065835",
    "lon": "18.923336"
  },
  {
    "numerStacji": "4465",
    "bilkomNumerStacji": "5103876",
    "name": "Tymień",
    "lat": "54.205278",
    "lon": "15.844719"
  },
  {
    "numerStacji": "73742",
    "bilkomNumerStacji": "5103882",
    "name": "Tychy Zachodnie",
    "lat": "50.12111",
    "lon": "18.978889"
  },
  {
    "numerStacji": "32078",
    "bilkomNumerStacji": "5103888",
    "name": "Trzemeszno",
    "lat": "52.569996",
    "lon": "17.818058"
  },
  {
    "numerStacji": "59394",
    "bilkomNumerStacji": "5103889",
    "name": "Trzebnica",
    "lat": "51.304171",
    "lon": "17.063054"
  },
  {
    "numerStacji": "26542",
    "bilkomNumerStacji": "5103891",
    "name": "Trzebiszewo",
    "lat": "52.625558",
    "lon": "15.40556"
  },
  {
    "numerStacji": "52597",
    "bilkomNumerStacji": "5103894",
    "name": "Ubocze",
    "lat": "51.055835",
    "lon": "15.419997"
  },
  {
    "numerStacji": "37937",
    "bilkomNumerStacji": "5103897",
    "name": "Urle",
    "lat": "52.506667",
    "lon": "21.620558"
  },
  {
    "numerStacji": "50989",
    "bilkomNumerStacji": "5103902",
    "name": "Uhrusk",
    "lat": "51.319444",
    "lon": "23.619166"
  },
  {
    "numerStacji": "2212",
    "bilkomNumerStacji": "5103903",
    "name": "Ulikowo",
    "lat": "53.348615",
    "lon": "15.117501"
  },
  {
    "numerStacji": "20412",
    "bilkomNumerStacji": "5103907",
    "name": "Unisław Pomorski",
    "lat": "53.206666",
    "lon": "18.384163"
  },
  {
    "numerStacji": "9621",
    "bilkomNumerStacji": "5103909",
    "name": "Unieszewo",
    "lat": "53.729164",
    "lon": "20.299998"
  },
  {
    "numerStacji": "77057",
    "bilkomNumerStacji": "5103914",
    "name": "Ustroń Polana",
    "lat": "49.696666",
    "lon": "18.830001"
  },
  {
    "numerStacji": "33936",
    "bilkomNumerStacji": "5103915",
    "name": "Ustanówek",
    "lat": "51.99528",
    "lon": "21.061115"
  },
  {
    "numerStacji": "76950",
    "bilkomNumerStacji": "5103916",
    "name": "Ustroń",
    "lat": "49.728056",
    "lon": "18.80306"
  },
  {
    "numerStacji": "50971",
    "bilkomNumerStacji": "5103917",
    "name": "Uhrusk Przystanek",
    "lat": "51.295829",
    "lon": "23.618887"
  },
  {
    "numerStacji": "24547",
    "bilkomNumerStacji": "5103918",
    "name": "Uhowo",
    "lat": "53.003887",
    "lon": "22.908056"
  },
  {
    "numerStacji": "76968",
    "bilkomNumerStacji": "5103919",
    "name": "Ustroń Zdrój",
    "lat": "49.721386",
    "lon": "18.815555"
  },
  {
    "numerStacji": "38539",
    "bilkomNumerStacji": "5103920",
    "name": "Warszawa Gocławek",
    "lat": "52.236946",
    "lon": "21.135554"
  },
  {
    "numerStacji": "84343",
    "bilkomNumerStacji": "5103921",
    "name": "Walawa",
    "lat": "49.859443",
    "lon": "22.855281"
  },
  {
    "numerStacji": "38661",
    "bilkomNumerStacji": "5103922",
    "name": "Warszawa Rembertów",
    "lat": "52.256947",
    "lon": "21.158333"
  },
  {
    "numerStacji": "36160",
    "bilkomNumerStacji": "5103923",
    "name": "Warszawa Choszczówka",
    "lat": "52.358057",
    "lon": "20.97222"
  },
  {
    "numerStacji": "78204",
    "bilkomNumerStacji": "5103924",
    "name": "Wadowice",
    "lat": "49.884999",
    "lon": "19.501945"
  },
  {
    "numerStacji": "33449",
    "bilkomNumerStacji": "5103925",
    "name": "Warszawa Gołąbki",
    "lat": "52.208333",
    "lon": "20.863891"
  },
  {
    "numerStacji": "55327",
    "bilkomNumerStacji": "5103926",
    "name": "Wałbrzych Fabryczny",
    "lat": "50.761393",
    "lon": "16.2675"
  },
  {
    "numerStacji": "38745",
    "bilkomNumerStacji": "5103927",
    "name": "Warszawa Olszynka Grochowska",
    "lat": "52.249998",
    "lon": "21.106663"
  },
  {
    "numerStacji": "38810",
    "bilkomNumerStacji": "5103932",
    "name": "Warszawa Miedzeszyn",
    "lat": "52.172781",
    "lon": "21.200277"
  },
  {
    "numerStacji": "50617",
    "bilkomNumerStacji": "5103933",
    "name": "Wandzin",
    "lat": "51.398612",
    "lon": "22.630002"
  },
  {
    "numerStacji": "33498",
    "bilkomNumerStacji": "5103934",
    "name": "Warszawa Ochota",
    "lat": "52.22560442839062",
    "lon": "20.990560054779056"
  },
  {
    "numerStacji": "9464",
    "bilkomNumerStacji": "5103935",
    "name": "Waplewo",
    "lat": "53.51194",
    "lon": "20.353888"
  },
  {
    "numerStacji": "48504",
    "bilkomNumerStacji": "5103937",
    "name": "Warka",
    "lat": "51.79278",
    "lon": "21.17028"
  },
  {
    "numerStacji": "24190",
    "bilkomNumerStacji": "5103938",
    "name": "Wasilków",
    "lat": "53.197776",
    "lon": "23.176663"
  },
  {
    "numerStacji": "33530",
    "bilkomNumerStacji": "5103940",
    "name": "Warszawa Ursus",
    "lat": "52.196665",
    "lon": "20.886113"
  },
  {
    "numerStacji": "76737",
    "bilkomNumerStacji": "5103941",
    "name": "Węgierska Górka",
    "lat": "49.603331",
    "lon": "19.117782"
  },
  {
    "numerStacji": "38737",
    "bilkomNumerStacji": "5103942",
    "name": "Warszawa Wawer",
    "lat": "52.223615",
    "lon": "21.149721"
  },
  {
    "numerStacji": "178111",
    "bilkomNumerStacji": "5103945",
    "name": "Brzezie",
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
    "numerStacji": "54254",
    "bilkomNumerStacji": "5103949",
    "name": "Wierzbowa Śląska",
    "lat": "51.39667",
    "lon": "15.759169"
  },
  {
    "numerStacji": "20743",
    "bilkomNumerStacji": "5103950",
    "name": "Wąbrzeźno",
    "lat": "53.265276",
    "lon": "18.982224"
  },
  {
    "numerStacji": "33845",
    "bilkomNumerStacji": "5103952",
    "name": "Warszawa Dawidy",
    "lat": "52.128608",
    "lon": "20.991107"
  },
  {
    "numerStacji": "48165",
    "bilkomNumerStacji": "5103955",
    "name": "Wąchock",
    "lat": "51.080277",
    "lon": "21.015279"
  },
  {
    "numerStacji": "21717",
    "bilkomNumerStacji": "5103957",
    "name": "Warząchewka",
    "lat": "52.58472",
    "lon": "19.080836"
  },
  {
    "numerStacji": "80440",
    "bilkomNumerStacji": "5103959",
    "name": "Wieliczka Park",
    "lat": "49.989166",
    "lon": "20.049163"
  },
  {
    "numerStacji": "18770",
    "bilkomNumerStacji": "5103960",
    "name": "Wieclawice",
    "lat": "52.841947",
    "lon": "18.306388"
  },
  {
    "numerStacji": "82743",
    "bilkomNumerStacji": "5103961",
    "name": "Wisłoczanka",
    "lat": "49.951942",
    "lon": "21.914721"
  },
  {
    "numerStacji": "82578",
    "bilkomNumerStacji": "5103962",
    "name": "Wierchomla Wielka",
    "lat": "49.402224",
    "lon": "20.755832"
  },
  {
    "numerStacji": "14738",
    "bilkomNumerStacji": "5103963",
    "name": "Wałcz Raduń",
    "lat": "53.276944",
    "lon": "16.458611"
  },
  {
    "numerStacji": "18788",
    "bilkomNumerStacji": "5103964",
    "name": "Wierzchosławice",
    "lat": "52.869166",
    "lon": "18.359721"
  },
  {
    "numerStacji": "81141",
    "bilkomNumerStacji": "5103966",
    "name": "Wilczyska",
    "lat": "49.676386",
    "lon": "20.942223"
  },
  {
    "numerStacji": "14704",
    "bilkomNumerStacji": "5103967",
    "name": "Wałcz",
    "lat": "53.275002",
    "lon": "16.484167"
  },
  {
    "numerStacji": "68320",
    "bilkomNumerStacji": "5103968",
    "name": "Rydułtowy",
    "lat": "50.068891",
    "lon": "18.426107"
  },
  {
    "numerStacji": "4721",
    "bilkomNumerStacji": "5103969",
    "name": "Widzino",
    "lat": "54.428336",
    "lon": "16.961944"
  },
  {
    "numerStacji": "68445",
    "bilkomNumerStacji": "5103970",
    "name": "Wodzisław Śląski Radlin",
    "lat": "50.01972",
    "lon": "18.480833"
  },
  {
    "numerStacji": "68460",
    "bilkomNumerStacji": "5103971",
    "name": "Radlin Obszary",
    "lat": "50.04",
    "lon": "18.495836"
  },
  {
    "numerStacji": "280983",
    "bilkomNumerStacji": "5103972",
    "name": "Widzów Teklinów",
    "lat": "50.982222",
    "lon": "19.368329"
  },
  {
    "numerStacji": "79533",
    "bilkomNumerStacji": "5103980",
    "name": "Węgrzce Wielkie",
    "lat": "50.018615",
    "lon": "20.105552"
  },
  {
    "numerStacji": "60178",
    "bilkomNumerStacji": "5103981",
    "name": "Węgry",
    "lat": "50.926112",
    "lon": "17.032779"
  },
  {
    "numerStacji": "6312",
    "bilkomNumerStacji": "5103982",
    "name": "Wejherowo Śmiechowo",
    "lat": "54.601945",
    "lon": "18.274441"
  },
  {
    "numerStacji": "6320",
    "bilkomNumerStacji": "5103984",
    "name": "Wejherowo-Nanice",
    "lat": "54.603608",
    "lon": "18.24972"
  },
  {
    "numerStacji": "4499",
    "bilkomNumerStacji": "5103985",
    "name": "Wiekowo",
    "lat": "54.303332",
    "lon": "16.38694"
  },
  {
    "numerStacji": "3970",
    "bilkomNumerStacji": "5103986",
    "name": "Wielanowo",
    "lat": "53.873612",
    "lon": "16.326388"
  },
  {
    "numerStacji": "84863",
    "bilkomNumerStacji": "5103991",
    "name": "Werchrata",
    "lat": "50.248334",
    "lon": "23.485829"
  },
  {
    "numerStacji": "45682",
    "bilkomNumerStacji": "5103994",
    "name": "Wieluń",
    "lat": "51.223888",
    "lon": "18.581944"
  },
  {
    "numerStacji": "3574",
    "bilkomNumerStacji": "5104000",
    "name": "Węgorzyno",
    "lat": "53.54333",
    "lon": "15.565002"
  },
  {
    "numerStacji": "31302",
    "bilkomNumerStacji": "5104001",
    "name": "Wągrowiec",
    "lat": "52.809442",
    "lon": "17.201947"
  },
  {
    "numerStacji": "28670",
    "bilkomNumerStacji": "5104002",
    "name": "Wargowo",
    "lat": "52.584442",
    "lon": "16.822782"
  },
  {
    "numerStacji": "47324",
    "bilkomNumerStacji": "5104003",
    "name": "Wągry",
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
    "numerStacji": "869",
    "bilkomNumerStacji": "5104008",
    "name": "Widuchowa",
    "lat": "53.123615",
    "lon": "14.446115"
  },
  {
    "numerStacji": "82966",
    "bilkomNumerStacji": "5104009",
    "name": "Widełka",
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
    "numerStacji": "16592",
    "bilkomNumerStacji": "5104013",
    "name": "Wierzchucin",
    "lat": "53.548058",
    "lon": "18.112779"
  },
  {
    "numerStacji": "21741",
    "bilkomNumerStacji": "5104016",
    "name": "Wiktorowo",
    "lat": "52.464166",
    "lon": "19.106392"
  },
  {
    "numerStacji": "45617",
    "bilkomNumerStacji": "5104018",
    "name": "Wieruszów Miasto",
    "lat": "51.299721",
    "lon": "18.16444"
  },
  {
    "numerStacji": "9738",
    "bilkomNumerStacji": "5104021",
    "name": "Wipsowo",
    "lat": "53.894718",
    "lon": "20.79694"
  },
  {
    "numerStacji": "30494",
    "bilkomNumerStacji": "5104023",
    "name": "Wiry",
    "lat": "52.315278",
    "lon": "16.86806"
  },
  {
    "numerStacji": "82842",
    "bilkomNumerStacji": "5104024",
    "name": "Wiśniowa",
    "lat": "49.866391",
    "lon": "21.652218"
  },
  {
    "numerStacji": "34371",
    "bilkomNumerStacji": "5104025",
    "name": "Witanów",
    "lat": "52.185833",
    "lon": "20.572776"
  },
  {
    "numerStacji": "49049",
    "bilkomNumerStacji": "5104028",
    "name": "Wieniawa",
    "lat": "51.363329",
    "lon": "20.790557"
  },
  {
    "numerStacji": "17764",
    "bilkomNumerStacji": "5104030",
    "name": "Wieżyca",
    "lat": "54.234448",
    "lon": "18.127503"
  },
  {
    "numerStacji": "33878",
    "bilkomNumerStacji": "5104032",
    "name": "Warszawa Jeziorki",
    "lat": "52.109164",
    "lon": "20.993336"
  },
  {
    "numerStacji": "82875",
    "bilkomNumerStacji": "5104033",
    "name": "Wojaszówka",
    "lat": "49.776391",
    "lon": "21.659167"
  },
  {
    "numerStacji": "27243",
    "bilkomNumerStacji": "5104037",
    "name": "Wojnowice Wielkopolskie",
    "lat": "52.326946",
    "lon": "16.467222"
  },
  {
    "numerStacji": "76372",
    "bilkomNumerStacji": "5104042",
    "name": "Wilkowice Bystra",
    "lat": "49.76111",
    "lon": "19.087497"
  },
  {
    "numerStacji": "28159",
    "bilkomNumerStacji": "5104044",
    "name": "Wilkowo Świebodzińskie",
    "lat": "52.256389",
    "lon": "15.468611"
  },
  {
    "numerStacji": "80937",
    "bilkomNumerStacji": "5104047",
    "name": "Wałki",
    "lat": "50.050553",
    "lon": "21.142503"
  },
  {
    "numerStacji": "51359",
    "bilkomNumerStacji": "5104049",
    "name": "Wilkołaz",
    "lat": "50.985557",
    "lon": "22.328612"
  },
  {
    "numerStacji": "62398",
    "bilkomNumerStacji": "5104050",
    "name": "Wilków Namysłowski",
    "lat": "51.094165",
    "lon": "17.659165"
  },
  {
    "numerStacji": "59840",
    "bilkomNumerStacji": "5104052",
    "name": "Warkocz",
    "lat": "50.828057",
    "lon": "17.046946"
  },
  {
    "numerStacji": "36731",
    "bilkomNumerStacji": "5104054",
    "name": "Wkra",
    "lat": "52.58472",
    "lon": "20.57167"
  },
  {
    "numerStacji": "47811",
    "bilkomNumerStacji": "5104055",
    "name": "Wilkoszewice",
    "lat": "51.251665",
    "lon": "19.630553"
  },
  {
    "numerStacji": "42952",
    "bilkomNumerStacji": "5104057",
    "name": "Wilkowice",
    "lat": "51.886663",
    "lon": "16.541392"
  },
  {
    "numerStacji": "77032",
    "bilkomNumerStacji": "5104058",
    "name": "Wisła Kopydło",
    "lat": "49.634721",
    "lon": "18.870003"
  },
  {
    "numerStacji": "51342",
    "bilkomNumerStacji": "5104059",
    "name": "Wilkołaz Wieś",
    "lat": "51.007221",
    "lon": "22.336109"
  },
  {
    "numerStacji": "6742",
    "bilkomNumerStacji": "5104061",
    "name": "Władysławowo",
    "lat": "54.793891",
    "lon": "18.401944"
  },
  {
    "numerStacji": "74377",
    "bilkomNumerStacji": "5104062",
    "name": "Wolbrom",
    "lat": "50.376107",
    "lon": "19.772502"
  },
  {
    "numerStacji": "51045",
    "bilkomNumerStacji": "5104063",
    "name": "Włodawa",
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
    "numerStacji": "42978",
    "bilkomNumerStacji": "5104065",
    "name": "Włoszakowice",
    "lat": "51.932778",
    "lon": "16.373609"
  },
  {
    "numerStacji": "20644",
    "bilkomNumerStacji": "5104067",
    "name": "Wałdowo Szlacheckie",
    "lat": "53.387223",
    "lon": "18.722778"
  },
  {
    "numerStacji": "80168",
    "bilkomNumerStacji": "5104068",
    "name": "Wola Radziszowska",
    "lat": "49.906942",
    "lon": "19.778336"
  },
  {
    "numerStacji": "49148",
    "bilkomNumerStacji": "5104070",
    "name": "Wola Lipieniecka",
    "lat": "51.2775",
    "lon": "21.026947"
  },
  {
    "numerStacji": "36350",
    "bilkomNumerStacji": "5104071",
    "name": "Wołomin Słoneczna",
    "lat": "52.354165",
    "lon": "21.25583"
  },
  {
    "numerStacji": "6817",
    "bilkomNumerStacji": "5104073",
    "name": "Władysławowo Port",
    "lat": "54.793613",
    "lon": "18.417774"
  },
  {
    "numerStacji": "39271",
    "bilkomNumerStacji": "5104074",
    "name": "Wola Rowska",
    "lat": "51.821671",
    "lon": "21.601115"
  },
  {
    "numerStacji": "44172",
    "bilkomNumerStacji": "5104076",
    "name": "Włostowo",
    "lat": "51.753056",
    "lon": "17.02556"
  },
  {
    "numerStacji": "21642",
    "bilkomNumerStacji": "5104079",
    "name": "Włocławek Zazamcze",
    "lat": "52.667781",
    "lon": "19.039171"
  },
  {
    "numerStacji": "38778",
    "bilkomNumerStacji": "5104080",
    "name": "Warszawa Międzylesie",
    "lat": "52.203892",
    "lon": "21.169165"
  },
  {
    "numerStacji": "64774",
    "bilkomNumerStacji": "5104082",
    "name": "Wierna Rzeka",
    "lat": "50.865282",
    "lon": "20.313059"
  },
  {
    "numerStacji": "4879",
    "bilkomNumerStacji": "5104083",
    "name": "Wrześnica",
    "lat": "54.403337",
    "lon": "16.780281"
  },
  {
    "numerStacji": "66068",
    "bilkomNumerStacji": "5104084",
    "name": "Wólka Niedzieliska",
    "lat": "50.708609",
    "lon": "23.08722"
  },
  {
    "numerStacji": "1610",
    "bilkomNumerStacji": "5104089",
    "name": "Warnowo",
    "lat": "53.928059",
    "lon": "14.533607"
  },
  {
    "numerStacji": "63883",
    "bilkomNumerStacji": "5104092",
    "name": "Wolica",
    "lat": "50.75333",
    "lon": "20.469723"
  },
  {
    "numerStacji": "48447",
    "bilkomNumerStacji": "5104093",
    "name": "Wola Bierwiecka",
    "lat": "51.543886",
    "lon": "21.177498"
  },
  {
    "numerStacji": "68403",
    "bilkomNumerStacji": "5104095",
    "name": "Wodzisław Śląski",
    "lat": "50.007774",
    "lon": "18.476671"
  },
  {
    "numerStacji": "46243",
    "bilkomNumerStacji": "5104096",
    "name": "Wolenice",
    "lat": "51.774163",
    "lon": "17.438057"
  },
  {
    "numerStacji": "77586",
    "bilkomNumerStacji": "5104097",
    "name": "Wola Filipowska",
    "lat": "50.130836",
    "lon": "19.57722"
  },
  {
    "numerStacji": "38687",
    "bilkomNumerStacji": "5104098",
    "name": "Warszawa Wola Grzybowska",
    "lat": "52.252776",
    "lon": "21.252225"
  },
  {
    "numerStacji": "55954",
    "bilkomNumerStacji": "5104100",
    "name": "Wojanów",
    "lat": "50.884725",
    "lon": "15.821671"
  },
  {
    "numerStacji": "48454",
    "bilkomNumerStacji": "5104102",
    "name": "Wolanów",
    "lat": "51.353333",
    "lon": "20.998613"
  },
  {
    "numerStacji": "36343",
    "bilkomNumerStacji": "5104103",
    "name": "Wołomin",
    "lat": "52.346111",
    "lon": "21.237501"
  },
  {
    "numerStacji": "61283",
    "bilkomNumerStacji": "5104104",
    "name": "Wołczyn",
    "lat": "51.013613",
    "lon": "18.046115"
  },
  {
    "numerStacji": "9548",
    "bilkomNumerStacji": "5104105",
    "name": "Wołowno",
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
    "numerStacji": "3475",
    "bilkomNumerStacji": "5104107",
    "name": "Worowo",
    "lat": "53.688892",
    "lon": "15.635001"
  },
  {
    "numerStacji": "11841",
    "bilkomNumerStacji": "5104108",
    "name": "Woszczele",
    "lat": "53.859445",
    "lon": "22.249722"
  },
  {
    "numerStacji": "24224",
    "bilkomNumerStacji": "5104109",
    "name": "Wólka Ratowiecka",
    "lat": "53.278885",
    "lon": "23.242779"
  },
  {
    "numerStacji": "259553",
    "bilkomNumerStacji": "5104110",
    "name": "Wólka Orłowska",
    "lat": "50.926948",
    "lon": "23.183333"
  },
  {
    "numerStacji": "30098",
    "bilkomNumerStacji": "5104111",
    "name": "Wólka",
    "lat": "52.321669",
    "lon": "17.753336"
  },
  {
    "numerStacji": "43000",
    "bilkomNumerStacji": "5104114",
    "name": "Wolsztyn",
    "lat": "52.111663",
    "lon": "16.10778"
  },
  {
    "numerStacji": "59246",
    "bilkomNumerStacji": "5104120",
    "name": "Wrocław Psie Pole",
    "lat": "51.150554",
    "lon": "17.119165"
  },
  {
    "numerStacji": "75226",
    "bilkomNumerStacji": "5104122",
    "name": "Wiesiółka",
    "lat": "50.414724",
    "lon": "19.349443"
  },
  {
    "numerStacji": "4747",
    "bilkomNumerStacji": "5104124",
    "name": "Wrząca Pomorska",
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
    "numerStacji": "20255",
    "bilkomNumerStacji": "5104126",
    "name": "Wrocławki",
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
    "numerStacji": "58867",
    "bilkomNumerStacji": "5104130",
    "name": "Wrocław Muchobór",
    "lat": "51.111667",
    "lon": "16.974169"
  },
  {
    "numerStacji": "59238",
    "bilkomNumerStacji": "5104132",
    "name": "Wrocław Kowale",
    "lat": "51.135003",
    "lon": "17.100279"
  },
  {
    "numerStacji": "58974",
    "bilkomNumerStacji": "5104133",
    "name": "Wrocław-Leśnica",
    "lat": "51.142779",
    "lon": "16.86611"
  },
  {
    "numerStacji": "58651",
    "bilkomNumerStacji": "5104134",
    "name": "Wrocław Mikołajów",
    "lat": "51.114723",
    "lon": "16.998053"
  },
  {
    "numerStacji": "28969",
    "bilkomNumerStacji": "5104135",
    "name": "Wronki",
    "lat": "52.705275",
    "lon": "16.385834"
  },
  {
    "numerStacji": "59253",
    "bilkomNumerStacji": "5104137",
    "name": "Wrocław Pawłowice",
    "lat": "51.168892",
    "lon": "17.108333"
  },
  {
    "numerStacji": "58966",
    "bilkomNumerStacji": "5104138",
    "name": "Wrocław Żerniki",
    "lat": "51.126113",
    "lon": "16.915829"
  },
  {
    "numerStacji": "59204",
    "bilkomNumerStacji": "5104139",
    "name": "Wrocław Sołtysowice",
    "lat": "51.141664",
    "lon": "17.080556"
  },
  {
    "numerStacji": "59055",
    "bilkomNumerStacji": "5104140",
    "name": "Wrocław Kuźniki",
    "lat": "51.12694",
    "lon": "16.953611"
  },
  {
    "numerStacji": "39156",
    "bilkomNumerStacji": "5104141",
    "name": "Wrzosów",
    "lat": "52.18444",
    "lon": "21.483059"
  },
  {
    "numerStacji": "260659",
    "bilkomNumerStacji": "5104142",
    "name": "Wrocław Popowice",
    "lat": "51.124998",
    "lon": "17.001388"
  },
  {
    "numerStacji": "43265",
    "bilkomNumerStacji": "5104144",
    "name": "Wroniawy",
    "lat": "52.059723",
    "lon": "16.164996"
  },
  {
    "numerStacji": "4127",
    "bilkomNumerStacji": "5104145",
    "name": "Wrzosowo",
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
    "numerStacji": "38786",
    "bilkomNumerStacji": "5104149",
    "name": "Warszawa Radość",
    "lat": "52.185276",
    "lon": "21.187782"
  },
  {
    "numerStacji": "33803",
    "bilkomNumerStacji": "5104150",
    "name": "Warszawa Okecie",
    "lat": "52.168331",
    "lon": "20.987502"
  },
  {
    "numerStacji": "54544",
    "bilkomNumerStacji": "5104151",
    "name": "Wałbrzych Szczawienko",
    "lat": "50.815832",
    "lon": "16.302504"
  },
  {
    "numerStacji": "77040",
    "bilkomNumerStacji": "5104152",
    "name": "Wisła Głębce",
    "lat": "49.621948",
    "lon": "18.875001"
  },
  {
    "numerStacji": "77024",
    "bilkomNumerStacji": "5104153",
    "name": "Wisła Dziechcinka",
    "lat": "49.647225",
    "lon": "18.865275"
  },
  {
    "numerStacji": "33639",
    "bilkomNumerStacji": "5104154",
    "name": "Warszawa Powiśle",
    "lat": "52.236946",
    "lon": "21.033886"
  },
  {
    "numerStacji": "59279",
    "bilkomNumerStacji": "5104155",
    "name": "Wrocław Swojczyce",
    "lat": "51.115559",
    "lon": "17.121664"
  },
  {
    "numerStacji": "33563",
    "bilkomNumerStacji": "5104157",
    "name": "Warszawa Służewiec",
    "lat": "52.180278",
    "lon": "20.987223"
  },
  {
    "numerStacji": "33647",
    "bilkomNumerStacji": "5104158",
    "name": "Warszawa Stadion",
    "lat": "52.246942",
    "lon": "21.043891"
  },
  {
    "numerStacji": "36152",
    "bilkomNumerStacji": "5104160",
    "name": "Warszawa Płudy",
    "lat": "52.333607",
    "lon": "20.986109"
  },
  {
    "numerStacji": "201092",
    "bilkomNumerStacji": "5104161",
    "name": "Warszawa Praga",
    "lat": "52.279725",
    "lon": "21.020555"
  },
  {
    "numerStacji": "33548",
    "bilkomNumerStacji": "5104164",
    "name": "Warszawa Ursus Północny",
    "lat": "52.206391",
    "lon": "20.888054"
  },
  {
    "numerStacji": "33514",
    "bilkomNumerStacji": "5104165",
    "name": "Warszawa Włochy",
    "lat": "52.20694",
    "lon": "20.917224"
  },
  {
    "numerStacji": "44826",
    "bilkomNumerStacji": "5104168",
    "name": "Witaszyce",
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
    "numerStacji": "81257",
    "bilkomNumerStacji": "5104170",
    "name": "Ropczyce Witkowice",
    "lat": "50.077224",
    "lon": "21.628055"
  },
  {
    "numerStacji": "32516",
    "bilkomNumerStacji": "5104172",
    "name": "Witonia",
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
    "numerStacji": "178019",
    "bilkomNumerStacji": "5104177",
    "name": "Witowo",
    "lat": "52.639725",
    "lon": "23.485281"
  },
  {
    "numerStacji": "16535",
    "bilkomNumerStacji": "5104178",
    "name": "Wudzyn",
    "lat": "53.322501",
    "lon": "18.075554"
  },
  {
    "numerStacji": "17210",
    "bilkomNumerStacji": "5104179",
    "name": "Warlubie",
    "lat": "53.58833",
    "lon": "18.622782"
  },
  {
    "numerStacji": "76992",
    "bilkomNumerStacji": "5104181",
    "name": "Wisła Uzdrowisko",
    "lat": "49.658336",
    "lon": "18.855"
  },
  {
    "numerStacji": "59287",
    "bilkomNumerStacji": "5104182",
    "name": "Wrocław Wojnów",
    "lat": "51.103613",
    "lon": "17.157774"
  },
  {
    "numerStacji": "58719",
    "bilkomNumerStacji": "5104184",
    "name": "Wrocław Osobowice",
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
    "numerStacji": "59071",
    "bilkomNumerStacji": "5104193",
    "name": "Wrocław Pracze",
    "lat": "51.169441",
    "lon": "16.903891"
  },
  {
    "numerStacji": "59261",
    "bilkomNumerStacji": "5104194",
    "name": "Wrocław Zakrzów",
    "lat": "51.158887",
    "lon": "17.121943"
  },
  {
    "numerStacji": "36137",
    "bilkomNumerStacji": "5104196",
    "name": "Warszawa Toruńska",
    "lat": "52.293614",
    "lon": "21.013607"
  },
  {
    "numerStacji": "58743",
    "bilkomNumerStacji": "5104198",
    "name": "Wrocław Świniary",
    "lat": "51.198053",
    "lon": "16.969719"
  },
  {
    "numerStacji": "58875",
    "bilkomNumerStacji": "5104199",
    "name": "Wrocław Zachodni",
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
    "numerStacji": "32045",
    "bilkomNumerStacji": "5104201",
    "name": "Wydartowo",
    "lat": "52.608335",
    "lon": "17.90111"
  },
  {
    "numerStacji": "11858",
    "bilkomNumerStacji": "5104203",
    "name": "Wydminy",
    "lat": "53.976943",
    "lon": "22.032498"
  },
  {
    "numerStacji": "39339",
    "bilkomNumerStacji": "5104204",
    "name": "Wygoda",
    "lat": "51.703607",
    "lon": "21.71944"
  },
  {
    "numerStacji": "47548",
    "bilkomNumerStacji": "5104206",
    "name": "Wykno",
    "lat": "51.661115",
    "lon": "19.904167"
  },
  {
    "numerStacji": "11296",
    "bilkomNumerStacji": "5104208",
    "name": "Wysoka Braniewska",
    "lat": "54.279169",
    "lon": "20.021386"
  },
  {
    "numerStacji": "14514",
    "bilkomNumerStacji": "5104210",
    "name": "Wyrzysk Osiek",
    "lat": "53.119165",
    "lon": "17.292504"
  },
  {
    "numerStacji": "37762",
    "bilkomNumerStacji": "5104211",
    "name": "Wyszków",
    "lat": "52.601665",
    "lon": "21.446671"
  },
  {
    "numerStacji": "37028",
    "bilkomNumerStacji": "5104213",
    "name": "Wyszyny",
    "lat": "53.060834",
    "lon": "20.392497"
  },
  {
    "numerStacji": "1867",
    "bilkomNumerStacji": "5104214",
    "name": "Wyszomierz",
    "lat": "53.625833",
    "lon": "15.063332"
  },
  {
    "numerStacji": "33555",
    "bilkomNumerStacji": "5104216",
    "name": "Warszawa Rakowiec",
    "lat": "52.196944",
    "lon": "20.965829"
  },
  {
    "numerStacji": "36582",
    "bilkomNumerStacji": "5104220",
    "name": "Wieliszew",
    "lat": "52.429719",
    "lon": "20.977776"
  },
  {
    "numerStacji": "61291",
    "bilkomNumerStacji": "5104222",
    "name": "Wierzbica Górna",
    "lat": "51.022224",
    "lon": "17.975558"
  },
  {
    "numerStacji": "83188",
    "bilkomNumerStacji": "5104224",
    "name": "Wierzawice",
    "lat": "50.238886",
    "lon": "22.464169"
  },
  {
    "numerStacji": "37440",
    "bilkomNumerStacji": "5104226",
    "name": "Warszawa Wileńska",
    "lat": "52.255275",
    "lon": "21.037779"
  },
  {
    "numerStacji": "36145",
    "bilkomNumerStacji": "5104227",
    "name": "Warszawa Żerań",
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
    "numerStacji": "16618",
    "bilkomNumerStacji": "5104230",
    "name": "Wierzchucin Stary",
    "lat": "53.55694",
    "lon": "18.091393"
  },
  {
    "numerStacji": "15875",
    "bilkomNumerStacji": "5104231",
    "name": "Wierzchowo Człuchowskie",
    "lat": "53.618057",
    "lon": "17.447496"
  },
  {
    "numerStacji": "22483",
    "bilkomNumerStacji": "5104234",
    "name": "Żabiny",
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
    "numerStacji": "82925",
    "bilkomNumerStacji": "5104237",
    "name": "Zaczernie",
    "lat": "50.095275",
    "lon": "21.979444"
  },
  {
    "numerStacji": "49916",
    "bilkomNumerStacji": "5104238",
    "name": "Zajezierze koło Dęblina",
    "lat": "51.542502",
    "lon": "21.817503"
  },
  {
    "numerStacji": "82776",
    "bilkomNumerStacji": "5104240",
    "name": "Zaborów",
    "lat": "49.90722",
    "lon": "21.830277"
  },
  {
    "numerStacji": "46532",
    "bilkomNumerStacji": "5104245",
    "name": "Żakowice",
    "lat": "51.732219",
    "lon": "19.790831"
  },
  {
    "numerStacji": "15743",
    "bilkomNumerStacji": "5104246",
    "name": "Żalno",
    "lat": "53.598056",
    "lon": "17.75917"
  },
  {
    "numerStacji": "47555",
    "bilkomNumerStacji": "5104249",
    "name": "Zaosie",
    "lat": "51.632781",
    "lon": "19.934164"
  },
  {
    "numerStacji": "54619",
    "bilkomNumerStacji": "5104251",
    "name": "Żarów",
    "lat": "50.939721",
    "lon": "16.493336"
  },
  {
    "numerStacji": "79327",
    "bilkomNumerStacji": "5104252",
    "name": "Zastów",
    "lat": "50.121667",
    "lon": "20.064723"
  },
  {
    "numerStacji": "22962",
    "bilkomNumerStacji": "5104254",
    "name": "Ząbrowo",
    "lat": "53.631667",
    "lon": "19.465278"
  },
  {
    "numerStacji": "66050",
    "bilkomNumerStacji": "5104255",
    "name": "Zawada",
    "lat": "50.715279",
    "lon": "23.123887"
  },
  {
    "numerStacji": "61549",
    "bilkomNumerStacji": "5104257",
    "name": "Zawadzkie",
    "lat": "50.608891",
    "lon": "18.473893"
  },
  {
    "numerStacji": "26146",
    "bilkomNumerStacji": "5104258",
    "name": "Zbąszyń",
    "lat": "52.259446",
    "lon": "15.894726"
  },
  {
    "numerStacji": "26153",
    "bilkomNumerStacji": "5104259",
    "name": "Zbąszyń Przedmieście",
    "lat": "52.256947",
    "lon": "15.926944"
  },
  {
    "numerStacji": "15651",
    "bilkomNumerStacji": "5104261",
    "name": "Żabno koło Chojnic",
    "lat": "53.854725",
    "lon": "17.7075"
  },
  {
    "numerStacji": "11155",
    "bilkomNumerStacji": "5104263",
    "name": "Żabi Róg",
    "lat": "53.876111",
    "lon": "20.01806"
  },
  {
    "numerStacji": "8680",
    "bilkomNumerStacji": "5104266",
    "name": "Zblewo",
    "lat": "53.943053",
    "lon": "18.305831"
  },
  {
    "numerStacji": "80390",
    "bilkomNumerStacji": "5104268",
    "name": "Zabierzów",
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
    "numerStacji": "1974",
    "bilkomNumerStacji": "5104273",
    "name": "Żabowo",
    "lat": "53.717226",
    "lon": "15.189999"
  },
  {
    "numerStacji": "65169",
    "bilkomNumerStacji": "5104274",
    "name": "Zbydniów",
    "lat": "50.634726",
    "lon": "21.920555"
  },
  {
    "numerStacji": "38976",
    "bilkomNumerStacji": "5104275",
    "name": "Zabieżki",
    "lat": "52.009725",
    "lon": "21.477225"
  },
  {
    "numerStacji": "67066",
    "bilkomNumerStacji": "5104277",
    "name": "Zdzieszowice",
    "lat": "50.4225",
    "lon": "18.125831"
  },
  {
    "numerStacji": "24653",
    "bilkomNumerStacji": "5104278",
    "name": "Zdrody Nowe",
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
    "numerStacji": "52100",
    "bilkomNumerStacji": "5104286",
    "name": "Zebrzydowa",
    "lat": "51.255279",
    "lon": "15.377775"
  },
  {
    "numerStacji": "58255",
    "bilkomNumerStacji": "5104287",
    "name": "Zębice Wrocławskie",
    "lat": "51.006664",
    "lon": "17.162223"
  },
  {
    "numerStacji": "82529",
    "bilkomNumerStacji": "5104289",
    "name": "Żegiestów",
    "lat": "49.367778",
    "lon": "20.785559"
  },
  {
    "numerStacji": "64824",
    "bilkomNumerStacji": "5104294",
    "name": "Żelisławice",
    "lat": "50.803607",
    "lon": "19.858052"
  },
  {
    "numerStacji": "78527",
    "bilkomNumerStacji": "5104295",
    "name": "Zembrzyce",
    "lat": "49.775555",
    "lon": "19.59083"
  },
  {
    "numerStacji": "6874",
    "bilkomNumerStacji": "5104301",
    "name": "Żelistrzewo",
    "lat": "54.674164",
    "lon": "18.416111"
  },
  {
    "numerStacji": "82552",
    "bilkomNumerStacji": "5104304",
    "name": "Żegiestów-Zdrój",
    "lat": "49.363058",
    "lon": "20.803331"
  },
  {
    "numerStacji": "51839",
    "bilkomNumerStacji": "5104305",
    "name": "Zagajnik",
    "lat": "51.270282",
    "lon": "15.299164"
  },
  {
    "numerStacji": "84749",
    "bilkomNumerStacji": "5104306",
    "name": "Zagrody",
    "lat": "50.051389",
    "lon": "22.904721"
  },
  {
    "numerStacji": "46805",
    "bilkomNumerStacji": "5104308",
    "name": "Zgierz",
    "lat": "51.850275",
    "lon": "19.42639"
  },
  {
    "numerStacji": "63701",
    "bilkomNumerStacji": "5104309",
    "name": "Zagnańsk",
    "lat": "50.974447",
    "lon": "20.662776"
  },
  {
    "numerStacji": "36368",
    "bilkomNumerStacji": "5104310",
    "name": "Zagościniec",
    "lat": "52.365276",
    "lon": "21.281386"
  },
  {
    "numerStacji": "46813",
    "bilkomNumerStacji": "5104311",
    "name": "Zgierz Północ",
    "lat": "51.86917",
    "lon": "19.384168"
  },
  {
    "numerStacji": "83758",
    "bilkomNumerStacji": "5104314",
    "name": "Zagórz",
    "lat": "49.51361",
    "lon": "22.264447"
  },
  {
    "numerStacji": "257551",
    "bilkomNumerStacji": "5104315",
    "name": "Żukowo",
    "lat": "54.34444",
    "lon": "18.361942"
  },
  {
    "numerStacji": "20727",
    "bilkomNumerStacji": "5104316",
    "name": "Zieleń",
    "lat": "51.728615",
    "lon": "19.811389"
  },
  {
    "numerStacji": "36236",
    "bilkomNumerStacji": "5104318",
    "name": "Zielonka Bankowa",
    "lat": "52.29222",
    "lon": "21.153056"
  },
  {
    "numerStacji": "32805",
    "bilkomNumerStacji": "5104319",
    "name": "Zawidz",
    "lat": "52.829443",
    "lon": "19.843607"
  },
  {
    "numerStacji": "24398",
    "bilkomNumerStacji": "5104324",
    "name": "Zimnochy",
    "lat": "52.954725",
    "lon": "23.085557"
  },
  {
    "numerStacji": "18499",
    "bilkomNumerStacji": "5104325",
    "name": "Zielonczyn",
    "lat": "53.151113",
    "lon": "17.807226"
  },
  {
    "numerStacji": "10918",
    "bilkomNumerStacji": "5104327",
    "name": "Zielonka Pasłęcka",
    "lat": "53.981392",
    "lon": "19.700552"
  },
  {
    "numerStacji": "16626",
    "bilkomNumerStacji": "5104328",
    "name": "Zielonka Pomorska",
    "lat": "53.577498",
    "lon": "18.109165"
  },
  {
    "numerStacji": "29488",
    "bilkomNumerStacji": "5104330",
    "name": "Ziemomyśl",
    "lat": "53.166943",
    "lon": "15.302778"
  },
  {
    "numerStacji": "21873",
    "bilkomNumerStacji": "5104332",
    "name": "Zajączkowo Lubawskie",
    "lat": "53.443891",
    "lon": "19.713614"
  },
  {
    "numerStacji": "37457",
    "bilkomNumerStacji": "5104336",
    "name": "Ząbki",
    "lat": "52.292499",
    "lon": "21.113612"
  },
  {
    "numerStacji": "65243",
    "bilkomNumerStacji": "5104337",
    "name": "Zaklików",
    "lat": "50.768333",
    "lon": "22.107504"
  },
  {
    "numerStacji": "58313",
    "bilkomNumerStacji": "5104338",
    "name": "Zakrzów Kotowice",
    "lat": "51.035834",
    "lon": "17.210837"
  },
  {
    "numerStacji": "22244",
    "bilkomNumerStacji": "5104340",
    "name": "Zakrzów Sarnowo",
    "lat": "53.282778",
    "lon": "20.284447"
  },
  {
    "numerStacji": "15511",
    "bilkomNumerStacji": "5104341",
    "name": "Zakrzewo Zlotowskie",
    "lat": "53.416663",
    "lon": "17.141386"
  },
  {
    "numerStacji": "3301",
    "bilkomNumerStacji": "5104343",
    "name": "Złocieniec",
    "lat": "53.528057",
    "lon": "16.018607"
  },
  {
    "numerStacji": "33928",
    "bilkomNumerStacji": "5104344",
    "name": "Zalesie Górne",
    "lat": "52.026391",
    "lon": "21.041941"
  },
  {
    "numerStacji": "65987",
    "bilkomNumerStacji": "5104346",
    "name": "Złojec",
    "lat": "50.768612",
    "lon": "23.10083"
  },
  {
    "numerStacji": "50864",
    "bilkomNumerStacji": "5104347",
    "name": "Zalesie Krasieńskie",
    "lat": "51.121663",
    "lon": "23.166388"
  },
  {
    "numerStacji": "32458",
    "bilkomNumerStacji": "5104349",
    "name": "Złotniki Kutnowskie",
    "lat": "52.224999",
    "lon": "19.491391"
  },
  {
    "numerStacji": "28647",
    "bilkomNumerStacji": "5104350",
    "name": "Złotniki",
    "lat": "52.496114",
    "lon": "16.835834"
  },
  {
    "numerStacji": "3350",
    "bilkomNumerStacji": "5104353",
    "name": "Żelisławie Pomorskie",
    "lat": "53.524722",
    "lon": "16.143611"
  },
  {
    "numerStacji": "19042",
    "bilkomNumerStacji": "5104354",
    "name": "Złotniki Kujawskie",
    "lat": "52.903613",
    "lon": "18.147225"
  },
  {
    "numerStacji": "15354",
    "bilkomNumerStacji": "5104356",
    "name": "Złotów",
    "lat": "53.358889",
    "lon": "17.053058"
  },
  {
    "numerStacji": "82644",
    "bilkomNumerStacji": "5104358",
    "name": "Rzeszów Załęże",
    "lat": "50.058608",
    "lon": "22.069444"
  },
  {
    "numerStacji": "44420",
    "bilkomNumerStacji": "5104359",
    "name": "Żmigród",
    "lat": "51.472224",
    "lon": "16.901392"
  },
  {
    "numerStacji": "76240",
    "bilkomNumerStacji": "5104363",
    "name": "Zamek Bulowicki",
    "lat": "49.880001",
    "lon": "19.263335"
  },
  {
    "numerStacji": "65904",
    "bilkomNumerStacji": "5104366",
    "name": "Zamość",
    "lat": "50.713607",
    "lon": "23.239165"
  },
  {
    "numerStacji": "69203",
    "bilkomNumerStacji": "5104369",
    "name": "Żory",
    "lat": "50.051668",
    "lon": "18.702777"
  },
  {
    "numerStacji": "60152",
    "bilkomNumerStacji": "5104372",
    "name": "Żórawina",
    "lat": "50.983058",
    "lon": "17.049445"
  },
  {
    "numerStacji": "3152",
    "bilkomNumerStacji": "5104373",
    "name": "Żółtnica",
    "lat": "53.695275",
    "lon": "16.812219"
  },
  {
    "numerStacji": "32466",
    "bilkomNumerStacji": "5104376",
    "name": "Zosinów",
    "lat": "52.185833",
    "lon": "19.715834"
  },
  {
    "numerStacji": "15156",
    "bilkomNumerStacji": "5104377",
    "name": "Żółwino",
    "lat": "53.28889",
    "lon": "15.690833"
  },
  {
    "numerStacji": "82982",
    "bilkomNumerStacji": "5104379",
    "name": "Zarębki",
    "lat": "50.272497",
    "lon": "21.761941"
  },
  {
    "numerStacji": "52522",
    "bilkomNumerStacji": "5104380",
    "name": "Zaręba",
    "lat": "51.098057",
    "lon": "15.218333"
  },
  {
    "numerStacji": "62752",
    "bilkomNumerStacji": "5104381",
    "name": "Żarki-Letnisko",
    "lat": "50.623337",
    "lon": "19.272774"
  },
  {
    "numerStacji": "16642",
    "bilkomNumerStacji": "5104383",
    "name": "Zarośle",
    "lat": "53.664442",
    "lon": "18.117498"
  },
  {
    "numerStacji": "83725",
    "bilkomNumerStacji": "5104386",
    "name": "Zarszyn",
    "lat": "49.584166",
    "lon": "22.019446"
  },
  {
    "numerStacji": "57703",
    "bilkomNumerStacji": "5104387",
    "name": "Ząbkowice Śląskie",
    "lat": "50.601385",
    "lon": "16.80972"
  },
  {
    "numerStacji": "24117",
    "bilkomNumerStacji": "5104388",
    "name": "Zastocze",
    "lat": "53.311669",
    "lon": "22.858058"
  },
  {
    "numerStacji": "51235",
    "bilkomNumerStacji": "5104390",
    "name": "Żulin",
    "lat": "51.062775",
    "lon": "23.172222"
  },
  {
    "numerStacji": "178476",
    "bilkomNumerStacji": "5104391",
    "name": "Żurawica Rozrządowa",
    "lat": "49.832781",
    "lon": "22.8375"
  },
  {
    "numerStacji": "82560",
    "bilkomNumerStacji": "5104392",
    "name": "Zubrzyk",
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
    "numerStacji": "17855",
    "bilkomNumerStacji": "5104396",
    "name": "Żukowo Wschodnie",
    "lat": "54.348611",
    "lon": "18.373331"
  },
  {
    "numerStacji": "76869",
    "bilkomNumerStacji": "5104398",
    "name": "Zwardoń",
    "lat": "49.504441",
    "lon": "18.977775"
  },
  {
    "numerStacji": "75341",
    "bilkomNumerStacji": "5104399",
    "name": "Zawiercie Borowe Pole",
    "lat": "50.510837",
    "lon": "19.398892"
  },
  {
    "numerStacji": "50930",
    "bilkomNumerStacji": "5104401",
    "name": "Zawadowka",
    "lat": "51.124171",
    "lon": "23.355557"
  },
  {
    "numerStacji": "82735",
    "bilkomNumerStacji": "5104402",
    "name": "Rzeszów Zwięczyca",
    "lat": "50.006389",
    "lon": "21.95778"
  },
  {
    "numerStacji": "66589",
    "bilkomNumerStacji": "5104403",
    "name": "Zwierzyniec",
    "lat": "50.60917",
    "lon": "22.984447"
  },
  {
    "numerStacji": "32839",
    "bilkomNumerStacji": "5104406",
    "name": "Zawidz Kościelny",
    "lat": "52.824445",
    "lon": "19.876948"
  },
  {
    "numerStacji": "39354",
    "bilkomNumerStacji": "5104410",
    "name": "Życzyn",
    "lat": "51.647496",
    "lon": "21.760835"
  },
  {
    "numerStacji": "48843",
    "bilkomNumerStacji": "5104412",
    "name": "Zygmuntów",
    "lat": "51.409165",
    "lon": "20.570555"
  },
  {
    "numerStacji": "32433",
    "bilkomNumerStacji": "5104413",
    "name": "Żychlin",
    "lat": "52.213331",
    "lon": "19.617501"
  },
  {
    "numerStacji": "23739",
    "bilkomNumerStacji": "5104414",
    "name": "Zygmuntowo Mazowieckie",
    "lat": "52.727226",
    "lon": "21.52556"
  },
  {
    "numerStacji": "34207",
    "bilkomNumerStacji": "5104415",
    "name": "Żyrardów",
    "lat": "52.051948",
    "lon": "20.448059"
  },
  {
    "numerStacji": "76638",
    "bilkomNumerStacji": "5104416",
    "name": "Żywiec Sporysz",
    "lat": "49.676108",
    "lon": "19.223054"
  },
  {
    "numerStacji": "48785",
    "bilkomNumerStacji": "5104417",
    "name": "Żytkowice",
    "lat": "51.483056",
    "lon": "21.558056"
  },
  {
    "numerStacji": "76604",
    "bilkomNumerStacji": "5104418",
    "name": "Żywiec",
    "lat": "49.679443",
    "lon": "19.18583"
  },
  {
    "numerStacji": "74344",
    "bilkomNumerStacji": "5104420",
    "name": "Zarzecze",
    "lat": "50.363612",
    "lon": "19.699447"
  },
  {
    "numerStacji": "265740",
    "bilkomNumerStacji": "5104421",
    "name": "Częstochowa Gnaszyn",
    "lat": "50.79139",
    "lon": "19.028887"
  },
  {
    "numerStacji": "242219",
    "bilkomNumerStacji": "5104422",
    "name": "Zielone Wzgórza",
    "lat": "52.565277",
    "lon": "17.008607"
  },
  {
    "numerStacji": "40923",
    "bilkomNumerStacji": "5104424",
    "name": "Porosiuki",
    "lat": "52.011946",
    "lon": "23.062221"
  },
  {
    "numerStacji": "4697",
    "bilkomNumerStacji": "5104430",
    "name": "Gałęzinowo",
    "lat": "54.522777",
    "lon": "16.94028"
  },
  {
    "numerStacji": "36798",
    "bilkomNumerStacji": "5104431",
    "name": "Kaczorowo",
    "lat": "52.726948",
    "lon": "20.173331"
  },
  {
    "numerStacji": "241960",
    "bilkomNumerStacji": "5104446",
    "name": "Wieliczka Rynek-Kopalnia",
    "lat": "49.985552",
    "lon": "20.056669"
  },
  {
    "numerStacji": "48132",
    "bilkomNumerStacji": "5104453",
    "name": "Marcinków",
    "lat": "51.093329",
    "lon": "20.980275"
  },
  {
    "numerStacji": "50518",
    "bilkomNumerStacji": "5104477",
    "name": "Podzamcze",
    "lat": "51.209721",
    "lon": "22.787223"
  },
  {
    "numerStacji": "6783",
    "bilkomNumerStacji": "5104478",
    "name": "Jastarnia Wczasy",
    "lat": "54.708053",
    "lon": "18.655556"
  },
  {
    "numerStacji": "76794",
    "bilkomNumerStacji": "5104494",
    "name": "Milówka Zabawa",
    "lat": "49.540002",
    "lon": "19.102779"
  },
  {
    "numerStacji": "69328",
    "bilkomNumerStacji": "5104497",
    "name": "Pszczyna Czarków",
    "lat": "50.011387",
    "lon": "18.921385"
  },
  {
    "numerStacji": "241966",
    "bilkomNumerStacji": "5104501",
    "name": "Wrocław Stadion",
    "lat": "51.136945",
    "lon": "16.940558"
  },
  {
    "numerStacji": "178278",
    "bilkomNumerStacji": "5104519",
    "name": "Rajcza Centrum",
    "lat": "49.50667",
    "lon": "19.10028"
  },
  {
    "numerStacji": "39800",
    "bilkomNumerStacji": "5104520",
    "name": "Mińsk Mazowiecki Anielina",
    "lat": "52.167774",
    "lon": "21.585554"
  },
  {
    "numerStacji": "280623",
    "bilkomNumerStacji": "5104533",
    "name": "Medyka",
    "lat": "49.804447",
    "lon": "22.945829"
  },
  {
    "numerStacji": "71027",
    "bilkomNumerStacji": "5104536",
    "name": "Miasteczko Śląskie",
    "lat": "50.497497",
    "lon": "18.900279"
  },
  {
    "numerStacji": "47282",
    "bilkomNumerStacji": "5104541",
    "name": "Żakowice Południowe",
    "lat": "51.729442",
    "lon": "19.790274"
  },
  {
    "numerStacji": "80952",
    "bilkomNumerStacji": "5104542",
    "name": "Łowczówek Pleśna",
    "lat": "49.928336",
    "lon": "20.94972"
  },
  {
    "numerStacji": "178279",
    "bilkomNumerStacji": "5104563",
    "name": "Cięcina Dolna",
    "lat": "49.62139",
    "lon": "19.151941"
  },
  {
    "numerStacji": "177923",
    "bilkomNumerStacji": "5104580",
    "name": "Siedlce Wschodnie",
    "lat": "52.144447",
    "lon": "22.297779"
  },
  {
    "numerStacji": "179080",
    "bilkomNumerStacji": "5104581",
    "name": "Łuków Zapowiednik",
    "lat": "51.931942",
    "lon": "22.414441"
  },
  {
    "numerStacji": "254956",
    "bilkomNumerStacji": "5104583",
    "name": "Kobylany",
    "lat": "52.037781",
    "lon": "23.561114"
  },
  {
    "numerStacji": "178829",
    "bilkomNumerStacji": "5104585",
    "name": "Gdynia Cisowa",
    "lat": "54.549726",
    "lon": "18.447222"
  },
  {
    "numerStacji": "235879",
    "bilkomNumerStacji": "5104659",
    "name": "Kraków Lotnisko",
    "lat": "50.071112",
    "lon": "19.801393"
  },
  {
    "numerStacji": "64899",
    "bilkomNumerStacji": "5104660",
    "name": "Włoszczowa Północ",
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
    "numerStacji": "242955",
    "bilkomNumerStacji": "5104675",
    "name": "Lublin Zadębie",
    "lat": "51.258056",
    "lon": "22.610001"
  },
  {
    "numerStacji": "242954",
    "bilkomNumerStacji": "5104676",
    "name": "Lublin Ponikwoda",
    "lat": "51.266111",
    "lon": "22.606109"
  },
  {
    "numerStacji": "242974",
    "bilkomNumerStacji": "5104677",
    "name": "Niemce",
    "lat": "51.362781",
    "lon": "22.646389"
  },
  {
    "numerStacji": "251584",
    "bilkomNumerStacji": "5104678",
    "name": "Kołobrzeg Stadion",
    "lat": "54.175002",
    "lon": "15.559168"
  },
  {
    "numerStacji": "251565",
    "bilkomNumerStacji": "5104679",
    "name": "Warszawa Zacisze Wilno",
    "lat": "52.277775",
    "lon": "21.08028"
  },
  {
    "numerStacji": "251557",
    "bilkomNumerStacji": "5104683",
    "name": "Ozorków Nowe Miasto",
    "lat": "51.958891",
    "lon": "19.269726"
  },
  {
    "numerStacji": "242977",
    "bilkomNumerStacji": "5104684",
    "name": "Parczew Kolejowa",
    "lat": "51.634444",
    "lon": "22.880837"
  },
  {
    "numerStacji": "251558",
    "bilkomNumerStacji": "5104685",
    "name": "Zgierz Jaracza",
    "lat": "51.863893",
    "lon": "19.422219"
  },
  {
    "numerStacji": "251603",
    "bilkomNumerStacji": "5104686",
    "name": "Warszawa Ursus Niedźwiadek",
    "lat": "52.191667",
    "lon": "20.870831"
  },
  {
    "numerStacji": "251555",
    "bilkomNumerStacji": "5104687",
    "name": "Łódź Pabianicka",
    "lat": "51.726385",
    "lon": "19.444998"
  },
  {
    "numerStacji": "251556",
    "bilkomNumerStacji": "5104688",
    "name": "Łódź Radogoszcz Zachód",
    "lat": "51.821941",
    "lon": "19.415837"
  },
  {
    "numerStacji": "241701",
    "bilkomNumerStacji": "5104689",
    "name": "Port Lotniczy Szczecin Goleniów",
    "lat": "53.593337",
    "lon": "14.898056"
  },
  {
    "numerStacji": "242843",
    "bilkomNumerStacji": "5104690",
    "name": "Glinnik Wieś",
    "lat": "51.88278",
    "lon": "19.481944"
  },
  {
    "numerStacji": "251561",
    "bilkomNumerStacji": "5104691",
    "name": "Łódź Dąbrowa",
    "lat": "51.735833",
    "lon": "19.510556"
  },
  {
    "numerStacji": "242844",
    "bilkomNumerStacji": "5104695",
    "name": "Domaniewice Centrum",
    "lat": "52.011946",
    "lon": "19.791946"
  },
  {
    "numerStacji": "251843",
    "bilkomNumerStacji": "5104696",
    "name": "Zabiele",
    "lat": "51.543608",
    "lon": "22.763609"
  },
  {
    "numerStacji": "251842",
    "bilkomNumerStacji": "5104699",
    "name": "Pałecznica",
    "lat": "51.490553",
    "lon": "22.659442"
  },
  {
    "numerStacji": "258708",
    "bilkomNumerStacji": "5104705",
    "name": "Sucha Beskidzka Zamek",
    "lat": "49.743886",
    "lon": "19.603055"
  },
  {
    "numerStacji": "177961",
    "bilkomNumerStacji": "5104712",
    "name": "Łódź Stoki",
    "lat": "51.776671",
    "lon": "19.510556"
  },
  {
    "numerStacji": "177962",
    "bilkomNumerStacji": "5104713",
    "name": "Łódź Marysin",
    "lat": "51.800277",
    "lon": "19.486115"
  },
  {
    "numerStacji": "177959",
    "bilkomNumerStacji": "5104714",
    "name": "Łódź Arturówek",
    "lat": "51.81528",
    "lon": "19.456666"
  },
  {
    "numerStacji": "48959",
    "bilkomNumerStacji": "5104744",
    "name": "Opoczno Południe",
    "lat": "51.361666",
    "lon": "20.235554"
  },
  {
    "numerStacji": "178079",
    "bilkomNumerStacji": "5104745",
    "name": "Dębica Wschodnia",
    "lat": "50.0625",
    "lon": "21.448891"
  },
  {
    "numerStacji": "254692",
    "bilkomNumerStacji": "5104746",
    "name": "Grąblewo",
    "lat": "52.235831",
    "lon": "16.389448"
  },
  {
    "numerStacji": "254532",
    "bilkomNumerStacji": "5104747",
    "name": "Wrocław Grabiszyn",
    "lat": "51.096664",
    "lon": "16.974169"
  },
  {
    "numerStacji": "258458",
    "bilkomNumerStacji": "5104748",
    "name": "Gdańsk Śródmieście",
    "lat": "54.346669",
    "lon": "18.644167"
  },
  {
    "numerStacji": "258467",
    "bilkomNumerStacji": "5104752",
    "name": "Zamość Starówka",
    "lat": "50.716942",
    "lon": "23.26278"
  },
  {
    "numerStacji": "258468",
    "bilkomNumerStacji": "5104753",
    "name": "Zamość Wschód",
    "lat": "50.722497",
    "lon": "23.276111"
  },
  {
    "numerStacji": "258130",
    "bilkomNumerStacji": "5104754",
    "name": "Wrocław Różanka",
    "lat": "51.138886",
    "lon": "17.003887"
  },
  {
    "numerStacji": "251562",
    "bilkomNumerStacji": "5104755",
    "name": "Ramiszów",
    "lat": "51.193334",
    "lon": "17.098337"
  },
  {
    "numerStacji": "258751",
    "bilkomNumerStacji": "5104757",
    "name": "Ruda-Huta",
    "lat": "51.235835",
    "lon": "23.589169"
  },
  {
    "numerStacji": "258748",
    "bilkomNumerStacji": "5104758",
    "name": "Majdan Stuleński",
    "lat": "51.357504",
    "lon": "23.611112"
  },
  {
    "numerStacji": "258747",
    "bilkomNumerStacji": "5104759",
    "name": "Okuninka Białe",
    "lat": "51.491389",
    "lon": "23.589996"
  },
  {
    "numerStacji": "257521",
    "bilkomNumerStacji": "5104760",
    "name": "Gdańsk Rębiechowo",
    "lat": "54.384999",
    "lon": "18.45694"
  },
  {
    "numerStacji": "257530",
    "bilkomNumerStacji": "5104761",
    "name": "Gdańsk Port Lotniczy",
    "lat": "54.382779",
    "lon": "18.466945"
  },
  {
    "numerStacji": "257531",
    "bilkomNumerStacji": "5104762",
    "name": "Gdańsk Matarnia",
    "lat": "54.373331",
    "lon": "18.506668"
  },
  {
    "numerStacji": "257542",
    "bilkomNumerStacji": "5104763",
    "name": "Gdańsk Kiełpinek",
    "lat": "54.355281",
    "lon": "18.528889"
  },
  {
    "numerStacji": "257532",
    "bilkomNumerStacji": "5104764",
    "name": "Gdańsk Jasień",
    "lat": "54.353887",
    "lon": "18.550553"
  },
  {
    "numerStacji": "257533",
    "bilkomNumerStacji": "5104765",
    "name": "Gdańsk Brętowo",
    "lat": "54.365277",
    "lon": "18.573611"
  },
  {
    "numerStacji": "257534",
    "bilkomNumerStacji": "5104766",
    "name": "Gdańsk Niedźwiednik",
    "lat": "54.377781",
    "lon": "18.571948"
  },
  {
    "numerStacji": "257535",
    "bilkomNumerStacji": "5104767",
    "name": "Gdańsk Strzyża",
    "lat": "54.391669",
    "lon": "18.57833"
  },
  {
    "numerStacji": "258463",
    "bilkomNumerStacji": "5104768",
    "name": "Kraków Olszanica",
    "lat": "50.076388",
    "lon": "19.825556"
  },
  {
    "numerStacji": "258461",
    "bilkomNumerStacji": "5104769",
    "name": "Kraków Zakliki",
    "lat": "50.079723",
    "lon": "19.849441"
  },
  {
    "numerStacji": "258734",
    "bilkomNumerStacji": "5104771",
    "name": "Łopuchowo Osiedle",
    "lat": "52.618888",
    "lon": "17.109726"
  },
  {
    "numerStacji": "258735",
    "bilkomNumerStacji": "5104772",
    "name": "Przebędowo",
    "lat": "52.583615",
    "lon": "17.02361"
  },
  {
    "numerStacji": "259152",
    "bilkomNumerStacji": "5104773",
    "name": "Szymany Lotnisko",
    "lat": "53.48944",
    "lon": "20.9475"
  },
  {
    "numerStacji": "258924",
    "bilkomNumerStacji": "5104775",
    "name": "Bydgoszcz Błonie",
    "lat": "53.117781",
    "lon": "17.951665"
  },
  {
    "numerStacji": "258460",
    "bilkomNumerStacji": "5104780",
    "name": "Kraków Sanktuarium",
    "lat": "50.013886",
    "lon": "19.934443"
  },
  {
    "numerStacji": "84590",
    "bilkomNumerStacji": "5104792",
    "name": "Medyka Rozrządowa",
    "lat": "49.794163",
    "lon": "22.910834"
  },
  {
    "numerStacji": "84582",
    "bilkomNumerStacji": "5104793",
    "name": "Medyka Towarowa",
    "lat": "49.786109",
    "lon": "22.883615"
  },
  {
    "numerStacji": "259156",
    "bilkomNumerStacji": "5104794",
    "name": "Chmielów Zagumnie",
    "lat": "50.521139",
    "lon": "21.706648"
  },
  {
    "numerStacji": "259546",
    "bilkomNumerStacji": "5104795",
    "name": "Mokre",
    "lat": "50.70806",
    "lon": "23.205276"
  },
  {
    "numerStacji": "260653",
    "bilkomNumerStacji": "5104796",
    "name": "Gorzów Wielkopolski Wschodni",
    "lat": "52.731667",
    "lon": "15.249166"
  },
  {
    "numerStacji": "242975",
    "bilkomNumerStacji": "5105071",
    "name": "Lubartów Lipowa",
    "lat": "51.46417",
    "lon": "22.599448"
  },
  {
    "numerStacji": "242976",
    "bilkomNumerStacji": "5105072",
    "name": "Lubartów Słowackiego",
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
    "numerStacji": "241559",
    "bilkomNumerStacji": "5112002",
    "name": "Tarnowska Wola",
    "lat": "50.45167",
    "lon": "21.735836"
  },
  {
    "numerStacji": "33456",
    "bilkomNumerStacji": "5128148",
    "name": "Warszawa Aleje Jerozolimskie",
    "lat": "52.204171",
    "lon": "20.943059"
  },
  {
    "numerStacji": "241560",
    "bilkomNumerStacji": "5141772",
    "name": "Rogoźnica koło Rzeszowa",
    "lat": "50.116948",
    "lon": "21.96889"
  },
  {
    "numerStacji": "240720",
    "bilkomNumerStacji": "5149451",
    "name": "Warszawa Żwirki i Wigury",
    "lat": "52.193609",
    "lon": "20.979996"
  },
  {
    "numerStacji": "178345",
    "bilkomNumerStacji": "5163718",
    "name": "Szklarska Poręba Huta",
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
    "numerStacji": "241558",
    "bilkomNumerStacji": "5181456",
    "name": "Cygany",
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
    "numerStacji": "233169",
    "bilkomNumerStacji": "5193610",
    "name": "Słubice",
    "lat": "52.336115",
    "lon": "14.595282"
  },
  {
    "numerStacji": "233222",
    "bilkomNumerStacji": "5197725",
    "name": "Siedlce Zachodnie",
    "lat": "52.173608",
    "lon": "22.235555"
  },
  {
    "numerStacji": "17582",
    "bilkomNumerStacji": "5102122",
    "name": "Lubiana",
    "lat": "53.103558104739136",
    "lon": "15.333013991921153"
  },
  {
    "numerStacji": "12872",
    "bilkomNumerStacji": "5100301",
    "name": "Trakiszki",
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
    "numerStacji": "5256",
    "bilkomNumerStacji": "5100129",
    "name": "Lebork",
    "lat": "54.532836478496826",
    "lon": "17.751846313476566"
  },
  {
    "numerStacji": "265",
    "bilkomNumerStacji": "5100129",
    "name": "Szczecin Pomorzany",
    "lat": "53.413522374224996",
    "lon": "14.531060457229616"
  },
  {
    "numerStacji": "35360",
    "bilkomNumerStacji": "5100669",
    "name": "Brzózki",
    "lat": "52.1048602",
    "lon": "20.6777155"
  },
  {
    "numerStacji": "10000000",
    "bilkomNumerStacji": "5101194",
    "name": "Grodzisk Mazowiecki Jordanowice",
    "lat": "52.1031029",
    "lon": "20.6362719"
  },
  {
    "numerStacji": "35378",
    "bilkomNumerStacji": "5101196",
    "name": "Grodzisk Mazowiecki Okrężna",
    "lat": "52.1007111",
    "lon": "20.6602404"
  },
  {
    "numerStacji": "35386",
    "bilkomNumerStacji": "5101197",
    "name": "Grodzisk Mazowiecki Piaskowa",
    "lat": "52.1025166",
    "lon": "20.6516105"
  },
  {
    "numerStacji": "35196",
    "bilkomNumerStacji": "5101511",
    "name": "Kanie Helenowskie",
    "lat": "52.1316542",
    "lon": "20.7743104"
  },
  {
    "numerStacji": "35162",
    "bilkomNumerStacji": "5101687",
    "name": "Komorów",
    "lat": "52.1481148",
    "lon": "20.8113718"
  },
  {
    "numerStacji": "35139",
    "bilkomNumerStacji": "5102282",
    "name": "Malichy",
    "lat": "52.1693938",
    "lon": "20.8411745"
  },
  {
    "numerStacji": "35097",
    "bilkomNumerStacji": "5102199",
    "name": "Michałowice",
    "lat": "52.175364",
    "lon": "20.88126"
  },
  {
    "numerStacji": "35188",
    "bilkomNumerStacji": "5102492",
    "name": "Nowa Wieś Warszawska",
    "lat": "52.1404731",
    "lon": "20.7955551"
  },
  {
    "numerStacji": "35071",
    "bilkomNumerStacji": "5102586",
    "name": "Opacz",
    "lat": "52.1813883",
    "lon": "20.9046686"
  },
  {
    "numerStacji": "35212",
    "bilkomNumerStacji": "5102635",
    "name": "Otrębusy",
    "lat": "52.1263593",
    "lon": "20.7615032"
  },
  {
    "numerStacji": "35253",
    "bilkomNumerStacji": "5102705",
    "name": "Podkowa Leśna Główna",
    "lat": "52.1223735",
    "lon": "20.7251691"
  },
  {
    "numerStacji": "35246",
    "bilkomNumerStacji": "5102706",
    "name": "Podkowa Leśna Wschodnia",
    "lat": "52.1237526",
    "lon": "20.738135"
  },
  {
    "numerStacji": "35261",
    "bilkomNumerStacji": "5102792",
    "name": "Podkowa Leśna Zachodnia",
    "lat": "52.1207027",
    "lon": "20.7113163"
  },
  {
    "numerStacji": "35279",
    "bilkomNumerStacji": "5102875",
    "name": "Polesie",
    "lat": "52.1218348",
    "lon": "20.6971558"
  },
  {
    "numerStacji": "35154",
    "bilkomNumerStacji": "5102940",
    "name": "Pruszków WKD",
    "lat": "52.1616122",
    "lon": "20.8165804"
  },
  {
    "numerStacji": "35121",
    "bilkomNumerStacji": "5103090",
    "name": "Reguły",
    "lat": "52.1704176",
    "lon": "20.8591854"
  },
  {
    "numerStacji": "35147",
    "bilkomNumerStacji": "5103861",
    "name": "Tworki",
    "lat": "52.1689418",
    "lon": "20.8232513"
  },
  {
    "numerStacji": "35030",
    "bilkomNumerStacji": "5103929",
    "name": "Warszawa Aleje Jerozolimskie WKD",
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
    "numerStacji": "35006",
    "bilkomNumerStacji": "5104221",
    "name": "Warszawa Śródmieście WKD",
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
    "numerStacji": "14027",
    "bilkomNumerStacji": "5100298",
    "name": "Bogdaniec",
    "lat": "52.68898173869621",
    "lon": "15.079412006966528"
  },
  {
    "numerStacji": "17202",
    "bilkomNumerStacji": "5100128",
    "name": "Laskowice Pomorskie",
    "lat": "53.491278",
    "lon": "18.455917"
  },
  {
    "numerStacji": "264159",
    "bilkomNumerStacji": "5100358",
    "name": "Ustka Uroczysko",
    "lat": "54.580227",
    "lon": "16.846936"
  },
  {
    "numerStacji": "264901",
    "bilkomNumerStacji": "5104131",
    "name": "Wrocław Szczepin",
    "lat": "51.122433",
    "lon": "17.012748"
  },
  {
    "numerStacji": "64097",
    "bilkomNumerStacji": "5100916",
    "name": "Dębska Wola",
    "lat": "50.7017206434897",
    "lon": "20.59767930087835"
  },
  {
    "numerStacji": "52449",
    "bilkomNumerStacji": "5103422",
    "name": "Świeradów-Zdrój",
    "lat": "50.91140382089952",
    "lon": "15.343545252594314"
  },
  {
    "numerStacji": "56028",
    "bilkomNumerStacji": "5100019",
    "name": "Karpacz",
    "lat": "50.78240193355829",
    "lon": "15.761797428131105"
  },
  {
    "numerStacji": "13904",
    "bilkomNumerStacji": "5100014",
    "name": "Gorzów Wielkopolski",
    "lat": "52.72676726984486",
    "lon": "15.228928327560427"
  },
  {
    "numerStacji": "58487",
    "bilkomNumerStacji": "5103287",
    "name": "Sobótka",
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
    "numerStacji": "239138",
    "bilkomNumerStacji": "5101638",
    "name": "Kraków Podgórze",
    "lat": "50.040836",
    "lon": "19.958893"
  }
];

module.exports = stationData;
