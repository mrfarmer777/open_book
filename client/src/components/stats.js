import React, {Component} from 'react'
import { ProgressBar, Step } from 'react-step-progress-bar';


export default class Stats extends Component{
    
    render(){
        
        return(
            <div className="panel panel-primary">
                <div className="panel-heading"><h3>Reading Stats</h3></div>
                <div className="panel-body">
                    
                    <p><b>Active Books: </b>{this.props.bookStats.books_read}</p>
                    <p><b>Genres Read: </b>{this.props.bookStats.genres_read}</p>
                    <p><b>Total Pages Read:</b> {this.props.userStats.total_pages}</p>
                    <p><b>Total Minutes Read: </b>{this.props.userStats.total_time}</p>
                    <p><b>Average Reading Rate: </b>{this.props.userStats.reading_rate} pages/minute</p>
                    <p><b>Progress toward Weekly Page Goal: </b><ProgressBar percent={this.props.userStats.pages_this_week}/></p>
                    <p><b>Progress toward Weekly Minute Goal: </b><ProgressBar percent={(this.props.userStats.time_this_week/45)}/></p>
               
                </div>
            </div>
        )
    }
}