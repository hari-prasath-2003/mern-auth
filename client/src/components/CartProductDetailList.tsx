import React from "react";
import CartProductDetail from "./CartProductDetail";
import CartProductDTO from "../../../shared/dto/CartProductDTO";
import withQueryHandling from "./withQueryHandling";

function CartProductDetailList({
  data,
  updateProductQuantity,
  removeProductFromCart,
}: {
  data: CartProductDTO[];
  updateProductQuantity: (productId: string, newQuantity: number) => void;
  removeProductFromCart: (productId: string) => void;
}) {
  return (
    <>
      {data.map((product) => {
        return (
          <CartProductDetail
            product={product}
            key={product._id}
            updateProductQuantity={updateProductQuantity}
            removeProductFromCart={removeProductFromCart}
          />
        );
      })}
    </>
  );
}

const EnhancedCartProductDetailList = withQueryHandling<
  CartProductDTO[],
  {
    updateProductQuantity: (productId: string, newQuantity: number) => void;
    removeProductFromCart: (productId: string) => void;
  }
>(CartProductDetailList);

export default EnhancedCartProductDetailList;
