import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById } from '../api/data.js';
import { deleteItem } from '../api/data.js';

const detailsTemplate = (item, isOwner, onDelete) => html`
<section id="details-page" class="content details">
    <h1>${item.title}</h1>

    <div class="details-content">
        <strong>Published in category JavaScript</strong>
        <p>${item.content}</p>

        <div class="buttons">
            ${isOwner ? html`
            <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href=${`/edit/${item._id}`} class="btn edit">Edit</a>
            <a href="/" class="btn edit">Back</a>
            ` : html`<a href="/" class="btn edit">Back</a>`}
            
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {

    const id = ctx.params.id;
    const item = await getItemById(id);

    const userId = sessionStorage.getItem('userId');

    ctx.render(detailsTemplate(item, item._ownerId == userId, onDelete));

    async function onDelete() {

        const confirmed = confirm('Are you sure you want to delete this car-listing!');
        if (confirmed) {

            await deleteItem(item._id);

            ctx.page.redirect('/');
        }
    }
}