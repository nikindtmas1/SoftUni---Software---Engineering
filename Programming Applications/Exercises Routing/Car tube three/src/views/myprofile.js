import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyItems } from '../api/data.js';

const myTemplate = (myItems) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

        <!-- Display all records -->
        ${myItems.length == 0 ? html`
        <p class="no-cars"> You haven't listed any cars yet.</p>
        ` : myItems.map(itemTemplate)}

        <!-- Display if there are no records -->
        
    </div>
</section>
`;

const itemTemplate = (item) => html`
<div class="listing">
    <div class="preview">
        <img src=${item.imageUrl}>
    </div>
    <h2>${item.brand} ${item.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${item.year}</h3>
            <h3>Price: ${item.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href=${`/details/${item._id}`} class="button-carDetails">Details</a>
        </div>
    </div>
</div>
`;

export async function myListingsCars(ctx) {

    const myItems = await getMyItems();

    ctx.render(myTemplate(myItems));
}