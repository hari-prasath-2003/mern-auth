import { NextFunction, Request, Response } from "express";

export interface ICartController {
  getUserCart(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  removeProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  updateProductQuantity(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  addProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
