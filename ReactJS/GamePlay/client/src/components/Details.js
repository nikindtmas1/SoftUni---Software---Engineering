 import { useState, useEffect } from "react";

 //import * as gameService from '../services/gameService';
 import {getOne} from '../services/data'
 
 const Details = ({
   match
  }) => {

    const [game, setGame] = useState({});

    useEffect(() => {
        getOne(match.params.id)
        .then(result => setGame(result))
    }, []);

    return(
        <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">

          <div class="game-header">
            <img class="game-img" src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span class="levels">MaxLevel: {game.maxLevel}</span>
            <p class="type">{game.category}</p>
          </div>

          <p class="text">
            {game.summary}
          </p>

          <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
              <li class="comment">
                <p>Content: I rate this one quite highly.</p>
              </li>
              <li class="comment">
                <p>Content: The best game.</p>
              </li>
            </ul>
            <p class="no-comment">No comments.</p>
          </div>

          <div class="buttons">
            <a href="#" class="button">Edit</a>
            <a href="#" class="button">Delete</a>
          </div>
        </div>

        <article class="create-comment">
          <label>Add new comment:</label>
          <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>

      </section>
    );

 };

 export default Details;