const Product = require('../models/product');
const User = require('../models/user');


function createProduct(data, userId){

   
    let {title,keyword,location,dateCreation,description,imageUrl,votes,rating} = data

    let product = new Product({title,keyword,location,dateCreation,description,imageUrl,votes,rating, userId});

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
   
  
  return Product.findByIdAndDelete(id);
};

async function updateOne(id, data){

  let results = await Product.findByIdAndUpdate(id, data).lean();

  return results;
};

async function voteUpProduct(prodId, userId){

  let product = await Product.findById(prodId);
  let user = await User.findById(userId);

  product.votes.push(user);

  return product.save();
};

async function voteDownProduct(prodId, userId){

  let product = await Product.findById(prodId);
  let user = await User.findById(userId);

 
  if(product.votes.includes(user._id)){
    let index = product.votes.indexOf(user._id);

    product.votes.splice(index, 1);

    

  }


  return product.save();
};

module.exports = {

    createProduct,
    getAllProduct,
    getOne,
    deleteProduct,
    updateOne,
    voteUpProduct,
    voteDownProduct
}