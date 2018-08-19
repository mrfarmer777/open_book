import React, {Component} from 'react'


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
                    <div class="input-group">
                        <label for="book_id">Book: </label>
                        <select name="book_id" value={this.state.book_id} onChange={this.handleChange}>
                            <option value="" default disabled>Select a book</option>
                            {this.props.books.map(book=>{
                                
                                return(
                                    <option key={book.id} value={book.id}>{book.title}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div class="input-group">
                        <label for="time">Minutes: </label>
                        <input type="number" name="time" id="time" step="5" onChange={this.handleChange} value={this.state.time}/>
                    
                        <label for="pages">Pages: </label>
                        <input type="number" name="pages" id="pages" step="1" onChange={this.handleChange} value={this.state.pages}/>
                    </div>
                    <input class="btn btn-primary" type="submit" value="New Entry"/>

                </form>
            </div>
            
            )
    }
    
}