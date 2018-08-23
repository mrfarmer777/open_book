import React, {Component} from 'react'
import Book from './Book'



export default class Bookshelf extends Component{
    
    
    
    
    render(){
        
        return(
            <div class="well container">
                <h4>My Books</h4>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#bookModal">Show Modal</button>
                <div class="row clearfix">
                    {this.props.books.map(book=>{
                        return(
                            <Book key={book.id} book={book} deleteBook={this.props.deleteBook} />
                        )
                    })}
                </div>
                
            </div>
        )
    }
}