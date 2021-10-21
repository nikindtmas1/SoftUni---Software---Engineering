const Product = require('../models/product');
const User = require('../models/user');


function createProduct(data, userId){

    let {name, type, year, city, imageUrl, description, available, rented} = data

    let product = new Product({name, type, year, city, imageUrl, description, available, rented, userId});

  return  product.save();

};

async function getAllProduct(){
  try {
    let results = await Product.find({}).lean();

  return results;
  } catch (error) {
    console.log(error);
  }

  
};

async function getTopProd(){
  try {
    let results = await Product.find().sort({createdAt: -1}).limit(3).lean();

  return results;
  } catch (error) {
    console.log(error);
  }
  

};

async function getOne(id){

  try {
    let results = await Product.findById(id).lean();

  return results;

  } catch (error) {
    console.log(error);
  }
  
};

function deleteProduct(id){
   
  //return Product.deleteOne(result);
  return Product.findByIdAndDelete(id);
};

async function updateOne(id, data){
  try {
    let results = await Product.findByIdAndUpdate(id, data).lean();

  return results;

  } catch (error) {
    console.log(error);
  }
  
};

async function rentProduct(prodId, userId){
  try {
    let product = await Product.findById(prodId);
  let user = await User.findById(userId);

  product.rented.push(user);

  return product.save();
  } catch (error) {
    console.log(error);
  }
  
};

async function rentedProduct(prodId){
  try {
    let product =await Product.findById(prodId).populate('rented').lean();

    return product;

  } catch (error) {
    console.log(error);
  }
  
};

module.exports = {

    createProduct,
    getAllProduct,
    getTopProd,
    getOne,
    deleteProduct,
    updateOne,
    rentProduct,
    rentedProduct,
}