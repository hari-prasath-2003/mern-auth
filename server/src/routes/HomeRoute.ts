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
router
  .get("/", homeController.recomendProduct.bind(homeController))
  .get("/categories", homeController.getProductCategories.bind(homeController))
  .post("/upload", async (req, res, next) => {
    await new Promise((r) => setTimeout(r, 2000));
    next(new Error("summa"));
    // res.json(
    //   "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
    // );
  });

export default router;
