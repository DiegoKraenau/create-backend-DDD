module.exports = {
    PORT: process.env.PROD_PORT,
    DB:{
        username: process.env.PROD_DB_USERNAME,
        password : process.env.PROD_DB_PASSWORD,
        database : process.env.PROD_DB_DATABASE,
        host: process.env.PROD_DB_HOST,
        dialect: process.env.PROD_DB_DIALECT,
        port: process.env.PROD_DB_PORT
    }
}