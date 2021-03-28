import { html } from '../../node_modules/lit-html/lit-html.js';
import {getMemes} from '../api/data.js';

const catalogTemplate = (data) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        <!-- Display : All memes in database ( If any ) -->
      
        ${data.length == 0 ? html`
        <p class="no-memes">No memes in database.</p>
        ` : data.map(itemTemplate)}
      
        <!-- Display : If there are no memes in database -->
      
        
    </div>
</section>
`;

const itemTemplate = (meme) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/details">Details</a>
        </div>
    </div>
</div>
`;

export async function catalogPage(ctx) {
    const data = await getMemes();

    ctx.render(catalogTemplate(data));

}