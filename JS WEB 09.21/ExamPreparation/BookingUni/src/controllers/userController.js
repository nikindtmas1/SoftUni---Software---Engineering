const express = require('express');
const router = express.Router();

const userService = require('../services/userService');
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
    
            return res.redirect('404');
    
        }
    
        let token = await createToken(user);
    
        res.cookie('cookieToken', token, {
            httpOnly: true
        });
    
        res.redirect('/');

    } catch (error) {
        console.log(error);
        res.redirect('/user/login', {error: error.message});
    }
   
});

router.get('/register', isGuest, (req, res) => {
    res.render('user/register');
});

router.post('/register', isGuest, async (req, res) => {
    try {
        
        let data = req.body;

        await userService.createUser(data);

        res.redirect('/user/login');

    } catch (error) {
        console.log(error);
        res.redirect('/user/register', {error: error.message});
    }
    
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('cookieToken');
    res.redirect('/user/login')
});

module.exports = router;