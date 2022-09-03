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
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.
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