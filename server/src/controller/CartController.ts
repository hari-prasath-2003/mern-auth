import { NextFunction, Request, Response } from "express";
import { ICartController } from "../interface/ICartController";
import { ICartInteractor } from "../interface/ICartInteractor";

export class CartController implements ICartController {
  private cartInteractor: ICartInteractor;

  constructor(cartInteractor: ICartInteractor) {
    this.cartInteractor = cartInteractor;
  }

  public async getUserCart(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const userId = res.locals.userId;
      const userCart = await this.cartInteractor.getUserCartDetail(userId);

      return res.json(userCart);
    } catch (error) {
      next(error);
    }
  }

  public async addProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const userId = res.locals.userId;
      const productId = req.params.productId;

      await this.cartInteractor.addProduct(userId, productId);

      return res.json("product added to cart successfully");
    } catch (error) {
      next(error);
    }
  }

  public async updateProductQuantity(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const userId = res.locals.userId;
      const productId = req.params.productId;
      const newQuantity = req.body.quantity;

      if (newQuantity >= 1) {
        await this.cartInteractor.updateProductQuantity(userId, productId, newQuantity);
      } else {
        await this.cartInteractor.removeProduct(userId, productId);
      }

      return res.json("product quantity updated successfully");
    } catch (error) {
      next(error);
    }
  }

  public async removeProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const userId = res.locals.userId;
      const productId = req.params.productId;

      await this.cartInteractor.removeProduct(userId, productId);

      return res.json("product removed successfully");
    } catch (error) {
      next(error);
    }
  }
}
