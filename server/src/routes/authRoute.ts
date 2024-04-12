import { Router } from "express";
import UserRepository from "../repository/UserRepository";
import AuthInteractor from "../interactor/AuthInteractor";
import AuthController from "../controller/AuthController";
import TokenManager from "../services/TokenManager";

const router = Router();

const tokenManager = new TokenManager();
const userRepository = new UserRepository();
const authInteractor = new AuthInteractor(userRepository);
const authController = new AuthController(authInteractor, tokenManager);

router
  .post("/login", authController.login.bind(authController))
  .post("/register", authController.register.bind(authController));

export default router;
