class utilityBank {  
    convert2Object(resultSet){
        return resultSet.map(v => Object.assign({}, v));
    }//end fn
}//end class qryManager

exports.utilityBank = utilityBank