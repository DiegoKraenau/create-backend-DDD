const mapper = require('automapper-js');
/*
The entity of the BD need to be different to Domain Entity , for this reason we need to use mapper
*/


/*This class works like a CRUD that are connecting with the repository */
class BaseBusiness{

    constructor(EntityRepository,EntityToMap){
        this._entityRepository = EntityRepository;
        this._entityToMap = EntityToMap;
    }

    async getAll(){
        const entities= await this._entityRepository.getAll();
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }

    async get(id){
        const entity = await this._entityRepository.get(id);
        if(!entity) return;
        return mapper(this._entityToMap,entity.toJSON());
    }

    async create(entity){
        entity = mapper(this._entityToMap,entity); /*The entity(DTO) that you are passing could be different to the Entity inside of the domain */
        const createdEntity = await this._entityRepository.create(entity);
        return mapper(this._entityToMap,createdEntity);
    }

    async update(id,entity){
        entity.id = id;
        entity = mapper(this._entityToMap,entity);
        const updatedEntity = await this._entityRepository.update(id,entity);
        return mapper(this._entityToMap,updatedEntity);
    }

    async delete(id){
        const deletedEntity = await this._entityRepository.delete(id);
        return deletedEntity;
    }

}

module.exports = BaseBusiness;