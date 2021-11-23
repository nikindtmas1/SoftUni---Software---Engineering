const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgOne: {
        type: String,
        required: true
    },
    imgTwo: {
        type: String,
        required: true
    },
    imgThree: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Game', gameSchema);