class TestController {


    constructor({testService}){
        this._testService = testService;
    }
    
    /*Write your all methods*/
    async verifyTest(req,res){
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req,res){

        try {
            const messages = await this._testService.getAll();
            res.send({
                status: "200",
                payload: messages
            })
        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }

        //res.send(messages);
    }
}

module.exports = TestController;