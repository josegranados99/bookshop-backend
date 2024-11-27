import userService from "../../services/users/userService.js";

const getUsers = async (req, res) => {
  const data = await userService.getUsers();
  res.json(data);
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await userService.getUserById(id);
  res.json(user);
};

const createUser = async (req, res) => {
  const body = req.body;
  const user = await userService.createUser(body);
  res.json(user);
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const data = await userService.updateUser(body, id);
  res.json(data);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const data = await userService.deleteUser(id);
  res.json(data);
};

export default { getUsers, getUserById, createUser, updateUser, deleteUser };
