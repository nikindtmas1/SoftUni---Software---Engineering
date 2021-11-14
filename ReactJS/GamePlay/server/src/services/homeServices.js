const Home = require('../models/homeModel');


async function getAll(){

    let results = await Home.find({}).lean();
  
    return results;
  };

  module.exports = {
    getAll

  }