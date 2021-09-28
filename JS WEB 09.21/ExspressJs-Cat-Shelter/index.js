const express = require('express');

const port = 5000;
const routes = require('./routes');
const app = express();


const expressConfig = require('./config/configExpress');

expressConfig(app);



routes(app);



app.listen(port, () => console.log(`Server listening on port: ${port}...`))