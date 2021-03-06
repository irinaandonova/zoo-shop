const router = require('express').Router();

const authController = require('./controllers/authController.js');
const productController = require('./controllers/productController.js');
const commentController = require('./controllers/commentController.js');
const cartController = require('./controllers/cartController.js');

router.use('/auth', authController);
router.use('/product', productController);
router.use('/comments', commentController)
router.use('/cart', cartController);

module.exports = router;