const router = require('express').Router();
const cartService  = require('../services/cartService.js');

router.post('', async(req, res) => {
    const { order, user } = req.body;
    
    let result = await cartService.createOrder({order, user});
    res.json({status: result});
})

module.exports = router;