import { NextFunction, Request, Response } from "express";
import { ITokenManager } from "../interface/ITokenManager";
import IAuthController from "../interface/IAuthController";
import IAuthInteractor from "../interface/IAuthInteractor";
import mongoose, { MongooseError } from "mongoose";
import { JwtPayload } from "jsonwebtoken";
import { IUserInteractor } from "../interface/IUserInteractor";

export default class AuthController implements IAuthController {
  private tokenManager: ITokenManager;
  private authInteractor: IAuthInteractor;
  private userInteractor: IUserInteractor;

  constructor(tokenManager: ITokenManager, authInteractor: IAuthInteractor, userInteractor: IUserInteractor) {
    this.tokenManager = tokenManager;
    this.authInteractor = authInteractor;
    this.userInteractor = userInteractor;
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const authenticatedUser = await this.authInteractor.login(email, password);

      const refreshToken = this.tokenManager.generateRefreshToken({ id: authenticatedUser.id });
      const accessToken = this.tokenManager.generateAccessToken({ id: authenticatedUser.id });

      res.cookie("token", refreshToken, {
        httpOnly: false,
        sameSite: "lax",
        secure: false,
        domain: "localhost",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });

      return res.json({
        email: authenticatedUser.email,
        name: authenticatedUser.name,
        profile: authenticatedUser.profile,
        id: authenticatedUser.id,
        token: accessToken,
      });
    } catch (error: any) {
      next(error);
    }
  }

  public async register(req: Request, res: Response, next: NextFunction) {
    const { email, password, name } = req.body;
    try {
      const authenticatedUser = await this.authInteractor.register(email, password, name);

      const refreshToken = this.tokenManager.generateRefreshToken({ id: authenticatedUser.id });
      const accessToken = this.tokenManager.generateAccessToken({ id: authenticatedUser.id });

      res.cookie("token", refreshToken, {
        secure: false,
        sameSite: "none",
        httpOnly: false,
        domain: "",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });

      return res.json({
        email: authenticatedUser.email,
        name: authenticatedUser.name,
        profile: authenticatedUser.profile,
        id: authenticatedUser.id,
        token: accessToken,
      });
    } catch (error: any) {
      next(error);
    }
  }

  public async refreshToken(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token as string;

    if (!token) {
      return res.status(401).json({ msg: "empty refresh token please login to get access token" });
    }
    try {
      const userDetail = this.tokenManager.verifyToken(token) as JwtPayload;
      const authenticatedUser = await this.userInteractor.getUser(userDetail.id);
      if (!authenticatedUser) {
        return res.status(401).json({ msg: "invalid id provided in token" });
      }
      const newAccessToken = this.tokenManager.generateAccessToken({ id: authenticatedUser.id });

      return res.json({
        email: authenticatedUser.email,
        name: authenticatedUser.name,
        profile: authenticatedUser.profile,
        id: authenticatedUser.id,
        token: newAccessToken,
      });
    } catch (error) {
      res.status(401).json({ msg: "Invalid refresh token please login to get new access token" });
    }
  }
}
