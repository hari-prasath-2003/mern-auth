import { Document } from "mongoose";

export default interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  profile: string;
  interests: [string];
}
