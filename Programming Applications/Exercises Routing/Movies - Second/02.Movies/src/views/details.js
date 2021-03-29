import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMovieById } from '../api/data.js';
import { deleteMovie } from '../api/data.js';
import { getLikeByMovieId } from '../api/data.js';
import { createLike } from '../api/data.js';

const detailsTemplate = (item, isOwner, onDelete, onLike) => html`
<section id="movie-example">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${item.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src=${item.img}
                    alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${item.description}</p>

                ${isOwner ? html`
                <a @click=${onDelete} class="btn btn-danger" href="">Delete</a>
                <a class="btn btn-warning" href=${`/editMovie/${item._id}`}>Edit</a>
                ` : html`
                <a @click=${onLike} class="btn btn-primary" href="#">Like</a>
                <span class="enrolled-span">Liked 1</span>
                `}
                
            </div>
        </div>
    </div>
</section>
`;



export async function detailsPage(ctx) {
    console.log('Details Page!',);

    const id = ctx.params.id;

    const item = await getMovieById(id);

    const userId = sessionStorage.getItem('userId');

    ctx.render(detailsTemplate(item, item._ownerId == userId, onDelete, onLike));

    async function onDelete() {
        const confermed = confirm('Are you sure you want to delete this item?');

        if (confermed) {

            await deleteMovie(item._id);
            ctx.page.redirect('/');
        }
    }

    async function onLike(event) {
        event.preventDefault();
        const likeBtn = event.target;
        likeBtn.style.display = 'none';

        const data = { movieId: item._id }
        await createLike(data);

        const btnLikes = document.querySelector('.enrolled-span');
        btnLikes.style.display = 'inline-block';
        const getLikes = await getLikeByMovieId(item._id);

        btnLikes.textContent = `Liked ${getLikes.length}`;

    }
}