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

    let {name, description, imgOne, imgTwo, imgThree} = data

    let game = new Game({name, description, imgOne, imgTwo, imgThree});
    
    return  game.save();

};
  module.exports = {
    getAll,
    getOne,
    createGame,
    
  }