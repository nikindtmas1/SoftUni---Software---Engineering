import { html } from '../../node_modules/lit-html/lit-html.js';
import {getItemById, editRecord} from '../api/data.js';

const editTemplate = (item,onSubmit) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control" id="new-make" type="text" name="make" .value=${item.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control is-valid" id="new-model" type="text" name="model" .value=${item.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control is-invalid" id="new-year" type="number" name="year" .value=${item.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description" .value=${item.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price" .value=${item.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img" .value=${item.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>
`;

export async function editPage(ctx) {
    console.log('Edit Page!', ctx.params.id);

    const id = ctx.params.id;
    const item = await getItemById(id);

    ctx.render(editTemplate(item,onSubmit));

    async function onSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const make = formData.get('make');
        const model = formData.get('model');
        const year = formData.get('year');
        const description = formData.get('description');
        const price = formData.get('price');
        const img = formData.get('img');
        const material = formData.get('material');

        if(make == '' || model == '' || year == '' || description == '' || price == '' || img == ''){

            return alert('All fields are required!');
        }

        if(make.length < 4 || model.length < 4){
            return alert('Make end Model must be at least 4 symbols long!');
        }

        if(Number(year) < 1950 || Number(year) > 2050){
            return alert('Year must be between 1950 and 2050!');
        }

        if(description.length <= 10){
            return alert('Description must be more than 10 symbols!');
        }

        if(Number(price) < 0){
            return alert('Price must be a positive number!');
        }

        const data = {
            make,
            model,
            year,
            description,
            price,
            img,
            material
        }

        await editRecord(item._id,data);
    }
}