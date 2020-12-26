import express from "express";
import dotenv from "dotenv";
import catalogRoute from "./routes/catalogRoute.js"

dotenv.config()

const app = express();

app.use("/api/catalog", catalogRoute);

const PORT = process.env.PORT02 || 4000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));