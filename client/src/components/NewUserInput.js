import React, { Component } from 'react';
import {Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap'


export default class NewUserInput extends Component{
    constructor(){
        super()
        this.state={
            email: "",
            password: "",
            age: "",
            type: ""
        }
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    
    
    
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="Name">
                    <FormLabel>Name: </FormLabel>
                    <FormControl type="text" name="name" value={this.state.name} onChange={this.handleChange}></FormControl>
                    <FormLabel>Email Address: </FormLabel>
                    <FormControl type="text" name="email" value={this.state.email} onChange={this.handleChange}></FormControl>
                    <FormLabel>Password: </FormLabel>
                    <FormControl type="password" name="password" value={this.state.password} onChange={this.handleChange}></FormControl>
                    <FormLabel>Age: </FormLabel>
                    <FormControl type="number" name="age" value={this.state.age} onChange={this.handleChange}></FormControl>
                    <FormLabel>I am a: </FormLabel>
                    <FormControl as="select" name="book_id" value={this.state.book_id} onChange={this.handleChange}>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                    </FormControl>
                    <Button type="submit" value="Submit">Create User</Button>
                </FormGroup>
                    
            </form>
            
            )
    }
}