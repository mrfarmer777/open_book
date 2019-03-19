import React, {Component} from 'react'
import {Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap'


export default class EntryInput extends Component{
    constructor(){
        super()
        this.state={
            book_id: "",
            time: "0",
            pages: "0",
        }
    }
    
    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        })
        
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.postEntry(this.state);
        this.setState({
            book_id: "",
            time: "0",
            pages: "0",
        })
    }
    
    
    
    
    render(){
        
        return (
            <div className="container">
                <h3>What are you reading today?</h3>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormLabel htmlFor="book_id">Book: </FormLabel>
                        <FormControl as="select" name="book_id" value={this.state.book_id} onChange={this.handleChange}>
                            <option value="" default disabled>Select a book</option>
                            {this.props.books.map(book=>{
                                
                                return(
                                    <option key={book.id} value={book.id}>{book.title}</option>
                                )
                            })}
                        </FormControl>
                    </FormGroup>
                    <FormGroup >
                        <FormLabel htmlFor="time">Minutes: </FormLabel>
                        <FormControl type="number" name="time" id="time" step="5" onChange={this.handleChange} value={this.state.time}/>
                    
                        <FormLabel htmlFor="pages">Pages: </FormLabel>
                        <FormControl type="number" name="pages" id="pages" step="1" onChange={this.handleChange} value={this.state.pages}/>
                    </FormGroup>
                    <Button bsstyle="primary" type="submit" value="New Entry">New Entry</Button>

                </form>
            </div>
            
            )
    }
    
}