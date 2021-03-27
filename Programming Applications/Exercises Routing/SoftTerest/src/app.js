import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import {logout} from './api/data.js';

import * as api from '../src/api/data.js';

import {homePage} from './views/homepage.js';
import {homeSomePage} from './views/homeSome.js';
import {dashBoardPage} from './views/dashboard.js';
import {loginPage} from './views/login.js';
import {registerPage} from './views/register.js';
import {ideaPage} from './views/yourIdea.js';
import {createPage} from './views/create.js';
import {detailsPage} from "./views/details.js";

const main = document.querySelector('main');
document.getElementById('logoutLink').addEventListener('click', async () => {
    await logout();
    page.redirect('/homepage');
});

page('/',midWeare,homePage);
page('/homepage',midWeare,homePage);
page('/homesome',midWeare,homeSomePage);
page('/dashboard',midWeare,dashBoardPage);
page('/login',midWeare,loginPage);
page('/register',midWeare,registerPage);
page('/ideapage',midWeare,ideaPage);
page('/create',midWeare,createPage);
page('/details/:id',midWeare,detailsPage);

window.api = api;

setUserNavbar();
page.start();

function midWeare(ctx,next){

    ctx.render = (content) => render(content,main);
    setUserNavbar();
    next();
}

function setUserNavbar(){

    const userId = sessionStorage.getItem('userId');

    if(userId != null){
        document.getElementById('dashLink').style.display = 'inline-block';
        document.getElementById('createLink').style.display = 'inline-block';
        document.getElementById('logoutLink').style.display = 'inline-block';
        document.getElementById('loginLink').style.display = 'none';
        document.getElementById('registerLink').style.display = 'none';

    }else{

        document.getElementById('dashLink').style.display = 'none';
        document.getElementById('createLink').style.display = 'none';
        document.getElementById('logoutLink').style.display = 'none';
        document.getElementById('loginLink').style.display = 'inline-block';
        document.getElementById('registerLink').style.display = 'inline-block';

    }
}
