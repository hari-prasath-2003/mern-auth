import { IProduct } from "./IProduct";

export default interface ISearchInteractor {
  search(query: string): Promise<IProduct[]>;
}
