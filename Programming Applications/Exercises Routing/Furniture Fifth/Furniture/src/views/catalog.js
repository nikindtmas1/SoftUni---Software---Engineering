import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItem } from '../api/data.js';

const catalogTemplate = (data) => html`

`;

const itemTemplate = (item) => html`

`;

export async function catalogPage(ctx) {

    const data = await getAllItem();

    ctx.render(catalogTemplate(data));
}