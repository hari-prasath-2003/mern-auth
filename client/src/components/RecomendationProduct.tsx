import { useQuery } from "@tanstack/react-query";
import ProductRecomendationDTO from "../../../shared/dto/ProductRecomendationDTO";
import useApi from "@/hooks/useApi";
import ProductRecomendationListLoading from "./loading/ProductRecomendationListLoading";
import ScrollLayout from "@/layout/ScrollLayout";
import ProductList from "./ProductList";

function ProductRecomendation() {
  const api = useApi();

  const productRecomendationQuery = useQuery<ProductRecomendationDTO[]>({
    queryKey: ["productRecomendation"],
    queryFn: async () => {
      const response = await api.get("/home");
      return response.data;
    },
  });

  if (productRecomendationQuery.isError) {
    return <div>{"error something went wrong while fetching product recomendation"}</div>;
  }

  if (productRecomendationQuery.isLoading) {
    return <ProductRecomendationListLoading />;
  }

  return (
    <div className="border-2 border-gray-100 p-5">
      {productRecomendationQuery.data &&
        productRecomendationQuery.data.map(({ category, products }) => {
          return (
            <div className="flex flex-col gap-3 " key={category}>
              <div className="font-bold capitalize">{category}</div>
              <ScrollLayout>
                <ProductList products={products} />
              </ScrollLayout>
            </div>
          );
        })}
    </div>
  );
}

export default ProductRecomendation;
