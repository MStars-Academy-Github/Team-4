import Users from "../model/users";
import express, { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
const getUsers = (req: Request, res: Response, next: NextFunction) => {
  Users.find({}, (err: Error, data: any) => {
    if (err) {
      return err;
    }
    res.json({
      data: data,
    });
  });
};
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, age, gender, hobby, imgUrl, password } =
    req.body;
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(password, 10);
  const foundUser = await Users.findOne({
    firstName: firstName,
    lastName: lastName,
  });

  console.log(hashedPassword);
  //   password = hashedPassword;
  if (foundUser) {
    res.json({
      success: false,
      data: "User already exists",
    });
  } else {
    const createdUser = await Users.create({
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender,
      hobby: hobby,
      imgUrl: imgUrl,
      password: hashedPassword,
    });

    if (createdUser) {
      res.json({
        success: true,
        message: "user creation successful",
        data: createUser,
      });
    } else {
      res.json({
        success: false,
        message: "user creation unsuccessful",
        data: {},
      });
    }
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  console.log(body);

  const findUser = await Users.findOne({ _id: body._id });
  if (findUser) {
    await Users.deleteOne({ _id: body._id });
    res.json({
      success: true,
      message: "user deleted succesfully",
    });
  } else {
    res.json({
      success: false,
      message: "user does not exists",
    });
  }
};
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  console.log(body);
  const userChecker = await Users.findOne({
    firstName: body.firstName,
  });

  console.log(userChecker);
  const checkedPassword = (userChecker && userChecker.password) || "not";

  if (await bcrypt.compare(body.password, checkedPassword)) {
    res.json({
      success: true,
      message: "Login successfully",
    });
  } else {
    res.json({
      success: false,
      message: "username or password is wrong . please check it again",
    });
  }
};

export default { getUsers, createUser, deleteUser, loginUser };
