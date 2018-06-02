// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "uloqvtuz43yzq9uf",
  password: "gsnz0hc69vdunwbs",
  database: "gfdo64lp1kxdilii"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
