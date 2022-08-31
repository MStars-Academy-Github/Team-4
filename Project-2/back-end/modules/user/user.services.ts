import mongoose from "mongoose";
import { IUserDoc } from "./user.interface";
import User from "./user.model";

export function createUser(body: any) {
  return User.create(body);
}

export const getUserByEmail = async (email: string): Promise<IUserDoc | null> =>
  User.findOne({ email: email });
