import React, {Component} from 'react'
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'


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
            <div class="container">
                <h3>What are you reading today?</h3>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="entryInput">
                        <ControlLabel for="book_id">Book: </ControlLabel>
                        <FormControl componentClass="select" name="book_id" value={this.state.book_id} onChange={this.handleChange}>
                            <option value="" default disabled>Select a book</option>
                            {this.props.books.map(book=>{
                                
                                return(
                                    <option key={book.id} value={book.id}>{book.title}</option>
                                )
                            })}
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="entryMinutes">
                        <ControlLabel for="time">Minutes: </ControlLabel>
                        <FormControl type="number" name="time" id="time" step="5" onChange={this.handleChange} value={this.state.time}/>
                    
                        <ControlLabel for="pages">Pages: </ControlLabel>
                        <FormControl type="number" name="pages" id="pages" step="1" onChange={this.handleChange} value={this.state.pages}/>
                    </FormGroup>
                    <Button bsStyle="primary" type="submit" value="New Entry">New Entry</Button>

                </form>
            </div>
            
            )
    }
    
}