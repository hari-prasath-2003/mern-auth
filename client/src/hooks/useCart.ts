import { useQuery } from "@tanstack/react-query";
import CartDetailsDTO from "../../../shared/dto/CartDetailsDTO";
import useApi from "./useApi";

function useCart() {
  const api = useApi();

  const cartQuery = useQuery<CartDetailsDTO>({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await api.get("/cart");
      return response.data;
    },
  });

  return { cartQuery };
}

export default useCart;
