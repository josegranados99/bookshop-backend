import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import DataAccess from "../../data_access/DataAccess.js";
import { comparePassword, hashPassword } from "../../helpers/functions/functions.js";
import { HTTP_CODE_OK, HTTP_CODE_BAD_REQUEST } from "../../helpers/constants/constants.js";

dotenv.config();
const dataAccess = new DataAccess();
const collection = "user";
const SECRET_KEY = process.env.SECRET_KEY;

const getUsers = async () => {
  const data = await dataAccess.findAll(collection);
  return data;
};

const getUserById = async (id) => {
  const user = await dataAccess.findById(collection, id);
  return user;
};

const createUser = async (body) => {
  const data = {
    ...body,
    password: await hashPassword(body.password),
  };
  const user = await dataAccess.save(collection, data);
  return user;
};

const updateUser = async (body, id) => {
  const updatedUser = await dataAccess.update(collection, body, id);
  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await dataAccess.delete(collection, id);
  return deletedUser;
};

const loginUser = async (body) => {
  let response = "";
  const { email, password } = body;
  const data = await dataAccess.findByField(collection, "email", email);

  if (!data) {
    response = {
      status: HTTP_CODE_BAD_REQUEST,
      data: { message: "User not found" },
    };
    return response;
  }

  const validatePassword = await comparePassword(password, data.password);

  if (validatePassword) {
    delete data.password;
    const token = jwt.sign({ data }, SECRET_KEY, { expiresIn: "1h" });

    response = {
      status: HTTP_CODE_OK,
      data: { message: "Logged in user", token },
    };
  } else {
    response = {
      status: HTTP_CODE_BAD_REQUEST,
      data: { message: "Incorrect password" },
    };
  }

  return response;
};

export default { getUsers, getUserById, createUser, updateUser, deleteUser, loginUser };
