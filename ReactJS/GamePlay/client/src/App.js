import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";

function App() {
  return (
    <div>
      <div id="box">

       <Header />

        <main id="main-content">
          <WelcomeWorld />
        </main>

      </div>
    </div>
  );
}

export default App;
