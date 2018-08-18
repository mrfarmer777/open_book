import React, {Component} from 'react'


export default class Book extends Component{
    
    handleClick=(event)=>{
        event.preventDefault();
        this.props.deleteBook(event.target.id)
    }
    
    
    
    render(){
        return(
            <div>
                <h4>{this.props.book.title}</h4>
                <h5>{this.props.book.author}</h5>
                <p>{this.props.book.genres}</p>
                <button id={this.props.book.id} onClick={this.handleClick}>DELETE THIS BOOK</button>
            </div>
        )
    }
}