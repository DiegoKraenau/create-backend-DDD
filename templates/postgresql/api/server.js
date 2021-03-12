const express = require ("express");

class Server{

    constructor({config,router}){
        this._config = config;
        this._express = express();
        this._express.use(router);
    }

    async start(){
        await this._express.listen(this._config.PORT,()=>{
            console.log('Running on '+ this._config.PORT)
        })
    }

}

module.exports = Server;