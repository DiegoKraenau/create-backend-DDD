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
}

module.exports = TestController;