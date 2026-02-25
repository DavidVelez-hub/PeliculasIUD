import { ObjectId } from 'mongodb';
import dbClient from '../config/dbClient.js';

const connectDB = dbClient;

class MediaModel {

  async create(director) {
    const colMedia = connectDB.db.collection('Media');
   return await colMedia.insertOne(director)
   
  } 

  async getAll() {
    const colMedia = connectDB.db.collection('Media');
    return await colMedia.find({}).toArray();
  }

  async getOneMedia(id) {
    const colMedia = connectDB.db.collection('Media');
    return await colMedia.findOne({_id: new ObjectId(id)});
  }

  async updateMedia(id, director) {
    const colMedia = connectDB.db.collection('Media');
    return await colMedia.updateOne({_id: new ObjectId(id)}, {$set: director});
  }

  async deleteMedia(id) {
    const colMedia = connectDB.db.collection('Media');
    return await colMedia.deleteOne({_id: new ObjectId(id)});
  }

}
export default new MediaModel();