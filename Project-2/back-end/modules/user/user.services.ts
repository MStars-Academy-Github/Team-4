import mongoose from "mongoose";
import { IUserDoc } from "./user.interface";
import User from "./user.model";
import bcrypt from "bcryptjs";

export function createUser(body: any) {
  if (getUserByEmail(body.email) == null) {
    return User.create(body);
  } else {
    // console.log("user existing");
    return false;
  }
}
export function updateUser(body: any) {
  User.updateOne({ email: body.email }, { body });
}
export const getUserByEmail = async (email: string): Promise<IUserDoc | null> =>
  User.findOne({ email: email });
export async function editPassword(body: any) {
  // if (user.isModified("password")) {
  //   user.password = await bcrypt.hash(user.password, 8);
  // }
  console.log(body.password);

  const password = await bcrypt.hash(body.password, 8);
  console.log(password);

  User.updateOne({});
}
