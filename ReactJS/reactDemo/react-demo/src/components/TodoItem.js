
const TodoItem = (props) => {

    return(
        <>
        <li>{props.children}</li>
        <li>{props.text}</li>
        </>
    );
};

export default TodoItem;