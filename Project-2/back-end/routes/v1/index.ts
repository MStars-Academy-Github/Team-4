import userRoute from "./user.route";
import express from "express";
import authRoute from "./auth.route";
const router = express.Router();

interface IRoute {
  path: string;
  route: string;
}
router.use("/users", userRoute);
router.use("/auth", authRoute);
export default router;
