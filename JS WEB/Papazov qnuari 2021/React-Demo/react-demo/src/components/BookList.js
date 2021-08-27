import { Component } from 'react';
import Book from './Book';

class BookList extends Component{

    constructor(props){
        super(props)
    }

    render(){
       
        return(
            <div className='Book-List'>
                <h1>Our Book Callection</h1>
                <Book title='Harry Potter' description='Wizards and stuff' />
                <Book title='Lord of the rings' description='asdasd' />
                <Book title='Lost simbol' description='Dan Broun' />
            </div>

        )
    }
}

export default BookList;