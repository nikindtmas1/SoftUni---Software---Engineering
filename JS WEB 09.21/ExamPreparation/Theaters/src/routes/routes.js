const homeController = require('../controllers/homeCotroller');
const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');


module.exports = (app) => {

    app.use('/', homeController);
    app.use('/user', userController);
    app.use('/products', productsController);
    
}