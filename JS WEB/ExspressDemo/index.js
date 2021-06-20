const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

const catalogRouter = require('./catalog');
const logger = require('./logger');
const isAdmin = require('./guard');


app.get('/',logger, (req,res) => {
   res.sendFile(path.resolve('./static/index.html'));
});

app.use(catalogRouter);
//app.use(logger);

app.use('/static', express.static('static'))

app.get('/contact',logger, (req, res) => {
   res.send('Contact Page!');
});

app.get('/admin',isAdmin, (req,res) => {
   res.send('Hello admin!');
});

app.listen(3000, () => console.log(`Server listening on port: ${port}`));