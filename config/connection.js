// Set up MySQL connection.
const mysql = require("mysql");

let connection;
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

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "r7rczz4y2obxjbh8",
    password: "	m0yt9oocncjxhzhg",
    database: "	n7ca55ozqfdjh20y"
  });
};

connection.connect();
// Export connection for orm use
module.exports = connection;