import express, { Router } from "express";
import { mediaController } from "../../modules/media";

const router = express.Router();

router.post("/upload", mediaController.createMedia);
router.get("/videos", mediaController.getAllVideo);
router.get("/video/:mediaId", mediaController.mediaById);
router.get("/video/by/:userID", mediaController.getMediaByUserId);
router.put("/edit", mediaController.editMedia);
router.delete("/delete/:videoID", mediaController.deleteMedia);
export default router;
