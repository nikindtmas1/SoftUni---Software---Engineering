const express = require('express');
const router = express.Router();

const productService = require('../services/productService');

// router.get('/',async (req, res) => {
  
//     try {
//         let results = await productService.getAllProduct();
//         res.render('home', {results});
//     } catch (error) {
//         console.log(error);
//     }
    
// });

router.get('/',async (req, res) => {
  
    try {
        let results = await productService.getTopProd();
        res.render('home', {results});
    } catch (error) {
        console.log(error);
        res.render('/', {error: error.message});
    }
    
});

router.get('/search', async (req, res) => {

    try {
        let results = await productService.getAllProduct(req.query.text);
        res.render('search', {results});//
    } catch (error) {
        console.log(error);
        res.render('/search', {error: error.message});
    }
    
});

module.exports = router;