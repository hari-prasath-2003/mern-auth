import ScrollLayout from "@/layout/ScrollLayout";
import { Skeleton } from "../ui/skeleton";
import ProductCardLoading from "./ProductCardLoading";

function ProductsRecomendationLoading() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="w-[150px] h-7" />
      <ScrollLayout>
        {Array.from([1, 2, 3, 4, 5, 6]).map((_, index) => {
          return <ProductCardLoading key={index} />;
        })}
      </ScrollLayout>
    </div>
  );
}

export default ProductsRecomendationLoading;
