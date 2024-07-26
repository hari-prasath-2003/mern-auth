import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductList from "@/components/ProductList";
import ProductGridLayout from "@/layout/ProductGridLayout";
import useApi from "@/hooks/useApi";
import SearchLoading from "@/components/loading/SearchLoading";

function SearchPage() {
  const [searchParam] = useSearchParams();
  const api = useApi();

  const query = searchParam.get("q");

  const searchQuery = useQuery({
    queryKey: ["search", query],
    queryFn: async () => await api.get(`search?q=${query}`),
  });

  if (searchQuery.isLoading) {
    return <SearchLoading />;
  }

  return (
    <div>
      <div className="p-5">
        <p className="font-bold text-lg">Search result for "{query}"</p>
      </div>
      <ProductGridLayout>
        <ProductList products={searchQuery.data?.data || []} />
      </ProductGridLayout>
    </div>
  );
}

export default SearchPage;
