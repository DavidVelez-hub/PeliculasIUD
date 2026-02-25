import { ObjectId } from 'mongodb';
import dbClient from '../config/dbClient.js';

const connectDB = dbClient;

class TypeModel {
  async create(type) {
    const colTypes = connectDB.db.collection('Types');
   return await colTypes.insertOne(type)
   
  } 

  async getAll() {
    const colTypes = connectDB.db.collection('Types');
    return await colTypes.find({}).toArray();
  }

  async getOneType(id) {
    const colTypes = connectDB.db.collection('Types');
    return await colTypes.findOne({_id: new ObjectId(id)});
  }

  async updateType(id, type) {
    const colTypes = connectDB.db.collection('Types');
    return await colTypes.updateOne({_id: new ObjectId(id)}, {$set: type});
  }

  async deleteType(id) {
    const colTypes = connectDB.db.collection('Types');
    return await colTypes.deleteOne({_id: new ObjectId(id)});
  }

}
export default new TypeModel();