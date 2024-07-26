import ProductCardLoading from "./ProductCardLoading";

function ProductListLoading() {
  return (
    <>
      {Array.from([1, 2, 3, 4]).map((x, index) => {
        return <ProductCardLoading key={index} />;
      })}
    </>
  );
}

export default ProductListLoading;
