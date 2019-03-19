import React, {Component} from 'react'
import Book from './Book'
import {Well, Clearfix, CardColumns} from 'react-bootstrap'



const Bookshelf=(props)=>{
    return(
        <div>
            <h4>My Books</h4>
            <CardColumns>
                {props.books.map(book=>{
                    return(
                        <Book book={book} key={book.id} deleteBook={props.deleteBook}/>
                    )
                })}
            </CardColumns>
            
        </div>
    )
    
}

export default Bookshelf