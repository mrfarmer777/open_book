import React, {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
//import { LineChart, Line } from 'recharts';
import Bookbar from './Bookbar';
// EntryInput from './EntryInput';






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
            
                
                    <Card className="book flex-row flex-wrap" bsPrefix="book">
                        <Card.Header>
                            <img src="https://via.placeholder.com/50x75"/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text >
                                <p>{this.props.book.title}</p>
                                {this.props.book.author}<br/>
                                <small>{this.props.book.genres}</small><br/>
                            </Card.Text>
                            
                            <footer>
                                <div>
                                    <Button onClick={this.useBook}>Read.</Button>
                                </div>
                            </footer>
                        </Card.Body>
                    </Card>
                
            
        );
    }
}