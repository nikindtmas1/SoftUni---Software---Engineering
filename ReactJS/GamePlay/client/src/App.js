import { useState } from 'react';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import Catalog from "./components/Catalog";

function App() {

  const [page, setPage] = useState('/home');

  const routes = {
    '/home': WelcomeWorld,
    '/games': Catalog,
    '/create-game': CreateGame,
  }

    const navigationChangeHandler = (path) => {

      console.log(path);

      setPage(path);
    }

  return (
    <div id="box">

      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        {routes[page] || <h2>No page found</h2>}
      </main>

    </div>

  );
}

export default App;
