const express = require('express');
// const fs = require('fs');
// const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/add-cat', (req, res) => {

    res.render('addCat');

});

router.get('/add-breed', (req, res) => {
    res.render('addBreed');
})

module.exports = router;