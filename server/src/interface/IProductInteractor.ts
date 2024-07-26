import { IProduct } from "./IProduct";

export interface IProductInteractor {
  getRecomendationProducts(userInterests: [string] | []): Promise<IProduct[]>;
  getProductById(id: string): Promise<IProduct>;
  search(query: string): Promise<IProduct[]>;
  getCategories(): Promise<string[]>;
}
