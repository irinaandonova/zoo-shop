const router = require('express').Router();
const productService = require('../services/productService.js');

router.get('/', async (req, res) => {
    let products = await productService.getAll();
    res.json(products)
})

module.exports = router;