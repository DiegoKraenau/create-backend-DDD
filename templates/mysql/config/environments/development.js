module.exports = {
    PORT: process.env.DEV_PORT,
    "development":{
        username: process.env.DEV_DB_USERNAME,
        password : process.env.DEV_DB_PASSWORD,
        database : process.env.DEV_DB_DATABASE,
        host: process.env.DEV_DB_HOST,
        dialect: process.env.DEV_DB_DIALECT,
        port: process.env.DEV_DB_PORT
    }
}