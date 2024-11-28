import authorService from "../../services/author/authorService.js";


const getAuthors = async (req, res) => {
  const data = await authorService.getAuthors();
  res.json(data);
};

const getAuthorById = async (req, res) => {
  const id = req.params.id;
  const author = await authorService.getAuthorById(id);
  res.json(author);
};

const createAuthor = async (req, res) => {
  const body = req.body;
  const author = await authorService.createAuthor(body);
  res.json(author);
};

const updateAuthor = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const data = await authorService.updateAuthor(body, id);
  res.json(data);
};

const deleteAuthor = async (req, res) => {
  const id = req.params.id;
  const data = await authorService.deleteAuthor(id);
  res.json(data);
};

export default { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor };
