const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "root",
});

//we will export it as promise since promise is better way to work with async task
module.exports = pool.promise();
