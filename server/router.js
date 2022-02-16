const router = require('express').Router();

const authController = require('./controllers/authController.js');
const productController = require('./controllers/productController.js');
const profileController = require('./controllers/profileController.js');

router.use('/auth', authController);
router.use('/product', productController);
router.use('/profile', profileController);

module.exports = router;