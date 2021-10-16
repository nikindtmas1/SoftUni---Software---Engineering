const Product = require('../models/product');


function createProduct(data){

    let product = new Product(data);

  return  product.save();

};

function getAllProduct(){

  let results = Product.find({}).lean();

  return results;
}

module.exports = {

    createProduct,
    getAllProduct,
}