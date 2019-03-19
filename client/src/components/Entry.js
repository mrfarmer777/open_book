import React, {Component} from 'react'
import {Button} from 'react-bootstrap'


export default class Entry extends Component{
    
    handleClick=(event)=>{
        event.preventDefault();
        this.props.deleteEntry(this.props.entry.id)
    }
    
    
    
    render(){
        return(
            <li className="list-group-item">
                <Button bsStyle="danger" className="pull-right" id={this.props.entry.id} onClick={this.handleClick}>X</Button>
                <p>Read {this.props.entry.pages} pages of {this.props.entry.book.title} in {this.props.entry.time} minutes.</p>
            </li>
        )
    }
}