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
    
    
    
    useBook=()=>{
        this.props.useBook(this.props.book);
    }
    
    
    
    
    
    render(){
        return(
            
                
                    <Card bsstyle="primary ml-auto mr-auto" bsPrefix="book" >
                        <Card.Body>
                            
                            <Card.Title><h4>{this.props.book.title}</h4></Card.Title>
                        
                            <Card.Text >
                                {this.props.book.author}<br/>
                                <small>{this.props.book.genres}</small><br/>
                            </Card.Text>
                            
                            <footer>
                                <div>
                                    <Button onClick={this.useBook}>Read this book, yo.</Button>
                                </div>
                            </footer>
                        </Card.Body>
                    </Card>
                
            
        );
    }
}