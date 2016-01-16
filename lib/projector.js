var http = require('http');

var right = {
  ip: '192.168.0.102'
}
var left = {
  ip: '192.168.0.101'
}

function turnOn(address) {
  console.log('turn on', address)
  var proxyRequest = http.request({
      host: address,
      port: 80,
      method: 'POST',
      path: '/pjctrl?D%3D%2512%2538%250%254%251%251%25114'
    },
    function (proxyResponse) {
      proxyResponse.on('data', function (chunk) {
        res.send(chunk);
      });
    });
  proxyRequest.write('');
  proxyRequest.end();
}

function turnOff(address) {
  console.log('turn on', address)
  var proxyRequest = http.request({
      host: address,
      port: 80,
      method: 'POST',
      path: '/pjctrl?D%3D%2512%2539%250%254%251%250%25114'
    },
    function (proxyResponse) {
      proxyResponse.on('data', function (chunk) {
        res.send(chunk);
      });
    });
  proxyRequest.write('');
  proxyRequest.end();
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
