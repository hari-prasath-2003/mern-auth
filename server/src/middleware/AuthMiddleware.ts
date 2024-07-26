import { NextFunction, Request, Response } from "express";
import { ITokenManager } from "../interface/ITokenManager";
import IAuthMiddleware from "../interface/IAuthMiddleware";

export default class AuthMiddleware implements IAuthMiddleware {
  private tokenManager: ITokenManager;

  constructor(tokenManager: ITokenManager) {
    this.tokenManager = tokenManager;
  }

  verifyToken(req: Request, res: Response, next: NextFunction) {
    //parsing access token
    const token = req.headers.authorization?.replace("Bearer ", "") as string;

    if (!token) {
      return res.status(401).json({ msg: "please provide access token to access protected route" });
    }
    try {
      const user = this.tokenManager.verifyToken(token);
      res.locals.userId = user.id;
      next();
    } catch (error: any) {
      return res.status(401).json({ msg: "Invalid access token please send refresh to get new access token" });
    }
  }
}
