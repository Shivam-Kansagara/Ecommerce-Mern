import express from "express";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { Product } from "../models/productModel.js";
import { getProducts, getProduct } from "../controllers/productController.js";

export const productRouter = express.Router();
productRouter.route("/").get(getProducts);
productRouter.route("/:productId").get(getProduct);
