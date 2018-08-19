import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { fetchEntryStats, fetchBookStats } from '../actions/statsActions'
import Stats from '../components/stats'

class StatsContainer extends Component{
    componentWillMount(){
        this.props.fetchBookStats()
        this.props.fetchEntryStats()
        console.log(this.props)
    }
    
    render(){
        
        return (
            <div class="container">
                <Stats entryStats={this.props.entryStats} bookStats={this.props.bookStats}/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
       entryStats: state.stats.entryStats,
       bookStats: state.stats.bookStats
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchBookStats: ()=>{dispatch(fetchBookStats())},
        fetchEntryStats: ()=>{dispatch(fetchEntryStats())}
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(StatsContainer))