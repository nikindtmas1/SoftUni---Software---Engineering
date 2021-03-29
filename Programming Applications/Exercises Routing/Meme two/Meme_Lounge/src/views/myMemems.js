import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyMemes } from '../api/data.js';

const myTemplate = (myMemems, userData) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${myMemems.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) -->

        <!-- Display : If user doesn't have own memes  -->

        ${myMemems.length == 0 ? html`
        <p class="no-memes">No memes in database.</p>
        
        `: myMemems.map(itemTemplate)}
    </div>
</section>
`;


const itemTemplate = (item) => html`
<div class="user-meme">
    <p class="user-meme-title">${item.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${item.imageUrl}>
    <a class="button" href=${`/details/${item._id}`}>Details</a>
</div>
`;

export async function myPage(ctx) {

    const myMemems = await getMyMemes();
    const username = sessionStorage.getItem('username');
    const gender = sessionStorage.getItem('userGender');
    const email = sessionStorage.getItem('email');
    const userData = { username,gender, email }

    ctx.render(myTemplate(myMemems, userData));
}