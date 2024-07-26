import sleep from "@/utils/sleep";
import { UseBaseQueryResult, useQuery } from "@tanstack/react-query";
import useApi from "./useApi";

export default function useDebouncedSearchQuery(query: string = "", delay: number): UseBaseQueryResult {
  const api = useApi();
  return useQuery({
    queryKey: ["/search?q=", query],
    queryFn: async ({ signal }) => {
      await sleep(delay);
      if (!signal.aborted) {
        const response = await api.get(`search?q=${query}`, { signal });
        return response.data;
      }
    },
    enabled: query.length > 0,
  });
}
