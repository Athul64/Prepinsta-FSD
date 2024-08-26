// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const {
    addProductToCart,
    viewCart,
    removeProductFromCart,
    placeOrder
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

router.post('/cart', protect, addProductToCart);
router.get('/cart', protect, viewCart);
router.delete('/cart/:productId', protect, removeProductFromCart);
router.post('/order', protect, placeOrder);

module.exports = router;
