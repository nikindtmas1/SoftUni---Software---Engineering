import { useEffect } from "react";

const TodoItem = (props) => {

    useEffect(() => {
        console.log(`${props.id} - Mounted`);

        return () => {
            console.log(`${props.id} - Unmount`);
        }
    }, [props.id])


    return(
        <>
        <li  style={{color: props.color}}>{props.children} <button onClick={() => props.onDelete(props.id)}>x</button></li>
        <li style={{color: props.color}} id={props.id}>{props.text}</li>
        <li>{props.numbers}</li>
    
        </>
    );
};

export default TodoItem;