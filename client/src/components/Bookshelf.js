import React, {Component} from 'react'
import Book from './Book'
import {CardColumns, Container} from 'react-bootstrap'



const Bookshelf=(props)=>{
    return(
        <Container>
            <h4>My Books</h4>
            <CardColumns>
                {props.books.map(book=>{
                    return(
                        <Book book={book} key={book.id} deleteBook={props.deleteBook}/>
                    )
                })}
            </CardColumns>
            
        </Container>
    )
    
}

export default Bookshelf