var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
  res.json({ username: 'Flavio' })
});

module.exports = router;
