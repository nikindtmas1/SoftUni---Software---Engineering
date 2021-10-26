const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        //[validateEmail, 'Please fill a valid email address'],
        //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        trim: true,
        lowercase: true,
        //validate: /^[A-Za-z0-9]+$/
    },
    username: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9_-]*$/

    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        validate: /^[A-Za-z0-9]+$/
    },
    bookedHotells: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
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