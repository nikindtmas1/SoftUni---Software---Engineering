import BookList from './TodoBookList';
import TodoItem from './TodoItem';


import { useState, useEffect } from 'react';
import uniqid from 'uniqid';

const API_URL = 'http://localhost:3030/jsonstore'

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    console.log('Render');
    
    useEffect(() => {
        console.log('Mounted');
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
    
    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        }
        setTodos(oldTodos => [
            ...oldTodos,
            todo
        ])

        e.target.value = ''
    }

    const deleteTodoItemClickHandler = (id) => {
        setTodos(oldTodos => oldTodos.filter(todo => todo.id != id))
    }

    const toggoleTodoItemClickHandler = (id) => {

        let currentTodo;
        let currentIndex;

        for(let i = 0; i < todos.length; i++){
            if(todos[i].id == id){
                currentTodo = todos[i];
                currentIndex = i;

                break;
            }
        }
      
        let toggledTodo = {...currentTodo, isDone: !currentTodo.isDone};

        setTodos(oldTodos => [
            ...oldTodos.slice(0, currentIndex),
            toggledTodo,
            ...oldTodos.slice(currentIndex + 1)
        ])
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

        <label>Add Todo</label>
        <input type='text' name='todo' onBlur={onTodoInputBlur} />
        
        <ul>
            {todos.map(todo => 
            <TodoItem color='blue' 
            key={todo.id} 
            id={todo.id} 
            onDelete={deleteTodoItemClickHandler}
            onClick={toggoleTodoItemClickHandler}
            >
            {todo.text}
            </TodoItem>)}
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