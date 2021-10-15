const homeController = require('../controllers/homeCotroller');


module.exports = (app) => {

    app.use('/', homeController);
    
}