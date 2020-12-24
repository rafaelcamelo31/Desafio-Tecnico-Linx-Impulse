import Product from "../models/productModels.js"

// @route GET /api/product/:id
const getProductById = (async (req, res) => {
    try {
        const product = await Product.findOne({
            id: req.params.id
        });

        if (product) {
            res.json(product);
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