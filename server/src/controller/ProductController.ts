import { NextFunction, Request, Response } from "express";
import { IProductController } from "../interface/IProductController";
import { IProductInteractor } from "../interface/IProductInteractor";

export class ProductController implements IProductController {
  private productInteractor: IProductInteractor;

  constructor(productInteractor: IProductInteractor) {
    this.productInteractor = productInteractor;
  }

  public async getProductById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const productId = req.query.pid as string;

      if (!productId) {
        throw new Error("not product id or invalid id provided ");
      }
      const product = await this.productInteractor.getProductById(productId);

      return res.json(product);
    } catch (error) {
      next(error);
    }
  }
}
