var statusCodes = require('../../statusCodes.json')
var express = require('express');
var router = express.Router();
var multer  = require('multer') //for multiform data parsing

//custom classes
var { qryManager } = require('../../customs/qrymanager')
var { passwordManager } = require('../../customs/passwordManager');
var { utilityBank } = require('../../customs/utilityBank');
var { requestHandlers } = require('../../customs/requestHandlers');
var { jwtManager } = require('../../customs/jwtManager');

const queryman = new qryManager()
const passman = new passwordManager();
const utilman = new utilityBank();
const reqhandler = new requestHandlers();
const jwtman = new jwtManager();
const upload = multer()

//LOGIN
router.post('/login', upload.none(), function(req, res, next) {
  // generate salt to hash password
  req_fields = ['userhook','password'];
  
  req_fields.forEach(key => {
    if(req.body[key] == "" || req.body[key] == undefined){
      res.status(statusCodes.success).json({
        'msg': 'Please fill up all required fields.',
        'fields': req_fields,
        'statusCode': statusCodes.success
      });
    }//end if
  });
  
  queryman.executeQry('select `id`,`email`,`name`,`username`,`status`,`rank`,`password` from tbl_users where (`username` = ?  or `email` = ?)', [req.body['userhook'],req.body['userhook']]).then(resultset => {
    if(resultset.length == 0){      
      res.status(statusCodes.success).json({
        'msg': 'Account not found with username/email: ' + req.body['userhook'],
        'statusCode': statusCodes.success
      });
    }else{
      if(passman.comparePasswords(req.body['password'],resultset[0].password)){
        resultset = utilman.convert2Object(resultset);
        let token = jwtman.sign(resultset[0]);
        
        res.status(statusCodes.success).json({
          'msg': "You are successfully logged in.",
          "token": token,
          "add_info": {
            "name": resultset[0]['name'],
            "username": resultset[0]['username']
          },
          "statusCode": statusCodes.success
        });
      }else{
        res.status(statusCodes.success).json({
          'msg': 'Seems your password is incorrect. Please try again.',
          'statusCode': statusCodes.success
        });
      }//end if
    }//end if
  });
});//end route

router.post('/me',[reqhandler.verifyUserAccess], (req, res) => {
  if(!jwtman.verify(req.token)){
    res.status(statusCodes.forbidden).json({
      'msg': 'Access token invalid. Access forbidden',
      'statusCode': statusCodes.forbidden
    });
  }else{
    res.status(statusCodes.success).json({
      "msg": "Success",
      'statusCode': statusCodes.success,
      "data": jwtman.verify(req.token)
    });
  }//end if
  
});//end route

module.exports = router;