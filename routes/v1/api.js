var express = require('express');
var router = express.Router();
var multer  = require('multer') //for multiform data parsing
var jwt = require('jsonwebtoken'); //jwt token
//try to export qrymanager class
//var { coreFunctions } = require('../../customs/sample'); //Sample class functions

var { qryManager } = require('../../customs/qrymanager')
var { passwordManager } = require('../../customs/passwordManager');

const queryman = new qryManager()
const passman = new passwordManager();

var upload = multer()

/* GET home page. */
router.post('/login', upload.none(), function(req, res, next) {
  // generate salt to hash password
  req_fields = ['userhook','password'];
  
  req_fields.forEach(key => {
    if(req.body[key] == "" || req.body[key] == undefined){
      res.json({'msg': 'Please fill up all required fields.','fields': req_fields});
    }//end if
  });
  
  queryman.executeQry('select `id`,`email`,`name`,`username`,`status`,`rank`,`password` from tbl_users where (`username` = ?  or `email` = ?)', [req.body['userhook'],req.body['userhook']]).then(resultset => {
    if(resultset.length == 0){      
      res.json({'msg': 'Account not found with username/email: ' + req.body['userhook']});
    }else{
      if(passman.comparePasswords(req.body['password'],resultset[0].password)){
        //jwt.sign(resultset[0],)
      }else{
        res.json({'msg': 'Seems your password is incorrect. Please try again.'});
      }//end if
    }//end if
  });

  //res.json({ username: 'Flavio' })
});

module.exports = router;
