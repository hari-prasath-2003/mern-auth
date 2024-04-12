import { Router } from "express";
import TokenManager from "../services/TokenManager";
import authRouter from "./authRoute";
import AuthMiddleware from "../middleware/AuthMiddleware";

const router = Router();

router.use("/auth", authRouter);

const tokenManager = new TokenManager();
const authMiddleware = new AuthMiddleware(tokenManager);
router.use(authMiddleware.verifyToken);

router.use("/", () => {});

export default router;
