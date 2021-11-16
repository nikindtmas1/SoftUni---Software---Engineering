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
          {games.map(x => <GamesItem game={x} />)}
       
        <h3 class="no-articles">No games yet</h3>
      </section>
    );
};

export default Catalog;