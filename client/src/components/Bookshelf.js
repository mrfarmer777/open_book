import React, {Component} from 'react'
import Book from './Book'
import {Carousel, Container} from 'react-bootstrap'





const Bookshelf=(props)=>{
    return(
        <Container >
            <h3>{props.shelfName}</h3>
            <Carousel interval="" >
                {props.books.map(book=>{
                    return(
                        <Carousel.Item>
                            <Book book={book} key={book.id}/>
                        </Carousel.Item>
                    )
                })}

            </Carousel>
        </Container>
    )
    
}

export default Bookshelf