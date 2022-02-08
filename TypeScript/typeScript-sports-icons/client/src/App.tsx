import React, {useState} from 'react';

import './App.css';



function App() {


  const [people, setPeople] = useState({
    name: 'Niki',
    age: 30,
    description: 'Great',

  })

  return (
    <div className="App">
      <>
        <h1>{people.name}</h1>
        <p>{people.age}</p>
        <p>{people.description}</p>
      </>
    </div>
  );
}

export default App;
