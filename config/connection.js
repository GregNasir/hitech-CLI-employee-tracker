const mysql = require('mysql');



//create connection
const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,
    user:'root',

    password:'',
    database:'employees_db',
    multipleStatements: true
});


module.exports = connection;