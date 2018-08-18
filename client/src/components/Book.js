import React, {Component} from 'react'


export default class Book extends Component{
    
    handleClick=(event)=>{
        event.preventDefault();
        
    }
    
    
    
    render(){
        return(
            <div>
                <h4>{this.props.title}</h4>
                <h5>{this.props.author}</h5>
                <p>{this.props.genres}</p>
                <button onClick={this.handleClick}>DELETE THIS BOOK</button>
            </div>
        )
    }
}