var express = require('express');
var router = express.Router();

//try to export qrymanager class
var { qryManager } = require('../../customs/qrymanager')

/* GET home page. */
router.get('/login', function(req, res, next) {
  let qry = new qryManager()
  qry.opentable('qry',[]);
  res.json({ username: 'Flavio' })
});

module.exports = router;
