var express = require('express');
var router = express.Router();

var nconf = require('nconf');

/* GET home page. */
router.get('/', function(req, res) {
  var version = nconf.get('version') || "dev";
  var background = nconf.get('background') || "#aaaaaa";

  res.render('index', {
    version: version,
    background: background
  });
});

module.exports = router;