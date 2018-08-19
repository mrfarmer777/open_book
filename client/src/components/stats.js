import React, {Component} from 'react'


export default class Stats extends Component{
    
    render(){
        
        return(
            <div>
                <h3>My Stats</h3>
                <ul>
                    <li>Books Read: {this.props.bookStats.books_read}</li>
                    <li>Most Recent Book: {this.props.bookStats.most_recent_book}</li>
                    <li>Genres Read: {this.props.bookStats.genres_read}</li>
                    <li>Total Pages Read: {this.props.entryStats.total_pages}</li>
                    <li>Total Minutes Read: {this.props.entryStats.total_minutes}</li>
                    <li>Average Reading Rate: {this.props.entryStats.reading_rate} pages/minutes</li>
                </ul>
            </div>
        )
    }
}