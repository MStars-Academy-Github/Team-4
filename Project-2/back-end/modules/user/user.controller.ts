import express, { Request, Response } from "express";
import * as userService from "./user.services";
export const createUser = async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body.data);
  if (user) {
    res.send({ user, success: true });
  } else {
    res.send({ success: false, message: "user with this email existing" });
  }
};
export const updateUser = async (req: Request, res: Response) => {
  const data = await userService.updateUser(req.body.data);
  res.send(data);
};
export async function editPassword(req: Request, res: Response) {
  console.log(req.body.data);

  const data = await userService.editPassword(req.body.data);
  res.send(data);
}
