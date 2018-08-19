import React, {Component} from 'react'


export default class BookInput extends Component{
    constructor(){
        super()
        this.state={
            title: "",
            author: "",
            pages: "",
            genres: "",
        }
    }
    
    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.postBook(this.state);
        this.setState({
            title: "",
            author: "",
            pages: "",
            genres: "",
        })
    }
    
    
    render(){
        return (
            <div>
            <h3>Add a New Book to Your Shelf</h3>
                <form onSubmit={this.handleSubmit}>
                    <label for="title">Book Title: </label>
                    <input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title}/>
                    <label for="author">Author(s): </label>
                    <input type="text" name="author" id="author"  onChange={this.handleChange} value={this.state.author}/>
                    <label for="pages">Pages: </label>
                    <input type="number" name="pages" id="pages"  onChange={this.handleChange} value={this.state.pages}/>
                    <label for="pages">Genres: </label>
                    <input type="text" name="genres" id="genres" onChange={this.handleChange} value={this.state.genres}/>
                    <input type="submit" value="Add Book"/>
                </form>
            </div>
            
            )
    }
    
}