const express = require('express');
const router = express.Router();
const productService = require('../services/productService');


router.get('/', (req, res) => {
    res.render('home', {title: 'Browse'});
})

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.post('/create', (req, res) => {
    let data = req.body;
    
    //console.log(cube);
    productService.create(data);
    res.redirect('/products');
})

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    res.render('details', {title: 'Product Details'});
});


module.exports = router;