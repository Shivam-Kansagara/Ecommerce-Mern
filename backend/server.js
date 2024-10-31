import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/product.js";

const port = process.env.PORT || 5000;
const app = express();

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:productId", (req, res) => {
  const product = products.find((product) => {
    return product._id === req.params.productId;
  });
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("smdov");
});
app.listen(port, () => {
  console.log(`Server running on ${port}`);
  console.log(`http://localhost:${port}`);
});
