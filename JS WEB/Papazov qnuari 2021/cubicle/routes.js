const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController');
const aboutController = require('./controllers/aboutController');


router.use('/', productController);
router.use('/about', aboutController);
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;