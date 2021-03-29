import { html } from '../../node_modules/lit-html/lit-html.js';
import {getMovieById} from '../api/data.js';
import {editMovie} from '../api/data.js';

const editTemplate = (item,onSubmit) => html`
<section id="edit-movie">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input type="text" class="form-control" placeholder="Movie Title" value="" name="title" .value=${item.title}>
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..." name="description" .value=${item.description}></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input type="text" class="form-control" placeholder="Image Url" value="" name="imageUrl" .value=${item.img}>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>
`;

export async function editMoviePage(ctx) {

    const id = ctx.params.id;
  
    const item = await getMovieById(id);

    ctx.render(editTemplate(item,onSubmit));

    async function onSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const img = formData.get('imageUrl').trim();


        const data = {
            title,
            description,
            img
        }

        console.log(data);

        await editMovie(item._id,data);
        ctx.page.redirect('/details/' + id);
    }
}