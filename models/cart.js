const fs=require('fs');
const path=require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
  );

module.exports=class Cart{

    // constructor(){
    //     this.products=[];
    //     this.totalPrice=0;

    //     //with every product we can add delete product or quantity
    // }

    /*instead of above 
    there will always be cart in our application present so now our goal is to fetch that cart and edit the cart(add,delete)

    */
    static addProduct(id,productPrice){

        //fetch prv cart
        fs.readFile(p,(err,fileContent)=>{
            let cart={products:[],totalPrice:0};
            if(!err){
                cart=JSON.parse(fileContent);
            }

            //analyze the cart finding existing product
            const existingProductIndex=cart.products.findIndex(prod=>prod.id===id);
            const existingProduct=cart.products[existingProductIndex];
            let updatedProduct;
            //if product exist we will update quantity 
            if(existingProduct){
                updatedProduct={...existingProduct};//using spread opeartor we are storing exitingProduct property to updatedProduct 
                updatedProduct.qty=updatedProduct.qty+1;
                cart.products=[...cart.products];
                cart.products[existingProductIndex]=updatedProduct;//doing this to increase qty
            }
            else{
                updatedProduct={id:id, qty:1};
                cart.products=[...cart.products,updatedProduct]
            }

            //convert to number +productPrice
            cart.totalPrice=cart.totalPrice+ +productPrice;
            fs.writeFile(p,JSON.stringify(cart),(err)=>{
                console.log(err);
            })
            
        })
    }
}