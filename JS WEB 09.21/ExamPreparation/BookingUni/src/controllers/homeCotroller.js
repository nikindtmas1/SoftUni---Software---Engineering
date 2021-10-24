const express = require('express');
const router = express.Router();

const productService = require('../services/productService');

router.get('/', async (req, res) => {

    try {
        let results = await productService.getAllProduct();

        res.render('home', {results});//

    } catch (error) {
        console.log(error);
        res.redirect('/', {error: error.message});
    }
  
});

module.exports = router;