import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import {logout as logoutAp} from './api/data.js';

import * as api from './api/data.js';

import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { myCarsList } from './views/myList.js';
import { catalogPage } from './views/catalog.js';




page('/',midWeare,homePage);
page('/home',midWeare,homePage);
page('/login',midWeare,loginPage);
page('/register',midWeare,registerPage);
page('/all-listings',midWeare,catalogPage)
page('/details/:id',midWeare,detailsPage);
page('/create',midWeare,createPage);
page('/edit/:id',midWeare,editPage);
page('/myprofile',midWeare,myCarsList);



const main = document.querySelector('#site-content');

window.api = api;

setUserNav();
page.start();

function midWeare(ctx, next) {

    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}


document.getElementById('logoutBtn').addEventListener('click', async() => {

    await logoutAp();
    setUserNav();
    page.redirect('/');
});

function setUserNav(){

    const userId = sessionStorage.getItem('userId');

    if(userId == null){

        document.getElementById('guest').style.display = '';
        document.getElementById('profile').style.display = 'none';

    }else{

        const username = sessionStorage.getItem('username');
        document.getElementById('welcomeId').textContent = `Welcome ${username}`;

        document.getElementById('guest').style.display = 'none';
        document.getElementById('profile').style.display = '';
    }
}