import { getProducts, getRecommendations, resultRecommendations } from "../helpers/helper.js";



// @route GET /api/catalog
const getCatalog = (async (req, res) => {
    try {
        let { maxProduct } = req.query;

        if (maxProduct < 10) {
            maxProduct = 10;
        };

        const mostPopulars = await getRecommendations(process.env.MOST_POPULAR);
        const priceReductions = await getRecommendations(process.env.PRICE_REDCUTION);


        const resultMostPopulars = await Promise.all(mostPopulars.map(id => {
            return getProducts(id);
        }));

        const resultPriceReductions = await Promise.all(priceReductions.map(id => {
            return getProducts(id);
        }));

        const popular = await resultRecommendations(resultMostPopulars, maxProduct);
        const reduction = await resultRecommendations(resultPriceReductions, maxProduct);

        res.status(200).json({
            popular,
            reduction
        });
    }
    catch (error) {
        console.error(error);
    };
});

export default getCatalog;