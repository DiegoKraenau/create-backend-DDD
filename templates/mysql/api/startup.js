class Startup{


    constructor({server}){
        this._server = server;
    }


    async start(){
        await this._server.start();
    }

}


module.exports = Startup;