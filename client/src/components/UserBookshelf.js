import React from 'react'
import UserBook from './UserBook'
import {Carousel, Container} from 'react-bootstrap'





const UserBookshelf=(props)=>{
        return(
            <Container >
                <h3>{props.shelfName}</h3>
                <Carousel interval="" >
                    {props.books.map(book=>{
                        return(
                            <Carousel.Item key={book.id.toString()}>
                                <UserBook book={book} key={book.id.toString()} deleteBook={props.deleteBook} postEntry={props.postEntry} deleteEntry={props.deleteEntry} fetchUserBook={props.fetchUserBook}/>
                            </Carousel.Item>
                        )
                    })}
    
                </Carousel>
            </Container>
        )
}

export default UserBookshelf

