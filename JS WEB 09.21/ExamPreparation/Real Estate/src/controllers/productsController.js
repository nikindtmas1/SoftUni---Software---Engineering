const express = require('express');
const router = express.Router();

const productService = require('../services/productService');
const { isAuth } = require('../middleware/authMiddleware');
const { isOwn } = require('../middleware/productMiddleware');


router.get('/create', (req, res) => {

    res.render('products/create');
});

router.post('/create',async (req, res) => {

    let data = req.body;

    await productService.createProduct(data, req.user._id)

    res.redirect('/');
});

router.get('/show',async (req, res) => {

    let results = await productService.getAllProduct();

    res.render('products/show', {results});
});

router.get('/details/:prodId', async (req, res) => {

    
    let result = await productService.getOne(req.params.prodId);
    
    if(req.user){
        let isOwn = result.userId == req.user._id;
        let isAuth = req.user;
    
        res.render('products/details', {result, isOwn, isAuth});

    }else{

        res.render('products/details', {result});
    }
   
});

router.get('/:prodId/delete', isAuth, isOwn,async (req, res) => {

    //let result = await productService.getOne(req.params.prodId);

    if(!req.user){
        return res.redirect('/user/login');
    };

    await productService.deleteProduct(req.params.prodId);

    res.redirect('/');
});

router.get('/:prodId/edit', isAuth, isOwn, async (req, res) => {
    let result = await productService.getOne(req.params.prodId);

    res.render('products/edit', {result});
});

router.post('/:prodId/edit', isAuth, isOwn, async (req, res) => {

    let {name, type, year, city, imageUrl, description, available} = req.body;

    await productService.updateOne(req.params.prodId, {name, type, year, city, imageUrl, description, available});

    res.redirect('/products/show')

});

module.exports = router;