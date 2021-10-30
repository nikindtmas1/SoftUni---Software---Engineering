const jwt = require('jsonwebtoken');
const { development } = require('../config/config');
const secretStr = development.secret;

function createToken(user){

    let payload = {
        _id: user._id,
        username: user.username
    }
    let options = {
        expiresIn: '2d'
    }
    let token = jwt.sign(payload, secretStr, options);

    return token;

};

module.exports = {
    createToken
};
