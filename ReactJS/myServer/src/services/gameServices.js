const Game = require('../models/gameModel');


function getAll(){

   Game.find()
  
  };

  function getOne(id){

    Game.findById(id)
  
  };

  function createGame(data){

      Game.create(data)

};
  module.exports = {
    getAll,
    getOne,
    createGame,
    
  }