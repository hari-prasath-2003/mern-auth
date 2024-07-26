import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <>
      {products.map(({ coverImage, title, rate, price, _id }) => {
        return <ProductCard image={coverImage} title={title} price={price} rate={rate} id={_id} key={_id} />;
      })}
    </>
  );
}

export default ProductList;
