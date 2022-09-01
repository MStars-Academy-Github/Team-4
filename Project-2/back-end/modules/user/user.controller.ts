import express, { Request, Response } from "express";
import * as userService from "./user.services";
export const createUser = async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body.data);
  res.send(user);
};
