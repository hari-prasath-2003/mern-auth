import { NextFunction, Request, Response } from "express";

export interface IProductController {
  getProductById(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
