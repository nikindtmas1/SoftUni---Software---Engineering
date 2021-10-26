const express = require('express');
const router = express.Router();

const User = require('../models/user');

const userService = require('../services/userService');
const productService = require('../services/productService');

const { createToken } = require('../utils/jwtUtils');
const { isGuest, isAuth } = require('../middlewares/authMidleware');

router.get('/login', isGuest, (req, res) => {
    res.render('user/login');
});

router.post('/login', isGuest, async (req, res) => {
    try {
        
        let data = req.body;
        let user = await userService.loginUser(data);
        if(!user){
            throw {message: 'Invalid user!'}
            //return res.redirect('404');
    
        }
    
        let token = await createToken(user);
    
        res.cookie('cookieToken', token, {
            httpOnly: true
        });
    
        res.redirect('/');

    } catch (error) {
        console.log(error);
        res.render('user/login', {error: error.message});
    }
   
});

router.get('/register', isGuest, (req, res) => {
    res.render('user/register');
});

router.post('/register', isGuest, async (req, res) => {
    try {
        
        let data = req.body;

        let user = await User.findByUsername(data.username);
        if(user){
            throw {message: 'The username all ready exists!'}
        }

        if(data.password !== data.rePassword){
            throw {message: 'Password and rePassword musth by equel!'};
        }

        await userService.createUser(data);

        res.redirect('/user/login');

    } catch (error) {
        console.log(error);
        res.render('user/register', {error: error.message});
    }
    
});

router.get('/profile', isAuth, async (req, res) => {

    try {
        let results = await productService.getAllProduct();

    let myBookings = results.filter((x) => x.userId == req.user._id);
    //myCources = myCources.filter((x) => x.title);
    let myId = req.user._id;
    let myProf = await userService.getUser(myId);
    let username = myProf.username;
    let email = myProf.email
    
    
    res.render('user/profile', {myBookings, username, email});
    } catch (error) {
        console.log(error);
        res.render('users/profile', {error: error.message});
    }

});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('cookieToken');
    res.redirect('/user/login')
});

module.exports = router;