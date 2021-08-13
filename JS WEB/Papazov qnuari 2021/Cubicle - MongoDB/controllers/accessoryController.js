const express = require('express');
const router = express.Router();

router.get('/create', (req, res) => {

    res.render('createAccessory')
});

router.post('/create', (req, res) =>{
    let data = req.body
    console.log(data);

    res.redirect('/products')
});

module.exports = router;