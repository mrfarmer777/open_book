import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { fetchEntryStats, fetchBookStats } from '../actions/statsActions'
import Stats from '../components/stats'

class StatsContainer extends Component{
    componentWillMount(){
        this.props.fetchBookStats()
        this.props.fetchEntryStats()
    }
    
    render(){
        
        return (
            <div className="container">
                <Stats entryStats={this.props.entryStats} bookStats={this.props.bookStats} userStats={this.props.userStats}/>
            </div>
        )
        
        
    }
}

const mapStateToProps = state =>{
    return {
       entryStats: state.stats.entryStats,
       bookStats: state.stats.bookStats,
       userStats: state.user.stats
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchBookStats: ()=>{dispatch(fetchBookStats())},
        fetchEntryStats: ()=>{dispatch(fetchEntryStats())}
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(StatsContainer))