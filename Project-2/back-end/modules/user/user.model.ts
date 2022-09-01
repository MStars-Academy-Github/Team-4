import mongoose, { Schema } from "mongoose";
import { IUserDoc, IUser } from "./user.interface";
import bcrypt from "bcryptjs";
const userSchema = new Schema<IUserDoc>({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  phone: { type: Number, required: true },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  register: {
    type: String,
    trim: true,
    minlength: 10,
    maxlength: 10,
  },
});
userSchema.method(
  "isPasswordMatch",
  async function (password: string): Promise<boolean> {
    const user: IUserDoc = this;
    return bcrypt.compare(password, user.password);
  }
);
userSchema.pre("save", async function (next) {
  const user: IUserDoc = this;
  console.log("before model saved");
  console.log(user);

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model<IUserDoc>("User", userSchema);

export default User;
