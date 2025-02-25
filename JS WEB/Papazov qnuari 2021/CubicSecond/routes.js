const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');

router.use('/', homeController);
router.get('*', (req, res) => {
    res.render('404');
});