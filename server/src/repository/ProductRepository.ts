import { Model } from "mongoose";
import { IProductRepository } from "../interface/IProductRepository";
import { IProduct } from "../interface/IProduct";
import Products from "../models/Product";
import ProductDTO from "../../../shared/dto/ProductDTO";

export class ProductRepository implements IProductRepository {
  private ProductModel: Model<IProduct> = Products;

  public async findById(id: string) {
    const product = await this.ProductModel.findById<IProduct>(id);
    return product;
  }

  public findByCategories(categories: string[] | []) {
    const categoryProductList = Promise.all(
      categories.map(async (category) => {
        const products = await this.ProductModel.find<ProductDTO>({ category })
          .select("title price coverImage")
          .limit(10);
        return { category, products };
      })
    );

    return categoryProductList;
  }

  public search(query: string) {
    const searchResults = this.ProductModel.aggregate<IProduct>([
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
