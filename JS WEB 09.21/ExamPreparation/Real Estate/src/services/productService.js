const Product = require('../models/product');
const User = require('../models/user');


function createProduct(data, userId){

    let {name, type, year, city, imageUrl, description, available, rented} = data

    let product = new Product({name, type, year, city, imageUrl, description, available, rented, userId});

  return  product.save();

};

async function getAllProduct(query){
  
  try {
    let results = await Product.find({}).lean();
    if(query){
      results = results.filter((x) => x.type == query);
    }

  return results;
  } catch (error) {
    console.log(error);
        res.redirect('/', {error: error.message});
  }

  
};

async function getTopProd(){
  try {
    let results = await Product.find().sort({createdAt: -1}).limit(3).lean();

  return results;
  } catch (error) {
    console.log(error);
    res.redirect('/', {error: error.message});
  }
  

};

async function getOne(id){

  try {
    let results = await Product.findById(id).lean();

  return results;

  } catch (error) {
    console.log(error);
    res.redirect('/', {error: error.message});
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
    res.redirect('/', {error: error.message});
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
    res.redirect('/', {error: error.message});
  }
  
};

async function rentedProduct(prodId){
  try {
    let product =await Product.findById(prodId).populate('rented').lean();

    return product;

  } catch (error) {
    console.log(error);
    res.redirect('/', {error: error.message});
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