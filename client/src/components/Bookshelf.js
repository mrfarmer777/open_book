import React, {Component} from 'react'
import Book from './Book'



export default class Bookshelf extends Component{
    
    render(){
        
        return(
            <div>
                <h4>My Books</h4>
                <div>
                    {this.props.books.map(book=>{
                        return(
                            <Book book={book} deleteBook={this.props.deleteBook}/>
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}