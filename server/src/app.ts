import express from "express";
import "./config/db";
import routes from "./routes";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
