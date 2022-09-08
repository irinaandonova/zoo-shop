const User = require('../models/User.js');
const Order = require('../models/Order.js');
const stripe = require('./stripe');

const createOrder = async ({ cart, paymentMethod, userInfo }) => {
  const { cartItems, totalPrice } = cart;

  try {
    const order = await new Order({ user: userInfo, cartItems, totalPrice, paymentMethod });
    await order.save();

    const user = await User.findById({ _id: userInfo._id });
    user.hasOrder = true;
    user.save();

    return { status: 'ok', cart };
  }
  catch (err) {
    console.log(err);
    return 'error'
  }
}
const createCheckoutSession = async ({ line_items, customer_email }) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      customer_email,
      mode: 'payment',
      success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: 'http://localhost:3000/canseled',
    });

    return session;
  }
  catch (err) {
    console.log(err);
    return 'error'
  }
}

const orderService = {
  createOrder,
  createCheckoutSession
}

module.exports = orderService;