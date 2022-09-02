import express, { Router } from "express";
import { mediaController } from "../../modules/media";

const router = express.Router();

router.post("/upload", mediaController.createMedia);

export default router;
