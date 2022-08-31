import mongoose from "mongoose";
import { User } from "../user";
import { getUserByEmail } from "../user/user.services";

export const loginUser = async (email: string, password: string) => {
  const user = await getUserByEmail(email);
  if (!user || !(await user.isPasswordMatch(password))) {
  }
  return user;
};
