import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItem } from '../api/data.js';
import {itemTemplate} from '../../common/itemTemplate.js';

const catalogTemplate = (data) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">

        <!-- Display all records -->
        ${data.length == 0 ? html`
        <p class="no-cars">No cars in database.</p>
        ` : data.map(itemTemplate)}

        <!-- Display if there are no records -->
        
    </div>
</section>
`;



export async function catalogPage(ctx) {

    const data = await getAllItem();

    ctx.render(catalogTemplate(data));
}