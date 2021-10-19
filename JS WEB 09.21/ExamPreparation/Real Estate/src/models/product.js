const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6
    },
    type: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1850,
        max: 2021
    },
    city: {
        type: String,
        required: true,
        minlength: 4
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/
    },
    description: {
        type: String,
        required: true,
        maxlength: 60
    },
    available: {
        type: Number,
        required: true,
        max: 10
    },
    rented: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Product', productSchema);