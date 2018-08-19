import React, {Component} from 'react'
import Entry from './Entry'


export default class Entries extends Component{
    
    
    
    
    
    render(){
        
        return(
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">My Entries</div>
                    <div class="panel-body">
                        <ul class="list-group">
                            {this.props.entries.map(ent=>{
                                return (
                                    <Entry key={ent.id} entry={ent} deleteEntry={this.props.deleteEntry}/>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}