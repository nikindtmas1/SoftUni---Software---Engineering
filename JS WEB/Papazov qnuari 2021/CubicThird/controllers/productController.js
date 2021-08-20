const express = require('express');
const router = express.Router();
const productService = require('./services/productService');


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
    res.render('create.hbs');
});

router.get('/details/:productId', (req, res) => {
    res.render('details.hbs');
});

router.post('/create', (req, res) => {

    let data = req.body;
    console.log(data);
    productService.create(data);

    res.redirect('/');
})

module.exports = router;