import React,  {Component } from 'react';


import Book from './Book';
import Sidebar from './menus/Sidebar';
import BookIcon from './BookIcon';

import {ListGroup, Container, Button} from 'react-bootstrap';
import booksolid from "../images/booksolid.svg"





class Bookshelf extends Component {
    constructor(){
        super()
        this.state={
            open: false,
        }
    }
    
    toggleOpen = (event) => {
        this.setState({
            open: !this.state.open,
        })
        if(this.state.open){
            event.target.classList.remove("collapsed");
        }else{
            event.target.classList.add("collapsed");
        }
        console.log(this.state.open)
    }
    
    
    
    
    
    render(){
        return(
            <Container className="bookshelf" name={this.props.name}>
                {this.props.books.map(book=>{
                            return(
                                <BookIcon source="https://via.placeholder.com/50x75" book={book}/>
                                
                            )
                        })}
            
            </Container>
        )
    }
    
}

export default Bookshelf


//                                    <Book className="book" book={book} key={book.id.toString()} useBook={this.props.useBook}/>
