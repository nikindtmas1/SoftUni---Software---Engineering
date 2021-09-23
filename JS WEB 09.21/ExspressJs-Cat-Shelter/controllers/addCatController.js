const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();


router.get('/add-cat', (req, res) => {

    res.render('addCat', {layout: false});

});

module.exports = router;