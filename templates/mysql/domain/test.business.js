const BaseBusiness = require('./base.business');
const {Test} = require('./models')

/*This class are connecting with his own Repository */
class TestBusiness extends BaseBusiness{

    constructor({testRepository}){
        super(testRepository,Test)
    }

    /*You can write other functions that you want, for example the function that are inside in your test.service.js */
}

module.exports = TestBusiness;