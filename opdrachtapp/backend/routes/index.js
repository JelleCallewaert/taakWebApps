var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Spel = mongoose.model('Spel');
let Benodigdheid = mongoose.model('Benodigdheid');
let Doelgroep = mongoose.model('Doelgroep');

router.get('/', function(req, res, next) {
  res.send('server works');
});

router.get('/API/spelen/', function(req, res, next){
  let query = Spel.find().populate('benodigdheden');
  query.exec(function(err, spelen){
    if(err){return next(err)}
    res.json(spelen)
  });
});

router.post('/API/spelen/', function(req, res, next){
  Benodigdheid.create(req.body.benodigdheden, function(err, nodigs){
    if(err) {return next(err)}
  
    let spel = new Spel({
        titel: req.body.titel,
        beschrijving: req.body.beschrijving,
        minAantal: req.body.minAantal,
        maxAantal: req.body.maxAantal,
        datumCreated: req.body.datumCreated
        
    });
    spel.benodigdheden = nodigs;
    spel.save(function(err, sp){
      if(err){
        Benodigdheid.remove({_id : {$in: spel.benodigdheden}})
        return next(err)
      }
      res.json(sp);
    });
  });
});

router.get('/API/spel/:spel', function(req, res) {
  res.json(req.spel);
});

router.delete('/API/spel/:spel', function(req, res, next){
  console.log(req.spel);
  Benodigdheid.remove({ _id: {$in: req.spel.benodigdheden}},
    function(err){
      if(err){return next(err)}
      req.spel.remove(function(err){
        if(err){return next(err)}
        res.json(req.spel);
      })
    });
});

/*
router.get('API/spel/:spel', function(req, res, next){
  req.spel.save(function(err){
    if(err){return next(err)}
    res.json("changed spel");
  });
});
*/
router.post('/API/spel/:spel/benodigdheden', function(req, res, next) {
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

router.post('/API/spel/:spel/doelgroepen', 
  function(req, res, next) {
  let nodig = new Doelgroep(req.body);

  nodig.save(function(err, dg) {
    if (err){
      Benodigdheid.remove({ _id: { $in: spel.doelgroepen } });
      return next(err);
    }

    req.spel.doelgroepen.push(dg);
    req.spel.save(function(err, sp) {
      if (err) {
        Doelgroep.remove({ _id: { $in: spel.doelgroepen } });
        return next(err)
      }
      res.json(dg);
    })
  });
});

router.param('spel', function(req, res, next, id){
  console.log(id);
  let query = Spel.findById(id).populate('benodigdheden').populate('doelgroepen');
  query.exec(function(err, spel){
    if(err){return next(err)}
    if(!spel){return next(new Error('not found '+ id));}
    req.spel = spel;
    return next();
  });
});

module.exports = router;
