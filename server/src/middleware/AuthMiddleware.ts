import { NextFunction, Request, Response } from "express";
import { ITokenManager } from "../interface/ITokenManager";
import IAuthMiddleware from "../interface/IAuthMiddleware";

export default class AuthMiddleware implements IAuthMiddleware {
  private tokenManager: ITokenManager;

  constructor(tokenManager: ITokenManager) {
    this.tokenManager = tokenManager;
  }

  verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization as string;
    if (!token) {
      return res.status(403).json({ msg: "please provide token to access protected route" });
    }
    try {
      const user = this.tokenManager.verifyToken(token);
      // req.
      // req.user = user;
      next();
    } catch (error) {
      res.status(403).json({ msg: "Invalid jwt token please login to access protected route" });
    }
  }
}
