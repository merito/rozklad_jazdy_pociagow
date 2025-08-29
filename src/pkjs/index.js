const stationData = require("./stations.js");

Pebble.addEventListener("ready",
  function(e) {
    console.log("PKJS ready, sending jsReady message");
    getNearestStations();
  }
)

// Listen for when an AppMessage is received
Pebble.addEventListener('appmessage',
  function(e) {
    var dict = e.payload;
    console.log(JSON.stringify(e.payload))

    var command = dict.command;

    switch (command) {
      case "stationList":
        getNearestStations();
        break;
      case "departures":
        getDepartures(dict.numerStacji)
        break;
      default:
        break;
    }
  }                     
);

var xhrRequest = function (url, type, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open(type, url);
  xhr.send();
};

function getDepartures(numerStacji) {
  var url = 'https://kalkulatorkolejowy.pl/bilkom/api/departures/normal/' + numerStacji;
  console.log(url)

  xhrRequest(url, 'GET',
    function(responseText) {
      var json = JSON.parse(responseText);

      for (let i=0; i<Math.min(10, json.length); i++){
        var departure1 = json[i]

        var theTime = new Date(departure1.timestamp * 1000)

        var dictionary = {
          // 'trainCode': departure1.trainCode,
          timestamp: theTime.toTimeString().substring(0,5),
          track: departure1.track,
          platform: departure1.platform,
          delay: departure1.delay.toString(),
          arrivalStation: departure1.arrivalStation,
          messageType: "departureList"
        };

        Pebble.sendAppMessage(dictionary,
          function(e) {
            console.log(dictionary.timestamp)
            console.log(dictionary.track)
            console.log(dictionary.platform)
            console.log(dictionary.delay.toString())
            console.log(dictionary.arrivalStation)
            console.log('Departure info sent to Pebble successfully!');
          },
          function(e) {
            console.log('Error sending departure info to Pebble!');
          }
        );
      }
    }
  )
}

function findClosestStations(lat, lon, count) {
  if (!stationData) {
    return [];
  }

  const toRad = Math.PI / 180;
  const earthRadiusKMs = 6357;

  const stationsWithDistance = Object.values(stationData).map(function(station) {
    var dLat = (station.lat - lat) * toRad;
    var dLon = (station.lon - lon) * toRad;
    var lat1 = lat * toRad;
    var lat2 = station.lat * toRad;
    var a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = earthRadiusKMs * c;
    var distanceStr = distance.toFixed(2) + " km";
    var result = {};
    for (var key in station) {
      result[key] = station[key];
    }
    result.distance = distanceStr;
    return result;
  });

  stationsWithDistance.sort(function(a, b) {
    return parseFloat(a.distance) - parseFloat(b.distance);
  });

  return stationsWithDistance.slice(0, count);
}

function sendStationList(stations) {
  for (let i=0; i<10; i++) {
    var dictionary = {
      name: stations[i].name,
      numerStacji: stations[i].numerStacji,
      distance: stations[i].distance,
      messageType: "stationList"
    }

    Pebble.sendAppMessage(dictionary,
      function(e) {
        console.log(dictionary.name)
        console.log(dictionary.numerStacji)
        console.log(dictionary.distance)
        console.log('Station info sent to Pebble successfully!');
      },
      function(e) {
        console.log('Error sending station info to Pebble!');
      }
    );
  }
}

function locationSuccess(position) {
  const closest = findClosestStations(
      position.coords.latitude,
      position.coords.longitude,
      // 51.097916,
      // 17.037951,
      10
    );

    sendStationList(closest);
}

function locationError(err) {
  console.log('Error requesting location!');

  var dictionary = {
    name: "No location",
    numerStacji: "0",
    distance: "Try again later",
    messageType: "stationList"
  }

      Pebble.sendAppMessage(dictionary,
      function(e) {
        console.log(dictionary.name)
        console.log(dictionary.numerStacji)
        console.log(dictionary.distance)
        console.log('Station error sent to Pebble successfully!');
      },
      function(e) {
        console.log('Error sending station error to Pebble!');
      }
    );
}

function getNearestStations() {
  navigator.geolocation.getCurrentPosition(
    locationSuccess,
    locationError,
    {timeout: 30000, maximumAge: 120000}
  );
}
