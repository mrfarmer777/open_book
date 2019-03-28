import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import LogoutButton from '../components/LogoutButton'
import {logoutUser} from '../actions/userActions'


export default class MyNav extends React.Component{
    handleLogout(){
        alert("Yall wanna logout fo sho?");
        logoutUser();
    }
    
    render(){
        return(
            <Navbar collapseOnSelect expand='lg'>
                <Navbar.Brand href="/login">Dog Ears</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                
                <Navbar.Collapse>
                    
                    <Nav>
                        <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/stats">Stats</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/bookshelf">Bookshelf</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/login" onClick={this.handleLogout}>Logout</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            );
    }
}
