import ProductRecomendationDTO from "../../../shared/dto/ProductRecomendationDTO";
import { IProduct } from "./IProduct";

export interface IProductInteractor {
  getRecomendationProducts(userInterests: string[]): Promise<ProductRecomendationDTO[]>;
  getProductById(id: string): Promise<IProduct>;
  search(query: string): Promise<IProduct[]>;
  getCategories(): Promise<string[]>;
}
