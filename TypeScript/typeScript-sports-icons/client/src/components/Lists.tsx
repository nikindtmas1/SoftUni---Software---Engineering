import React from 'react';
import { IState as IProp } from '../App';

const Lists: React.FC<IProp> = ({people}) => {


  return (
  <ul>
      {people.map((person) => {
          return (
              <li className='List'>
                  <div>
                      <h2>
                          {person.name}
                      </h2>
                  </div>
                  <p>Age: {person.age}</p>
                  <p>Description: {person.description}</p>
              </li>
          )
      })}
  </ul>
    );
};

export default Lists;
