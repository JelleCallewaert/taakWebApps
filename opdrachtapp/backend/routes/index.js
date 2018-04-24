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
  let query = Spel.find(function(err, spelen){
    if(err){return next(err)}
    res.json(spelen);
  });
});

router.post('/API/spelen/', function(req, res, next){
  Benodigdheid.create(req.body.benodigdheden, function(err, nodigs){
    if(err){return next(err)}
  });
  let spel = new Spel({titel: req.body.titel, created: req.body.datumAdded});
  spel.benodigdheden = nodigs;
  spel.save(function(err, sp){
    if(err){
      Benodigdheid.remove({ _id: { $in: spel.benodigdheden } });
      return next(err)
    }
    res.json(sp);
  });
});

router.delete('API/spel/:spel', function(req, res, next){
  console.log('trying to remove');
  Benodigdheid.remove({ _id: { $in: req.spel.benodigdheden }}, 
    function(err){
      if (err) return next(err);
      req.spel.remove(function(err){
        if (err) return next(err);
        res.json(req.spel);
      });
    }
  )
  Spel.remove({ _id: { $in: req.recipe.benodigdheden } }, function(err) {
    if (err) { return next(err);}
    req.spel.remove(function(err) {
      if (err) { return next(err);}
      res.json(req.spel);
    });
  });
  console.log("removed");
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

router.post('/API/spel/:spel/benodigdheden', 
  function(req, res, next) {
  let nodig = new Benodigdheid(req.body);

  nodig.save(function(err, bnodig) {
    if (err){
      Benodigdheid.remove({ _id: { $in: spel.benodigdheden } });
      return next(err);
    }

    req.spel.benodigdheden.push(bnodig);
    req.spel.save(function(err, sp) {
      if (err) {
        Benodigdheid.remove({ _id: { $in: spel.benodigdheden } });
        return next(err)
      }
      res.json(bnodig);
    })
  });
});

module.exports = router;
