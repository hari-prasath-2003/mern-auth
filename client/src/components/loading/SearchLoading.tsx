import ProductGridLayout from "@/layout/ProductGridLayout";
import ProductListLoading from "./ProductRecomendationListLoading";

function SearchLoading() {
  return (
    <ProductGridLayout>
      <ProductListLoading />
    </ProductGridLayout>
  );
}

export default SearchLoading;
