const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('CUSTOM-COOKIE', 'Initial cookie value')
    res.send('<h1>Hello Express!</h1>')
});

app.get('/show', (req, res) => {
    console.log(req.cookies);

    res.json(req.cookies);
});

app.listen(5000, () => console.log('Server listening on port 5000...'));