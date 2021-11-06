import BookList from './TodoBookList';

const TodoList = () => {

    return (
        <>
        <h1>Tasks</h1>
        <ul>
            <BookList />
            <li>Clean your room</li>
            <li>Go shoping</li>
            <li>Learn React</li>
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