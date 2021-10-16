const Product = require('../models/product');


function createProduct(data){

    let product = new Product(data);

  return  product.save();

};

module.exports = {

    createProduct,
}