import { html } from '../../node_modules/lit-html/lit-html.js';
import { getIdeas } from '../api/data.js';

const dashboardTemplate = (data,dataLength) => html`
<div id="dashboard-holder">
   ${data.map(itemsTemplate)}
   ${dataLength > 0 ? '' : html`
    <h1>No ideas yet! Be the first one :)</h1>
    `}
</div>
`;

const itemsTemplate = (item) => html`
<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">${item.description}</p>
    </div>
    <img class="card-image" src=${item.img} alt="Card image cap">
    <a class="btn" href=${`/details/${item._id}`}>Details</a>
</div>
`;

export async function dashBoardPage(ctx) {
    console.log('Dash Board Page!');

    const data = await getIdeas();

    console.log(ctx);
    const dataLength = data.length;

    ctx.render(dashboardTemplate(data,dataLength));
}