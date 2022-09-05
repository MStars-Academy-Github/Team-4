import mongoose, { Schema } from "mongoose";
import { IMediaDoc } from "./media.interface";
import { Types } from "mongoose";
import { User } from "../user";

const mediaSchema = new Schema<IMediaDoc>({
  media: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  genre: {
    type: String,
  },
  views: {
    type: Number,
    default: 0,
  },
  postedBy: {
    type: Types.ObjectId,
    ref: User,
  },
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Media = mongoose.model<IMediaDoc>("Media", mediaSchema);
export default Media;
