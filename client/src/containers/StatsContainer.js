import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class StatsContainer extends Component{
    
    
    handleClick=(event)=>{
        event.preventDefault();
        console.log(this.props.fetchEntries())
    }
    
    componentDidMount(){
        
    }
    
    render(){
        
        return (
            <div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
       
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(StatsContainer))