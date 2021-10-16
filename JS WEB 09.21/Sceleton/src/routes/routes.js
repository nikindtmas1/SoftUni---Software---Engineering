const homeController = require('../controllers/homeCotroller');
const authController = require('../controllers/authController');


module.exports = (app) => {

    app.use('/', homeController);
    app.use('/auth', authController);
    
}