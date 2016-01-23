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

  var fileList = read(dropboxConfig.folder).map( function(file) {
    return {file: file}
  });

  console.log(fileList)

  var db = []

  jsonfile.readFile(dropboxConfig.db, function(err, db) {
    if (db) {
      // if new files
      fileList.map( function(file) {
        var hit = db.filter(function(item) {
          return file.file == item.file
        }).length > 0
        if (hit) {
          console.log('hit', file.file)
        } else {
          console.log('new', file.file)
          db.push(file)
        }
      });

      res.render('index', { title: 'Mindokk admin', db: db});
    } else {
      console.error('NO OBJ!')
    }
  });
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
