const express = require('express');
const router = express.Router();
const productService = require('../services/productService');


router.get('/', (req, res) => {
    let products = productService.getAll();
    res.render('home', {title: 'Browse', products});
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

    let product = productService.getOne(req.params.productId);
    res.render('details', {title: 'Product Details', product});
});

function validateProduct(req, res, next){
    let isValid = true;

    if( req.body.name.trim().length < 2 ){
        isValid = false;
    }else if(!req.body.imageUrl){
        isValid = false;
    }

    if(isValid){
        next();
    }
}

module.exports = router;