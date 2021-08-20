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

router.post('/create', (req, res) => {

    let data = req.body;
    console.log(data);
})

module.exports = router;