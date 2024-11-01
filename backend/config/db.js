import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      family: 4, // Use IPv4, skip trying IPv6
    });

    console.log("Mongoose version:", mongoose.version);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Connection error details:", {
      name: error.name,
      message: error.message,
      code: error.code,
      codeName: error.codeName,
    });
    process.exit(1);
  }
};
