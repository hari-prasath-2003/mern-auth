import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/online-shopping")
  .then(() => console.log("db connected successfullt"))
  .catch((err) => console.log(`error connecting db ${err}`));
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/online-shopping";

mongoose
  .connect(dbURI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(`Error connecting to database: ${err}`));
