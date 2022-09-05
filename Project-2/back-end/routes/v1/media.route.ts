import express, { Router } from "express";
import { mediaController } from "../../modules/media";

const router = express.Router();

router.post("/upload", mediaController.createMedia);
router.get("/videos", mediaController.getAllVideo);
router.get("/video/:mediaID", mediaController.getMediaByID);
router.get("/video/by/:userID", mediaController.getMediaByUserId);
export default router;
