const User = require('../models/user');
const bcrypt = require('bcrypt');


function createUser(data){

let user = new User(data)

return user.save();
}

async function loginUser(data){
    let name = data.username;
    let password = data.password;
//     try {
//        let user = await User.findByUsername(name);
       
//        bcrypt.compare(password, user.password, function(error, isMatch){
//                let isValid = true;
//                 if(error){
//                     console.log(error);
//                     isValid = false;
//                     throw {message: 'The password is not valid!'};
//                 }else if(!isMatch){
//                     isValid = false;
//                     console.log('Password not match');
//                     throw {message: 'Password not match'}
//                 }else{
//                     console.log('Password match!');
                
//                     return user
//                 }
               
//            });

           
       
//    } catch (error) {
//        console.log(error);
//        res.render('404', {error: error.message});
//    }
    return User.findByUsername(name)
    .then(user => {
        return Promise.all([bcrypt.compare(password, user.password), user]);
    })
    .then(([isValid, user]) => {
        if(isValid){
            return user
        }else {
            //throw { message: 'Username or password are invalid'}
            return null;
        }
    })
    
}

module.exports = {

    createUser,
    loginUser,

}