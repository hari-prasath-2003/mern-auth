import { Router } from "express";

import { SearchController } from "../controller/SearchController";
import SearchInteractor from "../interactor/SearchInteractor";

import { ProductInteractor } from "../interactor/ProductInteractor";
import { ProductRepository } from "../repository/ProductRepository";

const productReposiroty = new ProductRepository();
const productInteractor = new ProductInteractor(productReposiroty);

const searchInteractor = new SearchInteractor(productInteractor);
const searchController = new SearchController(searchInteractor);

const router = Router();

router.get("/", searchController.searchProduct.bind(searchController));

export default router;
