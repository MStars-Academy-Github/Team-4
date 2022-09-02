import { Request, Response } from "express";
import formidable, { Fields } from "formidable";
import { GridFSBucket } from "mongodb";
import mongoose, { mongo } from "mongoose";
import { User } from "../user";
import Media from "./media.model";
import fs from "fs";
let gridfs: GridFSBucket;
mongoose.connection.on("connected", () => {
  gridfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db);
});
export async function createMedia(req: Request, res: Response) {
  const form = new formidable.IncomingForm();
  console.log("testing");

  form.parse(req, async (err: Error, fields: Fields, files: any) => {
    console.log("test");

    if (err) {
      console.error(err);
    }
    const user = await User.findById(fields.postedBy);
    let media = new Media(fields);
    media.postedBy = user?._id;
    const file = files["media"];
    console.log(user);

    if (file) {
      let writeStream = gridfs.openUploadStream(media._id.toString(), {
        contentType: "binary/octet-stream",
      });
      fs.createReadStream(file.filepath).pipe(writeStream);
    }

    try {
      let result = await media.save();
      return res.status(200).json({
        data: result,
      });
    } catch (err) {
      return res.status(400).json({
        error: "error during upload",
      });
    }
  });
}
export async function getMediaByID(req: Request, res: Response) {
  const { mediaID } = req.params;
  try {
    const media = await Media.findById(mediaID)
      .populate("postedBy", "_id , firstname , lastname , email")
      .exec();
    let files = await gridfs
      .find({ filename: media?._id.toString() })
      .toArray();
    res.json({
      data: media,
      files: files,
    });
  } catch (error) {
    return res.status(404).json({
      error: "Could not retrieve media file",
    });
  }
}
export async function getMediaByUserId(req: Request, res: Response) {
  const { userID } = req.params;
  try {
    const media = await Media.find({ postedBy: userID })
      .populate("postedBy", "email , firstname , lastname")
      .exec();
    res.json({
      data: media,
    });
  } catch (error) {
    return res.status(404).json({
      error: "could not retrieve media by user id",
    });
  }
}
