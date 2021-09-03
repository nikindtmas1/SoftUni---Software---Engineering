//import logo from './logo.svg';
import './App.css';
import Welcome from './component/Header/Header';
import Navigation from './component/Navigation/Navigation';
import Aside from './component/Aside/Aside';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <div className="App">
 
    <Welcome />

    <Navigation />

    <Aside />

    <Footer />
    </div>
  );
}

export default App;
