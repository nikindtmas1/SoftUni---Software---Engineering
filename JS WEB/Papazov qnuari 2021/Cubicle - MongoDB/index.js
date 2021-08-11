const express = require('express');

const routes = require('./routes');
const app = express();
console.log(process.env.NODE_ENV);
const config = require('./config/config');

const expressConfig = require('./config/express');

expressConfig(app);

app.use(routes);

app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}...`))