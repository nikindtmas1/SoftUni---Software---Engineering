import { html } from '../../node_modules/lit-html/lit-html.js';
import { register as registerApi} from '../api/data.js';

const registerTemplate = (onSubmit) => html`

`;

export async function registerPage(ctx) {

    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repeatPass').trim();

        if(username == '' || password == '' || repass == ''){
            return alert('All fields are required!');
        }

        if(password != repass){

            return alert('Password don\'t matches!');
        }

        await registerApi(username,password);
        ctx.setUserNav();
        event.target.reset();
        ctx.page.redirect('/catalog');

    }

}