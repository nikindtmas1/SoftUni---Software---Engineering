const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        validate: /^[A-Za-z0-9_-]*$/
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 5,
        validate: /^[A-Za-z0-9_-]*$/

    },
    email: {
        type: String,
        required: true,
        validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
});

userSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

userSchema.static('findByEmail', function(email){
    return this.findOne({email});
});

module.exports = mongoose.model('User', userSchema);