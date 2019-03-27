import React, {Component} from 'react'
import UserBook from './UserBook'
import Bookshelf from './Bookshelf'
import {Carousel, Container} from 'react-bootstrap'





const UserBookshelf=(props)=>{
        return(
            <Container >
                <h3>{props.shelfName}</h3>
                <Carousel interval="" >
                    {props.books.map(book=>{
                        return(
                            <Carousel.Item>
                                <UserBook book={book} key={String(book.id)} deleteBook={props.deleteBook} postEntry={props.postEntry} deleteEntry={props.deleteEntry} fetchUserBook={props.fetchUserBook}/>
                            </Carousel.Item>
                        )
                    })}
    
                </Carousel>
            </Container>
        )
}

export default UserBookshelf

