
const TodoItem = (props) => {

    return(
        <>
        <li style={{color: props.color}}>{props.children}</li>
        <li style={{color: props.color}}>{props.text}</li>
        </>
    );
};

export default TodoItem;