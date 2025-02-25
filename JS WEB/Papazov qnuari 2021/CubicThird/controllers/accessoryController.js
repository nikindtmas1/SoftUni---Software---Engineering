const express = require('express');
const router = express.Router();

const accessoryService = require('../services/accessoryService');


router.get('/create', (req,res) => {
    res.render('createAccessory', {title: 'CreateAccessory'})
});



router.post('/create', (req, res) => {

    let data = req.body;

    accessoryService.createAccessory(data);

    res.redirect('/products');
});


module.exports = router;
