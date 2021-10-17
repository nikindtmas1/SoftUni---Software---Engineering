const User = require('../models/user');
const bcrypt = require('bcrypt');


function createUser(data){

let user = new User(data)

return user.save();
}

function loginUser(data){
    let name = data.username;
    let password = data.password;

    return User.findByUsername(name)
    .then(user => {
        return Promise.all([bcrypt.compare(password, user.password), user]);
    });
}

module.exports = {

    createUser,
    loginUser,

}