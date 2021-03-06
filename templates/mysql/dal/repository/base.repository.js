/*This class are connecting whit your DataBase depending on the Entity*/
class BaseRepository{
    

    constructor(db,entity){
        this._db = db;
        this._entity = entity;
    }

    async getAll(){
        return await this._db[this._entity].findAll();
    }

    async get(id){
        return await this._db[this._entity].findOne({where:{id}});
    }

    async create(entity){
        return this._db[this._entity].create(entity);
    }

    async update(id,entity){
        delete entity.createdAt;
        delete entity.updatedAt;
        return await this._db[this._entity].update(entity,{where:{id}});
    }

    async delete(id){
        return await this._db[this._entity].destroy({where:{id}});
    }

}

module.exports = BaseRepository;