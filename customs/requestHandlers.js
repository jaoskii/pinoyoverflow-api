class requestHandlers {  
    verifyUserAccess(req, res, next){
        //GET AUTH HEADER VALUE
        const bearerHeader = req.headers['authorization'];
        //CHECK BEARER IF UNDEFINED
        if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        }else{
            res.status(statusCodes.forbidden).json({
                'msg': 'Access token invalid. Access forbidden',
                'statusCode': statusCodes.forbidden
            });
        }//emd if
    }//end fn
}//end class qryManager

exports.requestHandlers = requestHandlers