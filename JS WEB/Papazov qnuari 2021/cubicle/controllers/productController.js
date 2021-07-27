const express = require('express');
const router = express.Router();
const Cube = require('../models/cubic');
const uniqid = require('uniqid');

router.get('/', (req, res) => {
    res.render('home', {title: 'Browse'});
})

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.post('/create', (req, res) => {
    let data = req.body;

    let cube = new Cube(
    uniqid(),
    data.name,
    data.description,
    data.imageUrl,
    data.difficultyLevel
    );

    console.log(cube);
    res.redirect('/products')
})

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    res.render('details', {title: 'Product Details'});
});


module.exports = router;