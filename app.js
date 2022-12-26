// const http=require('http'); no need when doing app.listen()
const express=require('express');

const bodyPraser=require('body-parser');
const app=express();

//importing admin page
const adminRoutes=require('./routes/admin');
const userRoutes=require('./routes/shop');

app.use(bodyPraser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);
app.use('/shop',userRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})



// const server=http.createServer(app);
// server.listen(5000);
//does same work as above
app.listen(5000);