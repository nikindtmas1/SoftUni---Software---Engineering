import BookList from './TodoBookList';
import TodoItem from './TodoItem';

const TodoList = () => {

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
            <TodoItem text="Clean your room" />
            <TodoItem text="Go shoping" />
            <TodoItem text="Learn React" />
        </ul>
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