const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({

    name: String,
    description: String,
    imgOne: String,
    imgTwo: String,
    imgThree: String,
});

module.exports = mongoose.model('Game', gameSchema);