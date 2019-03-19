import React, {Component} from 'react'
import {Button, Well, Card} from 'react-bootstrap'


export default class Book extends Component{
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
            
                <div className="container col-md-3">
                    <Card bsstyle="primary">
                        <Card.Header>
                            <button className="btn btn-danger glyphicon glyphicon-remove pull-right" id={this.props.book.id} onClick={this.handleClick}>
                            </button>
                            <h4>{this.props.book.title}</h4>
                            
                        </Card.Header>
                        <Card.Body>
                            <p>{this.props.book.author}</p>
                            <p>{this.props.book.genres}</p>
                            <p>{(this.props.book.pages_read/this.props.book.pages*100).toFixed(2)}% read</p>
                            <p>{this.props.book.entries.length} entries</p>
                        </Card.Body>
                    </Card>
                </div>
            
        )
    }
}