const router = require('express').Router();
const productService = require('../services/productService.js');

router.get('/details/:_id', async (req, res) => {
    const id = req.params._id;

    let product = await productService.getOne(id);
    let result = JSON.stringify(product);
    res.json(result)
});

router.get('/products/cats', async (req, res) => {
    const animal = 'cat';
    let products = await productService.getByAnimal(animal);
    console.log(products)
    let result = JSON.stringify(products);
    res.json(result);

})

router.get('/products/dogs', async (req, res) => {
    const animal = 'dog';
    let products = await productService.getByAnimal(animal);
    let result = JSON.stringify(products);
    res.json(result);

})

router.get('/products/rodens', async (req, res) => {
    const animal = 'rodens';
    let products = await productService.getByAnimal(animal);

    let result = JSON.stringify(products);
    res.json(result);

})

router.get('/products/others', async (req, res) => {
    const animal = 'other';
    let products = await productService.getByAnimal(animal);
    console.log(products)
    let result = JSON.stringify(products);
    res.json(result);

});

module.exports = router;