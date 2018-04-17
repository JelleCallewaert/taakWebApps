var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server works');
});

router.get('/API/spel/', function(req, res, next) {
  res.send('processing request here!')
});

module.exports = router;
