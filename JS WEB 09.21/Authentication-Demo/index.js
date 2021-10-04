const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    let username = req.cookies.username;
    //res.cookie('CUSTOM-COOKIE', 'Initial cookie value')
    if(!username){
        res.send(`<h1>Hello, You are not log in</h1>`);
    }else{
        res.send(`<h1>Hello ${username}, You are loged in successfuly</h1>`);
    }
});

app.get('/login/:username', (req, res) => {
    let username = req.params.username;
    console.log(username);
    res.cookie('username', `${username}`);
    res.json(req.params.username);
});

app.get('/show', (req, res) => {
    console.log(req.cookies);

    res.json(req.cookies);
});

app.listen(5000, () => console.log('Server listening on port 5000...'));