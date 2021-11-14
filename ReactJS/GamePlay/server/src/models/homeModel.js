const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({

    post: String,
    description: String

});

module.exports = mongoose.model('Home', homeSchema);