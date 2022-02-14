import React from 'react';
import { IState as Props } from '../App';

interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string,
        age: number,
        img: string,
        description: string
    }[]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {


    return (
        <div className='AddToList'>
            <h2>Add Person</h2>
            <input className='AddToList-input' placeholder='Name'></input>
            <input className='AddToList-input' placeholder='Image'></input>
            <input className='AddToList-input' placeholder='Age'></input>
            <textarea className='AddToList-input' placeholder='Description'></textarea>
            <button
            className='AddToList-btn'
            >Add to List</button>
        </div>);
};

export default AddToList;
