import { Router } from "express";
import editorialController from "../../../controllers/editorial/editorialController.js";

const editorialRouter = new Router();

editorialRouter
  .get("/", editorialController.getEditorials)
  .get("/:id", editorialController.getEditorialById)
  .post("/create", editorialController.createEditorial)
  .put("/:id", editorialController.updateEditorial)
  .delete("/:id", editorialController.deleteEditorial);
  
export default editorialRouter;