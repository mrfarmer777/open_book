import React,  {Component } from 'react';
import {ListGroup, Container, Button} from 'react-bootstrap';





class Sidebar extends Component {
    constructor(){
        super()
        this.state={
            open: false,
        }
    }
    
    toggleOpen = (event) => {
        this.setState({
            open: !this.state.open,
        })
    }
    
    
    
    
    
    render(){
        return(
            <div onClick={this.toggleOpen} className={this.state.open ? "sidebar": "sidebar collapsed"}>
                <small className="sidebar-title" >{this.props.name}</small>
                    {this.props.children}
            </div>
        )
    }
    
}

export default Sidebar