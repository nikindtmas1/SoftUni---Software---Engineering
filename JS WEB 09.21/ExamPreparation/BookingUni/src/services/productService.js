const Product = require('../models/product');
const User = require('../models/user');


function createProduct(data, userId){

    let {name, type, year, city, imageUrl, description, available, rented} = data

    let product = new Product({name, type, year, city, imageUrl, description, available, rented, userId});

  return  product.save();

};

async function getAllProduct(){

  let results = await Product.find({}).lean();

  return results;
};

async function getOne(id){

  let results = await Product.findById(id).lean();

  return results;
};

function deleteProduct(id){
   
  //return Product.deleteOne(result);
  return Product.findByIdAndDelete(id);
};

async function updateOne(id, data){

  let results = await Product.findByIdAndUpdate(id, data).lean();

  return results;
};

async function rentProduct(prodId, userId){

  let product = await Product.findById(prodId);
  let user = await User.findById(userId);

  product.rented.push(user);

  return product.save();
};

module.exports = {

    createProduct,
    getAllProduct,
    getOne,
    deleteProduct,
    updateOne,
    rentProduct,
}