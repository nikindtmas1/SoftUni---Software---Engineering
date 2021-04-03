import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById } from '../api/data.js';
import { editItem } from '../api/data.js';
import {notify} from '../../notification/notification.js';

const editTemplate = (item, onSubmit) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${item.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${item.description}>
                            Programming is often touted as a smart and lucrative career path.
                            It's a job that (sometimes) offers flexibility and great benefits.
                            But it's far from sunshine and Nyan Cat rainbows. The hours are long.
                            The mistakes are frustrating. And your eyesight is almost guaranteed to suffer.
                            These memes cover most of the frustration (and funny moments) of programming.
                            At least we can laugh through the pain. 
                        </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${item.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>
`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const item = await getItemById(id);
    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
     
        try{
        if (title == '' || description == '' || imageUrl == '') {
            throw new Error('All fields are required!');
        }

        const data = {
            title,
            description,
            imageUrl,
        }

        await editItem(item._id, data);
        ctx.page.redirect(`/details/${item._id}`);
    }catch(err){
        notify(err.message);
    }
    }
}