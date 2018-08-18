import React, {Component} from 'react'
import Book from './Book'



export default class Bookshelf extends Component{
    
    render(){
        
        return(
            <div>
                <h4>My Books</h4>
                <ul>
                    <li>This is where books go, y'all</li>
                </ul>
            </div>
        )
    }
}