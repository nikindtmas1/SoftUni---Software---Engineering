const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('home');
})

router.get('/create', (req, res) => {
    res.render('create', { layout: false });
});

router.get('/details', (req, res) => {
    res.render('datails', {layout: false});
});


module.exports = router;