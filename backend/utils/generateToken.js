import jwt from "jsonwebtoken";
// Generate Token
export const generateToken = ({ _id }) => {
  const token = jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  return token;
};
