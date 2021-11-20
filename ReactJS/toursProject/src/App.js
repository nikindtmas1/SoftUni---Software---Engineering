import { Route } from 'react-router-dom';

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
    <div >
      <Navigation />
      <Header />
      <About />
      <Service />
      <Agenci />
      <Text />
      <Contact />
      <Footer />
    </div>
  );

}



export default App;

