import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import { logout } from './api/data.js';

import {dashboardPage} from './views/dashboard.js';
import {createPage} from './views/create.js';
import {detailsPage} from './views/details.js';
import {editPage} from './views/edit.js';
import {loginPage} from './views/login.js';
import {myPage} from './views/myFurniture.js';
import {registerPage} from './views/register.js';

import * as api from './api/data.js';

window.api = api;

const main = document.querySelector('.container');

page('/',midWeare,dashboardPage);
page('/dashboard',midWeare,dashboardPage);
page('/catalog',midWeare,dashboardPage);
page('/create',midWeare,createPage);
page('/details/:id',midWeare,detailsPage);
page('/edit/:id',midWeare,editPage);
page('/login',midWeare,loginPage);
page('/my-furniture',midWeare,myPage);
page('/register',midWeare,registerPage);

document.getElementById('logoutBtn').addEventListener('click', async () =>{
    await logout();
    setUserNav();
    page.redirect('/');
});

setUserNav();
page.start();

function midWeare(ctx,next){
   ctx.render = (content) => render(content,main);
   ctx.setUserNav = setUserNav;
   next();
}

function setUserNav(){

    const userId = sessionStorage.getItem('userId');

    if(userId != null){

        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    }else{

        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }

}