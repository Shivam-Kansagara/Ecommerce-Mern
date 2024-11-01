import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDb } from "./config/db.js";
import { productRouter } from "./routes/productRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;
const app = express();
connectDb();

app.use("/api/products/", productRouter);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API running");
});
app.listen(port, () => {
  console.log(`Server running on ${port}`);
  console.log(`http://localhost:${port}`);
});
