import axios from "axios";


export async function getProducts(id) {
    try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }

}

export async function getRecommendations(uri) {
    try {
        let recommendationIds = [];
        const response = await axios.get(uri);
        response.data.forEach(element => {
            recommendationIds.push(parseInt(element.recommendedProduct.id));
        });
        return recommendationIds;

    } catch (error) {
        console.error(error);
    }
}

export async function resultRecommendations(recommendationArray, maxProduct) {
    let recommendation = [];
    recommendationArray.forEach(response => {
        if (response.complete) {
            recommendation.push(response);
        }
    });
    return recommendation.slice(0, maxProduct);
}