import { useMutation } from "@tanstack/react-query";
import useApi from "./useApi";

function useCartOperations() {
  const api = useApi();

  const addToCartQuery = useMutation({
    mutationFn: async (productId: string) => {
      const response = await api.patch(`/cart/add/${productId}`);
      return response.data;
    },
  });

  const cartProductQuantityQuery = useMutation({
    mutationFn: async ({ productId, quantity }: { productId: string; quantity: number }) => {
      const response = await api.patch(`/cart/product_quantity/${productId}`, { quantity });
      return response.data;
    },
  });

  const removeProductQuery = useMutation({
    mutationFn: async (productId: string) => {
      const response = await api.delete(`/cart/remove/${productId}`);
      return response.data;
    },
  });

  function updateProductQuantity(productId: string, newQuantity: number, onSuccess: () => void): void {
    cartProductQuantityQuery.mutate({ productId, quantity: newQuantity }, { onSuccess });
  }

  function addProductToCart(productId: string, onSuccess: () => void): void {
    addToCartQuery.mutate(productId, { onSuccess });
  }

  function removeProductFromCart(productId: string, onSuccess: () => void): void {
    removeProductQuery.mutate(productId, { onSuccess });
  }

  return { updateProductQuantity, addProductToCart, removeProductFromCart };
}

export default useCartOperations;
