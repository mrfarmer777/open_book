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
        
        const loginParams={email: this.state.email, password: this.state.password}
        const body=JSON.stringify(loginParams)
        console.log(loginParams);
        fetch("http://flatiron-2-mrfarmer7771.c9users.io:8080/login",{
            method:'post',
            body: body, 
            headers: {
                "Accept":"application/json",
                "Content-Type": "application/json"
            }
        })
          .then((res)=>res.json())
          .then((json)=>{
            console.log(json);
        });
        
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