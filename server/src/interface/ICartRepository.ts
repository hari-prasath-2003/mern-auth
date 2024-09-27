import ICart from "./ICart";

export interface ICartRepository {
  findCart(userId: string): Promise<ICart | null>;
  saveCart(cart: ICart): Promise<void>;
}
