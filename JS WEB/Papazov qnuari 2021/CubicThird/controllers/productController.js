const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('home.hbs');
});

router.get('/about', (req, res) => {
    res.render('about.hbs');
});

router.get('/create', (req, res) => {
    res.render('create.hbs');
});

router.get('/details/:productId', (req, res) => {
    res.render('details.hbs');
});

module.exports = router;