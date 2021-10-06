const express = require('express');
const app = express();

const routes = require('./routes');

const portConfig = require('./config/portConfig');
const expressSetup = require('./config/expressConfig');

expressSetup(app);
require('./config/mongooseSetup');


app.use(routes);


app.listen(portConfig.PORT, () => console.log(`Server listening on port: ${portConfig.PORT}...`));
