
import './App.css';
import Hello from './components/Hello.js'
import Welcome from './components/Welcome.js'
import TodoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <Hello />
       <Welcome />
        
      </header>

      <main>
        <h1>Tasks</h1>
        <TodoList />
      </main>

      <footer>
        <p>All rights reserved &copy;</p>
      </footer>
    </div>
  );

}



export default App;
//export default Welcome;
