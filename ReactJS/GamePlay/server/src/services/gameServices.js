const Game = require('../models/gameModel');


async function getAll(){

    let results = await Game.find({}).lean();
  
    return results;
  };

  async function getOne(id){

    let results = await Game.findById(id).lean();
  
    return results;
  };
  module.exports = {
    getAll,
    getOne,

  }