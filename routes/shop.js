//This is for user it can only see product

const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../util/path');

router.get('/',(req,res,next)=>{
    /*

    ../ because 
    current file shop.js is present in routes folder hence dirname- routes
    and shop.html is present in views so ../ will go 1 step back 
    than views -> shop.html
    */
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports=router;