//This is for user it can only see product

const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>home</h1>')
})

module.exports=router;