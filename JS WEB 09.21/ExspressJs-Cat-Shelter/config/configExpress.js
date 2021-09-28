
const handlebars = require('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');


function setUpExpress(app){
    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');

    app.use('/static', express.static("static"));

    app.use(bodyParser.urlencoded({ extended: false }));

    // app.use(express.urlencoded({
    //     extended: true
    // }));

}

module.exports = setUpExpress;