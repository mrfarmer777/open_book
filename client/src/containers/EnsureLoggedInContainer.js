import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Jumbotron} from 'react-bootstrap'


class EnsureLoggedInContainer extends React.Component{
    
    //If this component mounts properly...
    componentDidMount(){
        const { dispatch, currentURL } = this.props
    }
    
    
    
    render (){
        if (this.props.isLoggedIn){
            return this.props.children
        } else {
            return null
        }
    
    }
}

const mapStateToProps=state=>{
    return {
        isLoggedIn: state.loggedIn
    }
}




export default withRouter(connect(mapStateToProps)(EnsureLoggedInContainer))