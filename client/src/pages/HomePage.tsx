import ProductList from "@/components/ProductList";
import ProductListLoading from "@/components/loading/ProductListLoading";
import useApi from "@/hooks/useApi";
import CategoryList from "@/layout/CategoryList";
import ScrollLayout from "@/layout/ScrollLayout";
import { useQuery } from "@tanstack/react-query";

function HomePage() {
  const api = useApi();

  const homeProductQuery = useQuery({
    queryKey: ["homeProducts"],
    queryFn: async () => {
      return await api.get("/home");
    },
  });

  const categoryQuery = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      return await api.get("/home/categories");
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
        <CategoryList categories={categoryQuery.data?.data || []} />
      </ScrollLayout>
      {homeProductQuery.data?.data.map(({ category, products }) => {
        return (
          <div className="flex flex-col gap-3" key={category}>
            <div className="font-bold capitalize">{category}</div>
            <ScrollLayout>
              <ProductList products={products} />
            </ScrollLayout>
          </div>
        );
      })}
    </>
  );
}

export default HomePage;
