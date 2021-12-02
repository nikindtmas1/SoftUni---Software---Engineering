const mongoose = require('mongoose');

const desctinationSchema = new mongoose.Schema({

    name: String,
    description: String,
    imgOne: String,
    imgTwo: String,
    imgThree: String,
    ownId: String,
    likes: Number
});

module.exports = mongoose.model('Destination', desctinationSchema);