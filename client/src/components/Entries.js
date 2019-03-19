import React, {Component} from 'react'
import Entry from './Entry'
import { Card } from 'react-bootstrap'


export default class Entries extends Component{
    
    
    
    
    
    render(){
        
        return(
            <div className="container">
                <Card>
                    <Card.Title>My Entries</Card.Title>
                    <Card.Body>
                        <ul className="list-group">
                            {this.props.entries.map(ent=>{
                                return (
                                    <Entry key={ent.id} entry={ent} deleteEntry={this.props.deleteEntry}/>)
                            })}
                        </ul>
                    </Card.Body>
                </Card>
                
            </div>
        )
    }
}