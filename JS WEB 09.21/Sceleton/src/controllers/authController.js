const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', (req, res) => {

    
    res.redirect('user/login');
});

module.exports = router;