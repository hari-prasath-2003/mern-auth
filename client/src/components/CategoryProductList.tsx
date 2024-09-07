import ScrollLayout from "@/layout/ScrollLayout";
import ProductList from "./ProductList";

function CategoryProductList({ category, products }) {
  return (
    <div className="flex flex-col gap-3" key={category}>
      <div className="font-bold capitalize">{category}</div>
      <ScrollLayout>
        <ProductList products={products} />
      </ScrollLayout>
    </div>
  );
}

export default CategoryProductList;
