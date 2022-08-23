import express from "express";
import userController from "../controller/userController";
const router = express.Router();

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.delete("/delete", userController.deleteUser);
router.post("/login", userController.loginUser);

export default router;
