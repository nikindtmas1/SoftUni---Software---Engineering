const express = require('express');
const router = express.Router();
const productService = require('../services/productService');


router.get('/create', (req, res) => {

    res.render('products/create');
});

router.post('/create',async (req, res) => {

    let data = req.body;

    await productService.createProduct(data)

    res.redirect('/');
});

router.get('/show',async (req, res) => {

    let results = await productService.getAllProduct();

    res.render('products/show', {results});
});

router.get('/deatail/:prodId',async (req, res) => {

    let resutl = await productService.getOne(req.params.prodId);

    res.render('details', {resutl});
});

module.exports = router;