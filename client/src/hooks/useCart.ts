import { QueryObserverSuccessResult, useQuery } from "@tanstack/react-query";
import CartDetailsDTO from "../../../shared/dto/CartDetailsDTO";
import useApi from "./useApi";

function useCart() {
  const api = useApi();

  const cartQuery = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await api.get("/cart");
      return response.data;
    },
  }) as QueryObserverSuccessResult<CartDetailsDTO>;
  return { cartQuery };
}

export default useCart;
