import { SearchResponse } from "@elastic/elasticsearch/lib/api/types";
import IElasticSearchClient from "../interface/IElasticSearchClient";
import { IProduct } from "../interface/IProduct";
import { Client } from "@elastic/elasticsearch";

export default class ElasticSearchClient implements IElasticSearchClient {
  private elasticSearchClient = new Client({
    node: "http://localhost:9200",
  });

  public async search(query: string): Promise<SearchResponse<IProduct>> {
    console.log(query);

    const searchResult = await this.elasticSearchClient.search<IProduct>({
      query: {
        simple_query_string: {
          query: query,
          fields: ["category", "title", "description"],
        },
      },
      size: 20,
    });

    return searchResult;
  }
}
