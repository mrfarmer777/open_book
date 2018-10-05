import React, {Component} from 'react'
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'



export default class BookInput extends Component{
    constructor(){
        super()
        this.state={
            title: "",
            author: "",
            pages: "",
            genres: "",
            formOpen: false
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
            formOpen: false
        })
    }
    
    toggleBookForm=(event)=>{
        event.preventDefault()
        this.setState({
            ...this.state,
            formOpen: !this.state.formOpen
        })
    }
    
    
    render(){
        return (
            <div id="book-input" class="container panel" >
                    <form id="book-input-form" onSubmit={this.handleSubmit}>
                        <FormGroup controlId="bookEntryForm">
                            <ControlLabel for="title">Book Title: </ControlLabel>
                            <FormControl type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title}/>
                            <ControlLabel for="author">Author: </ControlLabel>
                            <FormControl type="text" name="author" id="author"  onChange={this.handleChange} value={this.state.author}/>
                            <ControlLabel for="pages">Pages: </ControlLabel>
                            <FormControl type="number" name="pages" id="pages"  onChange={this.handleChange} value={this.state.pages}/>
                            <ControlLabel for="pages">Genres: </ControlLabel>
                            <FormControl type="text" name="genres" id="genres" onChange={this.handleChange} value={this.state.genres}/>
                        </FormGroup>
                        <Button bsStyle="primary" bsSize="small" type ="submit" value="Add Book">Add Book</Button>
                    </form>
                    
                </div>
            
            )
    }
    
}