import { response, Router } from "express";
import userController from "../../../controllers/users/userController.js";

const userRouter = new Router();

userRouter
  .get("/", userController.getUsers)
  .get("/:id", userController.getUserById)
  .post("/", userController.createUser)
  .put("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

export default userRouter;
