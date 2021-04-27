var configs = require('../dbconfig.json');

//var mysql = require('mysql2')
//var connection = mysql.createConnection(configs.dev)

//FOR PROMISE WRAPPING QUERIES
const mysql = require('mysql2/promise');

class qryManager {
    async executeQry(qry,params = []){
        const conn = await mysql.createConnection(configs.dev);
        const [rows, fields] = await conn.execute(qry, params);
        await conn.end();
        return await rows;
    }//end opentable
}//end class qryManager

exports.qryManager = qryManager