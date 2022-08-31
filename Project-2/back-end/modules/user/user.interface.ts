import mongoose, { Model, Document } from "mongoose";

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
  registerID: string;
}

export interface IUserDoc extends IUser, Document {
  isPasswordMatch(password: string): Promise<boolean>;
}
export interface IUserModel extends Model<IUserDoc> {}
