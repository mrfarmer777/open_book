import React, {Component} from 'react'
import Entry from './Entry'


export default class Entries extends Component{
    
    handleClick=(event)=>{
        event.preventDefault();
        console.log(this.props.fetchEntries())
    }
    
    
    
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
                <button onClick={this.handleClick}>Get the Entries</button>
            </div>
        )
    }
}