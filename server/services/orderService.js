const User = require('../models/User.js');
const Order = require('../models/Order.js');
const stripe = require('stripe')('sk_test_51LNLdyLJQrG77gZsA8uipZFkB4jm7Xn1qtoEXEbxahnjp29d6UCDvHyg9jn7MlHUEw8NOV0StiGScQEyYg4DRrls00ZPJhMG3S')

const createOrder = async ({ userDetails, cart, paymentMethod }) => {
  const { cartItems, totalPrice } = cart;

  try {
    const order = await new Order({ userDetails, cartItems, totalPrice, paymentMethod });
    await order.save();

    const user = await User.findById(userDetails.userId);
    user.hasOrder = true;
    user.save();

    return { status: 'ok', cart };
  }
  catch (err) {
    console.log(err);
    return 'error'
  }
}
const createCheckoutSession = async ({ items, totalPrice }) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });
}

const orderService = {
  createOrder,
  createCheckoutSession
}

module.exports = orderService;