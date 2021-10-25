const express = require('express');
const router = express.Router();

const User = require('../models/user');
const userService = require('../services/userService');
const { createToken } = require('../utils/jwtUtils');

const { isGuest, isAuth } = require('../middleware/authMiddleware');


router.get('/login',isGuest, (req, res) => {
    res.render('user/login');
});

router.post('/login', isGuest, async (req, res) => {
    try {
        let data = req.body;

        let user = await userService.loginUser(data);
    if(!user){

        return res.redirect('404');

    }

    let token = await createToken(user);

    res.cookie('cookieToken', token, {
        httpOnly: true
    });

    res.redirect('/');
    } catch (error) {
        console.log(error);
    }
    
});

router.get('/register', isGuest, (req, res) => {
    res.render('user/register');
});

router.post('/register', isGuest, async (req, res) => {
    try {
        let data = req.body;
        let isEmail = validateEmail(data.username) || validateEmail(data.fullname); 
        
        let user = await User.findByUsername(data.username);
        if(user){
            throw {message: 'The username all ready exists!'}
        }

        if(data.password !== data.rePassword){
            throw {message: 'The password and rePassword is not the same!'}
        }
        
        if(isEmail){
            throw {message: 'Username and fullname canot be email !'}
        }
        await userService.createUser(data);
         
         res.redirect('/user/login');
    } catch (error) {
        console.log(error);
        res.render('404', {error: error.message});
    }
   
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('cookieToken');
    res.redirect('/user/login')
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

module.exports = router;