var configs = require('../dbconfig.json');

if(process.env.NODE_ENV == "development"){
    var db_config = configs.dev;
} else if(process.env.NODE_ENV == "production"){
    var db_config = configs.prod;
}//end if
//var mysql = require('mysql2')
//var connection = mysql.createConnection(configs.dev)

//FOR PROMISE WRAPPING QUERIES
const mysql = require('mysql2/promise');

class qryManager {
    async executeQry(qry,params = []){
        const conn = await mysql.createConnection(db_config);
        const [rows, fields] = await conn.execute(qry, params);
        await conn.end();
        return await rows;
    }//end opentable
}//end class qryManager

exports.qryManager = qryManager