import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  admin: { type: Boolean, default: false },
});

const User = model("User", userSchema);

export default User;
