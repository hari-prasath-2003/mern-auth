import CartProductDetail from "./CartProductDetail";
import CartProductDTO from "../../../shared/dto/CartProductDTO";
import CartProductDetailListLoading from "./loading/CartProductDetailListLoading";

function CartProductDetailList({
  data,
  isLoading,
  error,
  updateProductQuantity,
  removeProductFromCart,
}: {
  data: CartProductDTO[];
  isLoading: boolean;
  error: Error | null;
  updateProductQuantity: (productId: string, newQuantity: number) => void;
  removeProductFromCart: (productId: string) => void;
}) {
  if (error) {
    return <div>{"error fetching cart Product List"}</div>;
  }

  if (isLoading) {
    return <CartProductDetailListLoading />;
  }
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

export default CartProductDetailList;
