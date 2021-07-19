const express = require('express');
//const catPage = require('./views/cats');
const middleware = require('./middleware/middleware');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const port = 3000;

const homePage = require('./views/home');
//const catsPage = require(catPage);
//const catPage = require('./views/cats');

app.use(bodyParser.urlencoded({extended: false}))

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/dogs', (req, res) => {

    let name = 'Navcho';

    res.render('dogs', {layouts: true, name: name})
});

app.post('/dogs', (req, res) => {
    console.log(req.body);
    res.redirect('/dogs');
});

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

app.get('/elephants', (req, res) => {
    
    let elename = 'Garry';

    res.render('elephants', {layouts: true, elename});
});
app.listen(port, () => console.log(`Server runing on port ${port}...`));