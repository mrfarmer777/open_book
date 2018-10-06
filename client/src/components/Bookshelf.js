import React, {Component} from 'react'
import Book from './Book'
import {Well, Clearfix} from 'react-bootstrap'



const Bookshelf=(props)=>{
    return(
        <Well>
            <h4>My Books</h4>
            <div class="row clearfix">
                {props.books.map(book=>{
                    return(
                        <Book book={book} deleteBook={props.deleteBook}/>
                    )
                })}
            </div>
            
        </Well>
    )
    
}

export default Bookshelf