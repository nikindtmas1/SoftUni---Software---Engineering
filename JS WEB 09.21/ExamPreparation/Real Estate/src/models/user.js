const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        validate: /[A-Za-z]+/
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
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