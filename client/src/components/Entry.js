import React, {Component} from 'react'
import {Button, Glyphicon} from 'react-bootstrap'


export default class Entry extends Component{
    
    handleClick=(event)=>{
        event.preventDefault();
        this.props.deleteEntry(this.props.entry.id)
    }
    
    
    
    render(){
        return(
            <li class="list-group-item">
                <Button bsStyle="danger pull-right" id={this.props.entry.id} onClick={this.handleClick}><Glyphicon glyph="remove"/></Button>
                <p>Read {this.props.entry.pages} of {this.props.entry.book.title} in {this.props.entry.time} minutes.</p>
            </li>
        )
    }
}