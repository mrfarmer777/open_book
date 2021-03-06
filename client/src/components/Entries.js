import React, {Component} from 'react'
import Entry from './Entry'
import { Panel } from 'react-bootstrap'


export default class Entries extends Component{
    
    
    
    
    
    render(){
        
        return(
            <div class="container">
                <Panel>
                    <Panel.Heading>My Entries</Panel.Heading>
                    <Panel.Body>
                        <ul class="list-group">
                            {this.props.entries.map(ent=>{
                                return (
                                    <Entry key={ent.id} entry={ent} deleteEntry={this.props.deleteEntry}/>)
                            })}
                        </ul>
                    </Panel.Body>
                </Panel>
                
            </div>
        )
    }
}