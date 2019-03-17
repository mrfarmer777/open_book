import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'


import { Jumbotron } from 'react-bootstrap'

import { loginUser } from '../actions/userActions.js'
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

import AuthService from '../components/AuthService'



class SplashContainer extends Component{
    //Initializes this component with blanks in the form inputs
    constructor(){
        super();
        this.state={
            email: "",
            password: "",
            user: {
                authenticated:false
            }
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.Auth = new AuthService();
        
    }
    
    componentWillMount(){
        if(this.Auth.loggedIn())
        this.props.history.replace('/home');
    }
    
    
    //Updates the component every time something is typed in the inputs
    //input-agnostic setup works for either input
    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    
    handleSubmit=(event)=>{
        event.preventDefault();
        const loginParams={email: this.state.email, password: this.state.password};

        this.Auth.login(loginParams)
            .then(res => {
                this.props.history.replace("/home");
            })
            .catch(err => {
                alert(err);
            });
        this.props.loginUser(loginParams);
        this.setState({
            email: "",
            password: ""
        })
        this.forceUpdate();
        
    }
    
    
    render (){
        return(
            <div>
                <Jumbotron>
                    <h1>Dog Ears</h1>
                    <p>Read like you mean it.</p>
                </Jumbotron>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email">
                            <ControlLabel >Email: </ControlLabel>
                            <FormControl type="text" name="email" value={this.state.email} onChange={this.handleChange}></FormControl>
                        </FormGroup>
                        <FormGroup controlId="password">
                            <ControlLabel >Password: </ControlLabel>
                            <FormControl type="password" name="password" value={this.state.password} onChange={this.handleChange}></FormControl>
                            <Button type="submit" value="Submit">Sign In</Button>
                        </FormGroup>    
                    
                    </form>               
                </div>
            </div>
            )
    }
}

const mapStateToProps=state=>{
    return{
        email: state.user.email,
        password: state.user.password,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (loginParams) => dispatch(loginUser(loginParams))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SplashContainer))

