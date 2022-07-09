const router = require('express').Router();
const cartService  = require('../services/cartService.js');

router.post('', async(req, res) => {
    const { order, userId } = req.body;

    try {
        let result = await cartService.createOrder({order, userId});
        res.json(result);
    }
    catch(err) {
        console.log(err);
        return { status: 'err', err }
    }
    
})

module.exports = router;