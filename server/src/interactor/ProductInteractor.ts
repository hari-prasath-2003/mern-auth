import { IProductRepository } from "./../interface/IProductRepository";
import { IProductInteractor } from "../interface/IProductInteractor";
import { IProduct } from "../interface/IProduct";

export class ProductInteractor implements IProductInteractor {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  public async getRecomendationProducts(userInterests: string[]): Promise<IProduct[]> {
    const recomendationProduct = await this.productRepository.findByCategories(userInterests);
    return recomendationProduct;
  }

  public async getProductById(id: string): Promise<IProduct> {
    const product = await this.productRepository.find(id);
    if (!product) {
      throw new Error("product is not in database");
    }
    return product;
  }

  public async search(query: string) {
    const searchResult = await this.productRepository.search(query);
    return searchResult;
  }

  public async getCategories() {
    return await this.productRepository.getCategories();
  }
}
