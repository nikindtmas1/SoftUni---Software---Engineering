const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({

    title: String,
    highlight: String,
    gray: String,
    imgUrl: String,
    price: String,
});

module.exports = mongoose.model('Australia', placeSchema);