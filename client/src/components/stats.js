import React, {Component} from 'react'


export default class Stats extends Component{
    
    render(){
        
        return(
            <div>
                <ul>
                    <li><b>Books Read: </b>{this.props.bookStats.books_read}</li>
                    <li><b>Most Recent Book:</b> {this.props.bookStats.most_recent_book}</li>
                    <li><b>Genres Read: </b>{this.props.bookStats.genres_read}</li>
                    <li><b>Total Pages Read:</b> {this.props.entryStats.total_pages}</li>
                    <li><b>Total Minutes Read: </b>{this.props.entryStats.total_minutes}</li>
                    <li><b>Average Reading Rate: </b>{this.props.entryStats.reading_rate} pages/minutes</li>
                </ul>
            </div>
        )
    }
}