import DataAccess from "../../data_access/DataAccess.js";

const dataAccess = new DataAccess();
const collection = "books";

const getBooks = async () => {
    const data = await dataAccess.findAll(collection);
    return data;
  };
  
  const getBookById = async (id) => {
    const book = await dataAccess.findById(collection, id);
    return book;
  };
  
  const createBook = async (body) => {
    const book = await dataAccess.save(collection, body);
    return book;
  };
  
  const updateBook = async (body, id) => {
    const updatedBook = await dataAccess.update(collection, body, id);
    return updatedBook;
  };
  
  const deleteBook = async (id) => {
    const deletedBook = await dataAccess.delete(collection, id);
    return deletedBook;
  };
  
  export default { getBooks, getBookById, createBook, updateBook, deleteBook };