import express from "express";
import { getProducts, getProduct } from "../controllers/productController.js";

export const productRouter = express.Router();
productRouter.route("/").get(getProducts);
productRouter.route("/:productId").get(getProduct);
