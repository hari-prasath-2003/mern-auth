import { IProduct } from "../interface/IProduct";
import { IProductInteractor } from "../interface/IProductInteractor";
import ISearchInteractor from "../interface/ISearchInteractor";

export default class SearchInteractor implements ISearchInteractor {
  private productInteractor: IProductInteractor;

  constructor(productInteractor: IProductInteractor) {
    this.productInteractor = productInteractor;
  }

  public async search(query: string): Promise<IProduct[]> {
    const searchResult = await this.productInteractor.search(query);
    return searchResult;
  }
}
