import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/userRouter";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
const DB_CONNECTION = process.env.ATLAS_MONGO_CONNECTION || "";
let server;
app.use(express.json());
app.use(cors());
app.use("/users", router);
mongoose.connect(DB_CONNECTION).then(() => {
  console.log("Connected to MongoDB");
  server = app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
  });
});
