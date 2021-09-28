const express = require('express');
const router = express.Router();

const catService = require('../services/catService');



router.get('/', (req, res) => {
    res.render('home');
});

router.get('/add-cat', (req, res) => {

    res.render('addCat');

});

router.post('/add-cat', (req, res) => {

    console.log(req.method);
    console.log(req.body);

    let data = (req.body);

    catService.addCat(data)
    console.log('You are posted');
    
    res.redirect('/');

});

router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});

function validateData(req, res, next){
    let isValid = true;

    if( req.body.name.length < 2 ){
        isValid = false;
    }else if(!req.body.imageUrl){
        isValid = false;
    }

    if(isValid){
        next();
    }
}

module.exports = router;