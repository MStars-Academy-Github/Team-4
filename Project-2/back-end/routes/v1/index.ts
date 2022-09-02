import userRoute from "./user.route";
import express from "express";
import authRoute from "./auth.route";
import mediaRoute from "./media.route";
const router = express.Router();

interface IRoute {
  path: string;
  route: string;
}
router.use("/users", userRoute);
router.use("/auth", authRoute);
router.use("/media", mediaRoute);
export default router;
