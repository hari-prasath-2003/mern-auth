import { Model } from "mongoose";
import Cart from "../models/Cart";
import ICart from "../interface/ICart";
import { ICartRepository } from "../interface/ICartRepository";
import { NotFoundError } from "../error";

export default class CartRepository implements ICartRepository {
  private cartModel: Model<ICart> = Cart;

  public async findCart(userId: string) {
    return await this.cartModel.findOne<ICart>({ userId: userId });
  }

  public async saveCart(cart: ICart): Promise<void> {
    await cart.save();
  }
}
