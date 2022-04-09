const router = require('express').Router();

const authController = require('./controllers/authController.js');
const productController = require('./controllers/productController.js');
const cartController = require('./controllers/cartController.js');
const commentController = require('./controllers/commentController.js');

router.use('/auth', authController);
router.use('/product', productController);
router.use('/cart', cartController);
router.use('/comment', commentController);

module.exports = router;