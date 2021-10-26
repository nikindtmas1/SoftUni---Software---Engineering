const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    hotel: {
        type: String,
        required: true,
        minlength: 4,
    },
    city: {
        type: String,
        required: true,
        minlength: 3
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/
    },
    freeRooms: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    usersBooked: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('Product', productSchema);