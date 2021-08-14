const express = require('express');
const router = express.Router();
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');


router.get('/', (req, res) => {
    productService.getAll(req.query)
    .then(products => {

        res.render('home', {title: 'Browse', products});
    })
})

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.post('/create', validateProduct, (req, res) => {
    let data = req.body;
    
    //console.log(cube);
    productService.create(data);
    res.redirect('/products');
})

router.get('/details/:productId',async (req, res) => {

    let product =await productService.getOne(req.params.productId);
    res.render('details', {title: 'Product Details', product});
});

router.get('/:productId/attach', async (req, res) => {
   let product = await productService.getOne(req.params.productId);
   let accessories = await accessoryService.getAll();
    res.render('attachAccessory', {product, accessories});
});

router.post('/:productId/attach', (req, res) => {
    productService.attachAccessory(req.params.productId, req.body.accessory)
    .then(() => res.redirect(`/products/details/${req.params.productId}`));
})

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