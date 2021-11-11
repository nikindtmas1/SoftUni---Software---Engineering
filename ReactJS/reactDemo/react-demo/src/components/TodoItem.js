
const TodoItem = (props) => {

    


    return(
        <>
        <li style={{color: props.color}}>{props.children} <button onClick={() => console.log('Delete')}>x</button></li>
        <li style={{color: props.color}} id={props.id}>{props.text}</li>
        <li>{props.numbers}</li>
    
        </>
    );
};

export default TodoItem;