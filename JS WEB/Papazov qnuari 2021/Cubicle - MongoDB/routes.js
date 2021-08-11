const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController');
const homeController = require('./controllers/homeController');


router.use('/products', productController);
router.use('/', homeController);
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;