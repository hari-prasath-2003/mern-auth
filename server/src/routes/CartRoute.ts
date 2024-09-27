import { Router } from "express";
import { CartController } from "../controller/CartController";
import CartRepository from "../repository/CartRepository";
import { CartInteractor } from "../interactor/CartInteractor";
import { ProductRepository } from "../repository/ProductRepository";

const cartRepository = new CartRepository();
const productRepository = new ProductRepository();

const cartInteractor = new CartInteractor(cartRepository, productRepository);

const cartController = new CartController(cartInteractor);

const router = Router();
router
  .get("/", cartController.getUserCart.bind(cartController))
  .patch("/add/:productId", cartController.addProduct.bind(cartController))
  .patch("/product_quantity/:productId", cartController.updateProductQuantity.bind(cartController))
  .delete("/remove/:productId", cartController.removeProduct.bind(cartController));

export default router;
