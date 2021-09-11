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

class App extends Component { 

  render() {

    return (
      <div className="container">
        <Header />

        <main id="site-content">
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Register path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/create' component={Create} />
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
