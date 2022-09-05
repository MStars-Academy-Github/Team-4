import { Model, Document, Schema, Types } from "mongoose";
// Media has
// title
// description
// genre
// views
// postedBy User
// updated
// created
export interface IMedia {
  title: string;
  description: string;
  genre: string;
  views: number;
  postedBy: Schema.Types.ObjectId;
}
export interface IMediaDoc extends IMedia, DocumentWithTimestamp {}

export interface IMediaModel extends Model<IMedia | null> {}

interface DocumentWithTimestamp extends Document<Types.ObjectId> {
  created: Date;
  updated: Date;
}
