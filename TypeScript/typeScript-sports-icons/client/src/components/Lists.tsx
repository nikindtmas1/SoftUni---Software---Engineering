import React from 'react';
import { IState as IProp } from '../App';

const Lists: React.FC<IProp> = ({people}) => {


  return (
  <ul>
      {people.map((person) => {
          return (
              <li>
                  <div>
                      <h2>
                          {person.name}
                      </h2>
                  </div>
              </li>
          )
      })}
  </ul>
    );
};

export default Lists;
