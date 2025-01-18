var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
fs.readdirSync(__dirname).forEach(function(file) {
  if (file !== 'index.js') {
    var route = require('./' + file);
    router.use('/' + file.split('.')[0], route);
  }
});

module.exports = router;
