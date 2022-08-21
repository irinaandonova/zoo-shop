const Cart = require('../models/Cart.js');
const User = require('../models/User.js');
const stripe = require('stripe')(')Cg#Hd>W1v~RcEaj}>nGbMq!Bx-3L4oF-V,D5pUWejyE#Zff5tgsHEF3#_ja)e)bAgo#pb6N:M%T21tbAR]W');

const createCheckoutSession = async() => {
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51LNLdyLJQrG77gZsA8uipZFkB4jm7Xn1qtoEXEbxahnjp29d6UCDvHyg9jn7MlHUEw8NOV0StiGScQEyYg4DRrls00ZPJhMG3S')

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'bgn',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'localhost:4000/cart',
    cancel_url: 'localhost:4000/cart/cancel',
  });

  
});


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