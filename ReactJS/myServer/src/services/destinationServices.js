const Destination = require('../models/destinationModel');


const getAll = () => Destination.find();

const getOne = (id) => Destination.findById(id);

const createGame = (data) => Destination.create(data);

const update = (id, destinationData) => Destination.findByIdAndUpdate(id, destinationData);
 
const getOwn = (userId) => Destination.find({_ownerId: userId});

const deleteDestination = (id) => Destination.findByIdAndDelete(id);


module.exports = {
  getAll,
  getOne,
  createGame,
  update,
  getOwn,
  deleteDestination
}