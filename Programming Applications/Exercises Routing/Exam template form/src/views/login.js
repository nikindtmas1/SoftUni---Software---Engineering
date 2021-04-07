import { html } from '../../node_modules/lit-html/lit-html.js';
import {login as loginApi} from '../api/data.js';

const loginTemplate = (onSubmit) => html`

`;

export async function loginPage(ctx) {

    ctx.render(loginTemplate(onSubmit));

   async function onSubmit(event){

        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');

        await loginApi(username,password);
        ctx.setUserNav();
        ctx.page.redirect('/catalog');
    }

}