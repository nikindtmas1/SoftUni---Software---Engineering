const express = require('express');
const exprhbs = require('express-handlebars');

function setupExpress(app){

    app.engine('hbs', exprhbs({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');

    app.use(express.static('static'));
}

module.exports = setupExpress;