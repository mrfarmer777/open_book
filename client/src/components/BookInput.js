import React, {Component} from 'react'
import {Button, FormGroup, FormLabel, FormControl, Modal} from 'react-bootstrap'



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
    
    toggleForm=()=>{
        this.setState({
            ...this.state,
            formOpen: !this.state.formOpen
        })
    }
    
   
    
    
    render(){
        return (
            <div id="book-input" className="container panel" >
                <Button variant="primary" onClick={this.toggleForm}>Add Book</Button>
                <Modal show={this.state.formOpen} onHide={this.toggleForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Book </Modal.Title>
                        
                    </Modal.Header>
                    
                    <Modal.Body>
                        <p>Adds a book to your personal bookshelf</p>
                        <form id="book-input-form" onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <FormLabel htmlFor="title">Book Title: </FormLabel>
                                <FormControl type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title}/>
                                <FormLabel htmlFor="author">Author: </FormLabel>
                                <FormControl type="text" name="author" id="author"  onChange={this.handleChange} value={this.state.author}/>
                                <FormLabel htmlFor="pages">Pages: </FormLabel>
                                <FormControl type="number" name="pages" id="pages"  onChange={this.handleChange} value={this.state.pages}/>
                                <FormLabel htmlFor="pages">Genres: </FormLabel>
                                <FormControl type="text" name="genres" id="genres" onChange={this.handleChange} value={this.state.genres}/>
                            </FormGroup>
                            <Button bsstyle="primary" bssize="small" type ="submit" value="Add Book">Add Book</Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
            
            )
    }
    
}