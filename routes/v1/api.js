var express = require('express');
var router = express.Router();
var multer  = require('multer')

//try to export qrymanager class
//var { coreFunctions } = require('../../customs/sample'); //Sample class functions
var { qryManager } = require('../../customs/qrymanager')
var { passwordManager } = require('../../customs/passwordManager');

const queryman = new qryManager()
const passman = new passwordManager();

var upload = multer()

/* GET home page. */
router.post('/login', upload.none(), function(req, res, next) {
  console.log(req.body.userhook);
  // generate salt to hash password
  /* let password = 'jaoski12345';
  let passvalues = passman.hashPassword(password); */
  
  /*  queryman.executeQry('select id,name from tbl_tester',[]).then(res => {
    res.forEach(rows => {
      console.log(rows.name);
    });
  });
 */
  res.json({ username: 'Flavio' })
});

module.exports = router;
