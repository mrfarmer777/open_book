import React,  {Component } from 'react';
import Book from './Book';
import Sidebar from './menus/Sidebar';
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
            <Container name={this.props.name}>
                {this.props.books.map(book=>{
                            return(
                                
                                    <Book className="book" book={book} key={book.id.toString()} useBook={this.props.useBook}/>
                                
                            )
                        })}
            
            </Container>
        )
    }
    
}

export default Bookshelf
/*
<div className={this.state.open ? "bookshelf-container": "bookshelf-container collapsed"}>
                <h5 bsVariant="small" bsClass="mr-auto" onClick={this.toggleOpen}>{this.props.shelfName}</h5>
                <Container >
                    {this.props.books.map(book=>{
                        return(
                            
                                <Book className="book" book={book} key={book.id.toString()} useBook={this.props.useBook}/>
                            
                        )
                    })}
    
                </Container>
            </div>
            
            */