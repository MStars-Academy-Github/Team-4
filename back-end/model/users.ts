import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  hobby: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Users = mongoose.model("users", UsersSchema);

export default Users;
