import React, {Component} from 'react'
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

export default class SignInInput extends Component{
    //Initializes this component with blanks in the form inputs
    constructor(){
        super()
        this.state={
            email: "",
            password:""
        }
    }
    
    
    //Updates the component every time something is typed in the inputs
    //input-agnostic setup works for either input
    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("pickles");
        /*Turned off for now...
        this.props.postSession(this.state);
        */
        this.setState({
            email: "",
            password: ""
        })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email">
                    <ControlLabel for="email">Email: </ControlLabel>
                    <FormControl type="text" name="email" value={this.state.email} onChange={this.handleChange}></FormControl>
                </FormGroup>
                <FormGroup controlId="password">
                    <ControlLabel for="password">Password: </ControlLabel>
                    <FormControl type="password" name="password" value={this.state.password} onChange={this.handleChange}></FormControl>
                    <Button type="submit" value="Submit">Sign In</Button>
                </FormGroup>    
            
            </form>
            
            )
    }
    
    
    
    
}