import express from "express";
import getCatalog from "../controllers/catalogController.js";

const router = express.Router();

router.route("/").get(getCatalog);

export default router;