const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    maxLevel: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Game', gameSchema);