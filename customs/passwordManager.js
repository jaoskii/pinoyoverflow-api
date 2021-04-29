const bcrypt = require("bcrypt");
const hashSettings = {
    "salt": 10,
}

class passwordManager {
    constructor(){
        this.config = hashSettings;
    }//end constructor
    
    getSalt() {
        return this.config.salt;
    }//end get salt setting

    hashPassword(value){
        let hashed = bcrypt.hashSync(value, this.config.salt);
        return {'str': value, 'hashed': hashed};
    }//end function

    comparePasswords(value,hashed){
        if(!bcrypt.compareSync(value, hashed)){
            return false;
        }else{
            return true;
        }//end if
    }//end function
}//end class qryManager

exports.passwordManager = passwordManager