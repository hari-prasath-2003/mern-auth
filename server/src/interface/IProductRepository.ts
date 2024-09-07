import { Query } from "mongoose";
import { IProduct } from "./IProduct";

export interface IProductRepository {
  find(id: string): Promise<Query<IProduct | null, IProduct>>;
  findByCategories(categories: string[]): Promise<Query<IProduct[], IProduct>>;
  search(query: string): Promise<IProduct[]>;
  getCategories(): Promise<string[]>;
}
