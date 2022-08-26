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
const getRandomUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Users.aggregate([{ $sample: { size: 1 } }]);
};
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    hobby,
    imgUrl,
    password,
    username,
  } = req.body;
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(password, 10);
  const foundUser = await Users.findOne({
    username: username,
  });

  if (foundUser) {
    res.json({
      success: false,
      data: "Username already exists",
    });
  } else {
    if (age >= 18) {
      const createdUser = await Users.create({
        username: username,
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
    } else {
      res.json({
        success: false,
        message: "age must be over 18",
      });
    }
  }
};

const getUsersByFilter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;

  const findUser = await Users.find({ username: body.username });

  if (findUser) {
    const user = findUser[0];
    console.log(findUser);
    const interestedGender = await Users.find({
      gender: { $regex: `[^${user.gender}]` },
    });
    let interest = await Users.find({ hobby: user.hobby });
    if (user.hobby == "nothing") {
      interest = interestedGender;
    } else {
      interest = await Users.find({ hobby: user.hobby });
    }
    res.json({
      success: true,
      message: "sending interested people",
      data: {
        gender: interestedGender,
        interest: interest,
      },
    });
  } else {
    res.json({
      success: false,
      message: "user not found",
    });
  }
};
const sendRequest = async (req: Request, res: Response, next: NextFunction) => {
  const request = req.body;
  console.log(request);

  res.json({
    message: "this is testing",
  });
};
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const findUser = await Users.find({ _id: body._id.toString() });
  console.log(findUser);
  console.log(findUser[0]._id.toString());

  if (findUser) {
    const myquery = { _id: findUser[0]._id.toString() };
    const newvalues = {
      username: body.fixedname,
      hobby: body.hobby,
      imgUrl: body.imgUrl,
    };
    await Users.updateOne({
      myquery,
      newvalues,
      function(err: Error, res: Response) {
        if (err) throw err;
      },
    });
    res.json({
      before: {
        username: findUser[0].username,
        hobby: findUser[0].username,
        imgUrl: findUser[0].username,
      },
      after: {
        username: body.fixedname,
        hobby: body.hobby,
        imgUrl: body.imgUrl,
      },
    });
  } else {
    res.json({
      success: false,
      message: "this user doesn't exist",
    });
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
    username: body.username,
  });

  console.log(userChecker);
  const checkedPassword = (userChecker && userChecker.password) || "not";

  if (await bcrypt.compare(body.password, checkedPassword)) {
    res.json({
      success: true,
      message: "Амжилттай нэвтэрлээ",
      data: userChecker,
    });
  } else {
    res.json({
      success: false,
      message: "username or password is wrong . please check it again",
    });
  }
};
const liked = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  // user who liked
  const user = await Users.findOne({
    _id: body.firstId,
  });
  // liked user by first user
  const second = await Users.findOne({
    _id: body.secondId,
  });

  if (user && second) {
    await Users.updateOne(
      { _id: body.firstId },
      {
        $set: {
          liked: body.secondId,
        },
      }
    );
    await Users.updateOne(
      { _id: body.secondId },
      {
        $set: {
          people_liked: body.firstId,
        },
      }
    );
    res.json({
      success: true,
      message: "ymartai ch ajiljiin",
    });
  } else {
    res.json({
      success: false,
      message: "boldgue",
    });
  }
};
const disliked = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  // user who disliked
  const user = await Users.findOne({
    _id: body.firstId,
  });
  // first user's disliked users
  const second = await Users.findOne({
    _id: body.secondId,
  });

  if (user && second) {
    await Users.updateOne(
      { _id: body.firstId },
      {
        $set: {
          liked: body.secondId,
        },
      }
    );
  }
};
const match = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;

  const user = await Users.findOne({
    _id: body._id,
  });
  const total: any = [];
  Users.find({}, (err: Error, data: any) => {
    if (err) {
      return err;
    } else {
      data.data.forEach((element: any) => {
        if (element.liked.includes(body._id)) {
          total.push(element);
        }
      });
      res.json({
        success: true,
        data: total,
      });
    }
  });
};

export default {
  getUsers,
  createUser,
  deleteUser,
  loginUser,
  getUsersByFilter,
  sendRequest,
  updateUser,
  liked,
  disliked,
  match,
};
