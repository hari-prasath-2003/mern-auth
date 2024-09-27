import { Query } from "mongoose";
import { IProduct } from "./IProduct";
import ProductRecomendationDTO from "../../../shared/dto/ProductRecomendationDTO";

export interface IProductRepository {
  findById(id: string): Promise<IProduct | null>;
  findByCategories(categories: string[]): Promise<ProductRecomendationDTO[]>;
  search(query: string): Promise<IProduct[]>;
  getCategories(): Promise<string[]>;
}
