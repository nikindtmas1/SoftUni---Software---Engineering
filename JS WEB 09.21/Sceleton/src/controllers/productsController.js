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

module.exports = router;