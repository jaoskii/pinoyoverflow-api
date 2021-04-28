var express = require('express');
var router = express.Router();
var multer  = require('multer') //for multiform data parsing
var jwt = require('jsonwebtoken'); //jwt token

//custom classes
var { qryManager } = require('../../customs/qrymanager')
var { passwordManager } = require('../../customs/passwordManager');
var { utilityBank } = require('../../customs/utilityBank');

const queryman = new qryManager()
const passman = new passwordManager();
const utilman = new utilityBank();
const upload = multer()

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
        resultset = utilman.convert2Object(resultset);
        let token = jwt.sign(resultset[0],process.env.JWT_SECRET);
        res.json({
          'msg': "You are successfully logged in.",
          "token": token,
          "add_info": {
            "name": resultset[0]['name'],
            "username": resultset[0]['username']
          }
        });
      }else{
        res.json({'msg': 'Seems your password is incorrect. Please try again.'});
      }//end if
    }//end if
  });
});


module.exports = router;