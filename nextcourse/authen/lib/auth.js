import bcrypt from "bcrypt";

const saltRounds = 12;
export async function hasPassword(password) {
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
}
