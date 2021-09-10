import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import { Route, Switch } from 'react-router-dom';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Create from './components/Create/Create';

class App extends Component { 

  render() {

    return (
      <div className="container">
        <Header />
        <Main />
      
        
        <Footer />
      </div>
    );

  }
  
  }
export default App;
