

const homeController = require('./controllers/homeController');
const catController = require('./controllers/catController');



module.exports = (app) => {

    app.use('/', homeController);
    app.use('/cats', catController);
}