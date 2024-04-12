import mongoose from "mongoose";
import IUser from "../interface/IUser";

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default: "",
  },
});

const User = mongoose.model<IUser>("user", userSchema);

export default User;
