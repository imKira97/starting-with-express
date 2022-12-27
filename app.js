// const http=require('http'); no need when doing app.listen()
const express=require('express');

const bodyPraser=require('body-parser');
const app=express();
const path=require('path')

//importing admin page
const adminRoutes=require('./routes/admin');
const userRoutes=require('./routes/shop');

app.use(bodyPraser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);
app.use(userRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html'));
})



// const server=http.createServer(app);
// server.listen(5000);
//does same work as above
app.listen(5000);