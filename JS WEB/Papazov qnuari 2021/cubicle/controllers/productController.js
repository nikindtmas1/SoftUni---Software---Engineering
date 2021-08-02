const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const productService = require('../services/productService');
const Cube = require('../models/cubic');

router.get('/', (req, res) => {
    res.render('home', {title: 'Browse'});
})

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.post('/create', (req, res) => {
    let data = req.body;
    let cub = new Cube(uniqid(), data.name, data.description, data.imageUrl, data.level);
    console.log(cub);
    //productService.create(req.body)
    res.redirect('/products')
})

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    res.render('details', {title: 'Product Details'});
});


module.exports = router;