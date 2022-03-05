const router = require('express').Router();
const productService = require('../services/productService.js');

router.get('', async (req, res) => {
    try {
        let products = await productService.getAll();
        res.status(201).json(products)
    }
    catch (err) {
        console.log(err);
        return res.status(501);
    }
})
router.get('/details/:_id', async (req, res) => {
    const id = req.params._id;

    let product = await productService.getOne(id);
    let result = JSON.stringify(product);
    res.json(result)
});

router.get('/:animal', async (req, res) => {
    const animal = req.params.animal;
    const animals = ['dog', 'cat', 'roden', 'other'];
    console.log('here')
    if(!animals.includes(animal)) {
        res.status(404);
        return;
    }
    try {
        let products = await productService.getByType(animal);
        console.log(products)
        res.status(201).json(products);
    }
    catch (err) {
        console.log('g');
        return { status: 'error' }
    }
})



module.exports = router;