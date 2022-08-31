import { IUser, IUserDoc } from "../user/user.interface";
import jwt from "jsonwebtoken";
const TOKEN_KEY = process.env.TOKEN_KEY || "token";
export const generateAuthToken = async (user: IUserDoc): Promise<string> => {
  const payload = {
    email: user.email,
    firstname: user.firstname,
  };

  return jwt.sign(payload, TOKEN_KEY, {
    expiresIn: "2h",
  });
};