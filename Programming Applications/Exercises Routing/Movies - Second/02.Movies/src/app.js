import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import {logout} from './api/data.js';

import * as api from '../src/api/data.js';

import {homePage} from './views/homePage.js';
import{addMoviePage} from './views/addMovie.js';
import{editMoviePage} from './views/editMovie.js';
import{loginPage} from './views/login.js';
import{signUpPage} from './views/signUp.js';
import {detailsPage} from './views/details.js'

const main = document.querySelector('main');

//document.querySelector('#views').style.display = 'none';


window.api = api;

page('/',midWeare,homePage);
page('/addMovie',midWeare,addMoviePage);
page('/editMovie/:id',midWeare,editMoviePage);
page('/login',midWeare,loginPage);
page('/homepage',midWeare,homePage);
page('/register',midWeare,signUpPage);
page('/details/:id',midWeare,detailsPage);

page.start();
setUserNav();


document.getElementById('logoutBtn').addEventListener('click', async () =>{
    await logout();
     setUserNav();
     page.redirect('/login');
 });

function midWeare(ctx,next){

    ctx.render = (content) => render(content,main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav(){

    const userId = sessionStorage.getItem('userId');
    //const token = sessionStorage.getItem('authToken');

    if(userId != null){
        const email = sessionStorage.getItem('email');
      
        document.getElementById('homeLink').style.display = 'inline-block';
        document.getElementById('welcome-msg').style.display = 'inline-block';
        document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;
        //document.getElementById('createLink').style.display = 'inline-block';
        document.getElementById('logoutBtn').style.display = 'inline-block';
        document.getElementById('loginLink').style.display = 'none';
        document.getElementById('registerLink').style.display = 'none';

    }else{

        document.getElementById('homeLink').style.display = 'inline-block';
        document.getElementById('welcome-msg').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'none';
        document.getElementById('loginLink').style.display = 'inline-block';
        document.getElementById('registerLink').style.display = 'inline-block';
        //document.getElementById('createLink').style.display = 'none';

    }
}