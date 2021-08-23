const express = require('express');
const router = express.Router();
const productService = require('../services/productService');


router.get('/', (req,res) => {
    productService.getAll(req.query)
    .then(products => {

        res.render('home', {title: 'Brows', products});
    })
});

router.get('/about', (req, res) => {
    res.render('about.hbs');
});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.get('/details/:productId', (req, res) => {
    res.render('details.hbs');
});

router.post('/create', validateProduct, (req, res) => {
   
    let data = req.body;
  
    productService.create(data);

    res.redirect('/');
})

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