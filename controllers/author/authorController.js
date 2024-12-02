import authorService from "../../services/author/authorService.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const getAuthors = async (req, res) => {
  const cookie = req.cookies["access_token"];

  if (!cookie) {
    return res.status(401).json({ message: "Unauthorized user" });
  }

  try {
    jwt.verify(cookie, SECRET_KEY);
    const data = await authorService.getAuthors();
    res.status(200).json(data);

  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(401).json({ message: "Invalid token, please check your login details" });
  }
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
