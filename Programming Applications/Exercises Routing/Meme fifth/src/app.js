import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import {logout as logoutApi} from './api/data.js';

import * as api from './api/data.js';

import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { myListingsCars } from './views/myprofile.js';


window.api = api;

const main = document.querySelector('main');

page('/',midWeare,homePage);
page('/login',midWeare,loginPage);
page('/register',midWeare,registerPage);
page('/all-memes',midWeare,catalogPage);
page('/create',midWeare,createPage);
page('/details/:id',midWeare,detailsPage);
page('/edit/:id',midWeare,editPage);
page('/myMemes',midWeare,myListingsCars);


setUserNav();
page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logoutApi();
    setUserNav();
    page.redirect('/');
});

function midWeare(ctx,next){

    ctx.render = (content) => render(content,main);
    ctx.setUserNav = setUserNav;
    next();

}

function setUserNav(){

    const userId = sessionStorage.getItem('userId');
    const email = sessionStorage.getItem('email');

    if(userId != null){

        document.querySelector('.user').style.display = '';
        document.querySelector('.guest').style.display = 'none';
        document.getElementById('userId').textContent = `Welcome ${email}`;
    }else{

        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = '';
    }

}

