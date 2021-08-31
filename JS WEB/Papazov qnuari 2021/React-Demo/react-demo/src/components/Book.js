

function Book(props){
if(!props.title){
    return (
    <article>
        <p>No information provided</p>
    </article>
    )
}

return(
    <article>
        <h3 onClick={props.clickHandler}>{props.title ? props.title : 'Title no provided'}</h3>
        <p>{props.description || 'Default Description'}</p>
    </article>
)

}

export default Book;