// Set up MySQL connection.
const mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    password: "1337t34g59",
    database: "burgers_db"
  });
};

connection.connect();
// Export connection for orm use
module.exports = connection;



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