const router = require('express').Router();
const orderService = require('../services/orderService.js');

router.post('', async (req, res) => {
  const { userDetails, paymentMethod, cart } = req.body;

  try {
    let result = await orderService.createOrder({ userDetails, paymentMethod, cart });
    res.json(result);
  }
  catch (err) {
    console.log(err);
    return { status: 'err', err }
  }
});

router.post('/create-checkout-session', async (req, res) => {
  const { items, totalPrice } = req.body;
  
  try {
    const response = await orderService.createCheckoutSession(items, totalPrice);
    res.json(response);
  }
  catch (err) {
    console.log(err);
  }
});

module.exports = router;