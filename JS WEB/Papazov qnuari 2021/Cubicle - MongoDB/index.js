const express = require('express');

const routes = require('./routes');
const app = express();
console.log(process.env.NODE_ENV);
const config = require('./config/config');

const expressConfig = require('./config/express');
const mongooseConfig = require('./config/mongoose');

expressConfig(app);
mongooseConfig(app);

app.use(routes);

app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}...`))