const express = require('express');

const app = express();
console.log(process.env.NODE_ENV);
const config = require('./config/config');
const expressConfig = require('./config/express');

expressConfig(app);

app.get('/', (req, res) => {
    res.render('home', {layout: false});
});

app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}...`))