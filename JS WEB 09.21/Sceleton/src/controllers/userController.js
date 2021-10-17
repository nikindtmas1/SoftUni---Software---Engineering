const express = require('express');
const router = express.Router();

const userService = require('../services/userService');

router.get('/login', (req, res) => {
    res.render('user/login');
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