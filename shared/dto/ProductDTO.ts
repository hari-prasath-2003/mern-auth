import { IProduct } from "./../../server/src/interface/IProduct";

type ProductDTO = {
  _id: string;
  title: IProduct["title"];
  price: IProduct["price"];
  coverImage: IProduct["coverImage"];
};
export default ProductDTO;
