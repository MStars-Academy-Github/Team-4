import express from "express";
import userController from "../controller/userController";
const router = express.Router();

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.delete("/delete", userController.deleteUser);
router.post("/login", userController.loginUser);
router.post("/filter", userController.getUsersByFilter);
router.post("/req", userController.sendRequest);
router.put("/update", userController.updateUser);

export default router;
