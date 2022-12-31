const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);


// we can  tell express router there will be variable  segment by adding :
//this signals to express that it should not look for route like /products/productsId
//but instead that this part here can be anything and it will simply route or load this route for this path 
//then and we will then be able to extract that information through that name(in our case productId)
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

//to add product into cart it will post method
router.post('/cart',shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
