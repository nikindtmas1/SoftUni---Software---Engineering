import React, {useState} from 'react';
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

    const [input, setInput] = useState({
        name: '',
        img: '',
        age: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='AddToList'>
            <h2>Add Person</h2>
            <input 
            className='AddToList-input' 
            placeholder='Name'
            name='name'
            type='text'
            value={input.name}
            onChange={handleChange}
            ></input>

            <input 
            className='AddToList-input' 
            placeholder='Image'
            name='img'
            type='text'
            value={input.img}
            onChange={handleChange}
            ></input>

            <input 
            className='AddToList-input' 
            placeholder='Age'
            name='age'
            type='text'
            value={input.age}
            onChange={handleChange}
            ></input>

            <textarea 
            className='AddToList-input' 
            placeholder='Description'
            name='description'
            value={input.description}
            onChange={handleChange}
            ></textarea>

            <button
            className='AddToList-btn'
            >Add to List</button>
        </div>);
};

export default AddToList;
