var express = require('express');
var router = express.Router();
var http = require('http');
var projector = require('../lib/projector')
var read = require('fs-readdir-recursive')
var dropboxConfig = require('../config/dropbox')

var jsonfile = require('jsonfile')
var util = require('util')

var _ = require('lodash')

/* GET home page. */
router.get('/', function(req, res, next) {

  var fileList = read(dropboxConfig.folder);

  var db = []

  jsonfile.readFile(dropboxConfig.db, function(err, db) {
    if (db) {
      res.render('index', { title: 'Mindokk admin', db: db});
    } else {
      console.error('NO OBJ!')
    }
  });

  // if new files
  // var list = fileList.map( function(item) {
  //   if (!_.has(db, item)) {
  //     db.push({
  //       file: item
  //     })
  //   }
  // });



});

router.post('/save', function(req, res, next) {
  var db = []
  req.body.file.map( function(file, i) {
    db.push({
      file: file,
      time: req.body.time[i],
      position: req.body.position[i]
    })
  })

  jsonfile.writeFile(dropboxConfig.db, db, function (err) {
    console.error(err)
  })

  res.render('save', { title: 'OK', status: "Saved" });
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
