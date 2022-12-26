// const http=require('http'); no need when doing app.listen()
const express=require('express');

const bodyPraser=require('body-parser');

//we can create express application and store it in a constant  by running express as a function
//this will initialize a new object this express will store and manage a lot of things for us 
//also this app  constant act as valid request handler which we can pass to createServer function
const app=express();


/*
/use() allows us to add a new middleware function . It accepts an array of so-called request handlers here and it has some other use case too
app.use((request,response,next)=>{
    console.log('in the middleware ');
    next();

});
/*
next is actually a function, a function that will be passed to this function by epress.js 
we are passing next()-as a argument
when we execute next() it pass to another middleware 
if we dont write next() it dies


/the function which we have pass will be executed for every incoming request and this 
app.use((request,response,next)=>{
    console.log('in the another middleware ');
    /*
    send allows us to send a response 
    this allow us to attach a body which is of type any 
    send automatically sets header we dont have to write setHeader 
    also we can  setHeader manually if we want to 
    
    response.send('<h1>Hello from express js response</h1>');


})

*/

/*
app.use('/',(req,res,next)=>{
    console.log('always run');
    //res.send('<h1>forr all</h1>');
    /*
    we cant use next() with res.send 
    because we dont want to send more than one response  and it will throw an error
    
    next();
})
*/


/*
bodyparser is added before routing because the parsing of body should be done no matter where request ends up

it registers a middleware,
so this parses such a function here in the end even though we can't see it and this package will in the
end, in this middleware function call next in the end, so that the request also reaches our middleware
but before it does that, it will do that whole request body parsing 

*/
app.use(bodyPraser.urlencoded({extended:false}))

// path is determine and result is shown
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><label>Add product: </label> <input type="text" name="title"><br> <label>quantity: </label> <input type="number" name="quantity"> <br><button type="submit">Add Product</button> </form>')
})

/*
instead of using app.use which will be triggered for both get and post method 

we can also use app.get() or app.post() depending upon our need
similarly we have app.delete(),put() and patch() 

*/

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    /*
    before importing bodyParser we are getting undefined 
    but now we will get object in key value pair
    */
    res.redirect('/');//this will redirect from product page to home page
})

app.use('/',(req,res,next)=>{
    res.send('<h1>home</h1>')
})


// const server=http.createServer(app);
// server.listen(5000);
//does same work as above
app.listen(5000);