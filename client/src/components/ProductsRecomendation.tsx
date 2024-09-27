import ScrollLayout from "@/layout/ScrollLayout";
import ProductList from "./ProductList";
import ProductRecomendationDTO from "../../../shared/dto/ProductRecomendationDTO";

function ProductsRecomendation({ category, products }: ProductRecomendationDTO) {
  return (
    <div className="flex flex-col gap-3" key={category}>
      <div className="font-bold capitalize">{category}</div>
      <ScrollLayout>
        <ProductList products={products} />
      </ScrollLayout>
    </div>
  );
}

export default ProductsRecomendation;
