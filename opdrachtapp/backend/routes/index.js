var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Spel = mongoose.model('Spel');


router.get('/', function(req, res, next) {
  res.send('server works');
});

router.get('/API/spel/', function(req, res, next) {
  res.send('processing request here!');
});

router.get('/API/spelen/', function(req, res, next){
  res.send('processing request here!')
});

module.exports = router;
