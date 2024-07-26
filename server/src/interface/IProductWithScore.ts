import { IProduct } from "./IProduct";

export default interface IProductWithScore extends IProduct {
  score: number;
}
