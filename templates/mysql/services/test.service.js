const BaseService = require('./base.service');

/*Extends works like inheritance */
class TestService extends BaseService{

    constructor({testBusiness}){
        super(testBusiness)
    }

    /*You can add other methods that there aren´t in the crud */
}