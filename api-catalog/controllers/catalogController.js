import Catalog from "../models/catalogModels.js"

// @route GET /api/catalog/:id
const getCatalogById = (async (req, res) => {
    try {
        const catalog = await Catalog.findOne({ id: "9091" });
        console.log(catalog)
        res.json(catalog);
    }
    catch (error) {
        res.status(404);
        throw new Error('Catalog not found!');
    }
});

export default getCatalogById;