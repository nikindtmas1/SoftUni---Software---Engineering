import { Component } from 'react';
import Book from './Book';

class BookList extends Component{

    constructor(props){
        super(props)
    }

    bookClicked(title){
        console.log(`The book ${title} has been added to list`);
    }

    render(){
       
        return(
            <div className='Book-List'>
                <h2>Our Book Callection</h2>
               {
                   this.props.books.map(x => {
                       return <Book 
                       title={x.title} 
                       description={x.description}
                       isSelected={true}
                       //clickHandler={this.bookClicked.bind(this, x.title)}
                       clickHandler={() => this.bookClicked(x.title)}
                       author={x.author}
                       />
                   })
               }
            </div>

        )
    }
}

export default BookList;