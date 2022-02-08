import React, {useState} from 'react';

import './App.css';

import Lists from './components/Lists';

export interface IState  {
  people: {
    name: string,
    age: number,
    description: string,
    img: string
  }[]
}


function App() {


  const [people, setPeople] = useState<IState["people"]>([
    {
    name: 'Niki',
    age: 30,
    description: 'Great',
    img: ''
  }])

  return (
    <div className="App">
      <>
        <h1>Sport Icons</h1>
        <Lists people={people}></Lists>
      </>
    </div>
  );
}

export default App;
