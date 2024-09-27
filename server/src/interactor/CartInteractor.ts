import { NotFoundError } from "../error";
import { ICartInteractor } from "../interface/ICartInteractor";
import { ICartRepository } from "../interface/ICartRepository";
import { IProductRepository } from "../interface/IProductRepository";
import CartProductDTO from "../../../shared/dto/CartProductDTO";

export class CartInteractor implements ICartInteractor {
  private cartRepository: ICartRepository;
  private productRepository: IProductRepository;

  constructor(cartRepository: ICartRepository, productRepository: IProductRepository) {
    this.cartRepository = cartRepository;
    this.productRepository = productRepository;
  }

  public async getUserCartDetail(userId: string) {
    const userCart = await this.cartRepository.findCart(userId);
    if (!userCart) {
      throw new NotFoundError("User Cart Not Found");
    }

    let cartPrice: number = 0;
    let totalDiscount: number = 0;

    const products: CartProductDTO[] = await Promise.all(
      userCart.cartItems.map(async ({ productId, quantity }) => {
        const product = await this.productRepository.findById(productId);
        if (!product) {
          return null;
        }

        const sellingPrice = Math.round(product.price * quantity);
        const discountedPrice = Math.round(sellingPrice - sellingPrice * (product.discount / 100));

        cartPrice += sellingPrice;
        totalDiscount += Math.round(sellingPrice * (product.discount / 100));

        return {
          _id: product._id,
          title: product.title,
          coverImage: product.coverImage,
          sellingPrice,
          discountedPrice,
          quantity,
          discount: product.discount,
        };
      })
    ).then((products) => {
      return products.filter((product) => product !== null) as CartProductDTO[];
    });

    const totalPriceBeforeDeliveryCharge = cartPrice - totalDiscount;
    let deliveryCharge = 0;

    if (totalPriceBeforeDeliveryCharge < 1000) {
      deliveryCharge = Math.round(totalPriceBeforeDeliveryCharge * 0.2);
    }

    const totalPrice = totalPriceBeforeDeliveryCharge + deliveryCharge;

    return { cartPrice, products, totalDiscount, totalPrice, deliveryCharge, totalPriceBeforeDeliveryCharge };
  }

  public async addProduct(userId: string, productId: string) {
    const userCart = await this.cartRepository.findCart(userId);

    if (!userCart) {
      throw new NotFoundError("cart not fonud");
    }

    let productInCart = false;

    userCart.cartItems.map((product) => {
      if (product.productId === productId) {
        product.quantity += 1;
        productInCart = true;
      }
    });

    if (!productInCart) {
      userCart.cartItems.push({ productId, quantity: 1 });
    }

    await this.cartRepository.saveCart(userCart);
  }

  public async updateProductQuantity(userId: string, productId: string, newQuantity: number) {
    const userCart = await this.cartRepository.findCart(userId);

    if (!userCart) {
      throw new NotFoundError("cart not fonud");
    }

    userCart.cartItems.map((product) => {
      if (product.productId === productId) {
        product.quantity = newQuantity;
      }
    });

    await this.cartRepository.saveCart(userCart);
  }

  public async removeProduct(userId: string, productId: string) {
    const userCart = await this.cartRepository.findCart(userId);

    if (!userCart) {
      throw new NotFoundError("cart not fonud");
    }

    userCart.cartItems = userCart.cartItems.filter((product) => {
      return product.productId !== productId;
    });

    await this.cartRepository.saveCart(userCart);
  }
}
