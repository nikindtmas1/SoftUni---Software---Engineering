const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({

    title: String,
    category: String,
    maxLevel: Number,
    imageUrl: String,
    
});

module.exports = mongoose.model('Game', gameSchema);