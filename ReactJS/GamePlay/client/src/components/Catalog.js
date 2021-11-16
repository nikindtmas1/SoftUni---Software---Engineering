import { useState, useEffect } from 'react';

import GamesItem from './GamesItem';

const API_URL = 'http://localhost:5000/games';

const Catalog = () => {

  const [games, setGames] = useState([]);
  
  useEffect(() => {
    fetch(`${API_URL}`)
    .then(res => res.json())
    .then(results => {setGames(results)})

  }, [])

    return (
        <section id="catalog-page">
        <h1>All Games</h1>
        <div class="allGames">

          {games.map(x => <GamesItem  />)}
          <div class="allGames-info">
            <img src="./images/avatar-1.jpg" />
            <h6>Action</h6>
            <h2>Cover Fire</h2>
            <a href="#" class="details-button">Details</a>
          </div>

        </div>
        <div class="allGames">
          <div class="allGames-info">
            <img src="./images/avatar-1.jpg" />
            <h6>Action</h6>
            <h2>Zombie lang</h2>
            <a href="#" class="details-button">Details</a>
          </div>

        </div>
        <div class="allGames">
          <div class="allGames-info">
            <img src="./images/avatar-1.jpg" />
            <h6>Action</h6>
            <h2>MineCraft</h2>
            <a href="#" class="details-button">Details</a>
          </div>
        </div>
        <h3 class="no-articles">No articles yet</h3>
      </section>
    );
};

export default Catalog;