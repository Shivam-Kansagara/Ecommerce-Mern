import dotenv from "dotenv";
dotenv.config();
import { Product } from "./models/productModel.js";
import { User } from "./models/userModel.js";
import { Order } from "./models/orderModel.js";
import { products } from "./data/product.js";
import { users } from "./data/user.js";
import { connectDb } from "./config/db.js";
connectDb();

async function importData(params) {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const addusers = await User.insertMany(users);
    const adminUser = addusers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("data added");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function destroyData(params) {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log("data destroyed");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
