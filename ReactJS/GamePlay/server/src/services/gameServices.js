const Game = require('../models/gameModel');


async function getAll(){

    let results = await Game.find({}).lean();
  
    return results;
  };

  async function getOne(id){

    let results = await Game.findById(id).lean();
  
    return results;
  };

  function createGame(data){

    let {title, category, imageUrl, maxLevel, summary} = data

    let game = new Game({title, category, imageUrl, maxLevel, summary});
    
    return  game.save();

};
  module.exports = {
    getAll,
    getOne,
    createGame,
    
  }