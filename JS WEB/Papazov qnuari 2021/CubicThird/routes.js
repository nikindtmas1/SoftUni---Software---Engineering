const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController');
const accessoryController = require('./controllers/accessoryController');

router.use('/', productController);
router.use('/accessories', accessoryController);
router.get('*', (req, res) => {
    res.render('404.hbs');
});

module.exports = router;