// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com" || "localhost",
//   port: 3306,
//   user: "uloqvtuz43yzq9uf" || "test",
//   password: "a2c52zlyx7ldlyme" || "password",
//   database: "gfdo64lp1kxdilii" || "burger_db"
// });

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "test",
  password: "password",
  database: "burger_db"
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
