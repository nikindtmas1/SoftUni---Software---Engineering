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
    const ctx = {
        user: {
            username: 'Peter'
        },
        title: 'Home Page',
        name:'Peter',
        age:24,
        items: [
            {
                type: 'Lint',
                qty: 15
            }
            ,
            {
                type: 'Wallet',
                qty: 1
            }
            ,
            {
                type: 'Bubblegum',
                qty: 10
            }
            ,
            {
                type: 'Spare coins',
                qty: 3.5
            }
        ]
    }
    res.render('home.hbs', ctx);
});

app.listen(port, console.log(`Server listening on port ${port}`))

