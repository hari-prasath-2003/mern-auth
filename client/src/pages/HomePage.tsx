import ScrollLayout from "@/layout/ScrollLayout";
import RecomendationProduct from "@/components/RecomendationProduct";
import ProductCategoryList from "@/components/ProductCategoryList";

function HomePage() {
  return (
    <>
      <ScrollLayout>
        <ProductCategoryList />
      </ScrollLayout>
      <RecomendationProduct />
    </>
  );
}

export default HomePage;
