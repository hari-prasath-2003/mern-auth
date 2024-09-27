import mongoose from "mongoose";
import ICart from "../interface/ICart";

const CartSchema = new mongoose.Schema<ICart>({
  userId: {
    type: String,
    ref: "user",
    required: true,
  },
  cartItems: [
    {
      productId: {
        type: String,
        ref: "product",
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1,
      },
    },
  ],
  totalItems: {
    type: Number,
    default: 0,
  },
});

CartSchema.pre("save", function (next) {
  this.totalItems = this.cartItems.length;
  next();
});

const Cart = mongoose.model<ICart>("cart", CartSchema);

export default Cart;
