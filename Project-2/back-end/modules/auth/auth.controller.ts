import * as authService from "./auth.service";
import { Request, Response } from "express";
import { tokenService } from "../token";
import { IUser, IUserDoc } from "../user/user.interface";
export const loginUser = async (req: Request, res: Response) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user: IUserDoc = await authService.loginUser(email, password);
  const tokens = await tokenService.generateAuthToken(user);
  res.send({ email, tokens });
};
