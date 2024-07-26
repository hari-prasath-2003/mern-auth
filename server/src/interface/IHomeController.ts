import { NextFunction, Request, Response } from "express";

export interface IHomeController {
  recomendProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
