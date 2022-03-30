//import Navigation from "./components/Navigation";
import React, {useState, useEffect} from 'react';
import SearchAppBar from './components/AppBar';
import {Switch, Route, useLocation} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import TherapiesPage from './components/TherapiesPage/TherapiesPage';
import OurStaffPage from './components/OurStaffPage/OurStaffPage';
//import {Link} from 'react-router-dom';


function App() {

  const [pageInfo, setPageInfo] = useState('');
  
  const location = useLocation();
  let pathName = location.pathname;

  useEffect(() => {
    if(pathName === '/'){
      setPageInfo('page1')
    }else if(pathName === '/services'){
      setPageInfo('page2')
    }else if(pathName === '/bodyTreatments'){
      setPageInfo('page3')
    }else if(pathName === '/staff'){
      setPageInfo('page4')
    }
  },[pathName]);


 
  return (
    <div id={pageInfo}>
      {console.log(pageInfo)}
      <header>
        {/* <h1>Hello world</h1> */}
        <SearchAppBar />
      </header>
     <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/services' component={ServicesPage} />
        <Route path='/bodyTreatments' component={TherapiesPage} />
        <Route path='/staff' component={OurStaffPage} />
     </Switch>
    </div>
  );
}

export default App;
