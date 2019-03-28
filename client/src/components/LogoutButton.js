import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { logoutUser } from '../actions/userActions';



export default class LogoutButton extends Component{
    
    handleLogout(){
        logoutUser();
        this.props.history.replace("/login");
    }
    
    
    
    render(){
        return(
            <Button variant="danger" onClick={this.handleLogout.bind(this)}>Logout</Button>
        );
    }
}