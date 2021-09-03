//import logo from './logo.svg';
import './App.css';
import Welcome from './component/Header/Header';
import Navigation from './component/Navigation/Navigation';
import Aside from './component/Aside/Aside';


function App() {
  return (
    <div className="App">
 
    <Welcome />

    <Navigation />

    <Aside />
    </div>
  );
}

export default App;
