const baseUrl = 'http://localhost:4000/cart';

const createOrder = async({order, user}) => {
    console.log(`service ${user}`)
    let response = fetch(baseUrl, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({order, user})
    });

    let result = await response.json();

    return result.status;
}

const cartService = {
    createOrder
}

export default cartService;