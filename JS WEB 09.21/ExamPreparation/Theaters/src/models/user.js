const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        validate: /^[A-Za-z0-9]+$/

    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        validate: /^[A-Za-z0-9]+$/

    }
});

userSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

userSchema.static('findByUsername', function(username){
    return this.findOne({username});
});

module.exports = mongoose.model('User', userSchema);