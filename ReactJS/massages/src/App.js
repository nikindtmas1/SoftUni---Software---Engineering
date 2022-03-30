//import Navigation from "./components/Navigation";
import React from 'react';
import SearchAppBar from './components/AppBar';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import TherapiesPage from './components/TherapiesPage/TherapiesPage';
import OurStaffPage from './components/OurStaffPage/OurStaffPage';
//import {Link} from 'react-router-dom';


function App() {

 
  return (
    <div>
      <header>
        {/* <h1>Hello world</h1> */}
        <SearchAppBar />
      </header>
     <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/services' component={ServicesPage} />
        <Route path='/bodyTreatments' component={TherapiesPage} />
        <Route path='/staff' component={OurStaffPage} />
     </Switch>
    </div>
  );
}

export default App;
