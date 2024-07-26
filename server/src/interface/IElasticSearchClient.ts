import { SearchResponse } from "@elastic/elasticsearch/lib/api/types";
import { IProduct } from "./IProduct";

export default interface IElasticSearchClient {
  search(query: string): Promise<SearchResponse<IProduct>>;
}
