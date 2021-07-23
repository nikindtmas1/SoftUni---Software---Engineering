const express = require('express');

const app = express();
console.log(process.env.NODE_ENV);
const config = require('./config/config');

const handlebars = require('express-handlebars');

app.engine('hbs', handlebars({
    extname:'hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}...`))