import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"

dotenv.config()
connectDB();

const app = express();

app.use("/api/products", productRoutes);

const PORT = process.env.PORT01 || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));