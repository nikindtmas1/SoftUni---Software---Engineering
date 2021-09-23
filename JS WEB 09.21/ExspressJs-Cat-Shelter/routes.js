const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const addCatController = require('./controllers/addCatController');

router.use('/', homeController);
router.use('/add-cat', addCatController);

module.exports = router