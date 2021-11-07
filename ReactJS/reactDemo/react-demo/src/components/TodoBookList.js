const BookList = (props) => {
console.log(props);
    return (
        <ul>
            <li>Title: {props.text.title}</li>
            <li>Author: {props.text.author}</li>
            <li>Price: {props.text.price}</li>
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