const Product = require('../models/product');
const Cart=require('../models/cart')

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};
//for details
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId,(product)=>{
    res.render('shop/product-detail',{
      product:product,
      pageTitle:product.pageTitle,
      path:'/products'
    })
  })

};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

//to add into cart
//here we fetch product data from product id we are getting from req
exports.postCart=(req,res,next)=>{
  const prodId=req.body.productId;//productId is the name we have given to hidden field of add cart
  Product.findById(prodId,(product)=>{
    Cart.addProduct(prodId,product.price);

  })
  console.log(prodId);  
  res.redirect('/cart');

};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
