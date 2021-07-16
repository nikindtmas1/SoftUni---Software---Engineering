const express = require('express');
//const catPage = require('./views/cats');
const middleware = require('./middleware/middleware');
const handlebars = require('express-handlebars');

const app = express();
const router = express.Router();

const port = 3000;

const homePage = require('./views/home');
//const catsPage = require(catPage);
//const catPage = require('./views/cats');

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.route('/home')
.get((req, res) => {
    res.send(homePage);
})
.post((req,res) => {
    res.send('POST Home Page')
})
.put((req,res) => {
    res.send('PUT Home Page')
})


app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello Express!');
});

app.get('/cats',middleware,
(req, res)=> {
    res.sendFile(__dirname + '/views/cats.html');
})
app.get('/cats/:catsId', (req, res) => {
const paramsObj = req.params;
res.send(paramsObj.catsId)
})

app.post('/', (req, res) => {
    res.send('POST request');
})

app.get('/dogs', (req, res) => {
    res.render('dogs', {layout: false})
})
app.listen(port, () => console.log(`Server runing on port ${port}...`));