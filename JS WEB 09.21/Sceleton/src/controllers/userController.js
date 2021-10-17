const express = require('express');
const router = express.Router();

const userService = require('../services/userService');
const { createToken } = require('../utils/jwtUtils');

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login',async (req, res) => {

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
});

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', async (req, res) => {

    let data = req.body;

   await userService.createUser(data);
    
    res.redirect('/user/login');
});

module.exports = router;