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
    })
    .then(([isValid, user]) => {
        if(isValid){
            return user
        }else {
            throw { message: 'Username or password are invalid'}
            //return null;
        }
    })
}

module.exports = {

    createUser,
    loginUser,

}