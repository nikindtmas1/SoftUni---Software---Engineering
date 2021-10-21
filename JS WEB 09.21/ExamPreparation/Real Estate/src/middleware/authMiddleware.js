const  { development } = require('../config/config');
//const secretStr = development.secret;
const jwt = require('jsonwebtoken');


function auth(req, res, next){

    let token = req.cookies.cookieToken;

    if(!token){
        return next();
    }

    jwt.verify(token, development.secret, function(err, decodedToken){

        if(err){
            return res.status(401).redirect('/user/login');
        }

        req.user = decodedToken;
        res.locals.user = decodedToken;
        next();

    });
};

function isAuth(req, res, next){
    if(!req.user){
        return res.status(401).redirect('/user/login');
    };

    next();
};

function isGuest(req, res, next){
    if(!req.user){
        next();
    }else{
        res.redirect('/');
    }
};

module.exports = {
    auth,
    isAuth,
    isGuest,
}