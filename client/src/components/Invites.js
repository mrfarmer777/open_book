import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

//WHEN READY - this component should pass the usersection ONLY to the backend for acceptance.
export default class  Invites extends Component {
    
    handleAccept=(event)=>{
        console.log("you just accepted the user section "+ event.target.id)
        this.props.accept(event.target.id);
    }
    
    render(){
        return(
            <div>
                {this.props.invites.map(inv=>{
                    return(
                        <p >
                            {inv.teacher_name} has invited you to join {inv.name}. <Button onClick={this.handleAccept} id={inv.id}>Accept</Button>
                        </p>
                    );
                })}
            </div>
        );
    }
    
};

