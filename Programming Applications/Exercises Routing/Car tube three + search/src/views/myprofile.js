import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyItems } from '../api/data.js';
import {itemTemplate} from '../../common/itemTemplate.js';

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



export async function myListingsCars(ctx) {

    const myItems = await getMyItems();

    ctx.render(myTemplate(myItems));
}