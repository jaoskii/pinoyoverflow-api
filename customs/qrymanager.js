var mysql = require('mysql2')
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'cushyfy',
    database: 'pinoy_overflow_main',
    port: '3306',
})

class qryManager {
    opentable(){
        connection.query(
        'SELECT 1 + 1 AS solution',
            function(err, results, fields) {
                console.log(results[0].solution); // results contains rows returned by server
                //console.log(fields); // fields contains extra meta data about results, if available
            }
        );
    }//end opentable
}//end class qryManager

exports.qryManager = qryManager