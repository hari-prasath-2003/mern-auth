import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/MernAuth")
  .then(() => console.log("db connected successfullt"))
  .catch((err) => console.log(`error connecting db ${err}`));
