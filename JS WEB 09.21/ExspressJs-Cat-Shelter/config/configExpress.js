
const handlebars = require('express-handlebars');
const express = require('express');

function setUpExpress(app){

    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');

    app.use('/static', express.static("static"));

    app.use(express.urlencoded({
        extended: true
    }));

}


module.exports = setUpExpress;