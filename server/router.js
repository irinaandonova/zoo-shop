const router = require('express').Router();
const authController = require('./controllers/authController.js');
const productController = require('./controllers/productController.js');


router.use('/auth', authController);
router.use('/product', productController);

module.exports = router;