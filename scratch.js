var mysql = require('mysql');

var dbConnection = mysql.createConnection({
   host: "localhost",
   user: "dbAmber",
   password: "5PcySo$75Z[d"
});

dbConnection.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
});