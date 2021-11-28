const AfricaPlace = require('../models/africaModel');


const getAll = () => AfricaPlace.find();

const getOne = (id) => AfricaPlace.findById(id);

const createGame = (data) => AfricaPlace.create(data);

const update = (id, AfricaPlace) => AfricaPlace.findByIdAndUpdate(id, AfricaPlace);
 
const getOwn = (userId) => AfricaPlace.find({_ownerId: userId});

const deleteAfricaPlace = (id) => AfricaPlace.findByIdAndDelete(id);


module.exports = {
  getAll,
  getOne,
  createGame,
  update,
  getOwn,
  deleteAfricaPlace
}