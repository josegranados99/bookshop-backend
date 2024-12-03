import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getEditorials = async () => {
  const data = await prisma.editorial.findMany({
    orderBy: { id: "asc" },
  });
  return data;
};

const getEditorialById = async (id) => {
  const data = await prisma.editorial.findUnique({
    where: { id: parseInt(id) },
  });
  return data;
};

const createEditorial = async (body) => {
  const data = await prisma.editorial.create({
    data: body,
  });
  return data;
};

const updateEditorial = async (body, id) => {
  const data = await prisma.editorial.update({
    where: { id: parseInt(id) },
    data: body,
  });
  return data;
};

const deleteEditorial = async (id) => {
  const deletedEditorial = await prisma.editorial.delete({
    where: { id: parseInt(id) },
  });
  return deletedEditorial;
};

export default { getEditorials, getEditorialById, createEditorial, updateEditorial, deleteEditorial };
