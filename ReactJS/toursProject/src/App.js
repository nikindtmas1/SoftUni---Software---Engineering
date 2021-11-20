import { Route, Switch } from 'react-router-dom';

import Header from './components/Header.js';
import Navigation from './components/Navigation';
import Footer from './components/Footer.js';
import About from './components/About';
import Service from './components/Service';
import Agenci from './components/Agenci';
import Text from './components/Text';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navigation />
      <Switch >
        <Route path="/" component={Header} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/agenci" component={Agenci} />
        <Route path="/contact" component={Contact} />
        <Route path="/text" component={Text} />
      </Switch>
      <Footer />
    </>
  );

}



export default App;

