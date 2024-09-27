import ProductsRecomendationLoading from "./ProductsRecomendationLoading";

function ProductRecomendationListLoading() {
  return (
    <>
      {Array.from([1, 2, 3]).map((x, index) => {
        return <ProductsRecomendationLoading key={index} />;
      })}
    </>
  );
}

export default ProductRecomendationListLoading;
