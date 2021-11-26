
const gameController = require('../controllers/gameController');
const placesController = require('../controllers/placesController');
//const userController = require('../controllers/userController');

module.exports = (app) => {

    app.use('/journey/destinations', gameController);
    app.use('/journey/places', placesController);
    // app.use('/users', userController);
}