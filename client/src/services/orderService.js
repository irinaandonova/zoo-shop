const baseUrl = 'http://localhost:4000/order';

const createOrder = async ({ cart, user, paymentMethod, cardInfo, line_items }) => {
    try {
        let response = await fetch(`${baseUrl}/create-checkout-session`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ cart, user, paymentMethod, cardInfo, line_items })
        });

        let result = await response.json();
        return result;
    }
    catch (err) {
        console.log(err);
        return 'err';
    }
}
const checkoutPayment = async ({ cardInfo }) => {
    try {
        let response = await fetch(`${baseUrl}/create-checkout-session`, {
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

const orderService = {
    createOrder,
    checkoutPayment
}

export default orderService;