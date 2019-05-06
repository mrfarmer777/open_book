import React, {Component} from 'react'
import {Button} from 'react-bootstrap'


const Invites=(props)=>{
    return(
        <div>
            {props.invites.map(inv=>{
                return(
                    <p>
                        {inv.teacher_name} has invited you to join {inv.name}. <Button>Accept</Button>
                    </p>
                )
            })}
        </div>
    )
    
}

export default Invites