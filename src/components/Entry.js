import React, {Component} from 'react'


export default class Entry extends Component{
    
    render(){
        return(
            <li>{this.props.entry.id}: {this.props.entry.title}, {this.props.entry.time}, {this.props.entry.pages}</li>
        )
    }
}