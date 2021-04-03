import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyItems } from '../api/data.js';

const myTemplate = (myItems,userData) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${myItems.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) -->
      ${myItems.length == 0 ? html`
      <p class="no-memes">No memes in database.</p>
      ` : myItems.map(itemTemplate)}

        <!-- Display : If user doesn't have own memes  -->
        
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

export async function myListingsCars(ctx) {

    const myItems = await getMyItems();
    const username = sessionStorage.getItem('username');
    const gender = sessionStorage.getItem('gender');
    const email = sessionStorage.getItem('email');

    const userData = {
        username,
        gender,
        email
    }

    ctx.render(myTemplate(myItems,userData));
}