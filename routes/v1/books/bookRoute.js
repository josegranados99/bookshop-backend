import { response, Router } from "express";
import bookController from "../../../controllers/books/bookController.js";

const bookRouter = new Router();

bookRouter
  .get("/", bookController.getBooks)
  .get("/:id", bookController.getBookById)
  .post("/", bookController.createBook)
  .put("/:id", bookController.updateBook)
  .delete("/:id", bookController.deleteBook);

export default bookRouter;
