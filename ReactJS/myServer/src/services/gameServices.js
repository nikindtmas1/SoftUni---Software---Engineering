const Destination = require('../models/gameModel');


function getAll(){

   Destination.find()
  
  };

  function getOne(id){

   Destination.findById(id)
  
  };

  function createGame(data){
    Destination.create(data)

};
  module.exports = {
    getAll,
    getOne,
    createGame,
    
  }