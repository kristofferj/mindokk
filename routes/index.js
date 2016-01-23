var express = require('express');
var router = express.Router();
var http = require('http');
var projector = require('../lib/projector')
// var read = require('fs-readdir-recursive')
var fs = require('fs')
var dropboxConfig = require('../config/dropbox')

var jsonfile = require('jsonfile')
var util = require('util')

var _ = require('lodash')

/* GET home page. */
router.get('/', function(req, res, next) {

  // var fileList = fs(dropboxConfig.folder).map( function(file) {
  //   return {file: file}
  // });

  fileList = []

  var path = dropboxConfig.folder

  fs.readdir(path, function (err, files) {
    if (err) {
        throw err;
    }
    files.map(function (file) {
      var fullFile = path + '/' + file;
      var isFile = fs.statSync(fullFile).isFile();
      var isDirectory = fs.statSync(fullFile).isDirectory();
      fileList.push({
        file:file,
        isFile: isFile,
        isDirectory: isDirectory
      });
    })
  });

  console.log('filelist', fileList)

  var db = []

  jsonfile.readFile(dropboxConfig.db, function(err, db) {
    if (db) {
      // if new files
      fileList.map( function(file) {
        var hit = db.filter(function(item) {
          console.log('file', file)
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
    console.log('isDirectory', req.body.isDirectory[i])
    db.push({
      file: file,
      time: req.body.time[i],
      position: req.body.position[i],
      isDirectory: req.body.isDirectory[i]
    })
  })

  jsonfile.writeFile(dropboxConfig.db, db, function (err) {
    console.error(err)
  })

  res.render('save', { title: 'OK', status: "Saved" });
});


router.get('/show', function(req, res, next) {
  jsonfile.readFile(dropboxConfig.db, function(err, db) {
    res.render('show', { db: db, path: dropboxConfig.folder });
  });
});



/* turn on projector */
router.get('/turnOn', function(req, res, next) {
  console.log('turn ON projector')
  projector.turnOn();
  res.writeHead(200, {"Content-Type": "application/json"});
  var json = JSON.stringify({status: 'OK'});
  res.end(json);
});

/* turn off projector */
router.get('/turnOff', function(req, res, next) {
  console.log('turn OFF projector')
  projector.turnOff();
  res.writeHead(200, {"Content-Type": "application/json"});
  var json = JSON.stringify({status: 'OK'});
  res.end(json);
});

module.exports = router;
