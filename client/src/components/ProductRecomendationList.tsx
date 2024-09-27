import ProductRecomendationDTO from "../../../shared/dto/ProductRecomendationDTO";
import ProductsRecomendation from "./ProductsRecomendation";
import withQueryHandling from "./withQueryHandling";

function ProductRecomendationList({ data }: { data: ProductRecomendationDTO[] }) {
  return (
    <>
      {data.map(({ category, products }) => {
        return <ProductsRecomendation category={category} products={products} key={category} />;
      })}
    </>
  );
}

const EnhancedProductRecomendationList = withQueryHandling<ProductRecomendationDTO[]>(ProductRecomendationList);

export default EnhancedProductRecomendationList;
