import React, {Component} from 'react'


export default class Entry extends Component{
    
    handleClick=(event)=>{
        event.preventDefault();
        this.props.deleteEntry(this.props.entry.id)
    }
    
    
    
    render(){
        return(
            <li>
                <p>{this.props.entry.id}: Read {this.props.entry.title} for {this.props.entry.time} minutes, and read {this.props.entry.pages} pages. </p>
                <button id={this.props.entry.id} onClick={this.handleClick}>Delete Entry</button>
            </li>
        )
    }
}