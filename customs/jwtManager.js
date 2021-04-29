var jwt = require('jsonwebtoken'); //jwt token

class jwtManager {  
    sign(data){
        return jwt.sign(data,process.env.JWT_SECRET);
    }//end fn

    verify(token){
        try {
            var decoded = jwt.verify(token,process.env.JWT_SECRET);
            return decoded;
        } catch(err) {
            return false;
        }
    }//end fn
}//end class qryManager

exports.jwtManager = jwtManager