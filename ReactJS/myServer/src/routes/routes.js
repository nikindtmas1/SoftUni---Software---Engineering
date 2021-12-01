const router = require('express').Router();

const gameController = require('../controllers/gameController');
const placesController = require('../controllers/placesController');
const asiaController = require('../controllers/asiaController');
const africaController = require('../controllers/africaController');
const southAmericaController = require('../controllers/southAmericaController');
const northAmericaController = require('../controllers/northAmericaController');
const australiaController = require('../controllers/australiaController');
const antarticaController = require('../controllers/antarticaController');

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
router.use('/northAmericas', northAmericaController);
router.use('/australias', australiaController);
router.use('./antarticas', antarticaController);
//router.use('/users', userController);

module.exports = router;