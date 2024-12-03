import dotenv from "dotenv";
import DataAccess from "../../data_access/DataAccess.js";

dotenv.config();
const dataAccess = new DataAccess();
const collection = "editorial";

const getEditorials = async () => {
  const data = await dataAccess.findAll(collection);
  return data;
};

const getEditorialById = async (id) => {
  const data = await dataAccess.findById(collection, id);
  return data;
};

const createEditorial = async (body) => {
  const data = await dataAccess.save(collection, body);
  return data;
};

const updateEditorial = async (body, id) => {
  const data = await dataAccess.update(collection, body, id);
  return data;
};

const deleteEditorial = async (id) => {
  const deletedEditorial = await dataAccess.delete(collection, id);
  return deletedEditorial;
}

export default { getEditorials, getEditorialById, createEditorial, updateEditorial, deleteEditorial };