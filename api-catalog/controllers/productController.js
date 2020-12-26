import Product from "../models/productModels.js"

// @route GET /api/products/:id
const getProductById = (async (req, res) => {
    try {
        const complete = await Product.findOne({
            id: req.params.id
        });

        const compact = await Product.findOne({
            id: req.params.id
        }, { name: 1, price: 1, status: 1, categories: 1 });

        if (complete && compact) {
            res.json({ complete, compact });
        }
    }
    catch (error) {
        res.status(404);
        res.json(error);
    }
});

export default getProductById;