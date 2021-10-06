const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const tripsController = require('./controllers/tripsController');


router.use('/', homeController);

router.use('/trips', tripsController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;