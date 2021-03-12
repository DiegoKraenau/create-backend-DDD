var mysql = require('mysql2');
const env = process.env.NODE_ENV || 'development';
const currentEnv = require('./config/environments')[env];



var con = mysql.createConnection({
  host: currentEnv.host,
  user: currentEnv.username,
  password: currentEnv.password,
  port: currentEnv.port
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(`CREATE DATABASE ${currentEnv.database};`, function (err, result) {
    if (err) {
      console.log("There is a database wwith this name or an error ocurred");
    }
    console.log("Database created");
    process.exit(1);
  });
});

