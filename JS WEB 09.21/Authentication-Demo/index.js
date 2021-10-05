const express = require('express');
const cookieParser = require('cookie-parser');
const uniqId = require('uniqid');

const app = express();

const sessianData = {};

const sessian = function(){

   return (req, res, next) => {

       if(!req.cookies.id){

            let cookieId = uniqId();

            sessianData[cookieId] = {};
            req.sessian = {};

            res.cookie('id', cookieId);

        }else{

            let cookieId = req.cookies.id;

            req.sessian = sessianData[cookieId];
        }

        next();
    }
}

app.use(cookieParser());
app.use(sessian());

app.get('/', (req, res) => {
    //let username = req.cookies.username;
    //res.cookie('CUSTOM-COOKIE', 'Initial cookie value')
    let username = req.sessian?.username;

    if(!username){
        res.send(`<h1>Hello, You are not log in</h1>`);
    }else{
        res.send(`<h1>Hello ${username}, You are loged in successfuly</h1>`);
    }
});

app.get('/login/:username', (req, res) => {
    let username = req.params.username;
    console.log(username);
    //res.cookie('username', `${username}`);

    req.sessian.username = username;

    res.json(req.params.username);
});

app.get('/session', (req, res) => {
    res.send(req.sessian);
});

app.get('/show', (req, res) => {
    console.log(req.cookies);

    res.json(req.cookies);
});

app.listen(5000, () => console.log('Server listening on port 5000...'));