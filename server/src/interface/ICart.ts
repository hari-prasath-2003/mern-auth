import { Document } from "mongoose";

export default interface ICart extends Document {
  userId: string;
  cartItems: ICartItems[];
  totalItems: number;
}

interface ICartItems {
  productId: string;
  quantity: number;
}
