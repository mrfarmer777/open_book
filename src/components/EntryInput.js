import React, {Component} from 'react'


export default class EntryInput extends Component{
    constructor(){
        super()
        this.state={
            title: "",
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
        this.props.addEntry();
        this.setState({
            title: "",
            time: "0",
            pages: "0",
        })
    }
    
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label for="title">Book Title: </label>
                <input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title}/>
                <label for="time">Minutes: </label>
                <input type="number" name="time" id="time" step="5" onChange={this.handleChange} value={this.state.time}/>
                <label for="pages">Pages: </label>
                <input type="number" name="pages" id="pages" step="1" onChange={this.handleChange} value={this.state.pages}/>
                <input type="submit" value="New Entry"/>
            </form>
            )
    }
    
}