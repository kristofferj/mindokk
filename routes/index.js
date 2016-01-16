var express = require('express');
var router = express.Router();
var http = require('http');
var projector = require('../lib/projector')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mindokk admin' });
});


/* turn on projector */
router.get('/turnOn', function(req, res, next) {
  console.log('turn ON projector')
  projector.turnOn();
  res.render('index', { title: 'OK' });
});

/* turn off projector */
router.get('/turnOff', function(req, res, next) {
  console.log('turn OFF projector')
  projector.turnOff();
  res.render('index', { title: 'OK' });
});



module.exports = router;
