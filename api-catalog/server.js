import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import catalogRoutes from "./routes/catalogRoutes.js"

dotenv.config()
connectDB();

const app = express();

app.use("/api/catalog", catalogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));