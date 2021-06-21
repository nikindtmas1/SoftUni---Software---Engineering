const express = require('express');
const hbs = require('express-handlebars');

const app = express();

const port = 3000;

app.engine('.hbs', hbs({
    //partialsDir: './views',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    //res.send('It\'is working!')
    const data = {
        name:'Peter',
        age:24
    }
    res.render('home.hbs', data);
});

app.listen(port, console.log(`Server listening on port ${port}`))

