const BookList = (props) => {
console.log(props);
    return (
        <ul>
            <li>Title: {props.title}</li>
            <li>Author: {props.author}</li>
            <li>Price: {props.price}</li>
        </ul>
        
        // <ul>
        //     <Book
        //     title='IT'
        //     author='Stephen King'
        //     price='20'
        //      />
        //      <Book
        //      title='The Hunger Games'
        //      author='Suzzane Collins'
        //      price='10'
        //      />
        // </ul>
    );
};

export default BookList;