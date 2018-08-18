import React, {Component} from 'react'
import Entry from './Entry'


export default class Entries extends Component{
    
    
    
    
    
    render(){
        
        return(
            <div>
                <h4>My Entries</h4>
                <ul>
                    {this.props.entries.map(ent=>{
                        return (
                            <Entry key={ent.id} entry={ent} deleteEntry={this.props.deleteEntry}/>)
                    })}
                </ul>
            </div>
        )
    }
}