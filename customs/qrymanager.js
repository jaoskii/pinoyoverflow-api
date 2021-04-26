var mysql = require('mysql2')
var configs = require('../dbconfig.json');
var connection = mysql.createConnection(configs.dev)


class qryManager {
    opentable(qry,params = []){
        connection.query(
        'SELECT 1 + 1 AS solution',
            function(err, results, fields) {
                //console.log(fields); // fields contains extra meta data about results, if available
                return console.log(results[0].solution); // results contains rows returned by server
            }
        );
    }//end opentable
}//end class qryManager

exports.qryManager = qryManager