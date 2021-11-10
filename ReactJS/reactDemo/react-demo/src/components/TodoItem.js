
const TodoItem = (props) => {

    
//   const numbers = props.numbers;
//   let listItem = numbers.map((x) => <li>{x}</li>)

    return(
        <>
        <li style={{color: props.color}}>{props.children}</li>
        <li style={{color: props.color}}>{props.text}</li>
        <li>{props.numbers}</li>

        
        </>
    );
};

export default TodoItem;