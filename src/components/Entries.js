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
                            <Entry entry={ent}/>)
                    })}
                </ul>
            </div>
        )
    }
}