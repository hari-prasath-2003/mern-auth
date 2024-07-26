import { NextFunction, Request, Response } from "express";

export default interface IAuthController {
  login(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  register(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  refreshToken(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
