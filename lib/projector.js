var http = require('http');

var right = {
  ip: '192.168.0.102'
}
var left = {
  ip: '192.168.0.101'
}

function turnOn(address) {
  console.log('turn on', address)

  var options = {
    host: address,
    port: 80,
    path: '/pjctrl?D%3D%2512%2538%250%254%251%251%25114'
  };

  http.get(options, function(resp){
    resp.on('data', function(chunk){
      //do something with chunk
    });
  }).on("error", function(e){
    console.log("Got error: " + e.message);
  });
}

function turnOff(address) {
  console.log('turn off', address)
  var options = {
    host: address,
    port: 80,
    path: '/pjctrl?D%3D%2512%2539%250%254%251%250%25114'
  };
  http.get(options, function(resp){
    resp.on('data', function(chunk){
      //do something with chunk
    });
  }).on("error", function(e){
    console.log("Got error: " + e.message);
  });
}

var projector = {
  turnOn: function() {
    turnOn(right.ip);
    turnOn(left.ip)
  },
  turnOff: function() {
    turnOff(right.ip);
    turnOff(left.ip)
  }
}

module.exports = projector
