import { html } from '../node_modules/lit-html/lit-html.js';
import { search } from '../src/api/data.js';
import {itemTemplate} from '../common/itemTemplate.js';

const searchTemplate = (data,onSearch,year) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year" .value=${year || ''}>
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">

        <!-- Display all records -->
        ${data.length == 0 ? html`
        <p class="no-cars"> No results.</p>
        ` : data.map(itemTemplate)}

        <!-- Display if there are no matches -->
        
    </div>
</section>
`;



export async function searchPage(ctx) {
    const year = ctx.querystring.split('=')[1];
    
    const data = year ? await search(year) : '';
    ctx.render(searchTemplate(data,onSearch,year));

    function onSearch(){
        
        const query = Number(document.getElementById('search-input').value);
        ctx.page.redirect('/search?query=' + query);

    }
}