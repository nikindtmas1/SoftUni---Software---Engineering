
import './App.css';
import Hello from './components/Hello.js'
import Welcome from './components/Welcome.js'
import TodoList from './components/ToDoList';
import FavoritColor from './components/TodoColorButton';
import MyComponent from './components/Fetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <Hello />
       <Welcome />
        
      </header>

      <main>
        
        <TodoList />

        <FavoritColor />

        <MyComponent />
      </main>

      <footer>
        <p>All rights reserved &copy;</p>
      </footer>
    </div>
  );

}



export default App;
//export default Welcome;
