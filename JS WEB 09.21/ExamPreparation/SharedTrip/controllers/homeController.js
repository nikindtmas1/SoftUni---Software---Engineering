const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/trips');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});



module.exports = router;