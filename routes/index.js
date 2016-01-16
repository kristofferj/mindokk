var express = require('express');
var router = express.Router();
var http = require('http');
var projectors = require('../config/projectors')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mindokk admin' });
});


/* turn on projector */
router.get('/turnOn', function(req, res, next) {
  var proxyRequest = http.request({
      host: '192.168.0.102',
      port: 80,
      method: 'POST',
      path: '/pjctrl?D%3D%2512%2538%250%254%251%251%25114'
    },
    function (proxyResponse) {
      proxyResponse.on('data', function (chunk) {
        res.send(chunk);
      });
    });

  // proxyRequest.write(res.body);
  // proxyRequest.end();
  res.render('index', { title: 'OK' });
});


module.exports = router;
