import { NextFunction, Request, Response } from "express";
import { IProductInteractor } from "../interface/IProductInteractor";
import ISearchInteractor from "../interface/ISearchInteractor";

export class SearchController {
  private searchInteractor: ISearchInteractor;

  constructor(searchInteractor: ISearchInteractor) {
    this.searchInteractor = searchInteractor;
  }

  public async searchProduct(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.query) {
        return res.json({ msg: "please provide a valid query you provided empty query" });
      }
      let query = req.query?.q as string;
      query = query.replace(" ", " + ");
      const searchResult = await this.searchInteractor.search(query);
      return res.json(searchResult);
    } catch (error) {
      next(error);
    }
  }
}
