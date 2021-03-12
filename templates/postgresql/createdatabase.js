var pgtools = require('pgtools');
const env = process.env.NODE_ENV || 'development';
const currentEnv = require('./config/environments')[env];


const con = {
  host: currentEnv.host,
  user: currentEnv.username,
  password: currentEnv.password,
  port: currentEnv.port
};


pgtools.createdb(con, currentEnv.database, function (err, res) {
  console.log("Connected!");
  if (err) {
    console.log("There is a database wwith this name or an error ocurred");
    process.exit(-1);
  }
  console.log("Database created");
  process.exit(1);
});



