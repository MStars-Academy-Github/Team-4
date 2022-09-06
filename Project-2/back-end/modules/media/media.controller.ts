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
export const createMedia = async (req: Request, res: Response) => {
  let form = new formidable.IncomingForm();
  form.parse(req, async (err, fields: Fields, files: any) => {
    if (err) {
      return res.status(400).json({
        error: "Video could not be uploaded",
      });
    }

    const user = await User.findById(fields.postedBy);
    let media = new Media(fields);
    media.postedBy = user?.id;
    const file = files["media"];

    if (file) {
      console.log(file);

      let writeStream = gridfs.openUploadStream(media._id.toString(), {
        contentType: "binary/octet-stream",
      });
      fs.createReadStream(file.filepath).pipe(writeStream);
    }
    try {
      let result = await media.save();
      res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        error: "Error during file upload",
      });
    }
  });
};
export const mediaById = async (req: Request, res: Response) => {
  const { mediaId } = req.params;
  console.log(mediaId);

  try {
    let media = await Media.findById(mediaId)
      .populate("postedBy", "_id  , firstName")
      .exec();
    let files = await gridfs
      .find({ filename: media?._id.toString() })
      .toArray();
    let file = files[0];
    console.log(media);

    // console.log(media + " media");
    // console.log(files + " files");

    res.header("Content-Length", file.length.toString());
    res.header("Content-Type", file.contentType);

    let downloadStream = gridfs.openDownloadStream(file._id);
    downloadStream.pipe(res);
    downloadStream.on("error", () => {
      res.sendStatus(404);
    });
    downloadStream.on("end", () => {
      res.end();
    });
  } catch (error) {
    return res.status(404).json({
      error: "Could not retrieve media file",
    });
  }
};
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
export async function getAllVideo(req: Request, res: Response) {
  try {
    const videos = await Media.find()
      .populate("postedBy", "_id , firstname , lastname")
      .exec();
    res.json({
      data: videos,
    });
  } catch {
    return res.status(404).json({
      error: "bad request",
    });
  }
}
export async function editMedia(req: Request, res: Response) {
  const body = req.body;
  console.log(body._id);
  const id = body._id;
  try {
    const media = await Media.findById(id.toString());
    console.log(media);

    await Media.updateOne(
      { _id: media?._id },
      {
        title: body.title,
        description: body.description,
      }
    );
    res.send({ media });
  } catch (error) {
    console.error(error);
  }
}
export async function deleteMedia(req: Request, res: Response) {
  const { videoID } = req.params;
  try {
    const media = await Media.findById(videoID);
    await Media.deleteOne({ _id: media?._id });
    res.json({
      message: "video deleted successfully",
    });
  } catch (error) {
    console.error(error);
  }
}
