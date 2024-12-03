import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { comparePassword, hashPassword } from "../../helpers/functions/functions.js";
import { HTTP_CODE_OK, HTTP_CODE_BAD_REQUEST } from "../../helpers/constants/constants.js";

dotenv.config();
const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY;

const getUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: { id: "asc" },
    select: {
      id: true,
      email: true,
    },
  });

  return users;
};

const getUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    select: {
      id: true,
      email: true,
    },
  });

  return user;
};

const createUser = async (body) => {
  const data = {
    ...body,
    password: await hashPassword(body.password),
  };
  const user = await prisma.user.create({
    data,
  });

  delete user.password;

  return user;
};

const updateUser = async (body, id) => {
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: body,
    select: {
      id: true,
      email: true,
    },
  });
  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id) },
    select: { id: true },
  });
  return deletedUser;
};

const loginUser = async (body) => {
  let response = "";
  const { email, password } = body;
  // const data = await dataAccess.findByField(collection, "email", email);
  const data = await prisma.user.findUnique({
    where: { email },
  });

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
