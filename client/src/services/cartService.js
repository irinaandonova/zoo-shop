const baseUrl = 'http://localhost:4000/cart';

const createOrder = async({ order, userId }) => {
    let response = await fetch(baseUrl, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({order, userId})
    });

    let result = await response.json();

    return result;
}

const cartService = {
    createOrder,
}

export default cartService;