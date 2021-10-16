const express = require('express');

const app = express();

const configExpress = require('./config/configExpress');
configExpress(app);

const routes = require('./routes/routes');


routes(app);

app.listen(5000, () => console.log('Server listening on port 5000...'))