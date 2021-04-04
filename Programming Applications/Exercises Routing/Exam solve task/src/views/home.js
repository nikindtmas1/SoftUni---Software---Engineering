import { html } from '../../node_modules/lit-html/lit-html.js';
import {getHomeItem} from '../api/data.js';

const homeTemplate = (data) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
   
   ${data.map(itemTemplate)}
</section>
`;



const itemTemplate = (item) => html`
 <section class="recent java">
        <h2>${item.category}</h2>
      
        <article>
            ${item.title ? html`
            <h3>${item.title}</h3>
            <p>${item.content}</p>
            <a href=${`/details/${item._id}`} class="btn details-btn">Details</a>
            ` : html`<h3>No articles yet</h3>`}
            
            
        </article>
       
      
    </section>
`;

export async function homePage(ctx) {
    const data = await getHomeItem();

    ctx.render(homeTemplate(data));

    
}