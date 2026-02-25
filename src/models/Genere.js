import { ObjectId } from 'mongodb';
import dbClient from '../config/dbClient.js';

const connectDB = dbClient;

class GenereModel {

  async create(genere) {
    const colGeneres = connectDB.db.collection('Generos');
   return await colGeneres.insertOne(genere)
  } 

  async getAll() {
    const colGeneres = connectDB.db.collection('Generos');
    return await colGeneres.find({}).toArray();
  }

  async getOneGenere(id) {
    const colGeneres = connectDB.db.collection('Generos');
    return await colGeneres.findOne({_id: new ObjectId(id)});
  }

  async updateGenere(id, genere) {
    const colGeneres = connectDB.db.collection('Generos');
    return await colGeneres.updateOne({_id: new ObjectId(id)}, {$set: genere});
  }

  async deleteGenere(id) {
    const colGeneres = connectDB.db.collection('Generos');
    return await colGeneres.deleteOne({_id: new ObjectId(id)});
  }

}
export default new GenereModel();