import ProductGridLayout from "@/layout/ProductGridLayout";
import ProductListLoading from "./ProductListLoading";

function SearchLoading() {
  return (
    <ProductGridLayout>
      <ProductListLoading />
    </ProductGridLayout>
  );
}

export default SearchLoading;
