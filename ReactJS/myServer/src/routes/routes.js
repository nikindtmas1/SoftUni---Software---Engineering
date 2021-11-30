const router = require('express').Router();

const gameController = require('../controllers/gameController');
const placesController = require('../controllers/placesController');
const asiaController = require('../controllers/asiaController');
const africaController = require('../controllers/africaController');
const southAmericaController = require('../controllers/southAmericaController');

//const userController = require('../controllers/userController');

// module.exports = (app) => {

//     app.use('/journey/destinations', gameController);
//     app.use('/journey/places', placesController);
//     app.use('/journey/asias', asiaController);
//     // app.use('/users', userController);
// }
router.use('/destinations', gameController);
router.use('/places', placesController);
router.use('/asias', asiaController);
router.use('/africas', africaController);
router.use('/southAmericas', southAmericaController);
//router.use('/users', userController);

module.exports = router;