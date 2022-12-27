//Admin is capable of adding product and seeing product 


/*
    This router is like an mini-app tied to other express app or pluggable into the other express app

    Defeintion on - A router object is an isolated instance of middleware and routes. 
    You can think of it as a “mini-application,” capable only of performing middleware and routing functions. 
    Every Express application has a built-in app router.    
    
A router behaves like middleware itself, so you can use it as an argument to app.use() or as the argument to another router’s use() method.

The top-level express object has a Router() method that creates a new router object.Once you’ve created a router object, 
you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application.
*/
const { Router } = require('express');
const express=require('express');
const router=express.Router();
const path=require('path');

const rootDir=require('../util/path');


// this is admin/add-product  with get
router.get('/add-product',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../','views','addProduct.html'));
    res.sendFile(path.join(rootDir,'views','addProduct.html'));
    
})

// this is admin/add-product  with post 
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');//this will redirect from product page to home page
})




module.exports=router;





