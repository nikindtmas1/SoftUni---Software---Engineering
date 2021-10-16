const homeController = require('../controllers/homeCotroller');
const authController = require('../controllers/authController');
const productsController = require('../controllers/productsController');


module.exports = (app) => {

    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/products', productsController);
    
}