import { IProduct } from "./../../server/src/interface/IProduct";

type DetailedProductDTO = {
  _id: string;
  images: IProduct["images"];
  title: IProduct["title"];
  description: IProduct["description"];
  price: IProduct["price"];
  category: IProduct["category"];
};

export default DetailedProductDTO;
