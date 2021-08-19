const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController')

router.use('/', productController);
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;