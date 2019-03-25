import React, {Component} from 'react';
import {Button, Well, Card} from 'react-bootstrap';
import { LineChart, Line } from 'recharts';
import Bookbar from './Bookbar';
import EntryInput from './EntryInput';






export default class Book extends Component {
    constructor(){
        super();
        this.state={
            likeCount: 0,
        };
    }
    
    
    
    addBook=(event)=>{
        event.preventDefault();
        this.props.addBook(event.target.id);
    }
    
    
    
    
    
    render(){
        return(
            
                
                    <Card bsstyle="primary ml-auto mr-auto" bsPrefix="book" >
                        <Card.Body>
                            
                            <Card.Title><h4>{this.props.book.title}</h4></Card.Title>
                        
                            <Card.Text >
                                {this.props.book.author}<br/>
                                <small>{this.props.book.genres}</small><br/>
                                {(this.props.book.pages_read/this.props.book.pages*100).toFixed(2)}% read<br/>
                                {this.props.book.entries.length} entries
                                <Bookbar book={this.props.book}/>
                            </Card.Text>
                            
                            <footer>
                                <div>
                                    <Button>Read this book, yo.</Button>
                                </div>
                            </footer>
                        </Card.Body>
                    </Card>
                
            
        );
    }
}