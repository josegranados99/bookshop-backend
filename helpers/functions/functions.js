import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const salt = 10;
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const comparePassword = async (password, hash) => {
  const isMathc = await bcrypt.compare(password, hash);
  return isMathc;
};
