import DataAccess from "./DataAccess.js";

const dataAccess = new DataAccess();

const connectioToDB = async () => {
  await dataAccess.connect();
};

export default connectioToDB;
