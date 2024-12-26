import CartDetail from "@/components/CartDetail";
import CartProductDetailList from "@/components/CartProductDetailList";
import useCart from "@/hooks/useCart";
import useCartOperations from "@/hooks/useCartOperations";

function CartPage() {
  const { cartQuery } = useCart();
  const { updateProductQuantity, removeProductFromCart } = useCartOperations();

  return (
    <div className="flex gap-5 flex-col-reverse lg:flex-row">
      <div className="flex flex-col flex-1 gap-5">
        <CartProductDetailList
          data={cartQuery.data?.products || []}
          updateProductQuantity={(productId: string, newQuantity: number) =>
            updateProductQuantity(productId, newQuantity, cartQuery.refetch)
          }
          removeProductFromCart={(productId: string) => removeProductFromCart(productId, cartQuery.refetch)}
          isLoading={cartQuery.isLoading}
          error={cartQuery.error}
        />
      </div>

      <div className="w-[100%] lg:w-[400px]">
        <CartDetail data={cartQuery.data} isLoading={cartQuery.isLoading} error={cartQuery.error} />
      </div>
    </div>
  );
}

export default CartPage;
