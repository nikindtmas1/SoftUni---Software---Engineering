import BookList from './TodoBookList';
import TodoItem from './TodoItem';



const TodoList = () => {
    const todos = ['Call me', 'Go out', 'Stai home'];
    const firstTask = 'Clean your room';

    const arrNumbers = [1,2,3,4,5,6]
    const firstColor = 'red';

    const bookData = {
            title:'IT',
            author:'Stephen King',
            price:'20'
    }
    
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
            {todos.map(todo => <TodoItem color='blue'>{todo}</TodoItem>)}
        </ul>

        {arrNumbers.map((x) => <li>{x}</li>)}
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