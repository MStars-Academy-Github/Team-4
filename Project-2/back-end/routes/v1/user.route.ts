import express, { Router } from "express";
import { userController } from "../../modules/user";
const router: Router = express.Router();

router.post("/", userController.createUser);
router.put("/update", userController.updateUser);
router.put("/change", userController.editPassword);

export default router;
