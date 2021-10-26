const Product = require('../models/product');
const User = require('../models/user');


function createProduct(data, userId){

    let {title, imageUrl, description, checkPublic} = data
      if(checkPublic == 'on'){
        checkPublic = true;
      }else{
        checkPublic = false;
      }
    

    let product = new Product({title, imageUrl, description, checkPublic, userId});

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

async function likeProduct(prodId, userId){

  let product = await Product.findById(prodId);
  let user = await User.findById(userId);

  product.usersLike.push(user);

  return product.save();
};

async function getSortProd(){
  try {
    let results = await Product.find().sort({createdAt: -1}).lean();
    //let results = await Product.find().sort({createdAt: -1}).limit(3).lean();
    //let results = await Product.find({}).sort([['data', -1]]).lean();

  return results;
  } catch (error) {
    console.log(error);
    res.redirect('/', {error: error.message});
  }
  

};

async function getSortLikes(){
  try {
    //let results = await Product.find().sort({createdAt: -1}).lean();
    //let results = await Product.find().sort({createdAt: -1}).limit(3).lean();
    let results = await Product.find({}).sort([['usersLike', -1]]).lean();

  return results;
  } catch (error) {
    console.log(error);
    res.redirect('/', {error: error.message});
  }
  

};

module.exports = {

    createProduct,
    getAllProduct,
    getOne,
    getSortProd,
    getSortLikes,
    deleteProduct,
    updateOne,
    likeProduct,
}