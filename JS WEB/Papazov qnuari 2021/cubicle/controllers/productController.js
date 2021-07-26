const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('home', {title: 'Browse'});
})

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.get('/details', (req, res) => {
    res.render('datails', {layout: false});
});


module.exports = router;