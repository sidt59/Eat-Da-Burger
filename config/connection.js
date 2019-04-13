const mysql = require("mysql");

//EDIT THIS IF SOMETHING ISNT WORKING BC USUALLY THIS IS THE PROBLEM!!!!
let connection;
  if (process.env.JAWSDB_URL){
      connection = mysql.createConnection(process.env.JAWSDB_URL);
   } else {
       connection = mysql.createConnection({
           host: "ip-10-1-0-97",
           port: 3306,
           user: "root",
           password: "1337t34g59",
           database: "burgers_db"
       });
   };

   connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
//export
module.exports = connection


/* var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1337t34g59",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
}); */

/* // Set up MySQL connection.
const mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "ip-10-1-0-97",
    port: 3306, 
    user: "root",
    password: "1337t34g59",
    database: "burgers_db"
  });
};

// Export connection for orm use
module.exports = connection; */