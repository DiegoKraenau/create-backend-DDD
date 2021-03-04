module.exports = {
    PORT: process.env.QA_PORT,
    DB:{
        username: process.env.QA_DB_USERNAME,
        password : process.env.QA_DB_PASSWORD,
        database : process.env.QA_DB_DATABASE,
        host: process.env.QA_DB_HOST,
        dialect: process.env.QA_DB_DIALECT,
        port: process.env.QA_DB_PORT
    }
}