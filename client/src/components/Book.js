import React, {Component} from 'react'
import {Button, Well, Card} from 'react-bootstrap'
import { LineChart, Line } from 'recharts';
import Bookbar from './Bookbar'
import EntryInput from './EntryInput'






export default class Book extends Component {
    constructor(){
        super()
        this.state={
            likeCount: 0,
        }
    }
    
    
    
    handleClick=(event)=>{
        event.preventDefault();
        this.props.deleteBook(event.target.id)
    }
    
    handleLike(event){
        debugger
        this.target.setState({
            likeCount: this.target.state.likeCount+=1
        })
    }
    
    
    
    render(){
        return(
            
                
                    <Card bsstyle="primary">
                        <Card.Body>
                            
                            <Card.Title><h4>{this.props.book.title}</h4></Card.Title>
                        
                            <Card.Text>
                                <p>{this.props.book.author}</p>
                                <p>{this.props.book.genres}</p>
                                <p>{(this.props.book.pages_read/this.props.book.pages*100).toFixed(2)}% read</p>
                                <p>{this.props.book.entries.length} entries</p>
                            </Card.Text>
                            <Bookbar book={this.props.book}/>
                            <footer>
                                <Button className="btn btn-danger glyphicon glyphicon-remove pull-right" id={this.props.book.id} onClick={this.handleClick}>X
                            </Button>
                            </footer>
                        </Card.Body>
                    </Card>
                
            
        )
    }
}