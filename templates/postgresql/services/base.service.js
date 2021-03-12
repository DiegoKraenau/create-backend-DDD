/*This class works like a CRUD */
class BaseService{

    constructor(EntityBunisess){
        this._entityBunisess = EntityBunisess;
    }

    async getAll(){
        const entities = await this._entityBunisess.getAll();
        return entities;
    }

    async get(id){
        const entity = await this._entityBunisess.get(id);
        return entity;
    }

    async create(entity){
        entity = await this._entityBunisess.create(entity);
        return entity;
    }

    async delete(id){
        const deletedEntity = await this._entityBunisess.delete(id);
        return deletedEntity;
    }

    async update(id,entity){
        const updatedEntity = await this._entityBunisess.update(id,entity);
        return updatedEntity
    }

}

module.exports = BaseService;