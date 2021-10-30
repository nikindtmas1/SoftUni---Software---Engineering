const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 6
    },
    keyword: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        minlength: 10
    },
    dateCreation:{
        type: String,
        required: true,
        length: 10
    },
    description: {
        type: String,
        required: true,
        minlength: 8
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/

    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    votes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    rating: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('Product', productSchema);