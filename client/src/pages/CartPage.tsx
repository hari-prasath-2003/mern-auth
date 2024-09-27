import CartDetail from "@/components/CartDetail";
import CartProductDetail from "@/components/CartProductDetail";
import CartProductDetailList from "@/components/CartProductDetailList";
import CartDetailLoading from "@/components/loading/CartDetailLoading";
import CartProductDetailListLoading from "@/components/loading/CartProductDetailListLoading";
import useCart from "@/hooks/useCart";
import useCartOperations from "@/hooks/useCartOperations";

function CartPage() {
  const { cartQuery } = useCart();
  const { updateProductQuantity, removeProductFromCart } = useCartOperations();

  return (
    <div className="flex gap-5 flex-col-reverse lg:flex-row">
      <div className="flex flex-col flex-1 gap-5">
        <CartProductDetailList
          data={cartQuery.data?.products}
          updateProductQuantity={(productId: string, newQuantity: number) =>
            updateProductQuantity(productId, newQuantity, cartQuery.refetch)
          }
          removeProductFromCart={(productId: string) => removeProductFromCart(productId, cartQuery.refetch)}
          isLoading={cartQuery.isLoading}
          error={cartQuery.error}
          LoadingComponent={<CartProductDetailListLoading />}
          ErrorComponent={<div>{"error fetching cart Product List"}</div>}
        />
      </div>

      <div className="w-[100%] lg:w-[400px]">
        <CartDetail
          data={cartQuery.data}
          isLoading={cartQuery.isLoading}
          error={cartQuery.error}
          ErrorComponent={<div>{"error fetching cart detail"}</div>}
          LoadingComponent={<CartDetailLoading />}
        />
      </div>
    </div>
  );
}

export default CartPage;
