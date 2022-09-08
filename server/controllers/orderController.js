const router = require('express').Router();
const orderService = require('../services/orderService.js');

router.post('/create-checkout-session', async (req, res) => {
  const { cart, user, paymentMethod, cardInfo, line_items } = req.body;

  try {
    const result = await orderService.createOrder({ cart, userInfo: user, paymentMethod });

    if (paymentMethod === 'card' && result.status == 'ok') {
      const response = await orderService.createCheckoutSession({ user_email: user.email, paymentMethod, cardInfo, line_items });
    
      if (!response.error) {
        res.json({ status: 'ok', sessionId: response.id, cart: result.cart })
      }
      else {
        res.json({ status: 'err', err: 'Unsuccessful payment' });
      }
    }
    else {
      res.json({ status: 'ok', cart: result.cart });
    }
  }
  catch (err) {
    console.log(err);
  }
});

module.exports = router;