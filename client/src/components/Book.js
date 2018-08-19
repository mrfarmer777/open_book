import React, {Component} from 'react'


export default class Book extends Component{
    
    handleClick=(event)=>{
        event.preventDefault();
        this.props.deleteBook(event.target.id)
    }
    
    
    
    render(){
        return(
            
                <div class="container col-md-3">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <button class="btn btn-danger glyphicon glyphicon-remove pull-right" id={this.props.book.id} onClick={this.handleClick}>
                            </button>
                            <h4>{this.props.book.title}</h4>
                            
                        </div>
                        <div class="panel-body">
                            <p>{this.props.book.author}</p>
                            <p>{this.props.book.genres}</p>
                        </div>
                    </div>
                </div>
            
        )
    }
}