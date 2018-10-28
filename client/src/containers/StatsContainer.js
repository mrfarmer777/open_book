import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import { fetchEntryStats, fetchBookStats } from '../actions/statsActions'
import Stats from '../components/stats'

class StatsContainer extends Component{
    componentWillMount(){
        this.props.fetchBookStats()
        this.props.fetchEntryStats()
        console.log(this.props)
    }
    
    render(){
        //Wrapping the actual content in a check for jwtToken which verifies a login
        //If you're logged in, you get the good stuff
        if(localStorage.getItem("jwtToken")){
            return (
                <div class="container">
                    <Stats entryStats={this.props.entryStats} bookStats={this.props.bookStats}/>
                </div>
            )
        } else {
            //Otherwise, go login first...
            return <Redirect to="/login" />
        }
        
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