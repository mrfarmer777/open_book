import React, {Component} from 'react'


export default class Stats extends Component{
    
    render(){
        
        return(
            <div class="panel panel-primary">
                <div class="panel-heading"><h3>Reading Stats</h3></div>
                <div class="panel-body">
                    <table>
                        <tr><td><b>Active Books: </b></td><td>{this.props.bookStats.books_read}</td></tr>
                        <tr><td><b>Genres Read: </b></td><td>{this.props.bookStats.genres_read}</td></tr>
                        <tr><td><b>Total Pages Read:</b> </td><td>{this.props.entryStats.total_pages}</td></tr>
                        <tr><td><b>Total Minutes Read: </b></td><td>{this.props.entryStats.total_minutes}</td></tr>
                        <tr><td><b>Average Reading Rate: </b></td><td>{this.props.entryStats.reading_rate} pages/minute</td></tr>
                    </table>
                </div>
            </div>
        )
    }
}