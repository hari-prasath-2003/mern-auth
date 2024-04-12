import express from "express";
import "./config/db";
import routes from "./routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(routes);

app.listen(3000, () => console.log("server listening on port 3000"));
