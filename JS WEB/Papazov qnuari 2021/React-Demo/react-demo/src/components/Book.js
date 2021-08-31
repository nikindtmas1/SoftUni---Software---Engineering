

function Book(props){


return(
    <article className={props.isSelected ? 'Selected-book' : ''}>
        <h3>{props.title}</h3>
        <p>{props.description || 'Default Description'}</p>
    </article>
)

}

export default Book;