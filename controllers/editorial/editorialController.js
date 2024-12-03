import editorialService from "../../services/editorial/editorialService.js";

const getEditorials = async (req, res) => {
  const data = await editorialService.getEditorials();
  res.status(200).json(data);
};

const getEditorialById = async (req, res) => {
  const id = req.params.id;
  const editorial = await editorialService.getEditorialById(id);
  res.status(200).json(editorial);
};

const createEditorial = async (req, res) => {
  const body = req.body;
  const editorial = await editorialService.createEditorial(body);
  res.status(200).json(editorial);
};

const updateEditorial = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updatedEditorial = await editorialService.updateEditorial(body, id);
  res.status(200).json(updatedEditorial);
};

const deleteEditorial = async (req, res) => {
  const id = req.params.id;
  const deletedEditorial = await editorialService.deleteEditorial(id);
  res.status(200).json(deletedEditorial);
};

export default { getEditorials, getEditorialById, createEditorial, updateEditorial, deleteEditorial };
