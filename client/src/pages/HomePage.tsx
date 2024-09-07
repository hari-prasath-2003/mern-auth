import ProductListLoading from "@/components/loading/ProductListLoading";
import useApi from "@/hooks/useApi";
import CategoryList from "@/components/CategoryList";
import ScrollLayout from "@/layout/ScrollLayout";
import { useQuery } from "@tanstack/react-query";
import CategoryProductList from "@/components/CategoryProductList";

function HomePage() {
  const api = useApi();

  const homeProductQuery = useQuery({
    queryKey: ["homeProducts"],
    queryFn: async () => {
      const response = await api.get("/home");
      return response.data;
    },
  });

  const categoryQuery = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await api.get("/home/categories");
      return response.data;
    },
  });

  if (homeProductQuery.isLoading) {
    return (
      <ScrollLayout>
        <ProductListLoading />
      </ScrollLayout>
    );
  }

  return (
    <>
      <ScrollLayout>
        <CategoryList categories={categoryQuery.data} />
      </ScrollLayout>
      {homeProductQuery.data.map(({ category, products }) => {
        return <CategoryProductList category={category} products={products} key={category} />;
      })}
    </>
  );
}

export default HomePage;
