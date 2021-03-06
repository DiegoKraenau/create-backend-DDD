const BaseRepository = require('./base.repository');

class TestRepository extends BaseRepository{


    constructor({db}){
        super(db,"Student");
    }
}

module.exports = TestRepository;