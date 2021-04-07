import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyItems } from '../api/data.js';

const myTemplate = (myItems) => html`

`;

const itemTemplate = (item) => html`

`;

export async function myListingsCars(ctx) {

    const myItems = await getMyItems();

    ctx.render(myTemplate(myItems));
}