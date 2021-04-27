var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");

//try to export qrymanager class
//var { coreFunctions } = require('../../customs/sample'); //Sample class functions
var { qryManager } = require('../../customs/qrymanager')

var queryman = new qryManager()

/* GET home page. */
router.post('/login', function(req, res, next) {
  
  console.log(bcrypt);
  queryman.executeQry('select id,name from tbl_tester',[]).then(res => {
    res.forEach(rows => {
      console.log(rows.name);
    });
  });

  res.json({ username: 'Flavio' })
});

module.exports = router;
