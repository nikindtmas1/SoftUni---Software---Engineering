const express = require('express');
//const catPage = require('./views/cats');

const app = express();
const router = express.Router();
const port = 3000;

const homePage = require('./views/home');
//const catsPage = require(catPage);
//const catPage = require('./views/cats');

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

app.get('/cats',
(req, res)=> {
    res.sendFile(__dirname + '/views/cats.html')
})
app.get('/cats/:catsId', (req, res) => {
const paramsObj = req.params;
res.send(req.params.catsId)
})

app.post('/', (req, res) => {
    res.send('POST request');
})

app.listen(port, () => console.log(`Server runing on port ${port}...`));