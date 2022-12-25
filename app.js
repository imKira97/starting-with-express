// const http=require('http'); no need when doing app.listen()
const express=require('express');

//we can create express application and store it in a constant  by running express as a function
//this will initialize a new object this express will store and manage a lot of things for us 
//also this app  constant act as valid request handler which we can pass to createServer function
const app=express();


//use() allows us to add a new middleware function . It accepts an array of so-called request handlers here and it has some other use case too
app.use((request,response,next)=>{
    console.log('in the middleware ');
    next();

});
/*
next is actually a function, a function that will be passed to this function by epress.js 
we are passing next()-as a argument
when we execute next() it pass to another middleware 
if we dont write next() it dies
*/

//the function which we have pass will be executed for every incoming request and this 
app.use((request,response,next)=>{
    console.log('in the another middleware ');
    /*
    send allows us to send a response 
    this allow us to attach a body which is of type any 
    send automatically sets header we dont have to write setHeader 
    also we setHeader manually if we want to 
    */
    response.send('<h1>Hello from express js response</h1>');


})


// const server=http.createServer(app);
// server.listen(5000);
//does same work as above
app.listen(5000);