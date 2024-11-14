import {MongoClient, ObjectId} from "mongodb";
import dotenv from "dotenv";

dotenv.config({path:"../../.env"})


class DataAccess {
    constructor (){
        if(!DataAccess.instance){            
            this.uri = process.env.URL_DATA_BASE;
            this.client = new MongoClient(this.uri);
            this.dbName = process.env.NAME_DATA_BASE;
            this.db = this.client.db(this.dbName);
            DataAccess.instance = this;
        }

        return DataAccess.instance;
    }

    async connect() {
        try {
            await this.client.connect();
            console.log("Connect to DB");
            
        } catch (error) {
            console.log(`Error to connection DB: ${error}`);
            
        }
        
    }
};

export default DataAccess;