import { NextFunction, Request, Response } from "express";
import { IHomeController } from "./../interface/IHomeController";
import { IProductInteractor } from "../interface/IProductInteractor";
import { IUserInteractor } from "../interface/IUserInteractor";

export class HomeController implements IHomeController {
  private productInteractor: IProductInteractor;
  private userInteractor: IUserInteractor;

  constructor(productInteractor: IProductInteractor, userInteractor: IUserInteractor) {
    this.productInteractor = productInteractor;
    this.userInteractor = userInteractor;
  }

  public async recomendProduct(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const userId = res.locals.userId;
      const userInterests = await this.userInteractor.getUserInterest(userId);
      const recomendationProduct = await this.productInteractor.getRecomendationProducts(userInterests);

      return res.json(recomendationProduct);
    } catch (error) {
      next(error);
    }
  }

  public async getProductCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await this.productInteractor.getCategories();
      return res.json(categories);
    } catch (error) {
      next(error);
    }
  }
}
