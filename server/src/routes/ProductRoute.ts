import { ProductController } from "../controller/ProductController";
import { ProductInteractor } from "../interactor/ProductInteractor";
import { ProductRepository } from "./../repository/ProductRepository";
import { Router } from "express";

const productRepository = new ProductRepository();
const productInteractor = new ProductInteractor(productRepository);
const productController = new ProductController(productInteractor);

const router = Router();

router.get("/", productController.getProductById.bind(productController));

export default router;
