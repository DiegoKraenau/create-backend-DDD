class TestController {
    
    /*Write your all methods*/
    async verifyTest(req,res){
        res.send({
            message: "Hellos, this is a Test"
        })
    }
}

module.exports = TestController;