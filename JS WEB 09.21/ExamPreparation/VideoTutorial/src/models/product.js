const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    isPublic: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    usersEnrolled:
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

module.exports = mongoose.model('Product', productSchema);