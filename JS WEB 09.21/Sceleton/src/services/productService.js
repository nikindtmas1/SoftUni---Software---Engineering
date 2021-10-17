const Product = require('../models/product');


function createProduct(data){

    let product = new Product(data);

  return  product.save();

};

async function getAllProduct(){

  let results = await Product.find({}).lean();

  return results;
};

async function getOne(id){

  let results = await Product.findById(id).lean();

  return results;
}

module.exports = {

    createProduct,
    getAllProduct,
    getOne,
}