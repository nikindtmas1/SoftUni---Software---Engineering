//import logo from './logo.svg';
import './App.css';
import Heading from './components/heading';
import BookList from './components/BookList';
import Counter from './components/Counter';

const booksData =  [
  {title: 'Harry Potter', description:'Wizards and stuff'},
  {title: 'Lord of the rings', description: 'asdasd'},
  {title: 'Lost simbol', description: 'Dan Broun', author: 'Niki'},
  {title: 'The Bible', description: 'Very importan', author: 'God'},
  {title: null, description: 'Missing book'},
]

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className='Site-Wrapper'>
      <Heading />

      <Counter />
      <BookList books={booksData} />
    </div>
  );
}

export default App;
