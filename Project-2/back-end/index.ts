import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/v1";
import cors from "cors";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
const ATLAS_MONGO_SERVER: string =
  process.env.ATLAS_MONGO_SERVER || "localhost";
let server: any;
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("yutai ch ajiljin");
});
app.use("/v1", routes);
app.use(cors());
mongoose.connect(ATLAS_MONGO_SERVER).then(() => {
  console.log("Connected to MongoDB");
  server = app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
  });
});
