const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');


router.use('/products', productController);
router.use('/accessory', accessoryController);
router.use('/', homeController);
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;