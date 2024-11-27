import { MongoClient, ObjectId } from "mongodb";
// import dotenv from "dotenv";

// dotenv.config({path:"../.env"});
// const DB_URL = process.env.DB_URL;
// const DB_NAME = process.env.DB_NAME;

class DataAccess {
  constructor() {
    if (!DataAccess.instance) {
      // this.dbUrl = process.env.DB_URL;
      // this.dbName = process.env.DB_NAME;
      this.dbUrl = "mongodb+srv://josegranados99:O9TlnME4g37jTUJv@practicecluster.5npqc.mongodb.net/";
      this.dbName = "bookshop";
      this.client = new MongoClient(this.dbUrl);
      this.db = this.client.db(this.dbName);
      DataAccess.instance = this;
    }

    return DataAccess.instance;
  }

  async connect() {
    try {
      await this.client.connect();
      console.log(`Connected to data base: ${this.dbName}`);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async findAll(colectionName) {
    const collection = this.db.collection(colectionName);
    const data = await collection.find().toArray();
    return data;
  }

  async findById(colectionName, id) {
    const collection = this.db.collection(colectionName);
    const data = await collection.findOne({_id: new ObjectId(id)})
    return data;
  }

  async save(colectionName, body) {
    const collection = this.db.collection(colectionName);
    const query = await collection.insertOne(body);
    return query;
  }

  async update(colectionName, body, id) {
    const collection = this.db.collection(colectionName);
    const query = await collection.updateOne({ _id: new ObjectId(id) }, { $set: body });

    return query;
  }

  async delete(colectionName,id) {
    const collection = this.db.collection(colectionName);
    const query = await collection.deleteOne({_id: new ObjectId(id)});

    return query;
  }
}

export default DataAccess;
