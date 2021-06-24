const express = require('express');
const hbs = require('express-handlebars');
const home = require('./controllers/home');
const catalog = require('./controllers/catalog');

const app = express();

const port = 3000;

app.engine('.hbs', hbs({
    //partialsDir: './views',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', home);
app.use('/catalog', catalog);

app.use('/static', express.static('static'))
app.listen(port, console.log(`Server listening on port ${port}`));

