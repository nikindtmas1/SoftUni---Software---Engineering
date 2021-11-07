import BookList from './TodoBookList';
import TodoItem from './TodoItem';

const TodoList = () => {

    const firstTask = 'Clean your room';
    
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
            <TodoItem color='red'>{firstTask}</TodoItem>
            <TodoItem color='green' text="Go shoping" />
            <TodoItem color='pink' text="Learn React" />
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