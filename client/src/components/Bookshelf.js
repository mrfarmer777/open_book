import React, {Component} from 'react'
import Book from './Book'



const Bookshelf=(props)=>{
    return(
        <div class="well container">
            <h4>My Books</h4>
            <div class="row clearfix">
                {props.books.map(book=>{
                    return(
                        <Book book={book} deleteBook={props.deleteBook}/>
                    )
                })}
            </div>
            
        </div>
    )
    
}

export default Bookshelf