import { asyncHandler } from "../middleware/asyncHandler.js";
import { Product } from "../models/productModel.js";

export const getProducts = asyncHandler(async (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  const products = await Product.find({});
  res.json(products);
});

export const getProduct = asyncHandler(async (req, res) => {
  try {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    const product = await Product.findById(req.params.productId);
    if (product) res.json(product);
    else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    res.status(404);
    throw new Error("Product not found");
  }
});
