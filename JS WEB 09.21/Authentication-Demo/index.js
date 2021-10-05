const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const bcrypt = require('bcrypt');

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
//app.use(sessian());
app.use(expressSession(
    {
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
      }
));

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

app.get('/login/:username/:password', (req, res) => {
    const saltRounds = 9;
    let plainTextPassword = req.params.password;
    let username = req.params.username;
    console.log(username);
    //res.cookie('username', `${username}`);

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if(err) console.log(err);

        bcrypt.hash(plainTextPassword, salt, (err, hash) => {
        if(err) console.log(err);

        console.log(hash);
        });
    });

    //req.expressSession.username = username;

    res.json(req.params.username);
});

app.get('/compare/:password', (req, res) => {

    let hash = '$2b$09$7hbmcDJ5n2zr43p2xs80f.4/KkSZMhBZSt.ArpsX1.Jlr0B1l16ZK';

    bcrypt.compare(req.params.password, hash, (err, isIdenticle) => {
        console.log(isIdenticle);
        res.send(isIdenticle);
    });

});

app.get('/session', (req, res) => {
    res.send(req.sessian);
});

app.get('/show', (req, res) => {
    console.log(req.cookies);

    res.json(req.cookies);
});

app.listen(5000, () => console.log('Server listening on port 5000...'));