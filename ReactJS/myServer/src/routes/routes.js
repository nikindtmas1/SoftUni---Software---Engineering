
const gameController = require('../controllers/gameController');
const userController = require('../controllers/userController');

module.exports = (app) => {

    app.use('/journey', gameController);
    app.use('/users', userController);
}