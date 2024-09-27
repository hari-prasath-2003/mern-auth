import ProductListLoading from "@/components/loading/ProductRecomendationListLoading";
import useApi from "@/hooks/useApi";
import ScrollLayout from "@/layout/ScrollLayout";
import { useQuery } from "@tanstack/react-query";
import ProductRecomendationDTO from "../../../shared/dto/ProductRecomendationDTO";
import CategoryBadgeLoading from "@/components/loading/CategoryBadgeLoading";
import ProductRecomendationList from "@/components/ProductRecomendationList";
import ProductCategoryList from "@/components/ProductCategoryList";
import ProductRecomendationListLoading from "@/components/loading/ProductRecomendationListLoading";

function HomePage() {
  const api = useApi();

  const productRecomendationQuery = useQuery<ProductRecomendationDTO[]>({
    queryKey: ["productRecomendation"],
    queryFn: async () => {
      const response = await api.get("/home");
      return response.data;
    },
  });

  const productCategoryListQuery = useQuery<string[]>({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await api.get("/home/categories");
      return response.data;
    },
  });

  return (
    <>
      <ScrollLayout>
        <ProductCategoryList
          isLoading={productCategoryListQuery.isLoading}
          error={productCategoryListQuery.error}
          LoadingComponent={
            <ScrollLayout>
              <CategoryBadgeLoading />
            </ScrollLayout>
          }
          ErrorComponent={<div>{"error something went wrong while fetching category list"}</div>}
          data={productCategoryListQuery.data || []}
        />
      </ScrollLayout>
      <ProductRecomendationList
        data={productRecomendationQuery.data || []}
        isLoading={productRecomendationQuery.isLoading}
        error={productRecomendationQuery.error}
        LoadingComponent={<ProductRecomendationListLoading />}
        ErrorComponent={<div>{"error something went wrong while fetching product recomendation"}</div>}
      />
    </>
  );
}

export default HomePage;
