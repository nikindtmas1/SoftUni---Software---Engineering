import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import { Route, Switch } from 'react-router-dom';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Create from './components/Create/Create';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import MyPet from './components/MyPet/MyPet';
import DetailsOtherPet from './components/DetailsOtherPet/DetailsOtherPet';
import DetailsMyPet from './components/DetailsMyPet/DetailsMyPet';

class App extends Component { 

  render() {

    return (
      <div className="container">
        <Header />

        <main id="site-content">
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/dashboard/:category' component={Dashboard} />
          <Route path='/details' component={DetailsOtherPet} />
          <Route path='/mypet' component={MyPet} />
          <Register path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/create' component={Create} />
          <Route path='/pets/details/:petId' component={DetailsMyPet} />
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
        <style jsx>
          {`
          #site-content>section.basic {
            text-align: center;
        }
          `}
        </style>
        </main>
        <Footer />

        <style jsx>
          {`
          body {
            padding: 0;
            margin: 0;
            background-color: #eff4f4;
            background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23bae6f2' fill-opacity='0.49' fill-rule='evenodd'/%3E%3C/svg%3E");
        }

          #container {
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            padding: 0;
        }
          `}
        </style>
      </div>
    );

  }
  
  }
export default App;
