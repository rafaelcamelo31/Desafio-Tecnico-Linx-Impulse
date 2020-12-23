import express from "express";
import getCatalogById from "../controllers/catalogController.js";

const router = express.Router();

router.route('/:id').get(getCatalogById);

export default router;