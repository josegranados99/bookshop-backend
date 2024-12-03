import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAuthors = async () => {
  const data = await prisma.author.findMany({
    orderBy: {id: "asc"}
  });
  return data;
};

const getAuthorById = async (id) => {
  const author = await prisma.author.findUnique({ where: { id: parseInt(id) } });
  return author;
};

const createAuthor = async (body) => {
  const auhotr = await prisma.author.create({ data: body });
  return auhotr;
};

const updateAuthor = async (body, id) => {
  const updatedAuhtor = await prisma.author.update({
    where: { id: parseInt(id) },
    data: body,
  });
  return updatedAuhtor;
};

const deleteAuthor = async (id) => {
  const deletedAuthor = await prisma.author.delete({
    where: { id: parseInt(id) },
  });
  return deletedAuthor;
};

export default { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor };
