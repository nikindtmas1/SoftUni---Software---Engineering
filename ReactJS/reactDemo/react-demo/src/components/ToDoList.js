import BookList from './TodoBookList';
import TodoItem from './TodoItem';

import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3030/jsonstore'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/todos`)
        .then(res => res.json())
        .then(result => setTodos(Object.values(result)))
    }, []);

   
        // {id: 1, text:'Call me', isDone: false},
        // {id: 2, text: 'Go out', isDone: false},
        // {id: 3, text: 'Stai home', isDone: false}
    
    const firstTask = 'Clean your room';

    const arrNumbers = [1,2,3,4,5,6]
    const firstColor = 'red';

    const bookData = {
            title:'IT',
            author:'Stephen King',
            price:'20'
    }
    
      //const numbers = props.numbers;
        let listItem = arrNumbers.map((x) => <li>{x}</li>)

    return (
        <>
        <h1>Tasks</h1>
            <BookList text={bookData} />
        <ul>
            <TodoItem color={firstColor}>{firstTask}</TodoItem>
            <TodoItem color='green' text="Go shoping" />
            <TodoItem color='pink' text="Learn React" />
            <TodoItem numbers={arrNumbers} />
        </ul>

        <ul>
            {todos.map(todo => <TodoItem color='blue' key={todo.id} id={todo.id}>{todo.text}</TodoItem>)}
        </ul>

        {listItem}
        </>
    );
};

export default TodoList;

// import React from 'react';
// class TodoList extends React.Component{
//     render(){
//         return(
//             <ul>
//                 <li>Clean your room</li>
//             </ul>
//         );
//     };
// };