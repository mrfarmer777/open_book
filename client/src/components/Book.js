import React, {Component} from 'react'


export default class Book extends Component{
    
    handleClick=(event)=>{
        event.preventDefault();
        this.deleteBook(event.target.id)
    }
    
    
    
    render(){
        return(
            <div>
                <h4>{this.props.title}</h4>
                <h5>{this.props.author}</h5>
                <p>{this.props.genres}</p>
                <button id={this.props.id} onClick={this.handleClick}>DELETE THIS BOOK</button>
            </div>
        )
    }
}