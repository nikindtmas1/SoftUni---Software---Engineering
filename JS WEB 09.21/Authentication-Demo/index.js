const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

app.use(express.urlencoded({extended: true}))
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

app.get('/token/create', (req, res) => {

 res.send(`
    <form action="/token/create" method="POST">
        <div>
            <label>Username</label>
            <input type="text" name="username" />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" />
        </div>
        <div>
            <input type="submit" value="Log In" />
        </div>
    </form>
 `)
});

app.post('/token/create', (req, res) => {

    bcrypt.hash(req.body.password, 2, (err, hash) => {
        if(err) console.log(err);

        let options = { expiresIn: '2d'};
        let payloads = { 
            _id: uniqId(),
            username: req.body.username, 
            password: hash, 
        };
        const secret = 'mysecretsecret';
        const token = jwt.sign(payloads, secret, options);
    
        res.cookie('jwt', token);
        res.redirect('/token/show');

    });
  
});

app.get('/token/show', (req, res) => {

    let token = req.cookies.jwt;

    let decodToken = jwt.verify(token, 'mysecretsecret');

    res.send(decodToken);
});

app.get('/token/login', (req, res) => {

    res.send(`
       <form action="/token/login" method="POST">
           <div>
               <label>Username</label>
               <input type="text" name="username" />
           </div>
           <div>
               <label>Password</label>
               <input type="password" name="password" />
           </div>
           <div>
               <input type="submit" value="Log In" />
           </div>
       </form>
    `)
   });

   app.post('/token/login', (req, res) => {

    let token = req.cookies.jwt;

    let decodToken = jwt.verify(token, 'mysecretsecret');

    if(req.body.username !== decodToken.username){

      return  res.status(404).send('Not valid user');
    }

    bcrypt.compare(req.body.password, decodToken.password, (err, isIdenticle) => {
        if(isIdenticle){
            res.send('You are loged in, Wellcome ' + decodToken.username);
        }else{
            res.status(404).send('Not valid password');
        }
    });
    //res.send(decodToken);
});

app.get('/session', (req, res) => {
    res.send(req.sessian);
});

app.get('/show', (req, res) => {
    console.log(req.cookies);

    res.json(req.cookies);
});

app.listen(5000, () => console.log('Server listening on port 5000...'));