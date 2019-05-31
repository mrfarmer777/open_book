import React,  {Component } from 'react';
import Book from './Book';
import {ListGroup, Container, Button} from 'react-bootstrap';





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
            <div className={this.state.open ? "bookshelf-container": "bookshelf-container collapsed"}>
                <div>
                    <Button bsVariant="small" bsClass="mr-auto" onClick={this.toggleOpen}>>></Button>
                    <h3>{this.props.shelfName}</h3>
                </div>
                <ListGroup  >
                    {this.props.books.map(book=>{
                        return(
                            <ListGroup.Item key={book.id.toString()}>
                                <Book className="book" book={book} key={book.id.toString()} useBook={this.props.useBook}/>
                            </ListGroup.Item>
                        )
                    })}
    
                </ListGroup>
            </div>
        )
    }
    
}

export default Bookshelf