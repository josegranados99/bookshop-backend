import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBooks = async () => {
  const data = await prisma.book.findMany({
    orderBy: { id: "asc" },
  });
  return data;
};

const getBookById = async (id) => {
  const book = await prisma.book.findUnique({
    where: { id: parseInt(id) },
  });
  return book;
};

const createBook = async (body) => {
  const book = await prisma.book.create({
    data: body,
  });
  return book;
};

const updateBook = async (body, id) => {
  const updatedBook = await prisma.book.update({
    where: { id: parseInt(id) },
    data: body,
  });
  return updatedBook;
};

const deleteBook = async (id) => {
  const deletedBook = await prisma.book.delete({
    where: { id: parseInt(id) },
  });
  return deletedBook;
};

export default { getBooks, getBookById, createBook, updateBook, deleteBook };
