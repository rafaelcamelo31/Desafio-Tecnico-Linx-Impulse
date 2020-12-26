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

        result.map(response => console.log(response));
        // const x = await getProducts(10)
        // console.log(x)

    }
    catch (error) {
        console.error(error);
    };
});

export default getCatalog;