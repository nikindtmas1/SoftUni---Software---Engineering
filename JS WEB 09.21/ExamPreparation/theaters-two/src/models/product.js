const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    description: {
        type: String,
        required: true,
        maxlength: [50, 'Description must by less then 50 characters!']
    },
    imageUrl: {
        type: String,
        required: true
    },
    checkPublic: {
        type: Boolean,
        default: false,
        
    },
    usersLike: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);