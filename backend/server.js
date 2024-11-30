import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDb } from "./config/db.js";
import { productRouter } from "./routes/productRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 5000;
const app = express();
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API running");
});
app.listen(port, () => {
  console.log(`Server running on ${port}`);
  console.log(`http://localhost:${port}`);
});
