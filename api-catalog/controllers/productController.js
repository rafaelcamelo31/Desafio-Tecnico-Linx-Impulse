import Product from "../models/productModels.js"

// @route GET /api/product/:id
const getProductById = (async (req, res) => {
    try {
        const complete = await Product.findOne({
            id: req.params.id
        });

        const compact = await Product.findOne({
            id: req.params.id
        }, { name: 1, price: 1, status: 1, categories: 1 });

        if (complete && compact) {
            res.json(
                {
                    complete,
                    compact
                }
            );

        } else {
            res.status(404);
            throw new Error("Product not found!");
        }
    }
    catch (error) {
        console.error(error);
    }
});

export default getProductById;