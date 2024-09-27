import CartProductDTO from "./CartProductDTO";

type CartDetailsDTO = {
  cartPrice: number;
  products: CartProductDTO[];
  totalDiscount: number;
  totalPrice: number;
  deliveryCharge: number;
  totalPriceBeforeDeliveryCharge: number;
};

export default CartDetailsDTO;
