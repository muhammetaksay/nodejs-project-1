var express = require('express');
var router = express.Router();

/* GET categories listing. */
router.get('/', function(req, res, next) {
  res.json({    
    message: 'respond with a resource',
    endpoint: 'categories',
    headers: req.headers,
    body: req.body,
    query: req.query
  });
});

module.exports = router;
