import DataAccess from "./DataAccess.js";

const dataAccess = new DataAccess();

const connectionToDB = async () => {
  await dataAccess.connect();
};

export default connectionToDB;
