import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import {logout} from './api/data.js';

import * as api from './api/data.js';

import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { myPage } from './views/myMemems.js';


page('/',midWeare,homePage);
page('/home',midWeare,homePage);
page('/login',midWeare,loginPage);
page('/register',midWeare,registerPage);
page('/catalog',midWeare,catalogPage);
page('/details/:id',midWeare,detailsPage);
page('/create',midWeare,createPage);
page('/edit/:id',midWeare,editPage);
page('/myprofil',midWeare,myPage);


const main = document.querySelector('main');

window.api = api;

setUserNav();
page.start();

function midWeare(ctx, next) {

    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

document.querySelector('#logout-Id').addEventListener('click', async() => {

    await logout();
    setUserNav();
    page.redirect('/');
});

function setUserNav(){

    const userId = sessionStorage.getItem('userId');

    if(userId == null){

        document.querySelector('.guest').style.display = '';
        document.querySelector('.user').style.display = 'none';

    }else{

        const email = sessionStorage.getItem('email');
        document.querySelector('.user span').textContent = `Welcome, ${email}`;

        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user').style.display = '';
    }
}