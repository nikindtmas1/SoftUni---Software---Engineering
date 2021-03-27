import { html } from "../../node_modules/lit-html/lit-html.js";
import {getIdeasById} from "../api/data.js";
import { deleteIdea } from "../api/data.js";

const detailsTemplate = (item,onDelete) => html`
<div id="details-page" class="container home some">
    <img class="det-img" src=${item.img} />
    <div class="desc">
        <h2 class="display-5">Dinner Recipe</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${item.description}</p>
    </div>
    <div class="text-center">
        <a @click=${onDelete} class="btn detb" href="">Delete</a>
    </div>
</div>
`;

export async function detailsPage(ctx) {
    console.log('Details Page!');
    
    const id = ctx.params.id;
    
    const item = await getIdeasById(id);

    
    ctx.render(detailsTemplate(item,onDelete));

    async function onDelete(event){
        event.preventDefault();
        console.log(item._id);
        await deleteIdea(item._id);
        ctx.page.redirect('/dashboard');
    }
}