import React, {Component} from 'react'


export default class Book extends Component{
    constructor(){
        super()
        this.state={
            likeCount: 0,
        }
    }
    
    
    
    handleClick=(event)=>{
        event.preventDefault();
        this.props.deleteBook(event.target.id)
    }
    
    handleLike(event){
        debugger
        this.setState({
            likeCount: this.state.likeCount+=1
        })
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
                            <button onClick={this.handleLike}>Like</button>
                            <p>{this.state.likeCount}</p>
                        </div>
                    </div>
                </div>
            
        )
    }
}