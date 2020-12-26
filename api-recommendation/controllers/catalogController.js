import axios from "axios";

async function getProducts(id) {
    try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        return response.data.compact;
    } catch (error) {
        return error;
    }

}

// @route GET /api/catalog
const getCatalog = (async (req, res) => {
    try {
        let productIds = [];
        let catalog = [];

        await axios.get(process.env.MOST_POPULAR)
            .then(response => {
                response.data.forEach(element => {
                    productIds.push(parseInt(element.recommendedProduct.id));
                });
            })
            .catch(error => console.error(error));

        const result = await Promise.all(productIds.map(id => {
            return getProducts(id);
        }));

        result.map(response => {
            if (response.id) {
                catalog.push(response);
            }
        });
        res.status(200).json(catalog);

    }
    catch (error) {
        console.error(error);
    };
});

export default getCatalog;