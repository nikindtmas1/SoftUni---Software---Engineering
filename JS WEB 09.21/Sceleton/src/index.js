const express = require('express');

const app = express();

const portConfig = require('./config/config');
const configExpress = require('./config/configExpress');
const mongooseConfig = require('./config/configMongoose');
configExpress(app);

const routes = require('./routes/routes');


mongooseConfig(app)
routes(app);

app.listen(portConfig.development.PORT, () => console.log(`Server listening on port: ${portConfig.development.PORT}...`))