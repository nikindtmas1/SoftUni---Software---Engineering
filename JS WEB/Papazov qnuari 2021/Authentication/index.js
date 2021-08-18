const express = require('express');
const cookieParser = require('cookie-parser');
const uniqId = require('uniqid');


const app = express();
const port = 5000;

const sessionData = {};

const session = function(){
    return (req, res, next)=>{
        if(!req.cookies.id){
            let userId = uniqId();
            sessionData[userId] = {};
            res.cookie('id', userId);
        }else{
            let userId = req.cookies.id;
            req.session = sessionData[userId]
        }

        next();
    }
}

app.use(cookieParser());
app.use(session());

app.get('/', (req, res) => {
    
    res.cookie('CUSTOM_COOKIE', 'Initial Cookie Value');
    
    res.send(`<h1>Hello ${req.session?.username || 'n\\a'}</h1>`)
});

app.get('/show', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
});

app.get('/login/:username', (req, res) => {
    req.session.username = req.params.username;
    let username = req.params.username;
    res.send(`Hi ${username}`);
});

app.get('/session', (req, res) => {
    res.send(req.session);
})
app.listen(port, () => console.log(`Server running on port: ${port}...`))