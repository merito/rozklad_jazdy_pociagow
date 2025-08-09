// Listen for when an AppMessage is received
Pebble.addEventListener('appmessage',
  function(e) {
    var dict = e.payload;
    console.log(JSON.stringify(e.payload))
    getDepartures(dict.numerStacji)
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

      for (let i=0; i<4; i++){
        var departure1 = json[i]

        var theTime = new Date(departure1.timestamp * 1000)

        var dictionary = {
          // 'trainCode': departure1.trainCode,
          timestamp: theTime.toTimeString(),
          // 'track': departure1.track,
          // 'platform': departure1.platform,
          // 'delay': departure1.delay,
          arrivalStation: departure1.arrivalStation
        };

        Pebble.sendAppMessage(dictionary,
          function(e) {
            console.log(dictionary.timestamp)
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