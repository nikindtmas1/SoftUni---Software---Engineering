const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    freeRooms: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    bookedRoom: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

module.exports = mongoose.model('Product', productSchema);