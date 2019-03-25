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
    
    
    
    handleClick=(event)=>{
        event.preventDefault();
        this.props.deleteBook(event.target.id);
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
                                    <EntryInput book={this.props.book} postEntry={this.props.postEntry} deleteEntry={this.props.deleteEntry}/>
                                    <Button className="btn btn-danger glyphicon glyphicon-remove pull-right" id={this.props.book.id} onClick={this.handleClick}>X</Button>
                                    
                                </div>
                            </footer>
                        </Card.Body>
                    </Card>
                
            
        );
    }
}