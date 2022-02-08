import React, {useState} from 'react';

import './App.css';

export interface IState  {
  people: {
    name: string,
    age: number,
    description: string,
    img: string
  }
}


function App() {


  const [people, setPeople] = useState<IState["people"]>({
    name: 'Niki',
    age: 30,
    description: 'Great',
    img: ''
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
