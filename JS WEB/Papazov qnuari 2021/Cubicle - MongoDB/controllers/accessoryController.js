const express = require('express');
const router = express.Router();
const accessoryService = require('../services/accessoryService');

router.get('/create', (req, res) => {

    res.render('createAccessory')
});

router.post('/create', (req, res) =>{
    let data = req.body
    
    accessoryService.create(data)
    .then(() => res.redirect('/products'));

});

module.exports = router;