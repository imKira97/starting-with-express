const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    
    getProductsFromFile(products => {
      //to edit existing product
      if(this.id){
        const existingProductIndex=products.findIndex(prod=>prod.id===this.id)
        const updateProducts=[...products];
        updateProducts[existingProductIndex]=this;
        fs.writeFile(p, JSON.stringify(updateProducts), err => {
          console.log(err);
        });

      }
      else{
        //to add new product 
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
      
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static findById(id,cb){
    getProductsFromFile(products=>{
      const product=products.find(p=> p.id===id);
      cb(product);
    })
  }

  static deleteProductById(id){
    getProductsFromFile(products=>{
      const product=products.find(prod=>prod.id===id);
      
      //it will give all product except the current one
      const updatedProducts=products.filter(prod=>prod.id!==id);
      fs.writeFile(p,JSON.stringify(updatedProducts),err=>{
        
      })
    })
  }
};
