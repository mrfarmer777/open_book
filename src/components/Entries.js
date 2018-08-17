import React, {Component} from 'react'
import Entry from './Entry'


export default class Entries extends Component{
    
    render(){
        return(
            <ul>
                {this.props.entries.map(ent=>{
                    return (
                        <Entry/>)
                })}
            </ul>
        )
    }
}