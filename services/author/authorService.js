import DataAccess from "../../data_access/DataAccess.js";

const dataAccess = new DataAccess();
const collection = "author";

// (async () => {
//   await dataAccess.connect();
// })();

const getAuthors = async () => {
  const data = await dataAccess.findAll(collection);
  return data;
};

const getAuthorById = async (id) => {
  const author = await dataAccess.findById(collection, id);
  return author;
};

const createAuthor = async (body) => {
  const auhotr = await dataAccess.save(collection, body);
  return auhotr;
};

const updateAuthor = async (body, id) => {
  const updatedAuhtor = await dataAccess.update(collection, body, id);
  return updatedAuhtor;
};

const deleteAuthor = async (id) => {
  const deletedAuthor = await dataAccess.delete(collection, id);
  return deletedAuthor;
};

export default { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor };
