import { UserInteractor } from "../interactor/UserInteractor";
import { Router } from "express";
import UserRepository from "../repository/UserRepository";
import AuthInteractor from "../interactor/AuthInteractor";
import AuthController from "../controller/AuthController";
import TokenManager from "../services/TokenManager";

const tokenManager = new TokenManager();

const userRepository = new UserRepository();
const userInteractor = new UserInteractor(userRepository);

const authInteractor = new AuthInteractor(userRepository);

const authController = new AuthController(tokenManager, authInteractor, userInteractor);

const router = Router();

router
  .post("/login", authController.login.bind(authController))
  .post("/register", authController.register.bind(authController))
  .get("/refresh", authController.refreshToken.bind(authController));

export default router;
