import React from 'react';

const AddToList = () => {
    return (
        <div className='AddToList'>
            <h2>Add Person</h2>
            <input className='AddToList-input' placeholder='Name'></input>
            <input className='AddToList-input' placeholder='Image'></input>
            <input className='AddToList-input' placeholder='Age'></input>
            <textarea className='AddToList-input' placeholder='Description'></textarea>
        </div>);
};

export default AddToList;
