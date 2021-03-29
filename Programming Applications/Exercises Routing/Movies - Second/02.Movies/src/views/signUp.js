import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit) => html`
<section id="form-sign-up">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="post">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>
`;

export async function signUpPage(ctx) {

    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {

        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repeatPassword').trim();

        if (email == '' || password == '') {
            return alert('All fields are required!');
        }

        if(password.length < 6){
            return alert('The password should be at least 6 characters long!');
        }

        if (password != repass) {
            return alert('Passwords don\'t matches!');
        }

        await register(email, password);
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}