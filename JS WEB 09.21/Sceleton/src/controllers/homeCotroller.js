const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

    let results = await productService.getAllProduct();

    res.render('home', {results});
});

module.exports = router;