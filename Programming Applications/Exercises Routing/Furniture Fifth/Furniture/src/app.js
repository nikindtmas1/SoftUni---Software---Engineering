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
import { myPage } from './views/myprofile.js';


window.api = api;

const main = document.querySelector('.container');

page('/',midWeare,homePage);
page('/login',midWeare,loginPage);
page('/register',midWeare,registerPage);
page('/catalog',midWeare,catalogPage);
page('/create',midWeare,createPage);
page('/details/:id',midWeare,detailsPage);
page('/edit/:id',midWeare,editPage);
page('/myprofile',midWeare,myPage);


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
    const username = sessionStorage.getItem('username');

    if(userId == null){

        document.getElementById('loginLink').style.display = '';
        document.getElementById('registerLink').style.display = '';
        document.getElementById('catalogLink').style.display = '';
        document.getElementById('createLink').style.display = 'none';
        document.getElementById('profileLink').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'none';
       
       
    }else{

        document.getElementById('loginLink').style.display = 'none';
        document.getElementById('registerLink').style.display = 'none';
        document.getElementById('catalogLink').style.display = '';
        document.getElementById('createLink').style.display = '';
        document.getElementById('profileLink').style.display = '';
        document.getElementById('logoutBtn').style.display = '';
    }

}

