import express from "express";
import "./config/db";
import routes from "./routes";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("server listening on port 3000"));
