const Cart = require('../models/Cart.js');
const User = require('../models/User.js');

const createOrder = async({ order, userId }) => {
    const { cartItems, totalPrice } = order;

    try {
        const cart = await new Cart({user: userId, cartItems, totalPrice});
        await cart.save();

        const user = await User.findById(userId);
        user.hasOrder = true;
        user.save();

        return { status: 'ok', cart };
    }
    catch(err) {
        console.log(err);
        return 'error'
    }
}

const cartService = {
    createOrder,
}

module.exports = cartService;