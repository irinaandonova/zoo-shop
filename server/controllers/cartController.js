const router = require('express').Router();
const cartService  = require('../services/cartService.js');
const Cart = require('../models/Cart.js');

router.post('', (req, res) => {
    const { order, user } = req.body;
    console.log(user);
    console.log(`order ${order}`)
    let result = cartService.createOrder({order, user});
    console.log(result)
    res.json(result)
})

module.exports = router;