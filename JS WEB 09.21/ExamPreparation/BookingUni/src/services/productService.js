const Product = require('../models/product');
const User = require('../models/user');


function createProduct(data, userId){

    let {hotel, city, imageUrl, freeRooms} = data

    let product = new Product({hotel, city, imageUrl, freeRooms, userId});

  return  product.save();

};

async function getAllProduct(){
  try {
    let results = await Product.find({}).lean();

  return results;

  } catch (error) {
    console.log(error);
    res.status(400).redirect('/', {error: error.message});
  }

  
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

async function bookProduct(prodId, userId){

  let product = await Product.findById(prodId);
  let user = await User.findById(userId);

  product.usersBooked.push(user);

  return product.save();
};

module.exports = {

    createProduct,
    getAllProduct,
    getOne,
    deleteProduct,
    updateOne,
    bookProduct,
}