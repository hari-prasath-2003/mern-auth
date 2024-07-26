import { Router } from "express";
import TokenManager from "../services/TokenManager";
import authRouter from "./AuthRoute";
import homeRoute from "./HomeRoute";
import productRoute from "./ProductRoute";
import searchRoute from "./SearchRoute";
import AuthMiddleware from "../middleware/AuthMiddleware";

const router = Router();

router.use("/auth", authRouter);

const tokenManager = new TokenManager();
const authMiddleware = new AuthMiddleware(tokenManager);
router.use(authMiddleware.verifyToken.bind(authMiddleware));

router.use("/home", homeRoute);

router.use("/product", productRoute);

router.use("/search", searchRoute);

export default router;
