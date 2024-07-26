import { Model, Query } from "mongoose";
import { IProduct } from "../interface/IProduct";
import { IProductRepository } from "../interface/IProductRepository";
import Products from "../models/Product";

export class ProductRepository implements IProductRepository {
  private ProductModel: Model<IProduct> = Products;

  public async find(id: string): Promise<Query<IProduct | null, IProduct>> {
    const product = await this.ProductModel.findById(id);
    return product;
  }

  public async findByCategories(categories: string[] | []): Promise<Query<IProduct[], IProduct, {}, IProduct, "find">> {
    let aggregationPipeline = [];

    if (categories.length) {
      aggregationPipeline.push({ $match: { category: { $in: categories } } });
    }

    aggregationPipeline.push(
      {
        $group: {
          _id: "$category",
          products: {
            $push: {
              _id: "$_id",
              title: "$title",
              price: "$price",
              category: "$category",
              coverImage: "$coverImage",
              rate: "$rate",
            },
          },
        },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          products: {
            $slice: ["$products", 10],
          },
        },
      }
    );

    return await this.ProductModel.aggregate(aggregationPipeline).exec();
  }

  public async search(query: string) {
    const searchResults = await this.ProductModel.aggregate<IProduct>([
      {
        $match: { $text: { $search: query } },
      },
      {
        $addFields: { score: { $meta: "textScore" } },
      },
      {
        $sort: { score: -1 },
      },
    ]);

    return searchResults;
  }
  public async getCategories() {
    return await this.ProductModel.distinct("category");
  }
}
