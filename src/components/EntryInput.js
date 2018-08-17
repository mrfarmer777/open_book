import React, {Component} from 'react'


export default class EntryInput extends Component{
    
    render(){
        return (
            <form>
                <input type="text" name="title" value=""/>
                <input type="number" name="time" step="5" value="10"/>
                <input type="number" name="pages" step="1" value="0"/>
                <input type="Submit" value="New Entry"/>
            </form>
            )
    }
    
}