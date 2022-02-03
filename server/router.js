const router = require('express').Router();

const authController = require('./controllers/authController.js');
const homeController = require('./controllers/homeController.js');
const productController = require('./controllers/productController.js');

router.use(homeController);
router.use('/auth', authController);
router.use('/product', productController);

module.exports = router;