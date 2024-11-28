import { response, Router } from "express";
import authorController from "../../../controllers/author/authorController.js";

const authorRouter = new Router();

authorRouter
  .get("/", authorController.getAuthors)
  .get("/:id", authorController.getAuthorById)
  .post("/", authorController.createAuthor)
  .put("/:id", authorController.updateAuthor)
  .delete("/:id", authorController.deleteAuthor);

export default authorRouter;
