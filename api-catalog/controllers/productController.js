"use strict"
import Product from "../models/productModels.js"

// @route GET /api/products/:id
const getProductById = (async (req, res) => {
    try {
        const complete = await Product.findOne({
            id: req.params.id
        });

        const compact = await Product.findOne({
            id: req.params.id
        }, { id: 1, name: 1, price: 1, status: 1, categories: 1 });

        if (complete && compact) {
            res.status(200).json({ complete, compact });
        } else {
            res.status(404)
            throw new Error('Product not found')
        }

    }
    catch (error) {
        res.status(404).json(error);
    }
});

export default getProductById;