import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import Catalog from "./components/Catalog";

function App() {

  const routes = {
    '/home': WelcomeWorld,
    '/games': Catalog,
    '/create-game': CreateGame,
  }

  return (
    <div id="box">

      <Header />

      <main id="main-content">
        <WelcomeWorld />
      </main>

    </div>

  );
}

export default App;
