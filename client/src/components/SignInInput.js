import React, {Component} from 'react'
import { loginUser } from '../services/user.js'
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

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

        const loginParams={email: this.state.email, password: this.state.password}
        const body=JSON.stringify(loginParams)
        
        
        //This is done in the user services now
        loginUser(loginParams)
            .then((user)=>{
                //Store the jwt token in the localStorage if it is not undefined
                if(user.jwt){
                    localStorage.setItem("jwtToken",user.jwt);
                }
                this.setState({
                    email:"",
                    password:""
                })
            })
        
        
        this.setState({
            email: "",
            password: ""
        })
    }
    
    render(){
        
        if(localStorage.getItem('jwtToken')){
            return <Redirect to="/home"/>
        } else {
        
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
    
    
    
    
}