import { useState, createElement } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import Catalog from "./components/Catalog";
import ErrorPage from './components/ErrorPage';
import Details from './components/Details';

function App() {

  // const [page, setPage] = useState('/home');

  // const navigationChangeHandler = (path) => {

  //   setPage(path);
  // }


  // const routes = {
  //   '/home': <WelcomeWorld />,
  //   '/games': <Catalog navigationChangeHandler={navigationChangeHandler} />,
  //   '/create-game': <CreateGame />,
  //   '/login': <Login />,
  //   '/register': <Register />,
  //   '/details': <Details  />,//id={argument}
  // }

  //  const router = (path) => {
  //     let pathNames = path.split('/');
  //     let rootPath = pathNames[1];
  //     let argument = pathNames[2];

  //     const routes = {
  //       'home': <WelcomeWorld />,
  //       'games': <Catalog navigationChangeHandler={navigationChangeHandler} />,
  //       'create-game': <CreateGame />,
  //       'login': <Login />,
  //       'register': <Register />,
  //       'details': <Details id={argument} />,
  //     }

  //     return routes[rootPath];
  //  }

  return (
    <div id="box">

      <Header component={Header} />

      <main id="main-content">
        <Switch>

          <Route path="/home" exact component={WelcomeWorld} />
          <Route path="/games" component={Catalog} />
          <Route path="/create-game" component={CreateGame} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
       

        {/* { router(page) || <ErrorPage />} */}
        
      </main>

    </div>

  );
}

export default App;
