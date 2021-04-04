import { html } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';

const searchTemplate = (data,onSearch,article) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @sumbit=${onSearch} id="search-form">
        <p class="field search">
            <input id="search-input" type="text" placeholder="Search by article title" name="search" .value=${article || ''}>
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
       ${data.length == 0 ? html`
       <h3 class="no-articles">No matching articles</h3>
       ` : data.map(itemTemplate)}

        
    </div>
</section>
`;

const itemTemplate = (item) => html`
<a class="article-preview" href=${`/details/${item._id}`}>
    <article>
        <h3>Topic: <span>${item.title}</span></h3>
        <p>Category: <span>${item.category}</span></p>
    </article>
</a>
`;

export async function searchPage(ctx) {

    const article = ctx.querystring.split('=')[1];
    const data = article ? await search(article) : '';

    ctx.render(searchTemplate(data,onSearch,article));

    function onSearch(){
        const query = document.getElementById('search-input').value;
        ctx.page.redirect('/search?query=' + query);
    }
}