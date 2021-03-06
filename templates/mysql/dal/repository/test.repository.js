const BaseRepository = require('./base.repository');

class TestRepository extends BaseRepository{


    constructor({db}){
        super(db,"Test");
    }
}

module.exports = TestRepository;