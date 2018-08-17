import React, {Component} from 'react'


export default class EntryInput extends Component{
    
    render(){
        return (
            <form>
                <label for="title">Book Title: </label>
                <input type="text" name="title" id="title" value=""/>
                <label for="time">Minutes: </label>
                <input type="number" name="time" id="time" step="5" value="10"/>
                <label for="pages">Pages: </label>
                <input type="number" name="pages" id="pages" step="1" value="0"/>
                <input type="Submit" value="New Entry"/>
            </form>
            )
    }
    
}