import React, {Component} from 'react'


export default class Entry extends Component{
    
    handleClick=(event)=>{
        event.preventDefault();
        this.props.deleteEntry(this.props.entry.id)
    }
    
    
    
    render(){
        return(
            <li class="list-group-item">
                <button class="btn btn-danger glyphicon glyphicon-remove pull-right" id={this.props.entry.id} onClick={this.handleClick}></button>
                <p><span class="entry-date">{this.props.entry.created_at.split("T")[0]}:</span>  Read {this.props.entry.pages} of {this.props.entry.book.title} in {this.props.entry.time} minutes.</p>
            </li>
        )
    }
}