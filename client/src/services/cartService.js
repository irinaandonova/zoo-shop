const baseUrl = 'http://localhost:4000/cart';

const createOrder = async ({ cart, userDetails, paymentMethod }) => {
    let response = await fetch(baseUrl, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ cart, userDetails, paymentMethod })
    });

    let result = await response.json();

    return result;
}

const cartService = {
    createOrder,
}

export default cartService;