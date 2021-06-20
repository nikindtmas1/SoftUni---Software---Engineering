const express = require('express');
const hbs = require('express-handlebars');

const app = express();

const port = 3000;

app.engine('handlebars', hbs({
    extname: '.hbs'
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.send('It\'is working!')
});

app.listen(port, console.log(`Server listening on port ${port}`))

