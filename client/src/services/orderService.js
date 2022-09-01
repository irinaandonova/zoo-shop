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
const checkoutPayment = async ({ cardInfo }) => {
    try {
        let response = await fetch(`${baseUrl}/checkout`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ cardInfo })
        });

        let result = await response.json();
        return result;
    }
    catch (err) {
        console.log(err);
        return { status: 'err' };
    }
}

const cartService = {
    createOrder,
    checkoutPayment
}

export default cartService;