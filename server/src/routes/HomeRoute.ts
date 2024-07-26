import { UserInteractor } from "../interactor/UserInteractor";
import { ProductInteractor } from "../interactor/ProductInteractor";
import { Router } from "express";
import fs from "fs";
import { HomeController } from "../controller/HomeController";
import { ProductRepository } from "../repository/ProductRepository";
import UserRepository from "../repository/UserRepository";

const productRepository = new ProductRepository();
const productInteractor = new ProductInteractor(productRepository);

const userRepository = new UserRepository();
const userInteractor = new UserInteractor(userRepository);

const homeController = new HomeController(productInteractor, userInteractor);

const router = Router();
router.get("/", homeController.recomendProduct.bind(homeController));
router.get("/categories", homeController.getProductCategories.bind(homeController));

export default router;
