import DataAccess from "../../data_access/DataAccess.js";

const dataAccess = new DataAccess();
const collection = "user";

(async () => {
  await dataAccess.connect();
  console.log("Connected to the database");
})();

const getUsers = async () => {
  const data = await dataAccess.findAll(collection);
  return data;
};

const getUserById = async (id) => {
  const user = await dataAccess.findById(collection, id);
  return user;
};

const createUser = async (body) => {
  const user = await dataAccess.save(collection, body);
  return user;
};

const updateUser = async (body, id) => {
  const updatedUser = await dataAccess.update(collection, body, id);
  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await dataAccess.delete(collection, id);
  return deletedUser;
};

export default { getUsers, getUserById, createUser, updateUser, deleteUser };
