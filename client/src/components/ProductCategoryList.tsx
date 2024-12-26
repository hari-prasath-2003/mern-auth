import CategoryBadge from "./CategoryBadge";
import { QueryObserverSuccessResult, useQuery } from "@tanstack/react-query";
import useApi from "@/hooks/useApi";
import ScrollLayout from "@/layout/ScrollLayout";
import CategoryBadgeLoading from "./loading/CategoryBadgeLoading";

function ProductCategoryList() {
  const api = useApi();

  const productCategoryListQuery = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await api.get("/home/categories");
      return response.data;
    },
  }) as QueryObserverSuccessResult<string[]>;

  if (productCategoryListQuery.isError) {
    return <div>{"error something went wrong while fetching category list"}</div>;
  }

  if (productCategoryListQuery.isLoading) {
    return (
      <ScrollLayout>
        <CategoryBadgeLoading />
      </ScrollLayout>
    );
  }

  return (
    <>
      {productCategoryListQuery.data.map((category) => (
        <CategoryBadge category={category} />
      ))}
    </>
  );
}

export default ProductCategoryList;
