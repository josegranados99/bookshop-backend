import bookService from "../../services/books/bookService.js";


const getBooks = async (req, res) => {
    const data = await bookService.getBooks();
    res.json(data);
  };
  
  const getBookById = async (req, res) => {
    const id = req.params.id;
    const book = await bookService.getBookById(id);
    res.json(book);
  };
  
  const createBook = async (req, res) => {
    const body = req.body;
    const book = await bookService.createBook(body);
    res.json(book);
  };
  
  const updateBook = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const data = await bookService.updateBook(body, id);
    res.json(data);
  };
  
  const deleteBook = async (req, res) => {
    const id = req.params.id;
    const data = await bookService.deleteBook(id);
    res.json(data);
  };
  
  export default { getBooks, getBookById, createBook, updateBook, deleteBook };