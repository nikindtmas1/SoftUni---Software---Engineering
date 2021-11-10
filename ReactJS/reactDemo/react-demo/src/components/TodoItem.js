
const TodoItem = (props) => {

    


    return(
        <>
        <li style={{color: props.color}}>{props.children}</li>
        <li style={{color: props.color}} id={props.id}>{props.text}</li>
        <li>{props.numbers}</li>
        </>
    );
};

export default TodoItem;