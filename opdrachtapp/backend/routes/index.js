var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Spel = mongoose.model('Spel');


router.get('/', function(req, res, next) {
  res.send('server works');
});

router.get('/API/spel/:spel', function(req, res) {
  res.json(req.spel);
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

router.delete('API/spel/:spel', function(req, res, next){
  req.spel.remove(function(err){
    if(err){return next(err)}
    res.json("removed spel");
  });
});

router.get('API/spel/:spel', function(req, res, next){
  req.spel.save(function(err){
    if(err){return next(err)}
    res.json("changed spel");
  });
});

router.param('spel', function(req, res, next, id){
  let query = Spel.findById(id);
  query.exec(function(err, spel){
    if(err){return next(err)}
    if(!spel){return next(new Error('not found '+ id));}
    req.spel = spel;
    return next();
  });
});

module.exports = router;
