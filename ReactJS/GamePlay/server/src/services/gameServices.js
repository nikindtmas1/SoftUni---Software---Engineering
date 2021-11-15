const Game = require('../models/gameModel');


async function getAll(){

    let results = await Game.find({}).lean();
  
    return results;
  };

  module.exports = {
    getAll

  }