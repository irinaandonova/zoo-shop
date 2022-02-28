const Cart = require('../models/Cart.js');


const createOrder = async({order, user}) => {
    const { cartItems, totalPrice } = order;
    console.log(order)
    const cart = new Cart({user, cartItems, totalPrice});
    console.log(cart);

    try {
        await cart.save();
        return { status: 'ok'}
    }
    catch(err) {
        console.log(err);
        return { status: 'error'};
    }
}

const cartService = {
    createOrder
}

module.exports = cartService;