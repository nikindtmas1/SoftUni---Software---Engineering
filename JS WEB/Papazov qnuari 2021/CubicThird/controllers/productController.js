const express = require('express');
const router = express.Router();
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');


router.get('/products', (req,res) => {
    productService.getAll(req.query)
    .then(products => {

        res.render('home', {title: 'Brows', products});
    })
});

router.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

router.get('/products/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.get('/details/:productId', async (req, res) => {

    let product = await productService.getOne(req.params.productId)
    res.render('details', {title: 'Product Details', product});
});

router.get('/:productId/attach', async (req,res) => {
    let product = await accessoryService.getOneAccessory(req.params.productId);
    let accessories = await accessoryService.getAllAccessories();
    res.render('attachAccessory', {product, accessories});
});

router.post('/products/create', validateProduct, (req, res) => {
   
    let data = req.body;
  
    productService.create(data);

    res.redirect('/products');
});



function validateProduct(req, res, next){

    let isValid = true;

    if(req.body.name.trim().length < 2){
        isValid = false;
    }else if(!req.body.imageUrl){
        isValid = false;
    }

    if(isValid){
        next();
    }
}

module.exports = router;