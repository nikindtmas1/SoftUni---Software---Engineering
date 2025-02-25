//import logo from './logo.svg';
import { Component } from 'react';

import * as postService from './services/postServices';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import styles from'./App.module.css';
import Welcome from './component/Header/Header';
import Navigation from './component/Navigation/Navigation';
import Aside from './component/Aside/Aside';
import Footer from './component/Footer/Footer';
import Main from './component/Main/Main';
import About from './component/About/About';
import Contact from './component/Contact/Contact';


class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    postService.getAll()
    .then(posts => {
      this.setState({posts})
    })

  }

  render(){

    return (
      <div className={styles.App}>
   
      <Welcome />
  
      <Navigation />
      <div className={styles.Container}>
      <Aside />

      <Switch>
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/'>

      <Main posts={this.state.posts} />
      </Route>
      </Switch>
      
        
      </div>
      <Footer />
      </div>
    )

  }

}

export default App;
