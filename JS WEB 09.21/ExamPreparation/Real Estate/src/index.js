const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const portConfig = require('./config/config');
const configExpress = require('./config/configExpress');
const mongooseConfig = require('./config/configMongoose');

const routes = require('./routes/routes');

const { auth } = require('./middleware/authMiddleware');
app.use(auth);

configExpress(app);
mongooseConfig(app)
routes(app);

app.listen(portConfig.development.PORT, () => console.log(`Server listening on port: ${portConfig.development.PORT}...`))