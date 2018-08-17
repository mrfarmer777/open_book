import React, {Component} from 'react'


export default class Entries extends Component{
    
    render(){
        return(
            <li>{this.props.title}, {this.props.minutes}, {this.props.pages}</li>
        )
    }
}