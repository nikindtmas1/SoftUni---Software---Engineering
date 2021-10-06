const express = require('express');
const app = express();

const portConfig = require('./config/portConfig');
const expressSetup = require('./config/expressConfig');

expressSetup(app);
require('./config/mongooseSetup');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(portConfig.PORT, () => console.log(`Server listening on port: ${portConfig.PORT}...`));
