import {Router} from "express";
import  userController from "../../../controllers/user/userController.js"

const userRoute = new Router();

userRoute
    .get("/", userController.getUser)
    .post("/", userController.createUser)
    .put("/:id", userController.updateUser)
    .delete("/:id", userController.deleteUser);

export default userRoute;