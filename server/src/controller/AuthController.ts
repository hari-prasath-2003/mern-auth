import { NextFunction, Request, Response } from "express";
import { ITokenManager } from "../interface/ITokenManager";
import IAuthController from "../interface/IAuthController";
import IAuthInteractor from "../interface/IAuthInteractor";
import mongoose, { MongooseError } from "mongoose";
import ClientError from "../error/ClientError";

export default class AuthController implements IAuthController {
  private tokenManager: ITokenManager;
  private authInteractor: IAuthInteractor;

  constructor(authInteractor: IAuthInteractor, tokenManager: ITokenManager) {
    this.authInteractor = authInteractor;
    this.tokenManager = tokenManager;
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const authenticatedUser = await this.authInteractor.login(email, password);

      const token = this.tokenManager.generateToken({ id: authenticatedUser.id });

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      return res.json({
        email: authenticatedUser.email,
        name: authenticatedUser.name,
        profile: authenticatedUser.profile,
        id: authenticatedUser.id,
      });
    } catch (error: any) {
      console.log(error);
      if (error instanceof ClientError || error instanceof mongoose.Error.ValidatorError) {
        return res.status(401).json({ msg: "login failed", error: error.message });
      } else {
        next(error);
      }
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    const { email, password, name } = req.body;
    try {
      const authenticatedUser = await this.authInteractor.register(email, password, name);

      const token = this.tokenManager.generateToken({ id: authenticatedUser.id });

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      return res.json({
        email: authenticatedUser.email,
        name: authenticatedUser.name,
        profile: authenticatedUser.profile,
        id: authenticatedUser.id,
      });
    } catch (error: any) {
      console.log(error);
      if (error instanceof ClientError || error instanceof mongoose.Error.ValidatorError) {
        return res.status(401).json({ msg: "registration failed", error: error.message });
      } else {
        next(error);
      }
    }
  }
}
