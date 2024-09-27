import ProductDTO from "../../../shared/dto/ProductDTO";
import ProductCard from "./ProductCard";

function ProductList({ products }: { products: ProductDTO[] }) {
  return (
    <>
      {products.map(({ coverImage, title, price, _id }) => {
        return <ProductCard coverImage={coverImage} title={title} price={price} _id={_id} key={_id} />;
      })}
    </>
  );
}

export default ProductList;
