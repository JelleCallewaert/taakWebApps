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
  Spel.find(function(err, spelen){
    if(err) {
      return next(err);
    }
    res.json(spelen);
  });
});

router.post('/API/spelen/', function(req, res, next){
  let spel = new Spel(req.body);
  spel.save(function(err, rec){
    if(err){
      return next(err);
    }
    res.json(rec);
  });
});

module.exports = router;
