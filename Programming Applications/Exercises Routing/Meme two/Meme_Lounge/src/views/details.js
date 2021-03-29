import { html } from '../../node_modules/lit-html/lit-html.js';
import {getMemesById} from '../api/data.js';
import {deleteMemes} from '../api/data.js';

const detailsTemplate = (item,isOwner,onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${item.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${item.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${item.description}
            </p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${isOwner? html`
            <a class="button warning" href=${`/edit/${item._id}`}>Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>
            `:''}

        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {

    const id = ctx.params.id;

    const item = await getMemesById(id);

    const userId = sessionStorage.getItem('userId');
   
    ctx.render(detailsTemplate(item,item._ownerId == userId,onDelete));

    async function onDelete(){

        await deleteMemes(item._id);
        ctx.page.redirect('/catalog');
    }
}