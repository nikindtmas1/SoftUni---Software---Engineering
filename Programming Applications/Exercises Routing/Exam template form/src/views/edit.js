import { html } from '../../node_modules/lit-html/lit-html.js';
import {getItemById} from '../api/data.js';
import {editItem} from '../api/data.js';

const editTemplate = (item,onSubmit) => html`

`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const item = await getItemById(id);
    ctx.render(editTemplate(item,onSubmit));

    async function onSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const brand = formData.get('brand');
        const model = formData.get('model');
        const description = formData.get('description');
        const year = Number(formData.get('year'));
        const imageUrl = formData.get('imageUrl');
        const price = Number(formData.get('price'));

        if(brand == '' || model == '' || description == '' || year == '' || imageUrl == '' || price == ''){
            return alert('All fields are required!');
        }

        if(year == NaN || price == NaN){
            return alert('The years end price must by positive number!');
        }

        const data = {
            brand,
            model,
            description,
            year,
            imageUrl,
            price
        }

        await editItem(item._id,data);
        ctx.page.redirect(`/details/${item._id}`);

    }
}